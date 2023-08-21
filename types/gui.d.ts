/** @noSelf */
declare namespace gui {
  /**
   * The width of the screen
   * @returns {number} The width of the screen
   */
  function width(): number;
  /**
   * The height of the screen
   * @returns {number} The height of the screen
   */
  function height(): number;
  /**
   * The minecraft guiscale
   * @returns {number} The minecraft guiscale
   */
  function scale(): number;
  /**
   * If the user move the mouse it will affect the game or the ui (true = ui)
   * @returns {boolean} Will be false if in the world
   */
  function mouseGrabbed(): boolean;

  /**
   * Set the mouseGrabbed state
   * @param {boolean} grabbed true will not allow the player to interact with the world
   */
  function setGrab(grabbed: boolean): void;

  /**
   * The position of the mouse on the X axis (left to right)
   * @returns {number} The position of the mouse on the X axis
   */
  function mousex(): number;
  /**
   * The position of the mouse on the Y axis (left to right)
   * @returns {number} The position of the mouse on the Y axis
   */
  function mousey(): number;

  /**
   * Opens a client screen, examples:
   * "HudEditor"
   * "ModuleEditor"
   * "CrosshairPainter"
   * "ThemeEditor"
   * @param {"HudEditor" | "ModuleEditor" | "CrosshairPainter" | "ThemeEditor"} name 
   * @returns {boolean} If the screen was showed
   */
  function showScreen(name: "HudEditor" | "ModuleEditor" | "CrosshairPainter" | "ThemeEditor"): boolean;

  /**
   * Gives you the name of the current minecraft screen
   * @returns {string} The name of the current screen
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

declare interface iColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

declare interface Theme {
  /** color of the text on the ui */
  text: ColorProperties;
  /** blocked content in that color */
  blocked: ColorProperties;
  /** color of enabled stuff, can be used as accent color */
  enabled: ColorProperties;
  /** color of disabled stuff */
  disabled: ColorProperties;
  /** the highlight color on top of the elements */
  highlight: ColorProperties;
  /** the color of the outline of ui elements */
  outline: ColorProperties;
  /** the background color */
  windowBackground: ColorProperties;
  /** most buttons use "enabled" but some use darkbutton's color instead */
  button: ColorProperties;
  /** color of the scrollbar */
  scrollbar: ColorProperties;
}

declare interface Font {
  /** Is the minecraft blocky font in use */
  readonly isMinecrafttia: boolean;
  /** the height of one char */
  readonly height: number;
  /** the height of one line */
  readonly wrap: number;

  /**
   * Returns the size of the text
   * @param {string} text The text to get the size of
   * @param {number?} scale The scale
   * @returns {number} The width of the input text
   */
  width(text: string, scale?: number): number;
}
