/**
 * @class gfx2
 */
//gfx2 = {}

/** @noSelf */
declare namespace gfx2 {
  /**
   * Changes the color of what will be rendered
   * @param {Setting | ColorProperties} setting client color(pls or u crash) setting
   */
  function color(setting: ColorSetting | ColorProperties): void;

  /**
   * Changes the color of what will be rendered
   * @param {number} r 0-255 color code
   * @param {number} g 0-255 color code
   * @param {number} b 0-255 color code
   * @param {number?} a 0-255 color code
   */
  function color(r: number, g: number, b: number, a?: number): void;

  /**
   * Fills a rectangle
   * @param {number} x Position on the X axis
   * @param {number} y Position on the Y axis
   * @param {number} width Width of the rectangle
   * @param {number} height Height of the rectangle
   */
  function fillRect(x: number, y: number, width: number, height: number): void;

  /**
   * Fills a blurred potentially rounded rectangle
   * Note that if the user disabled blur module background this will not blur anything.
   * @param {number} x Position on the X axis
   * @param {number} y Position on the Y axis
   * @param {number} width Width of the rectangle
   * @param {number} height Height of the rectangle
   * @param {number} opacity The opacity of the blurred rectangle
   * @param {number} roundedCornerRadius The radius of the corners if you want a rounded corner blur
   * @return {boolean} blurred If the area was blurred or not
   */
  function blur(x: number, y: number, width: number, height: number, opacity: number, roundedCornerRadius: number): boolean;

  /**
   * Draws a rectangle (outline)
   * @param {number} x Position on the X axis
   * @param {number} y Position on the Y axis
   * @param {number} width Width of the rectangle
   * @param {number} height Height of the rectangle
   * @param {number} lineWidth How large is the line
   */
  function drawRect(x: number, y: number, width: number, height: number, lineWidth: number): void;

  /**
   * Fills a rectangle with rounded corners
   * @param {number} x Position on the X axis
   * @param {number} y Position on the Y axis
   * @param {number} width Width of the rectangle
   * @param {number} height Height of the rectangle
   * @param {number} radius Radius of the rounded corners
   */
  function fillRoundRect(x: number, y: number, width: number, height: number, radius: number): void;

  /**
   * Draws a rectangle (outline) with rounded corners
   * @param {number} x Position on the X axis
   * @param {number} y Position on the Y axis
   * @param {number} width Width of the rectangle
   * @param {number} height Height of the rectangle
   * @param {number} radius Radius of the rounded corners
   * @param {number} lineWidth How large is the line
   */
  function drawRoundRect(x: number, y: number, width: number, height: number, radius: number, lineWidth: number): void;

  /**
   * Fills an elipse (circle but possibly wider)
   * @param {number} centerX The X axis center position of the elipse
   * @param {number} centerY The Y axis center position of the elipse
   * @param {number} radius How big is the circle
   */
  function fillElipse(centerX: number, centerY: number, radius: number): void;

  /**
   * Fills an elipse (circle but possibly wider)
   * @param {number} centerX The X axis center position of the elipse
   * @param {number} centerY The Y axis center position of the elipse
   * @param {number} radiusX How Wide is the elipse
   * @param {number} radiusY how High is the elipse
   */
  function fillElipse(centerX: number, centerY: number, radiusX: number, radiusY: number): void;

  /**
   * Draws an elipse (circle but possibly wider)
   * @param {number} centerX The X axis center position of the elipse
   * @param {number} centerY The Y axis center position of the elipse
   * @param {number} radius How big is the circle
   * @param {number} width How wide is the outline
   */
  function drawElipse(centerX: number, centerY: number, radius: number, width: number): void;

  /**
   * Draws an elipse (circle but possibly wider)
   * @param {number} centerX The X axis center position of the elipse
   * @param {number} centerY The Y axis center position of the elipse
   * @param {number} radiusX How Wide is the elipse
   * @param {number} radiusY how High is the elipse
   * @param {number} width How wide is the outline
   */
  function drawElipse(centerX: number, centerY: number, radiusX: number, radiusY: number, width: number): void;

  /**
   * Draws a line between point1 and point2
   * @param {number} Point1X X axis posiiton of the first point
   * @param {number} Point1Y Y axis posiiton of the first point
   * @param {number} Point2X X axis posiiton of the second point
   * @param {number} Point2Y Y axis posiiton of the second point
   * @param {number} Width The width of the line
   */
  function drawLine(Point1X: number, Point1Y: number, Point2X: number, Point2Y: number, Width: number): void;

  /**
   * Fills a quad
   * @param {number} TopLeftX X axis posiiton of the top left point
   * @param {number} TopLeftY Y axis posiiton of the top left point
   * @param {number} TopRightX X axis posiiton of the top left point
   * @param {number} TopRightY Y axis posiiton of the top left point
   * @param {number} BottomLeftX X axis posiiton of the top left point
   * @param {number} BottomLeftY Y axis posiiton of the top left point
   * @param {number} BottomRightX X axis posiiton of the top left point
   * @param {number} BottomRightY Y axis posiiton of the top left point
   */
  function fillQuad(
    TopLeftX: number,
    TopLeftY: number,
    TopRightX: number,
    TopRightY: number,
    BottomLeftX: number,
    BottomLeftY: number,
    BottomRightX: number,
    BottomRightY: number
  ): void;

