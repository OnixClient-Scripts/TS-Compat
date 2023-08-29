/**
 * Lib to make interacting with the scripting repo easier
 * Callback-based because promises are weird with tstl, also to be usable from lua scripts too
 *
 * Haven't tested it completely, but works so far
 * 
 * REPO_URL = the base URL of the repo
 */
const REPO_URL = "https://raw.githubusercontent.com/OnixClient-Scripts/OnixClient_Scripts/master" as const;

interface RepoModule<FileName extends string = string> {
  name: string;
  file: `${FileName}.lua`;
  description: string;
  url: `${typeof REPO_URL}/Modules/${FileName}.lua`;
  libs: string[];
  commands: string[];
  hash: string;
  lastUpdated: string;
}

interface RepoCommand<FileName extends string = string> {
  name: string;
  file: `${FileName}.lua`;
  description: string;
  url: `${typeof REPO_URL}/Commands/${FileName}.lua`;
  libs: string[];
  hash: string;
  lastUpdated: string;
}

interface RepoLib<FileName extends string = string> {
  name: FileName;
  file: `${FileName}.lua`;
  url: `${typeof REPO_URL}/Libs/${FileName}.lua`;
  hash: string;
  lastUpdated: string;
}

interface RepoAutocomplete<FileName extends string = string> {
  file: `${FileName}.lua`;
  url: `${typeof REPO_URL}/AutoComplete/${FileName extends "config" ? "" : "library/"}${FileName}.lua`;
  hash: string;
  lastUpdated: string;
}

interface RepoIndex {
  modules: RepoModule[];
  commands: RepoCommand[];
  libs: RepoLib[];
  autocomplete: {
    config: RepoAutocomplete<"config">;
    library: RepoAutocomplete[];
  };
}

type URLType<URL extends string> = URL extends `${typeof REPO_URL}/${infer T extends
  | "Modules"
  | "Commands"
  | "Libs"
  | "AutoComplete"
  | "AutoComplete/Library"}/${string}.lua`
  ? T extends "AutoComplete/library"
    ? "AutoComplete"
    : T
  : never;

/**
 * @noSelf
 */
namespace scriptingRepo {
  const networkListeners = new Map<string, (data: string, code: number) => void>();

  /**
   * Download a script file (module/command/lib/autocomplete file) from the repo.
   * @param url URL of the script to download (github raw content URL from the repo).
   * @param callback Function called when the file is finished downloading.
   */
  export function downloadScript(
    url: `${typeof REPO_URL}/${
      | "Modules"
      | "Commands"
      | "Libs"
      | "AutoComplete"
      | "AutoComplete/library"}/${string}.lua`,
    callback: (code: number) => void
  ): void {
    const id = `download-${Math.random()}`;

    networkListeners.set(id, (data, code) => callback(code));

    const oldDir = workingDir;
    workingDir = "RoamingState/OnixClient/Scripts";

    const filePath = url.replace(REPO_URL, "").substring(1);
    //console.log("Downloading...", { filePath, url });
    network.fileget(filePath, url, id);

    workingDir = oldDir;

    return;
  }

  /**
   * Get the current index for the scripting repo.
   * @param {(index: RepoIndex, code: number) => void} callback Function to call when the index is received.
   */
  export function getIndex(callback: (index: RepoIndex, code: number) => void): void {
    const listenerID = Math.random().toString();
    networkListeners.set(listenerID, (data, code) => callback(jsonToTable(data) as RepoIndex, code));
    network.get(REPO_URL + "/index.json", listenerID);

    return;
  }

  /**
   * Get a module's info by its file name.
   * @param file The file name of the module to get.
   * @param callback Function to call when the module is found.
   */
  export function getModule<FileName extends string>(
    file: FileName,
    callback: (module?: RepoModule<FileName>) => void
  ): void {
    return scriptingRepo.getIndex((index) =>
      callback(index.modules.find((mod) => mod.file === file + ".lua") as RepoModule<FileName> | undefined)
    );
  }

  /**
   * Get a module's info by its name.
   * @param name The display name of the module to get.
   * @param callback Function to call when info about the module with that display name is received.
   */
  export function getModuleByName(name: string, callback: (module?: RepoModule) => void): void {
    return scriptingRepo.getIndex((index) => callback(index.modules.find((mod) => mod.name === name)));
  }

