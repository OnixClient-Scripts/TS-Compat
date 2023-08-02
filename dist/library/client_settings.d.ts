/** @noSelf */
declare namespace client {
  namespace settings {
    /**
     * Adds a space in the UI
     * @param space Pixels of air to pad
     */
    function addAir(space: number): Setting;

    /**
     * Adds text in the UI, you can change the content of the variable and the UI will display the changes
     * @param variableName The name of the global variable that contains the setting value or just the text to display
     */
    function addInfo(variableName: string): Setting;

    /**
     * Adds text in the UI, you can change the content of the variable and the UI will display the changes
     * @param variableName The name of the global variable that contains the setting value or just the text to display
     */
    function addTitle(variableName: string): Setting;

    /**
     * Adds a toggle switch in the UI
     * @param name The name of the setting in the UI
     * @param variableName The name of the global variable that contains the setting value
     * @return The setting that was added
     */
    function addBool(name: string, variableName: string): Setting;

    /**
     * Adds a keybind for the user to set in the UI
     * @param name The name of the setting in the UI
     * @param variableName The name of the global variable that contains the setting value  [Keycodes](https:  * docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     */
    function addKeybind(name: string, variableName: string): Setting;

    /**
     * Adds an integer slider in the UI
     * @param name string The name of the setting in the UI
     * @param variableName string The name of the global variable that contains the setting value
     * @param minimum integer The minimum value of this setting
     * @param maximum integer The maximum value of this setting
     */
    function addInt(name: string, variableName: string, minimum: number, maximum: number): Setting;

    /**
     * Adds a float slider in the UI
     * @param name The name of the setting in the UI
     * @param variableName The name of the global variable that contains the setting value
     * @param minimum The minimum value of this setting
     * @param maximum The maximum value of this setting
     */
    function addFloat(name: string, variableName: string, minimum: number, maximum: number): Setting;

    /**
     * Adds a color for the user to change in the UI
     * The value you set is a table containing 3 or 4 number from 0 to 255
     * It will be transformed into a table containing 4 numbers, r,g,b,a  ex: var.r, var.g, var.b ...
     * @param name string The name of the setting in the UI
     * @param variableName string The name of the global variable that contains the setting value  ex: var = {255,255,255,255}/{255,255,255} for white
     * @returns The setting that was added
     */
    function addColor(name: string, variableName: string): Setting;

    /**
     * Adds a button in the UI
     * @param name string The name of the setting in the UI
     * @param variableName string The name of the global variable that contains the setting value  (a function to be executed when clicked)
     * @param buttonName string The text on the UI button
     * @returns The setting that was added
     */
    function addFunction(name: string, variableName: string, buttonName: number): Setting;

    /**
     * Adds a textbox in the UI
     * @param name string The name of the setting in the UI
     * @param variableName string The name of the global variable that contains the setting value  (a function to be executed when clicked)
     * @return Setting setting The setting that was added
     */
    function addTextbox(name: string, variableName: string): Setting;

     /**
     * Adds a textbox in the UI
     * @param name string The name of the setting in the UI
     * @param variableName string The name of the global variable that contains the setting value  (a function to be executed when clicked)
     * @param maxCharacters integer The maximum amount of letters in the textbox
     * @return Setting setting The setting that was added
     */
    function addTextbox(name: string, variableName: string, maxCharacters: number): Setting;

     /**
     * Adds a category in the UI
     * @param name string The name of the setting in the UI
     * @return Setting setting The setting that was added
     */
    function addCategory(name: string): Setting;

     /**
     * Adds a category in the UI
     * @param name string The name of the setting in the UI
     * @param settingCount integer The maximum amount of letters in the textbox
     * @return Setting setting The setting that was added
     */
    function addCategory(name: string, settingCount: number): Setting;

    /**
     *: Settings the last added category here
     */
    function stopCategory(): Setting;

