/** @noSelf */
declare namespace gfx {
  /**
   * Sets the drawing color, values range from 0 to 255
   * Gfx drawing functions will use this color
   * @param {number} r red
   * @param {number} g green
   * @param {number} b blue
   */
  function color(r: number, g: number, b: number): void;

  /**
   * Sets the texture drawing color, values range from 0 to 255
   * Gfx texture drawing functions will tint using this color
   * @param {number} r red
   * @param {number} g green
   * @param {number} b blue
   */
  function tcolor(r: number, g: number, b: number): void;

  /**
   * Sets if the 3D rendering should render trough blocks
   * @param {boolean} phaseTroughBlocks red
   */
  function renderBehind(phaseTroughBlocks: boolean): void;

  /**
   * Sets the drawing color, values range from 0 to 255
   * Gfx drawing functions will use this color
   * @param {number} r red
   * @param {number} g green
   * @param {number} b blue
   * @param {number} a Opacity
   */
  function color(r: number, g: number, b: number, a: number): void;

  /**
   * The render origin (the player's eyes for first person)
   * @returns {LuaMultiReturn<[number, number, number]>}
   */
  function origin(): LuaMultiReturn<[number, number, number]>;

  /**
   * Renders a rectangle
   * @param {number} x The position X
   * @param {number} y The position Y
   * @param {number} width The Width of the rectangle
   * @param {number} height The Height of the rectangle
   */
  function rect(x: number, y: number, width: number, height: number): void;

  /**
   * Renders the outline of a rectangle
   * @param {number} x The position X
   * @param {number} y The position Y
   * @param {number} width The Width of the rectangle
   * @param {number} height The Height of the rectangle
   * @param {number} lineWidth The width of the rectangle outline
   */
  function drawRect(x: number, y: number, width: number, height: number, lineWidth: number): void;

  /**
   * Renders a rectangle with round in the corners
   * @param {number} x The position X
   * @param {number} y The position Y
   * @param {number} width The Width of the rectangle
   * @param {number} height The Height of the rectangle
   * @param {number} radius The radius of the corners's circle
   * @param {number} quality The amount of triangles that will form each quarter circles
   */
  function roundRect(x: number, y: number, width: number, height: number, radius: number, quality: number): void;

  /**
   * Renders a rectangle with round in the corners or not
   * @param {number} x The position X
   * @param {number} y The position Y
   * @param {number} width The Width of the rectangle
   * @param {number} height The Height of the rectangle
   * @param {number} radius The radius of the corners's circle
   * @param {number} quality The amount of triangles that will form each circles
   * @param {boolean} topLeft Top left corner should be round
   * @param {boolean} topRight Top right corner should be round
   * @param {boolean} bottomLeft Bottom left corner should be round
   * @param {boolean} bottomRight Bottom right corner should be round
   */
  function roundRectex(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    quality: number,
    topLeft: boolean,
    topRight: boolean,
    bottomLeft: boolean,
    bottomRight: boolean
  ): void;

  /**
   * Renders a circle
   * @param {number} x The position X
   * @param {number} y The position Y
   * @param {number} radius The radius of the corners's circle
   * @param {number} quality The amount of triangles that will the circle
   */
  function circle(x: number, y: number, radius: number, quality: number): void;

  /**
   * Renders Text
   * @param {number} x The position X
   * @param {number} y The position Y
   * @param {string} text The text to render
   * @param {number?} scale The scale of the text (2x will be two times as big)
   */
  function text(x: number, y: number, text: string, scale?: number): void;

  /**
   * Renders an Item
   * @param {number} x The position X
   * @param {number} y The position Y
   * @param {number | player.Item} item The item to render, or the location: Get it from an item in the player's inventory, dont guess it
   * @param {number?} scale The scale of the item
   * @param {boolean?} renderDecorations Should render the decorations (item count/durability)
   */
  function item(x: number, y: number, item: number | Item, scale?: number, renderDecorations?: boolean): void;

  /**
   * Loads a gfx texture from texture pack root
   * @param {string} filepath
   * @returns {string} The texture (not actually a string but its for the autocomplete to not have yellow lines)
   */
  function loadTexture(filepath: string): any;

  /**
   * Loads a gfx image from Scripts/Data
   * @param {string} filepath
   * @return {string} the image (not actually a string but its for the autocomplete to not have yellow lines)
   */
  function loadImage(filepath: string): any;

