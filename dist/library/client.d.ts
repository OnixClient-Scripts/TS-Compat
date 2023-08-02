/**
 * @class Waypoint
 * @field x integer The x position of the waypoint
 * @field y integer The y position of the waypoint
 * @field z integer The z position of the waypoint
 * @field name string The name of the waypoint
 * @field dimensionId integer The dimension id the waypoint is for
 */
declare class Waypoint {

  public x: number;
  public y: number;
  public z: number;
  public name: string;
  public dimensionId: number;
}

/** @noSelf */
declare class Waypoints {
  /**
   * @class Waypoints
   * local _acp__Waypoints_ = {}
   */

  /**
   * Gets the list of waypoint
   * @return Waypoint[]
   */
  public get(): Waypoint[];

  /**
   * Adds a waypoint
   * @param x integer The x position of the waypoint
   * @param y integer The y position of the waypoint
   * @param z integer The z position of the waypoint
   * @param name string The name of the waypoint*/
  public add(x: number, y: number, z: number, name: string): void;

   /** Adds a waypoint
   * @param x integer The x position of the new waypoint
   * @param y integer The y position of the new waypoint
   * @param z integer The z position of the new waypoint
   * @param name string The name of the new waypoint
   * @param dimensionId integer In what dimension is the mew waypoint
   * @return boolean added If the waypoint has been added or not*/
  public add(x: number, y: number, z: number, name: string, dimensionId: number): boolean;

   /** Removes a waypoint by its name
   * @param name string The name of the waypoint to remove
   * @return boolean added If the waypoint has been removed or not

   * Removes a waypoint by its position
   * @param x integer The x position of the waypoint to remove
   * @param y integer The y position of the waypoint to remove
   * @param z integer The z position of the waypoint to remove
   * @return boolean added If the waypoint has been removed or not*/

  public remove(...args: [name: string] | [x: number, y: number, z: number]): boolean;

   /** Saves the waypoint list to file*/
  public save(): void;
   /** Loads the waypoint list to file*/
  public load(): void;

   /** Clears all waypoints*/
  public clear(): void;
}

declare class ClientConfig {
   /** @class ClientConfig
   * @field name string The name of the config
   * @field exists boolean If this config exists on disk*/

  public name: string;
  public exists: boolean;
}

declare class ConfigManager {
   /** @class ConfigManager
   * local _acp__ConfigManager_ = {}

   * Gets a config from its name
   * @param name string The name
   * @return ClientConfig clientConfig The config you wanted (check if it exists if thats important)*/
  public get(name: string): ClientConfig;

   /** Gets the active config (Could differ from default)
   * @return ClientConfig clientConfig The active config*/
  public getActive(): ClientConfig;

   /** Gets the default config (the one that will be loaded on inject)
   * @return ClientConfig clientConfig The default config*/
  public getDefault(): ClientConfig;

   /** Sets the default config (the one that will be loaded on inject)
   * @param config ClientConfig The config to set as default*/
  public setDefault(config: ClientConfig): void;

   /** Checks to see if a config is the default one or not
   * @param config ClientConfig The config you want to know if its the default one or not*/
  public isDefault(config: ClientConfig): void;

   /** Checks to see if a config is the active one or not
   * @param config ClientConfig The config you want to know if its the active one or not*/
  public isActive(config: ClientConfig): void;

   /** Gets a list of client configs
   * @return ClientConfig[] clientConfig List of existing configs at the time of the request*/
  public list(): ClientConfig[];

   /** Deletes a config
   * @param config ClientConfig the config to delete*/
  public delete(config: ClientConfig): void;

   /** Creates a new config with default settings on everything
   * @param config ClientConfig Deletes a config*/
  public new(config: ClientConfig): void;

   /** Saves the current config to a config
   * @param config ClientConfig The config to save into*/
  public save(config: ClientConfig): void;

   /** Loads a config
   * @param config ClientConfig The config to load*/
  public load(config: ClientConfig): void;
}

declare class Vector2 {
   /** @class Vector2
   * @field x number
   * @field y number*/

  public x: number;
  public y: number;
}