  /**
   * Get info about a scripting module, if it exists on the repo.
   * @param module The scripting module to get info about.
   * @param callback Info about the provided scripting module.
   */
  export function getModuleByObj<Module extends ScriptingModule>(
    module: Module,
    callback: (module?: RepoModule) => void
  ): void {
    return scriptingRepo.getModuleByName(module.name, callback);
  }

  /**
   * Download a module from the repo by its filename.
   * @param fileName The filename of the module to download.
   * @param callback Function called when the module is finished downloading.
   */
  export function downloadModule(fileName: string, callback: () => void): void {
    return scriptingRepo.getModule(fileName, (moduleData) => {
      if (!moduleData) return;
      return scriptingRepo.downloadScript(moduleData.url, callback);
    });
  }

  /**
   * Get a command's info by its file name.
   * @param name The file name of the command to get.
   * @param callback Info about the command with that file name.
   */
  export function getCommand<FileName extends string>(
    name: FileName,
    callback: (command?: RepoCommand<FileName>) => void
  ): void {
    return scriptingRepo.getIndex((index) =>
      callback(index.commands.find((cmd) => cmd.file === name + ".lua") as RepoCommand<FileName> | undefined)
    );
  }

  /**
   * Get a command's info by its name.
   * @param name The display name of the command to get.
   * @param callback Info about the command with that display name.
   */
  export function getCommandByName(name: string, callback: (command?: RepoCommand) => void): void {
    return scriptingRepo.getIndex((index) => callback(index.commands.find((cmd) => cmd.name === name)));
  }

  /**
   * Download a command from the repo by its filename.
   * @param fileName The filename of the command to download
   * @param callback Function called when the command is finished downloading.
   */
  export function downloadCommand(fileName: string, callback: () => void): void {
    return scriptingRepo.getCommand(fileName, (cmdData) => {
      if (!cmdData) return;
      return scriptingRepo.downloadScript(cmdData.url, callback);
    });
  }

  /**
   * Get a lib's info by its name.
   * @param name The name of the lib to get.
   * @param callback Info about the lib with that name.
   */
  export function getLib<LibName extends string>(name: LibName, callback: (lib?: RepoLib<LibName>) => void): void {
    return scriptingRepo.getIndex((index) =>
      callback(index.libs.find((lib) => lib.name === name) as RepoLib<LibName> | undefined)
    );
  }

  /**
   * Download a lib from the repo by its filename.
   * @param fileName The filename of the lib to download.
   * @param callback Function called when the lib is finished downloading.
   */
  export function downloadLib(fileName: string, callback: () => void): void {
    return scriptingRepo.getLib(fileName, (libData) => {
      if (!libData) return;
      return scriptingRepo.downloadScript(libData.url, callback);
    });
  }

  /**
   * Get an autocomplete file's info by its name.
   * @param name The file name of the autocomplete file to get.
   * @param callback Info about the autocomplete file with that file name.
   */
  export function getAutocomplete<FileName extends string>(
    name: FileName,
    callback: (autocomplete?: RepoAutocomplete<FileName>) => void
  ): void {
    return scriptingRepo.getIndex((index) =>
      callback(
        (name === "config"
          ? index.autocomplete.config
          : index.autocomplete.library.find((ac) => ac.file === name + ".lua")) as
          | RepoAutocomplete<FileName>
          | undefined
      )
    );
  }

  /**
   * Download an autocomplete file from the repo by its filename.
   * @param fileName The filename of the autocomplete file to download.
   * @param callback Function called when the autocomplete file is finished downloading.
   */
  export function downloadAutocomplete(fileName: string, callback: () => void): void {
    return scriptingRepo.getAutocomplete(fileName, (acData) => {
      if (!acData) return;
      return scriptingRepo.downloadScript(acData.url, callback);
    });
  }

  /**
   * Call this function inside onNetworkData(), to call callbacks from other functions.
   * e.g.
   * ```lua
   * function onNetworkData(code, id, data)
   *   scriptingRepo.fetchNetworkData(code, id, data)
   * end
   * ```
   * or
   * ```ts
   * onNetworkData = (code, id, data) => {
   *   scriptingRepo.fetchNetworkData(code, id, data);
   * }
   * ```
   */
  export function fetchNetworkData(...[code, id, data]: Parameters<typeof onNetworkData>): void {
    const listener = networkListeners.get(id);
    if (!listener) return;

    listener(data, code);
  }
}