  /**
   * Uploads a Gfx2Texture into gfx to later be used by gfx.image
   * You can then do gfx.image with the filepath you used here and it should render the texture
   * @param {string} filepath Which filepath is it being uploaded as
   * @param {Gfx2Texture} texture The texture to upload
   */
  function uploadImage(filepath: string, texture: any): void;
  
  /**
   * Renders an Image
   * @param {number} x The position X
   * @param {number} y The position Y
   * @param {number} width The Width of the rectangle to render the image in
   * @param {number} height The Height of the rectangle to render the image in
   * @param {string} filepath From the Scripts/Data folder
   */
  function image(x: number, y: number, width: number, height: number, filepath: string): void;

  /**
   * Draws a part of the source image
   * @param {number} x The position X
   * @param {number} y The position Y
   * @param {number} width The Width of the rectangle to render the image in
   * @param {number} height The Height of the rectangle to render the image in
   * @param {string} filepath From the Scripts/Data folder
   * @param {number} startX The starting X position
   * @param {number} startY The starting Y position
   * @param {number} sizeX The X size
   * @param {number} sizeY The Y size
   */
  function cimage(
    x: number,
    y: number,
    width: number,
    height: number,
    filepath: string,
    startX: number,
    startY: number,
    sizeX: number,
    sizeY: number
  ): void;

  /**
   * Renders a Texture (from the game)
   * @param {number} x The position X
   * @param {number} y The position Y
   * @param {number} width The Width of the rectangle to render the image in
   * @param {number} height The Height of the rectangle to render the image in
   * @param {string} filepath From the root of a texture pack ex: textures/blocks/stone
   */
  function texture(x: number, y: number, width: number, height: number, filepath: string): void;

  /**
   * Draws a part of the source texture
   * @param {number} x The position X
   * @param {number} y The position Y
   * @param {number} width The Width of the rectangle to render the image in
   * @param {number} height The Height of the rectangle to render the image in
   * @param {string} filepath From the root of a texture pack ex: textures/blocks/stone
   * @param {number} startX The starting X position
   * @param {number} startY The starting Y position
   * @param {number} sizeX The X size
   * @param {number} sizeY The Y size
   * @returns {void}
   */
  function ctexture(
    x: number,
    y: number,
    width: number,
    height: number,
    filepath: string,
    startX: number,
    startY: number,
    sizeX: number,
    sizeY: number
  ): void;

  /** @param {string} filepath the filepath you used in gfx.image or gfx.texture */
  function unloadimage(filepath: string): void;

  /**
   * Renders the icon of an effect
   * @param {number} x The position X
   * @param {number} y The position Y
   * @param {number} width The Width of the rectangle to render the image in
   * @param {number} height The Height of the rectangle to render the image in
   * @param {number} effectId you can get it from player.effects()'s effects
   */
  function effect(x: number, y: number, width: number, height: number, effectId: number): void;

  /**
   * Renders a line (2d, use in render)
   * @param {number} x_1 The position X (1)
   * @param {number} y_1 The position Y (1)
   * @param {number} x_2 The position X (2)
   * @param {number} y_2 The position Y (2)
   */
  function line(x_1: number, y_1: number, x_2: number, y_2: number): void;

  /**
   * Renders a line (3d, use in render3d)
   * @param {number} x_1 The position X (1)
   * @param {number} y_1 The position Y (1)
   * @param {number} z_1 The position Z (1)
   * @param {number} x_2 The position X (2)
   * @param {number} y_2 The position Y (2)
   * @param {number} z_2 The position Z (2)
   */
  function line(x_1: number, y_1: number, z_1: number, x_2: number, y_2: number, z_2: number): void;

  /**
   * Renders a triangle (2d, use in render)
   * @param {number} x_1 The position X (1)
   * @param {number} y_1 The position Y (1)
   * @param {number} x_2 The position X (2)
   * @param {number} y_2 The position Y (2)
   * @param {number} x_3 The position X (3)
   * @param {number} y_3 The position Y (3)
   */
  function triangle(x_1: number, y_1: number, x_2: number, y_2: number, x_3: number, y_3: number): void;

