type SimpleLuaTable = { [key: string | number]: number | string | boolean | SimpleLuaTable };

/** @noSelf */
declare namespace event {
  interface Events {
    KeyboardInput: (this: void, key: number, down: boolean) => boolean | void;
    MouseInput: (this: void, button: number, down: boolean) => boolean | void;
    ChatMessageAdded: (this: void, message: string, username: string, type: number, xuid: string) => boolean | void;
    LocalDataReceived: (this: void, uuid: string, content: string) => void;
    ConfigurationSaved: (this: void) => SimpleLuaTable | void;
    ConfigurationLoaded: (this: void, data: SimpleLuaTable) => void;
    LocalServerUpdate: (this: void) => void;
    BlockChanged: (this: void, x: number, y: number, z: number, newBlock: number, oldBlock: number) => void;
    TitleChanged: (this: void, text: string, titleType: string) => void;
  }

  /**
   * Binds an event to a function
   * Here are the events you can listen to
   * This will be called everytime the user presses a key.
   * The value of the different keys can be found there
   * https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes
   * You can cancel this event by returning true (and the game will have no clue it ever happened)
   * 
   * ```lua
   * event.listen("KeyboardInput", function(key, down)
   *     
   * end)
   * ```
   * 
   * This will be called everytime the user clicks a mouse button.
   * button values:
   * - 1 == Left Click
   * - 2 == Right Click
   * - 3 == Middle Click
   * - 4 == Mouse Scroll
   * You can cancel this event by returning true (and the game will have no clue it ever happened)
   * 
   * ```lua
   * event.listen("MouseInput", function(button, down)
   *     
   * end)
   * ```
   * 
   * This will be called everytime a chat message is added to the chat
   * The username will most likely only be filled for whisper/chat message
   * Here are the types of messages
   * - 0 == Raw
   * - 1 == Chat
   * - 2 == Translate
   * - 3 == Popup
   * - 4 == JukeboxPopup
   * - 5 == Tip
   * - 6 == SystemMessage
   * - 7 == Whisper
   * - 8 == Announcement
   * - 9 == TextObject
   * You can cancel this event by returning true and it won't add it to the chat
   * 
   * ```lua
   * event.listen("ChatMessageAdded", function(message, username, type, xuid)
   *     
   * end)
   * ```
   * 
   * This will get called everytime any script calls "sendLocalData"
   * Generally you want to filter them to make sure it is the one you want
   * (Before actually trying to read the content)
   * 
   * ```lua
   * event.listen("LocalDataReceived", function(uuid, content)
   * 
   * end)
   * ```
   * 
   * This will be called everytime the script config is saved
   * You can use it to save a lua table (basic tytpes only: integer, number, string, table)
   * return the table you wish to save
   * 
   * ```lua
   * event.listen("ConfigurationSaved", function()
   *     local data = {}
   *     
   *     return data
   * end)
   * ```
   * 
   * This will be called everytime the script config is loaded
   * data will be lua table you returned at the "ConfigurationSaved" event
   * 
   * ```lua
   * event.listen("ConfigurationLoaded", function(data)
   *     
   * end)
   * ```
   * 
   * This will be called every server tick (~20 times per seconds)
   * You can do server things in there like getting serverside blockActor
   * 
   * ```lua
   * event.listen("LocalServerUpdate", function()
   *     
   * end)
   * ```
   * 
   * This will be called when a subtitle changes
   * titleType can be the following: "clear", "reset", "title", "subtitle", "actionbar", "titleraw", "subtitleraw", "actionbarraw"
   * 
   * ```lua
   * event.listen("TitleChanged", function(text, titleType)
   *     
   * end)
   * ```
   * 
   * @param {string} eventName | '"KeyboardInput", function(key, down)\n\t\nend' | '"MouseInput", function(button, down)\n\t\nend' | '"ChatMessageAdded", function(message, username, type, xuid)\n\t\nend' | '"LocalDataReceived", function(uuid, content)\n\t\nend' | '"ConfigurationSaved", function()\n\tlocal data = {}\n\t\n\treturn data\nend' | '"ConfigurationLoaded", function(data)\n\t\nend' | '"LocalServerUpdate", function()\n\t\nend' | '"BlockChanged", function(x, y, z, newBlock, oldBlock)\n\t\nend' | '"TitleChanged", function(text, titleType)\n\t\nend' Name of the event to listen to
   * @param {function} handler Function that will handle the event
   * @return nil
   * function event.listen(eventName, handler) end
   */
  function listen<Name extends keyof Events>(eventName: Name, handler: Events[Name]): void
}
