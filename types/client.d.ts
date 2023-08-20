declare interface Waypoint {
  /** The x position of the waypoint */
  x: number;
  /** The y position of the waypoint */
  y: number;
  /** The z position of the waypoint */
  z: number;
  /** The name of the waypoint */
  name: string;
  /** The dimension id the waypoint is for */
  dimensionId: number;
}

/**
 * @class Waypoints
 * @noSelf
 */
declare interface Waypoints {
  /**
   * Gets the list of waypoints
   * @return {Waypoint[]}
   */
  get(): Waypoint[];

  /**
   * Adds a waypoint
   * @param {number} x The x position of the waypoint
   * @param {number} y The y position of the waypoint
   * @param {number} z The z position of the waypoint
   * @param {string} name The name of the waypoint
   */
  add(x: number, y: number, z: number, name: string): void;

  /**
   * Adds a waypoint
   * @param x integer The x position of the new waypoint
   * @param y integer The y position of the new waypoint
   * @param z integer The z position of the new waypoint
   * @param name string The name of the new waypoint
   * @param dimensionId integer In what dimension is the mew waypoint
   * @return boolean added If the waypoint has been added or not
   */
  add(x: number, y: number, z: number, name: string, dimensionId: number): boolean;

  /**
   * Removes a waypoint by its name
   * @param {string} name The name of the waypoint to remove
   * @returns {boolean} If the waypoint has been removed or not
   */
  remove(name: string): boolean;

  /**
   * Removes a waypoint by its position
   * @param {number} x The x position of the waypoint to remove
   * @param {number} y The y position of the waypoint to remove
   * @param {number} z The z position of the waypoint to remove
   * @returns {boolean} If the waypoint has been removed or not
   */
  remove(x: number, y: number, z: number): boolean;

  /** Saves the waypoint list to file*/
  save(): void;
  /** Loads the waypoint list to file*/
  load(): void;

  /** Clears all waypoints*/
  clear(): void;
}

declare interface ClientConfig {
  /** The name of the config */
  name: string;
  /** If this config exists on disk */
  exists: boolean;
}

declare interface ConfigManager {
  /**
   * Gets a config from its name
   * @param name string The name
   * @return ClientConfig clientConfig The config you wanted (check if it exists if thats important)
   */
  get(name: string): ClientConfig;

  /**
   * Gets the active config (Could differ from default)
   * @return {ClientConfig} clientConfig The active config
   */
  getActive(): ClientConfig;

  /**
   * Gets the default config (the one that will be loaded on inject)
   * @return {ClientConfig} clientConfig The default config
   */
  getDefault(): ClientConfig;

  /**
   * Sets the default config (the one that will be loaded on inject)
   * @param config ClientConfig The config to set as default
   */
  setDefault(config: ClientConfig): void;

  /**
   * Checks to see if a config is the default one or not
   * @param config ClientConfig The config you want to know if its the default one or not
   */
  isDefault(config: ClientConfig): void;

  /**
   * Checks to see if a config is the active one or not
   * @param config ClientConfig The config you want to know if its the active one or not
   */
  isActive(config: ClientConfig): void;

  /**
   * Gets a list of client configs
   * @return ClientConfig[] clientConfig List of existing configs at the time of the request
   */
  list(): ClientConfig[];

  /**
   * Deletes a config
   * @param config ClientConfig the config to delete
   */
  delete(config: ClientConfig): void;

  /**
   * Creates a new config with default settings on everything
   * @param config ClientConfig Deletes a config
   */
  ["new"]: (config: ClientConfig) => void;

  /**
   * Saves the current config to a config
   * @param config ClientConfig The config to save into
   */
  save(config: ClientConfig): void;

  /**
   * Loads a config
   * @param config ClientConfig The config to load
   */
  load(config: ClientConfig): void;
}

declare interface Vector2 {
  x: number;
  y: number;
}

/**
 * @class ColorSetting
 */
declare interface ColorProperties {
  /** The amount of Red from a range of 0 to 1 */
  r: number;
  /** The amount of Green from a range of 0 to 1 */
  g: number;
  /** The amount of Blue from a range of 0 to 1 */
  b: number;
  /** The amount of Opacity from a range of 0 to 1 */
  a: number;
  /** Should the opacity slider be availible */
  alphaVisible: boolean;
  /** Is this color rainbow */
  rainbow: boolean;
  /** The speed of the rainbow effect (default=0.003) */
  rainbowSpeed: number;
}