  /**
   * Renders a triangle (3d, use in render3d)
   * @param {number} x_1 The position X (1)
   * @param {number} y_1 The position Y (1)
   * @param {number} z_1 The position Z (1)
   * @param {number} x_2 The position X (2)
   * @param {number} y_2 The position Y (2)
   * @param {number} z_2 The position Z (2)
   * @param {number} x_3 The position X (3)
   * @param {number} y_3 The position Y (3)
   * @param {number} z_3 The position Z (3)
   * @param {boolean?} bothSides Should render both sides (would be visible from only one side if set to false)
   */
  function triangle(
    x_1: number,
    y_1: number,
    z_1: number,
    x_2: number,
    y_2: number,
    z_2: number,
    x_3: number,
    y_3: number,
    z_3: number,
    bothSides?: boolean
  ): void;

  /**
   * Renders a quad (2d, use in render)
   * @param {number} x_1 The position X (1)
   * @param {number} y_1 The position Y (1)
   * @param {number} x_2 The position X (2)
   * @param {number} y_2 The position Y (2)
   * @param {number} x_3 The position X (3)
   * @param {number} y_3 The position Y (3)
   * @param {number} x_4 The position X (4)
   * @param {number} y_4 The position Y (4)
   */
  function quad(
    x_1: number,
    y_1: number,
    x_2: number,
    y_2: number,
    x_3: number,
    y_3: number,
    x_4: number,
    y_4: number
  ): void;

  /**
   * Renders a quad (3d, use in render3d)
   * @param {number} x_1 The position X (1)
   * @param {number} y_1 The position Y (1)
   * @param {number} z_1 The position Z (1)
   * @param {number} x_2 The position X (2)
   * @param {number} y_2 The position Y (2)
   * @param {number} z_2 The position Z (2)
   * @param {number} x_3 The position X (3)
   * @param {number} y_3 The position Y (3)
   * @param {number} z_3 The position Z (3)
   * @param {number} x_4 The position X (4)
   * @param {number} y_4 The position Y (4)
   * @param {number} z_4 The position Z (4)
   * @param {boolean} bothSides Should render both sides (would be visible from only one side if set to false)
   */
  function quad(
    x_1: number,
    y_1: number,
    z_1: number,
    x_2: number,
    y_2: number,
    z_2: number,
    x_3: number,
    y_3: number,
    z_3: number,
    x_4: number,
    y_4: number,
    z_4: number,
    bothSides?: boolean,
  ): void;

  /**
   * Renders a textured triangle (2d, use in render)
   * @param {number} x_1 The position X (1)
   * @param {number} y_1 The position Y (1)
   * @param {number} uvx_1 The position X (1)
   * @param {number} uvy_1 The position Y (1)
   * @param {number} x_2 The position X (2)
   * @param {number} y_2 The position Y (2)
   * @param {number} uvx_2 The position X (2)
   * @param {number} uvy_2 The position Y (2)
   * @param {number} x_3 The position X (3)
   * @param {number} y_3 The position Y (3)
   * @param {number} uvx_3 The position X (3)
   * @param {number} uvy_3 The position Y (3)
   * @param {string} texturePath the texture file (starting with "textures" will be taken from the resource pack otherwise data folder)
   */
  function ttriangle(
    x_1: number,
    y_1: number,
    uvx_1: number,
    uvy_1: number,
    x_2: number,
    y_2: number,
    uvx_2: number,
    uvy_2: number,
    x_3: number,
    y_3: number,
    uvx_3: number,
    uvy_3: number,
    texturePath: string
  ): void;

  /**
   * Renders a textured triangle (3d, use in render3d)
   * @param {number} x_1 The position X (1)
   * @param {number} y_1 The position Y (1)
   * @param {number} z_1 The position Z (1)
   * @param {number} uvx_1 The position X (1)
   * @param {number} uvy_1 The position Y (1)
   * @param {number} x_2 The position X (2)
   * @param {number} y_2 The position Y (2)
   * @param {number} z_2 The position Z (2)
   * @param {number} uvx_2 The position X (2)
   * @param {number} uvy_2 The position Y (2)
   * @param {number} x_3 The position X (3)
   * @param {number} y_3 The position Y (3)
   * @param {number} z_3 The position Z (3)
   * @param {number} uvx_3 The position X (3)
   * @param {number} uvy_3 The position Y (3)
   * @param {string} texturePath the texture file (starting with "textures" will be taken from the resource pack otherwise data folder)
   * @param {boolean} bothSides Should render both sides (would be visible from only one side if set to false)
   */
  function ttriangle(
    x_1: number,
    y_1: number,
    z_1: number,
    uvx_1: number,
    uvy_1: number,
    x_2: number,
    y_2: number,
    z_2: number,
    uvx_2: number,
    uvy_2: number,
    x_3: number,
    y_3: number,
    z_3: number,
    uvx_3: number,
    uvy_3: number,
    texturePath: string,
    bothSides?: boolean
  ): void;