  /**
   * Fills a triangle
   * @param {number} TrianglePoint1X X axis posiiton of the top left point
   * @param {number} TrianglePoint1Y Y axis posiiton of the top left point
   * @param {number} TrianglePoint2X X axis posiiton of the top left point
   * @param {number} TrianglePoint2Y Y axis posiiton of the top left point
   * @param {number} TrianglePoint3X X axis posiiton of the top left point
   * @param {number} TrianglePoint3Y Y axis posiiton of the top left point
   */
  function fillTriangle(
    TrianglePoint1X: number,
    TrianglePoint1Y: number,
    TrianglePoint2X: number,
    TrianglePoint2Y: number,
    TrianglePoint3X: number,
    TrianglePoint3Y: number
  ): void;

  /**
   * Renders text on the Minecraft: Bedrock Edition Screen
   * @param {number} x X axis posiiton of the text
   * @param {number} y Y axis posiiton of the text
   * @param {string} text The text to be rendered on the Minecraft: Bedrock Edition Screen
   */
  function text(x: number, y: number, text: string): void;

  /**
   * Renders text on the Minecraft: Bedrock Edition Screen
   * @param {number} x X axis posiiton of the text
   * @param {number} y Y axis posiiton of the text
   * @param {string} text The text to be rendered on the Minecraft: Bedrock Edition Screen
   * @param {number} scale the scale(size) of the text
   */
  function text(x: number, y: number, text: string, scale: number): void;

  /**
   * Gets the size of text on (Can be used outside of render2)
   * @param {string} text The text to measure
   * @param {number?} scale the scale(size) of the text
   * @returns {LuaMultiReturn<[number, number]>} width, height
   */
  function textSize(text: string, scale?: number): LuaMultiReturn<[number, number]>;

  /**
   * @class Gfx2Texture
   * @field width number The width of the texture
   * @field height number The height of the texture
   */
  interface Gfx2Texture {
    readonly width: number;
    readonly height: number;

    //local _acp__Gfx2Texture_ = {}

    /**
     * Gets the color of a pixel in the texture
     * @param {number} x X position of the pixel to get
     * @param {number} y Y position of the pixel to get
     * @returns {iColor} The color of the pixel
     */
    getPixel(x: number, y: number): unknown;

    /**
     * Sets the color of a pixel in the texture, you must unload if you used it for changes to apply
     * @param {number} x X position of the pixel to get
     * @param {number} y Y position of the pixel to get
     * @param {number} r new red color value (0-255)
     * @param {number} g new green color value (0-255)
     * @param {number} b new blue color value (0-255)
     * @diagnostic disable-next-line: duplicate-set-field
     */
    setPixel(x: number, y: number, r: number, g: number, b: number): void;

    /**
     * Sets the color of a pixel in the texture, you must unload if you used it for changes to apply
     * @param {number} x X position of the pixel to get
     * @param {number} y Y position of the pixel to get
     * @param {number} r new red color value (0-255)
     * @param {number} g new green color value (0-255)
     * @param {number} b new blue color value (0-255)
     * @param {number} a new alpha value (0-255)
     * @diagnostic disable-next-line: duplicate-set-field
     */
    setPixel(x: number, y: number, r: number, g: number, b: number, a: number): void;

    /**
     * Saves the texture to a png file (for if you wana draw to it using setPixel)
     * @param {string} path Where to save this
     * @returns {boolean} saved Did the texture successfully save
     */
    save(path: string): boolean;

    /**
     * Unloads the texture when you no longer need it or to reload its content
     */
    unload(): void;
  }

  /**
   * Loads a texture from base64 text (can be used outside of render2)
   * @param {number} width
   * @param {number} height
   * @param {string} Base64Texture The texture itself, convert with https://cdn.discordapp.com/attachments/877878499749289984/1029113574406242405/ImgToBase64.exe
   * @returns {Gfx2Texture|nil} texture The loaded texture or nil
   */
  function loadImage(width: number, height: number, Base64Texture: string): Gfx2Texture | void;

  /**
   * Loads a texture from base64 text (can be used outside of render2)
   * @param {string} filepath The path relative to the Scripts/Data folder
   * @returns {Gfx2Texture | nil} texture The loaded texture or nil
   */
  function loadImage(filepath: string): Gfx2Texture | void;

  /**
   * Loads a texture from a url, great for things that render images that changes
   * Note that while the texture is loading, drawing it will draw a gfx2.color() colored rectangle
   * @param {string} url The url to download the image from
   * @returns {Gfx2Texture texture The texture that will be loaded from the} web
   */
  function loadImageFromUrl(url: string): Gfx2Texture;

