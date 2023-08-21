declare type table = { [key: string | number]: any } | any[];

/** @noSelf */
declare namespace console {
  function log(...args: any[]): void;
  function warn(...args: any[]): void;
  function error(...args: any[]): void;
}

// For modules
/** 
 * ### The name of the module. This appears in the modules menu, and can be searched for.
 * The "name" variable defines what name in the ui your mod will hve.
 * it can have spaces but you should avoid special characters.
 */
declare let name: string;
/**
 * ### The description of the module. This appears below the name when editing the module's settings.
 * the "description" variable defines the what will show below the module name in the ui
 * do not use color codes on those description.
 */
declare let description: string;
/** If this is true, you can render graphics using gfx or gfx2 everywhere. This means inside the inventory, in the pause menu, etc. */
declare let renderEverywhere: boolean;

/** For visual modules: The X position of the module. (0 = left side) */
declare let positionX: number;
/** For visual modules: The Y position of the module. (0 = top) */
declare let positionY: number;
/** For visual modules: The width of the module. */
declare let sizeX: number;
/** For visual modules: The height of the module. */
declare let sizeY: number;

/** 
 * Used to calculate slower things, it is called ~10 times per seconds.
 * The "dt" argument is the amount of seconds since the last time this function got called
 */
declare let update: (this: void, dt: number) => void;
/**
 * Used to render things to the screen using gfx.
 * The "dt" argument is the amount of seconds since the last time this function got called
 */
declare let render: (this: void, dt: number) => void;
/**
 * Used to render things to the screen using gfx2 (v3 renderer).
 * Note that some things from the game might be unstable or cause crashes if used in render2
 * This is a good use for update, get the information in update and use it in render2
 * 
 * The "dt" argument is the amount of seconds since the last time this function got called
 */
declare let render2: (this: void, dt: number) => void;
/**
 * Used to render things in the world using gfx.
 * The "dt" argument is the amount of seconds since the last time this function got called
 */
declare let render3d: (this: void, dt: number) => void;
/** Used to do things after initialization, this function is safe to run game things in */
declare let postInit: (this: void) => void;
/** Used to do cleanup or whatever you need to do when your module is disabled */
declare let onDisable: (this: void) => void;
/** Used to do something when your module just got enabled */
declare let onEnable: (this: void) => void;

/** This is called when you receive data from any network.* function. */
declare let onNetworkData: (this: void, code: number, identifier: string, data: string) => void;

// For commands
/**
 * the "command" variable defines what the user will need to type in chat to execute your command.
 * it cannot have spaces, you should avoid special characters aswell.
 * do not include the prefix ( "." ) in the command.
 */
declare let command: string;
/**
 * the "help_message" variable defines the message that will show in .help
 * try to not make it too long if possible, it can contain about anything
 * if you decide to use color codes make sure to reset them (§r) at the end
 */
declare let help_message: string;

/**
 * ### Doing something when the command is executed
 * For this we simply define the function "execute"
 * everything after the name is in arguments
 * (ex: .test among) would mean the "arguments" would be "among"
 */
declare let execute: (this: void, arguments: string) => void;

/**
 * Gets the text from the clipboard
 * @returns {string} The text om the clipboard
 */
declare function getClipboard(this: void): string;

/**
 * Sets the text in the clipboard
 * @param {string} newClipboardContent The new content of the clipboard
 */
declare function setClipboard(this: void, newClipboardContent: string): void;

/**
 * Executes a lua file from the Scripts/Libs folder
 * @param {string} libraryName The name of the file in the libs folder (with or without the .lua)
 */
declare function importLib(this: void, libraryName: string): void;

/**
 * Converts a lua table to a json string
 * @param {table} Table The table to convert into JSON
 * @param {boolean} pretty make a nicely formatted string
 * @returns {string} The json string converted from the table
 */
declare function tableToJson(this: void, Table: table, pretty?: boolean): string;

/**
 * Converts a json string to a lua table for easier parsing
 * @param {string} JSON The JSON string to convert into a table
 * @returns {table} jsonTable The lua table made from the json string
 */
declare function jsonToTable(this: void, JSON: string): table;

/**
 * Sends data to all modules via the LocalDataReceived event
 * You should uniquely identify the messages that you want via the uuid parameter
 * It can be any string you want unique enough to uniquely identify the data origin
 * @param {string} uuid Something unique enough to make sure what sent the data to read things that you expect only
 * @param {string} data Data to send, you can use tableToJson and jsonToTable to send tables via string
 */
declare function sendLocalData(this: void, uuid: string, data: string): void;

/**
 * Allows you to make a command in a module
 * You dont need a command file but it does not show in .help
 * @param {string} Command The text after .  ex: .lol would be "lol"
 * @param {(arguments: string) => void} OnExecuted declare function to execute when the command is executed, same as the command files
 */
declare function registerCommand(this: void, Command: string, OnExecuted: (this: void, arguments: string) => void): void;

declare namespace string {
  /**
   * Splits the string as expected
   * @param {string} text The text to split by splitter
   * @param {string} splitter what to split the text with
   * @returns {string[]} splittedText
   */
  function split(this: void, text: string, splitter: string): string[];
}

declare namespace math {
  /**
   * Returns a value in this range or untouched
   * @param {any} value The value to check
   * @param {any} min The minimum value of the value
   * @param {any} max The maximum value of the value
   */
  function clamp(this: void, value: any, min: any, max: any): void;
}

declare namespace table {
  /**
   * Copies a table
   * @param {table} Table
   * @returns {table} copy
   */
  function clone(this: void, Table: { [key: string | number]: any } | any[]): void;
}

/**
 * Gets an item from its name, you cannot render it tho as location is missing
 * @param {string} name The name of the item (the one you would use in .give)
 * @returns {Item | void}
 */
declare function getItem(this: void, name: string): Item | void;

/**
 * Gets the nbt of an item from its location (item.location)
 * @param {integer} location  the location of the item
 * @returns {table} itemNbt nbt
 */
declare function getItemNbt(this: void, location: number): table;

/**
 * pairs alternative for iterating trough nbt 
 * @param {table} tbl Your NBT
 * @returns {LuaMultiReturn<[any, any]>}
 */
declare function Nbt(this: void, tbl: table): LuaMultiReturn<[any, any]>;

/**
 * Returns you an item from a NBT tag
 * @param {table} ItemNBT The nbt tag
 * @returns {Item} item
 */
declare function itemFromNbt(this: void, ItemNBT: table): Item;

/**
 * Returns the translated message/text (for minecraft)
 * @param {string} translationKey The key to translate (you can check in vanilla text files ex: gui.yes)
 * @param {string[]} params The params the key takes (like a name or number things like that)
 * @return {string} The translated string or the translation key
 */
declare function getTranslatedMessage(this: void, translationKey: string, params?: string[]): string;

/**
 * Plays a sound file
 * @param path string The path to the audio file
 */
declare function playCustomSound(this: void, path: string): void;