  /**
   * Renders a textured quad (2d, use in render)
   * @param {number} x_1 The position X (1)
   * @param {number} y_1 The position Y (1)
   * @param {number} uvx_1 The position X (1)
   * @param {number} uvy_1 The position Y (1)
   * @param {number} x_2 The position X (2)
   * @param {number} y_2 The position Y (2)
   * @param {number} uvx_2 The position X (2)
   * @param {number} uvy_2 The position Y (2)
   * @param {number} x_3 The position X (3)
   * @param {number} y_3 The position Y (3)
   * @param {number} uvx_3 The position X (3)
   * @param {number} uvy_3 The position Y (3)
   * @param {number} x_4 The position X (4)
   * @param {number} y_4 The position Y (4)
   * @param {number} uvx_4 The position X (4)
   * @param {number} uvy_4 The position Y (4)
   * @param {string} texturePath the texture file (starting with "textures" will be taken from the resource pack otherwise data folder)
   */
  function tquad(
    x_1: number,
    y_1: number,
    uvx_1: number,
    uvy_1: number,
    x_2: number,
    y_2: number,
    uvx_2: number,
    uvy_2: number,
    x_3: number,
    y_3: number,
    uvx_3: number,
    uvy_3: number,
    x_4: number,
    y_4: number,
    uvx_4: number,
    uvy_4: number,
    texturePath: string
  ): void;

  /**
   * Renders a textured quad (3d, use in render)
   * @param {number} x_1 The position X (1)
   * @param {number} y_1 The position Y (1)
   * @param {number} z_1 The position Z (1)
   * @param {number} uvx_1 The position X (1)
   * @param {number} uvy_1 The position Y (1)
   * @param {number} x_2 The position X (2)
   * @param {number} y_2 The position Y (2)
   * @param {number} z_2 The position Z (2)
   * @param {number} uvx_2 The position X (2)
   * @param {number} uvy_2 The position Y (2)
   * @param {number} x_3 The position X (3)
   * @param {number} y_3 The position Y (3)
   * @param {number} z_3 The position Z (3)
   * @param {number} uvx_3 The position X (3)
   * @param {number} uvy_3 The position Y (3)
   * @param {number} x_4 The position X (4)
   * @param {number} y_4 The position Y (4)
   * @param {number} z_4 The position Z (4)
   * @param {number} uvx_4 The position X (4)
   * @param {number} uvy_4 The position Y (4)
   * @param {string} texturePath the texture file (starting with "textures" will be taken from the resource pack otherwise data folder)
   * @param {boolean} bothSides Should render both sides (would be visible from only one side if set to false)
   */
  function tquad(
    x_1: number,
    y_1: number,
    z_1: number,
    uvx_1: number,
    uvy_1: number,
    x_2: number,
    y_2: number,
    z_2: number,
    uvx_2: number,
    uvy_2: number,
    x_3: number,
    y_3: number,
    z_3: number,
    uvx_3: number,
    uvy_3: number,
    x_4: number,
    y_4: number,
    z_4: number,
    uvx_4: number,
    uvy_4: number,
    texturePath: string,
    bothSides?: boolean
  ): void;

  /**
   * @param {string} content Filepath to the .obj file
   * @param {boolean?} isFilepath use 'content' as filepath or obj file content
   * @return {userdata}
   */
  function objLoad(content: string, isFilepath?: boolean): DataView;

  /**
   * Renders a obj mesh with texture (you can move scale and rotate it with gfx.pushTransformation)
   * @param {userdata} mesh
   * @param {string} texture
   */
  function objRender(mesh: any, texture?: string): void;

  /**
   * Pushes transformation(s)
   * @param transformations
   */
  function pushTransformation(transformations: { [key: string | number]: any }): void;

  /**
   * Pops transformation(s)
   * @param {number?} count Number of transformations to pop
   */
  function popTransformation(count?: number): void;
}