  /**
   * Loads a texture from a url, great for things that render images that changes
   * Note that while the texture is loading, drawing it will draw a gfx2.color() colored rectangle
   * Please don't use this for static images that don't change.
   * @param {string} url The url to download the image from
   * @param {string[]} headers Headers if needed to get access to the image
   * @returns {Gfx2Texture} texture The texture that will be loaded from the web
   */
  function loadImageFromUrl(url: string, headers: string[]): Gfx2Texture;

  /**
   * Creates a texture with the specified width and height
   * @param {number} width
   * @param {number} height
   * @returns {Gfx2Texture | nil} texture The created texture or nil
   */
  function createImage(width: number, height: number): Gfx2Texture | void;

  /**
   * Renders an image to the Minecraft: Bedrock Edition Screen
   * @param {number} x The position on the x axis
   * @param {number} y The position on the y axis
   * @param {number} width Width of the image to render
   * @param {number} height Height of the image to render
   * @param {Gfx2Texture} image image to render
   */
  function drawImage(x: number, y: number, width: number, height: number, image: Gfx2Texture): void;

  /**
   * Renders an image to the Minecraft: Bedrock Edition Screen
   * @param {number} x The position on the x axis
   * @param {number} y The position on the y axis
   * @param {number} width Width of the image to render
   * @param {number} height Height of the image to render
   * @param {Gfx2Texture} image image to render
   * @param {number} opacity Opactity at which to render the image at (0.0 to 1.0)
   */
  function drawImage(x: number, y: number, width: number, height: number, image: Gfx2Texture, opacity: number): void;

  /**
   * Renders an image to the Minecraft: Bedrock Edition Screen
   * @param {number} x The position on the x axis
   * @param {number} y The position on the y axis
   * @param {number} width Width of the image to render
   * @param {number} height Height of the image to render
   * @param {Gfx2Texture} image Image to render
   * @param {number} opacity Opactity at which to render the image at (0.0 to 1.0)
   * @param {boolean} isLinear Should the scaling be linear or is it gonna be nearest neighbor
   */
  function drawImage(
    x: number,
    y: number,
    width: number,
    height: number,
    image: Gfx2Texture,
    opacity: number,
    isLinear: boolean
  ): void;

  /**
   * Renders an image to the Minecraft: Bedrock Edition Screen
   * @param {number} x The position on the x axis
   * @param {number} y The position on the y axis
   * @param {number} width Width of the image to render
   * @param {number} height Height of the image to render
   * @param {Gfx2Texture} image image to render
   * @param {number} srcStartX Where in the source should we start taking the image
   * @param {number} srcStartY Where in the source should we start taking the image
   * @param {number} srcSizeX what size in the source image are we taking
   * @param {number} srcSizeY what size in the source image are we taking
   */
  function cdrawImage(
    x: number,
    y: number,
    width: number,
    height: number,
    image: Gfx2Texture,
    srcStartX: number,
    srcStartY: number,
    srcSizeX: number,
    srcSizeY: number
  ): void;

  /**
   * Renders an image to the Minecraft: Bedrock Edition Screen
   * @param {number} x The position on the x axis
   * @param {number} y The position on the y axis
   * @param {number} width Width of the image to render
   * @param {number} height Height of the image to render
   * @param {Gfx2Texture} image image to render
   * @param {number} srcStartX Where in the source should we start taking the image
   * @param {number} srcStartY Where in the source should we start taking the image
   * @param {number} srcSizeX what size in the source image are we taking
   * @param {number} srcSizeY what size in the source image are we taking
   * @param {number} opacity Opactity at which to render the image at (0.0 to 1.0)
   */
  function cdrawImage(
    x: number,
    y: number,
    width: number,
    height: number,
    image: Gfx2Texture,
    srcStartX: number,
    srcStartY: number,
    srcSizeX: number,
    srcSizeY: number,
    opacity: number
  ): void;

  /**
   * Renders an image to the Minecraft: Bedrock Edition Screen
   * @param {number} x The position on the x axis
   * @param {number} y The position on the y axis
   * @param {number} width Width of the image to render
   * @param {number} height Height of the image to render
   * @param {Gfx2Texture} image image to render
   * @param {number} srcStartX Where in the source should we start taking the image
   * @param {number} srcStartY Where in the source should we start taking the image
   * @param {number} srcSizeX what size in the source image are we taking
   * @param {number} srcSizeY what size in the source image are we taking
   * @param {number} opacity Opactity at which to render the image at (0.0 to 1.0)
   * @param {boolean} isLinear Should the scaling be linear or is it gonna be nearest neighbor
   */
  function cdrawImage(
    x: number,
    y: number,
    width: number,
    height: number,
    image: Gfx2Texture,
    srcStartX: number,
    srcStartY: number,
    srcSizeX: number,
    srcSizeY: number,
    opacity: number,
    isLinear: boolean
  ): void;
}
