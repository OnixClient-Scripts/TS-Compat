/** @noSelf */
declare namespace client {
  namespace settings {
    /**
     * Adds a space in the UI
     * @param {number} space Pixels of air to pad
     */
    function addAir(space: number): AirSetting;

    /**
     * Adds text in the UI, you can change the content of the variable and the UI will display the changes
     * @param {string} variableName The name of the global variable that contains the setting value or just the text to display
     */
    function addInfo(variableName: string): InfoSetting;

    /**
     * Adds text in the UI, you can change the content of the variable and the UI will display the changes
     * @param {string} variableName The name of the global variable that contains the setting value or just the text to display
     */
    function addTitle(variableName: string): TitleSetting;

    /**
     * Adds a toggle switch in the UI
     * @param name The name of the setting in the UI
     * @param variableName The name of the global variable that contains the setting value
     * @return The setting that was added
     */
    function addBool(name: string, variableName: string): BoolSetting;

    /**
     * Adds a keybind for the user to set in the UI
     * @param name The name of the setting in the UI
     * @param variableName The name of the global variable that contains the setting value  [Keycodes](https:  * docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     */
    function addKeybind(name: string, variableName: string): KeybindSetting;

    /**
     * Adds an integer slider in the UI
     * @param name string The name of the setting in the UI
     * @param variableName string The name of the global variable that contains the setting value
     * @param minimum integer The minimum value of this setting
     * @param maximum integer The maximum value of this setting
     */
    function addInt(name: string, variableName: string, minimum: number, maximum: number): IntSetting;

    /**
     * Adds a float slider in the UI
     * @param name The name of the setting in the UI
     * @param variableName The name of the global variable that contains the setting value
     * @param minimum The minimum value of this setting
     * @param maximum The maximum value of this setting
     */
    function addFloat(name: string, variableName: string, minimum: number, maximum: number): FloatSetting;

    /**
     * Adds a color for the user to change in the UI
     * The value you set is a table containing 3 or 4 number from 0 to 255
     * It will be transformed into a table containing 4 numbers, r,g,b,a  ex: var.r, var.g, var.b ...
     * @param name string The name of the setting in the UI
     * @param variableName string The name of the global variable that contains the setting value  ex: var = {255,255,255,255}/{255,255,255} for white
     * @returns The setting that was added
     */
    function addColor(name: string, variableName: string): ColorSetting;

    /**
     * Adds a button in the UI
     * @param name string The name of the setting in the UI
     * @param variableName string The name of the global variable that contains the setting value  (a function to be executed when clicked)
     * @param buttonName string The text on the UI button
     * @returns The setting that was added
     */
    function addFunction(name: string, variableName: string, buttonName: string): FunctionSetting;

    /**
     * Adds a textbox in the UI
     * @param name string The name of the setting in the UI
     * @param variableName string The name of the global variable that contains the setting value  (a function to be executed when clicked)
     * @return Setting setting The setting that was added
     */
    function addTextbox(name: string, variableName: string): TextboxSetting;

    /**
     * Adds a textbox in the UI
     * @param name string The name of the setting in the UI
     * @param variableName string The name of the global variable that contains the setting value  (a function to be executed when clicked)
     * @param maxCharacters integer The maximum amount of letters in the textbox
     * @return Setting setting The setting that was added
     */
    function addTextbox(name: string, variableName: string, maxCharacters: number): TextboxSetting;

    /**
     * Adds a category in the UI
     * @param name string The name of the setting in the UI
     * @return Setting setting The setting that was added
     */
    function addCategory(name: string): CategorySetting;

    /**
     * Adds a category in the UI
     * @param name string The name of the setting in the UI
     * @param settingCount integer The maximum amount of letters in the textbox
     * @return Setting setting The setting that was added
     */
    function addCategory(name: string, settingCount: number): CategorySetting;

    /**
     * Ends the last added category here
     */
    function stopCategory(): void;

    /**
     * Adds a dropdown of values in the UI
     * @param name string The name of the setting in the UI
     * @param variableName string The name of the global variable that contains the setting value
     * @param enumValues table[] The values of the enum in the following format: [[1, "first"], [7, "second"]] basically number value and a name for that number
     * @return Setting setting The setting that was added
     */
    function addEnum(name: string, variableName: string, enumValues: [number, string][]): EnumSetting;

    /**
     * Adds a dropdown of values in the UI
     * @param name string The name of the setting in the UI
     * @param defaultValue integer The default value, make sure it exists tho
     * @param enumValues table[] The values of the enum in the following format: { {1, "first"}, {7, "second"} } basically number value and a name for that number
     * @return Setting setting The setting that was added
     */
    function addNamelessEnum(name: string, defaultValue: number, enumValues: [number, string][]): EnumSetting;

    /**
     * https://github.com/OnixClient-Scripts/OnixClient_Scripts/blob/master/Modules/CustomSettingExample.lua
     * Adds an instance of a custom setting
     * @param name string The name of this setting instance in the UI
     * @param CustomSettingTypeId integer The type of this custom setting given by client.settings.registerCustomRenderer
     * @param defaultValue integer Custom settings act like ints in scripting. This is the default value of this setting.
     * @return Setting setting The setting that was added
     */
    function addCustom(name: string, CustomSettingTypeId: number, defaultValue: number): Setting;