declare interface BaseSetting<SettingType, Type extends number> {
  readonly type: Type;
  readonly default: SettingType;
  name: string;
  saveName: string;
  value: SettingType;
  visible: boolean;
  parent: Module | VisualModule | ScriptingModule;
}

declare interface AirSetting extends BaseSetting<number, 100> {}
declare interface BoolSetting extends BaseSetting<boolean, 1> {}
declare interface CategorySetting extends BaseSetting<boolean, 104> {}
declare interface ColorSetting extends BaseSetting<ColorProperties, 7> {}
declare interface EnumSetting extends BaseSetting<number, 10> {
  enumValues: [number, string][];
}
declare interface FloatSetting extends BaseSetting<number, 3> {
  min: number;
  max: number;
}
declare interface FunctionSetting {
  readonly type: 102;
  name: string;
  saveName: string;
  visible: boolean;
  parent: Module | VisualModule | ScriptingModule;
}
declare interface InfoSetting extends BaseSetting<string, 101> {
  scale: number;
}
declare interface IntSetting extends BaseSetting<number, 2> {
  min: number;
  max: number;
}
declare interface KeybindSetting extends BaseSetting<number, 4> {}
declare interface TextboxSetting extends BaseSetting<string, 9> {}
declare interface TitleSetting extends BaseSetting<string, 101> {}

declare type Setting =
  | AirSetting
  | BoolSetting
  | CategorySetting
  | EnumSetting
  | FloatSetting
  | FunctionSetting
  | InfoSetting
  | IntSetting
  | KeybindSetting
  | TextboxSetting
  | TitleSetting;

declare interface BaseModule {
  name: string;
  description: string;
  visible: boolean;
  enabled: boolean;
  settings: Setting[];

  /**
   * Remove a setting from the mod
   * @param {Setting} setting the setting to remove from the mod
   */
  removeSetting(this: void, setting: Setting): void;
}

declare interface Module extends BaseModule {
  isVisual: false;
  isScript: false;
}

/**
 * @class VisualModule : Module
 * @field size Vector2 The size of the module
 * @field pos Vector2 The position of the module
 * @field relativepos Vector2 The relative position of the module (relative from anchor position)
 * @field anchor 0 = Invalid, 1 = Top Left, 2 = Top Right, 3 = Bottom Left, 4 = Bottom Right
 */
declare interface VisualModule extends BaseModule {
  isVisual: true;
  isScript: false;
  size: Vector2;
  pos: Vector2;
  relativepos: Vector2;
  anchor: number;
}

/**
 * @class ScriptingModule : Module
 * @field movable boolean If the module is movable
 * @field scale number The scale of the module
 * @field size Vector2 The size of the module
 * @field pos Vector2 The position of the module
 */
declare interface ScriptingModule extends BaseModule {
  isVisual: boolean;
  isScript: true;
  movable: boolean;
  scale: number;
  size: Vector2;
  pos: Vector2;
}

/**
 * @class client
 * @field version string The client version
 * @field mcversion string The minecraft version
 * @noSelf
 */
declare namespace client {
  const version: string;
  const mcversion: string;

  /**
   * Sends a client notification
   * @param {string} text The text in the notification
   */
  function notification(text: string): void;

  /**
   * Gets the game's language
   * @returns {string} The language code, example: en_US
   */
  function language(): string;

  /**
   * Executes a client command, do not include the prefix
   * You may use the execute command to do minecraft commands
   * Example: client.execute("execute /say imbald");
   * @param {string} command The command without the prefix
   */
  function execute(command: string): void;

  /**
   * Gets the waypoints
   * @returns {Waypoints}
   */
  function waypoints(): Waypoints;

  /**
   * Gets the config manager that can do various config things
   * @param {boolean} scripting (default: false) Get the scripting version of the Config Manager?
   * @return {ConfigManager} The client config manager
   */
  function getConfigManager(scripting?: boolean): ConfigManager;

  /**
   * Gets a list of all the modules in the client
   * @returns {Module[] | VisualModule[] | ScriptingModule[]}
   */
  function modules(): Module[] | VisualModule[] | ScriptingModule[];
}