     /**
     * Adds a dropdown of values in the UI
     * @param name string The name of the setting in the UI
     * @param variableName string The name of the global variable that contains the setting value
     * @param enumValues table[] The values of the enum in the following format: { {1, "first"}, {7, "second"} } basically number value and a name for that number
     * @return Setting setting The setting that was added
     */
    function addEnum(name: string, variableName: string, enumValues: [number, string][]): Setting;

     /**
     * Adds a dropdown of values in the UI
     * @param name string The name of the setting in the UI
     * @param defaultValue integer The default value, make sure it exists tho
     * @param enumValues table[] The values of the enum in the following format: { {1, "first"}, {7, "second"} } basically number value and a name for that number
     * @return Setting setting The setting that was added
     */
    function addNamelessEnum(name: string, defaultValue: number, enumValues: [number, string][]): Setting;

     /**
     * Adds a toggle switch in the UI
     * @param name string The name of the setting in the UI
     * @param defaultValue boolean The name of the global variable that contains the setting value
     * @return Setting setting The setting that was added
     */
    function addNamelessBool(name: string, defaultValue: boolean): Setting;

     /**
     * Adds a keybind for the user to set in the UI
     * @param name string The name of the setting in the UI
     * @param defaultValue integer The name of the global variable that contains the setting value  [Keycodes](https:  * docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     * @return Setting setting The setting that was added
     */
    function addNamelessKeybind(name: string, defaultValue: number): Setting;

     /**
     * Adds an int slider in the UI
     * @param name string The name of the setting in the UI
     * @param minimum integer The minimum value of this setting
     * @param maximum integer The maximum value of this setting
     * @param defaultValue integer The default value of the setting
     * @return Setting setting The setting that was added
     */
    function addNamelessInt(name: string, minimum: number, maximum: number, defaultValue: number): Setting;

     /**
     * Adds a float slider in the UI
     * @param name string The name of the setting in the UI
     * @param minimum number The minimum value of this setting
     * @param maximum number The maximum value of this setting
     * @param defaultValue number The default value of the setting
     * @return Setting setting The setting that was added
     */
    function addNamelessFloat(name: string, minimum: number, maximum: number, defaultValue: number): Setting;

     /**
     * Adds a color for the user to change in the UI
     * @param name string The name of the setting in the UI
     * @param defaultValue integer[3]|integer[4]
     * @return Setting setting The setting that was added
     */
    function addNamelessColor(name: string, defaultValue: number[]): Setting;

     /**
     * Adds a textbox for the user to type in the UI
     * @param name string The name of the setting in the UI
     * @param defaultValue string Default textbox text
     * @return Setting setting The setting that was added
     */
    function addNamelessTextbox(name: string, defaultValue: string): Setting;

     /**
     * Adds a textbox for the user to type in the UI
     * @param name string The name of the setting in the UI
     * @param defaultValue string Default textbox text
     * @param maxCharacters integer The maximum amount of letters in the textbox
     * @return Setting setting The setting that was added
     */
    function addNamelessTextbox(name: string, defaultValue: string, maxCharacters: number): Setting;

     /**
     * Adds a category in the ui
     * @param name string The name of this category
     */
    function addNamelessCategory(name: string): Setting;
    /**
     * Adds a category in the ui
     * @param name string The name of this category
     * @param SettingCount integer How many settings to include in this category
     */
    function addNamelessCategory(name: string, SettingCount: number): Setting;

     /**
     * Sends setting value from the script to the client
     * If you change one of the settings yourself it may not apply, this will make it apply
     * @param invisbleSettingsOnly boolean The name of the setting in the UI
     * @return nil
     */
    function send(invisbleSettingsOnly: boolean): void;

     /**
     * Sends setting value from the script to the client
     * If you change one of the settings yourself it may not apply, this will make it apply
     * @return nil
     */
    function send(): void;

     /**
     * Gets the latest settings from the client
     * Close to useless
     * @return nil
     */
    function reload(): void;
  }
}