declare class ColorSetting {
   /** @class ColorSetting
   * @field r number The amount of Red from a range of 0 to 1
   * @field g number The amount of Green from a range of 0 to 1
   * @field b number The amount of Blue from a range of 0 to 1
   * @field a number The amount of Opacity from a range of 0 to 1
   * @field alphaVisible boolean alphaVisible Should the opacity slider be availible
   * @field rainbow boolean Is this color rainbow
   * @field rainbowSpeed number The speed of the rainbow effect (default=0.003)*/

  public r: number;
  public g: number;
  public b: number;
  public a: number;
  public alphaVisible: boolean;
  public rainbow: boolean;
  public rainbowSpeed: number;
}

declare class Setting {
   /** @class Setting
   * @field type integer
   * @field name string The display name of the setting
   * @field saveName string The name used to save/load this Setting, no spaces
   * @field visible boolean Should show in the ui
   * @field value boolean|integer|number|Vector2|ColorSetting The value of the setting
   * @field default boolean|integer|number|Vector2|ColorSetting The default value of the setting
   * @field min integer|number|Vector2|nil Minimum value of the setting
   * @field max integer|number|Vector2|nil Maximum value of the setting
   * @field scale number The scale of info settings
   * @field parent Module the parent module
   * @field enumValues table[] table of tables, e.g. { {value, name}, {value2, name2} }*/

  public type: number;
  public name: string;
  public saveName: string;
  public visible: boolean;
  public value: boolean | number | Vector2 | ColorSetting;
  public default: boolean | number | Vector2 | ColorSetting;
  public min: number | Vector2 | null;
  public max: number | Vector2 | null;
  public scale: number;
  public parent: Module;
  public enumValues: [number, string][];
}

declare class Module {
   /** @class Module
   * @field name string The name of the module
   * @field description string The description of the module
   * @field isVisual boolean if the module is a VisualModule
   * @field isScript boolean if the module is a ScriptingModule
   * @field visible boolean if the module is visible in the clickgui
   * @field enabled boolean [you can set] if the module is enabled
   * @field settings Setting[] A list with all the module's settings
   * local _acp__Module_ = {}*/

  public name: string;
  public description: string;
  public isVisual: boolean;
  public isScript: boolean;
  public visible: boolean;
  public enabled: boolean;
  public settings: Setting[];

   /** Remove a setting from the mod
   * @param setting Setting the setting to remove from the mod*/
  public removeSetting(this: void, setting: Setting): void;
}

declare class VisualModule extends Module {
   /** @class VisualModule : Module
   * @field size Vector2 The size of the module
   * @field pos Vector2 The position of the module
   * @field relativepos Vector2 The relative position of the module (relative from anchor position)
   * @field anchor 0 = Invalid, 1 = Top Left, 2 = Top Right, 3 = Bottom Left, 4 = Bottom Right*/

  public size: Vector2;
  public pos: Vector2;
  public relativepos: Vector2;
  public anchor: number;
}

declare class ScriptingModule extends Module {
   /** @class ScriptingModule : Module
   * @field movable boolean If the module is movable
   * @field scale number The scale of the module
   * @field size Vector2 The size of the module
   * @field pos Vector2 The position of the module*/

  public movable: boolean;
  public scale: number;
  public size: Vector2;
  public pos: Vector2;
}

/** @noSelf */
declare namespace client {
   /** @class client
   * @field version string The client version
   * @field mcversion string The minecraft version*/

  const version: string;
  const mcversion: string;

   /** Sends a client notification
   * @param text string The text in the notification*/
  function notification(text: string): void;

   /** Gets the game's language
   * @return string languageCode The language code, example: en_US*/
  function language(): string;

   /** Executes a client command, do not include the prefix
   * You may use the execute command to do minecraft commands
   * Example: client.execute("execute /say imbald")
   * @param command string The command without the prefix*/
  function execute(command: string): void;

   /** Gets the waypoints
   * @return Waypoints*/
  function waypoints(): Waypoints;

   /** Gets the config manager that can do various config things
   * @return ConfigManager configManager The client config manager

   * Gets the config manager that can do various config things
   * @param scripting boolean (default: false) Get the scripting version of the Config Manager?
   * @return ConfigManager configManager The client config manager*/
  function getConfigManager(scripting?: boolean): ConfigManager;

   /** Gets a list of all the modules in the client
   * @return Module[] | VisualModule[] | ScriptingModule[]*/
  function modules(): (Module | VisualModule | ScriptingModule)[];
}
