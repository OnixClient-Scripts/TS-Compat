// Might not work as expected, may crash! but pretty much works at this point.

name = "Up to Date";
description = "Keep your modules, libs, commands and autocomplete up to date automatically!";

importLib("scripting-repo");

workingDir = "RoamingState/OnixClient/Scripts";

let isUpdating = false;

// For autoupdate - check for and install all updates
function updateScripts(this: void) {
  if (isUpdating) return;

  isUpdating = true;
  client.notification("Checking for updates...");

  const typesToUpdate: { [key in ScriptType]: boolean } = {
    Modules: !settings.autoModules.value,
    Commands: !settings.autoCommands.value,
    Libs: !settings.autoLibs.value,

    AutoComplete: !settings.autoAutocomplete.value,
    "AutoComplete/library": !settings.autoAutocomplete.value,
  };

  for (const [type, updated] of Object.entries(typesToUpdate) as [ScriptType, boolean][]) {
    if (updated) continue;
    updateScriptType(type, (amountUpdated) => {
      client.notification(`Updated ${amountUpdated} ${type.startsWith("AutoComplete") ? "autocomplete files" : type.toLowerCase()}.`);
    });
  }
}

registerCommand("update", updateScripts);

client.settings.addFunction("Check for updates", "updateScripts", "Check");

client.settings.addCategory("Configuration");
const settings = {
  autoModules: client.settings.addNamelessBool("Update modules automatically", false),
  autoCommands: client.settings.addNamelessBool("Update commands automatically", false),
  autoLibs: client.settings.addNamelessBool("Update libs automatically", true),
  autoAutocomplete: client.settings.addNamelessBool("Update autocomplete automatically", true),
};

type ScriptType = "Modules" | "Commands" | "Libs" | "AutoComplete" | "AutoComplete/library";

function getScriptInfo(
  file: string,
  type: ScriptType,
  index: RepoIndex
): RepoModule | RepoCommand | RepoLib | RepoAutocomplete | undefined {
  return type === "AutoComplete/library"
    ? index.autocomplete.library.find((x) => x.file === file)
    : type === "AutoComplete"
    ? index.autocomplete.config
    : (index[type.toLowerCase() as "modules" | "commands" | "libs"] as (RepoModule | RepoCommand | RepoLib)[]).find(
        (x) => x.file === file
      );
}

function checkForUpdates(type: ScriptType, index: RepoIndex): { file: string; lastUpdated: string }[] {
  const installed = fs
    .files(type)
    .map((x) => x.split("\\").reverse()[0])
    .filter((x) => x.endsWith(".lua"));
  const scriptUpdates: { file: string; lastUpdated: string }[] = [];

  for (const file of installed) {
    const scriptInfo = getScriptInfo(file, type, index);

    if (!scriptInfo) continue;

    const localHash = fs.hash(`${type}/${file}`, "r");
    if (scriptInfo.hash === localHash) continue;

    scriptUpdates.push({ file, lastUpdated: scriptInfo.lastUpdated });
  }

  return scriptUpdates;
}

function installUpdates(type: ScriptType, index: RepoIndex, scripts: string[], callback: () => void): void {
  const updated = new Map<string, boolean>(scripts.map((x) => [x, false]));

  for (const file of scripts) {
    const scriptInfo = getScriptInfo(file, type, index);

    // Should never happen as long as scripts are from checkForUpdates()
    if (!scriptInfo) {
      updated.delete(file);
      continue;
    }

    // Download the script and check if all are done when downloaded
    scriptingRepo.downloadScript(scriptInfo.url, () => {
      updated.set(file, true);
      if (Array.from(updated.values()).every((x) => x)) callback();
    });
  }
}

function updateScriptType(type: ScriptType, callback: (amountUpdated: number) => void): void {
  scriptingRepo.getIndex((index) => {
    const scriptsToUpdate = checkForUpdates(type, index);
    if (scriptsToUpdate.length === 0) return callback(0);
    installUpdates(
      type,
      index,
      scriptsToUpdate.map((x) => x.file),
      () => callback(scriptsToUpdate.length)
    );
  });
}

//#region oldUpdateFunc
//function updateScripts(type: ScriptType = "Modules") {
//  const installedScripts = fs.files(type).map((m) => m.split("\\").reverse()[0]);

//  console.log({ [type]: installedScripts /*scriptingModules: scriptingModules.map((x) => x.name)*/ });

//  const scriptUpdates = new Map<string, boolean>(installedScripts.map((x) => [x, false]));
//  const enabledMods = new Map<string, boolean>(); // If a module is enabled

//  scriptingRepo.getIndex((index) => {
//    for (const scriptFile of installedScripts) {
//      const repoScript =
//        type === "AutoComplete/library"
//          ? index.autocomplete.library.find((x) => x.file === scriptFile)
//          : type === "AutoComplete"
//          ? index.autocomplete.config
//          : (
//              index[type.toLowerCase() as "modules" | "commands" | "libs"] as (RepoModule | RepoCommand | RepoLib)[]
//            ).find((x) => x.file === scriptFile);

//      if (!repoScript) {
//        scriptUpdates.delete(scriptFile);
//        continue;
//      }

//      if (type === "Modules") {
//        const clientModule = client
//          .modules()
//          .filter((x) => x.isScript)
//          .find((x) => x.name === (repoScript as RepoModule).name);
//        if (clientModule) enabledMods.set(scriptFile, clientModule.enabled);
//      }

//      //console.log(`Found script §e${repoScript.file}§r on repo.`);

//      const installedHash = fs.hash(`${type}/${scriptFile}`, "r");
//      // When would this happen???
//      if (!installedHash) {
//        console.log("no hash lol", repoScript.file);
//        continue;
//      }

//      //console.log(` - Hash of installed: §b${installedHash}§r | Hash on repo: §a${repoScript.hash}§r`);
//      if (installedHash === repoScript.hash) {
//        scriptUpdates.set(repoScript.file, true);
//        continue;
//      }

//      //console.log(`Found update for §e${repoScript.file}§r. Updating...`);

//      client.notification(`Found update for ${repoScript.file}. Updating...`);

//      scriptUpdates.set(repoScript.file, false);

//      scriptingRepo.downloadScript(repoScript.url, () => {
//        scriptUpdates.set(repoScript.file, true);
//        //console.log(`--- §aUpdated ${repoScript.file}.§r ---`);

//        if (type === "Modules") {
//          const clientModule = client
//            .modules()
//            .filter((x) => x.isScript)
//            .find((x) => x.name === (repoScript as RepoModule).name);
//          if (clientModule) clientModule.enabled = enabledMods.get(scriptFile) ?? false;
//        }

//        client.notification(`Updated ${repoScript.file}.`);
//        console.log(`Updated ${repoScript.file}.`);

//        if (!Array.from(scriptUpdates.values()).every((x) => x)) return;

//        console.log(`§aUpdated all ${type.startsWith("AutoComplete") ? "autocomplete files" : type.toLowerCase()}.§r`);
//      });
//    }
//  });
//}
//#endregion

onNetworkData = (...args) => {
  scriptingRepo.fetchNetworkData(...args);
};
