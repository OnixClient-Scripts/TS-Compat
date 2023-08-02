/**
 * @class gui
 */
//gui = {}

/** @noSelf */
declare namespace gui {
  /**
   * The width of the screen
   * @returns {number} width The width of the screen
   */
  function width(): number;
  /**
   * The height of the screen
   * @returns {number} height The height of the screen
   */
  function height(): number;
  /**
   * The minecraft guiscale
   * @returns {number} scale The minecraft guiscale
   */
  function scale(): number;
  /**
   * If the user move the mouse it will affect the game or the ui (true = ui)
   * @returns {boolean} mouseGrabbed Will be false if in the world
   */
  function mouseGrabbed(): boolean;

  /**
   * Set the mouseGrabbed state
   * @param {boolean} grabbed true will not allow the player to interact with the world
   */
  function setGrab(grabbed: boolean): void;

  /**
   * The position of the mouse on the X axis (left to right)
   * @returns {number} mouseX The position of the mouse on the X axis
   */
  function mousex(): number;
  /**
   * The position of the mouse on the Y axis (left to right)
   * @returns {number} mouseY The position of the mouse on the Y axis
   */
  function mousey(): number;

  /**
   * Opens a client screen, examples:
   * "HudEditor"
   * "ModuleEditor"
   * "CrosshairPainter"
   * "ThemeEditor"
   * @param {string} name | "\"HudEditor\"" | "\"ModuleEditor\"" | "\"CrosshairPainter\"" | "\"ThemeEditor\""
   * @returns {boolean} screenShowed If the screen was showed
   */
  function showScreen(name: "HudEditor" | "ModuleEditor" | "CrosshairPainter" | "ThemeEditor"): boolean;

  /**
   * Gives you the name of the current minecraft screen
   * @returns {string} screenName The name of the current screen
   */
  function screen(): string;

  /**
   * Plays the click sound (the one in minecraft when u clicc button)
   * Will not work on 1.18.30+
   */
  function clickSound(): void;

  /**
   * Plays a sound on the ui (will not go away if you move)
   * Will not work on 1.18.30+
   * @param {string} name any minecraft sounds: https://www.digminecraft.com/lists/sound_list_pe.php
   */
  function sound(name: string): void;

  /**
   * Stops all sound that are playing
   * Will not work on 1.18.30+
   */
  function stopallsound(): void;

  /**
   * Gets the user's theme
   * @returns {Theme} theme The user's theme
   */
  function theme(): Theme;

  /**
   * Gets the font in use right now
   * @returns {Font} font The current font
   */
  function font(): Font;
}

/**
 * @class iColor
 * @field r integer
 * @field g integer
 * @field b integer
 * @field a integer
 */
declare class iColor {
  public r: number;
  public g: number;
  public b: number;
  public a: number;
}
//local iColor = {}

/**
 * @class Theme
 * @field text ColorSetting color of the text on the ui
 * @field blocked ColorSetting blocked content in that color
 * @field enabled ColorSetting color of enabled stuff, can be used as accent color
 * @field disabled ColorSetting color of disabled stuff
 * @field highlight ColorSetting the highlight color on top of the elements
 * @field outline ColorSetting the color of the outline of ui elements
 * @field windowBackground ColorSetting the background color
 * @field button ColorSetting most buttons use "enabled" but some use darkbutton's color instead
 * @field scrollbar ColorSetting color of the scrollbar
 */
declare class Theme {
  public text: ColorSetting;
  public blocked: ColorSetting;
  public enabled: ColorSetting;
  public disabled: ColorSetting;
  public highlight: ColorSetting;
  public outline: ColorSetting;
  public windowBackground: ColorSetting;
  public button: ColorSetting;
  public scrollbar: ColorSetting;
}
//local _acp_theme = {}

/**
 * @class Font
 * @field isMinecrafttia boolean Is the minecraft blocky font in use
 * @field height number the height of one char
 * @field wrap number the height of one line
 * @noSelf
 */
declare class Font {
  public isMinecrafttia: boolean;
  public height: number;
  public wrap: number;

  /**
   * Returns the size of the text
   * @param {string} text The text to get the size of
   * @returns {number} widthOfText The width of the input text
   * @diagnostic disable-next-line: duplicate-set-field
   */
  public width(text: string): number;

  /**
   * Returns the size of the text
   * @param {string} text The text to get the size of
   * @param {number} scale The scale
   * @returns {number} widthOfText The width of the input text
   * @diagnostic disable-next-line: duplicate-set-field
   */
  public width(text: string, scale: number): number;
}
//local _acp_font = {}