    /**
     * Adds a toggle switch in the UI
     * @param name string The name of the setting in the UI
     * @param defaultValue boolean The name of the global variable that contains the setting value
     * @return Setting setting The setting that was added
     */
    function addNamelessBool(name: string, defaultValue: boolean): BoolSetting;

    /**
     * Adds a keybind for the user to set in the UI
     * @param name string The name of the setting in the UI
     * @param defaultValue integer The name of the global variable that contains the setting value  [Keycodes](https:  * docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     * @return Setting setting The setting that was added
     */
    function addNamelessKeybind(name: string, defaultValue: number): KeybindSetting;

    /**
     * Adds an int slider in the UI
     * @param name string The name of the setting in the UI
     * @param minimum integer The minimum value of this setting
     * @param maximum integer The maximum value of this setting
     * @param defaultValue integer The default value of the setting
     * @return Setting setting The setting that was added
     */
    function addNamelessInt(name: string, minimum: number, maximum: number, defaultValue: number): IntSetting;

    /**
     * Adds a float slider in the UI
     * @param name string The name of the setting in the UI
     * @param minimum number The minimum value of this setting
     * @param maximum number The maximum value of this setting
     * @param defaultValue number The default value of the setting
     * @return Setting setting The setting that was added
     */
    function addNamelessFloat(name: string, minimum: number, maximum: number, defaultValue: number): FloatSetting;

    /**
     * Adds a color for the user to change in the UI
     * @param name string The name of the setting in the UI
     * @param defaultValue integer[3]|integer[4]
     * @return Setting setting The setting that was added
     */
    function addNamelessColor(name: string, defaultValue: number[]): ColorSetting;

    /**
     * Adds a textbox for the user to type in the UI
     * @param name string The name of the setting in the UI
     * @param defaultValue string Default textbox text
     * @return Setting setting The setting that was added
     */
    function addNamelessTextbox(name: string, defaultValue: string): TextboxSetting;

    /**
     * Adds a textbox for the user to type in the UI
     * @param name string The name of the setting in the UI
     * @param defaultValue string Default textbox text
     * @param maxCharacters integer The maximum amount of letters in the textbox
     * @return Setting setting The setting that was added
     */
    function addNamelessTextbox(name: string, defaultValue: string, maxCharacters: number): TextboxSetting;

    /**
     * Adds a category in the ui
     * @param name string The name of this category
     */
    function addNamelessCategory(name: string): CategorySetting;
    /**
     * Adds a category in the ui
     * @param name string The name of this category
     * @param SettingCount integer How many settings to include in this category
     */
    function addNamelessCategory(name: string, SettingCount: number): CategorySetting;

    /**
     * https://github.com/OnixClient-Scripts/OnixClient_Scripts/blob/master/Modules/CustomSettingExample.lua
     * Adds a custom renderer for custom settings
     * @param getHeightCallback function|fun():number A function that returns the height of the custom setting.
     * @param renderCallback function|fun(setting: Setting, width: number, height: number, mouseX: number, mouseY: number, didClick: boolean, mouseButton: integer, lmbDown: boolean, rmbDown: boolean, mouseInside: boolean) A function that renders the custom setting.
     * @return integer CustomSettingTypeId The type id of the custom setting. This is used in client.settings.addCustom to create an instance.
     */
    function registerCustomRenderer(
      getHeightCallback: () => number,
      renderCallback: (
        setting: Setting,
        width: number,
        height: number,
        mouseX: number,
        mouseY: number,
        didClick: boolean,
        mouseButton: number,
        lmbDown: boolean,
        rmbDown: boolean,
        mouseInside: boolean
      ) => void
    ): number;

    /**
     * https://github.com/OnixClient-Scripts/OnixClient_Scripts/blob/master/Modules/CustomSettingExample.lua
     * Replaces a renderer for a setting, custom setting types might change for the client but non custom ones should remain the same.
     * @param SettingType integer The type of the setting to replace, you can replace client setting types using this.
     * @param getHeightCallback function|fun():number A function that returns the height of the custom setting.
     * @param renderCallback function|fun(setting: Setting, width: number, height: number, mouseX: number, mouseY: number, didClick: boolean, mouseButton: integer, lmbDown: boolean, rmbDown: boolean, mouseInside: boolean) A function that renders the custom setting.
     * @return integer CustomSettingTypeId The type id of the custom setting. This is used in client.settings.addCustom to create an instance.
     */
    function registerCustomRendererOverride(
      SettingType: number,
      getHeightCallback: () => number,
      renderCallback: (
        setting: Setting,
        width: number,
        height: number,
        mouseX: number,
        mouseY: number,
        didClick: boolean,
        mouseButton: number,
        lmbDown: boolean,
        rmbDown: boolean,
        mouseInside: boolean
      ) => void
    ): number;

    /**
     * Sends setting value from the script to the client
     * If you change one of the settings yourself it may not apply, this will make it apply
     * @param invisbleSettingsOnly boolean The name of the setting in the UI
     * @returns {void}
     */
    function send(invisbleSettingsOnly?: boolean): void;

    /**
     * Gets the latest settings from the client
     * Close to useless
     * @returns {void}
     */
    function reload(): void;
  }
}
