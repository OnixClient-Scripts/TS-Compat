declare type table = { [key: string | number]: any } | any[];

/** @noSelf */
declare namespace console {
  function log(...args: any[]): void;
  function warn(...args: any[]): void;
  function error(...args: any[]): void;
}

// For modules
declare let name: string;
declare let description: string;
/** If this is true, you can render graphics using gfx or gfx2 everywhere. This means inside the inventory, in the pause menu, etc. */
declare let renderEverywhere: boolean;

declare let update: (this: void, deltaTime: number) => void;
declare let render: (this: void, deltaTime: number) => void;
declare let render2: (this: void, deltaTime: number) => void;
declare let render3d: (this: void, deltaTime: number) => void;
declare let postInit: (this: void) => void;
declare let onDisable: (this: void) => void;
declare let onEnable: (this: void) => void;

declare let onNetworkData: (this: void, code: number, identifier: string, data: string) => void;

// For commands
declare let help_message: string;
declare let command: string;

declare let execute: (this: void, arguments: string) => void;

/**
 * Gets the text from the clipboard
 * @returns {string} clipboardContent The text om the clipboard
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
 * @returns {string} jsonStr The json string converted from the table
 */
declare function tableToJson(this: void, Table: table, pretty: boolean): string;

/**
 * Converts a lua table to a json string
 * @param {table} Table The table to convert into JSON
 * @returns {string} jsonStr The json string converted from the table
 */
declare function tableToJson(this: void, Table: table): string;

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
declare function registerCommand(this: void, Command: string, OnExecuted: (arguments: string) => void): void;

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
   * COPYS a table
   * @param {table} Table
   * @returns {table} copy
   */
  function clone(this: void, Table: { [key: string | number]: any } | any[]): void;
}

/**
 * Gets an item from its name, you cannot render it tho as location is missing
 * @param {string} name The name of the item (the one you would use in .give)
 * @returns {Item} | nil
 */
declare function getItem(this: void, name: string): player.Item | void;

/**
 * Gets the nbt of an item from its location (item.location)
 * @param {integer} location  the location of the item
 * @returns {table} itemNbt nbt
 */
declare function getItemNbt(this: void, location: number): table;

/**
 * pairs alternative for iterating trough nbt 
 * @param {table} tbl Your NBT
 * @return any
 * @return any
 */
declare function Nbt(this: void, tbl: { [key: string | number]: any } | any[]): void;

/**
 * Returns you an item from a NBT tag
 * @param {table} ItemNBT The nbt tag
 * @returns {Item} item
 */
declare function itemFromNbt(this: void, ItemNBT: { [key: string | number]: any } | any[]): player.Item;

/**
 * Returns the translated message/text (for minecraft)
 * @param translationKey string The key to translate (you can check in vanilla text files ex: gui.yes)
 * @return string translated The translated string or the translation key
 */
declare function getTranslatedMessage(translationKey: string): string;

/**
 * Returns the translated message/text (for minecraft)
 * @param translationKey string The key to translate (you can check in vanilla text files ex: gui.yes)
 * @param params string[] The params the key takes (like a name or number things like that)
 * @return string translated The translated string or the translation key
 */
declare function getTranslatedMessage(translationKey: string, params: string[]): string;

/**
 * Plays a sound file
 * @param path string The path to the audio file
 */
declare function playCustomSound(path: string): void;
