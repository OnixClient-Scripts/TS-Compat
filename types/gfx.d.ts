//@meta

//@class gfx
//gfx = {}

interface Item {}

/** @noSelf */
declare namespace gfx {
  //Sets the drawing color, values range from 0 to 255
  //Gfx drawing functions will use this color
  //@param r number red
  //@param g number green
  //@param b number blue
  function color(r: number, g: number, b: number): void;

  //Sets the texture drawing color, values range from 0 to 255
  //Gfx texture drawing functions will tint using this color
  //@param r number red
  //@param g number green
  //@param b number blue
  function tcolor(r: number, g: number, b: number): void;

  //Sets if the 3D rendering should render trough blocks
  //@param phaseTroughBlocks boolean red
  //@return nil
  function renderBehind(phaseTroughBlocks: boolean): void;

  //Sets the drawing color, values range from 0 to 255
  //Gfx drawing functions will use this color
  //@param r number red
  //@param g number green
  //@param b number blue
  //@param a number Opacity
  function color(r: number, g: number, b: number, a: number): void;

  //The render origin (the player's eyes for first person)
  //@return number x
  //@return number y
  //@return number z
  function origin(): void;

  //Renders a rectangle
  //@param x number The position X
  //@param y number The position Y
  //@param width number The Width of the rectangle
  //@param height number The Height of the rectangle
  function rect(x: number, y: number, width: number, height: number): void;

  //Renders the outline of a rectangle
  //@param x number The position X
  //@param y number The position Y
  //@param width number The Width of the rectangle
  //@param height number The Height of the rectangle
  //@param lineWidth number The width of the rectangle outline
  function drawRect(x: number, y: number, width: number, height: number, lineWidth: number): void;

  //Renders a rectangle with round in the corners
  //@param x number The position X
  //@param y number The position Y
  //@param width number The Width of the rectangle
  //@param height number The Height of the rectangle
  //@param radius number The radius of the corners's circle
  //@param quality integer The amount of triangles that will form each quarter circles
  function roundRect(x: number, y: number, width: number, height: number, radius: number, quality: number): void;

  //Renders a rectangle with round in the corners or not
  //@param x number The position X
  //@param y number The position Y
  //@param width number The Width of the rectangle
  //@param height number The Height of the rectangle
  //@param radius number The radius of the corners's circle
  //@param quality integer The amount of triangles that will form each circles
  //@param topLeft boolean Top left corner should be round
  //@param topRight boolean Top right corner should be round
  //@param bottomLeft boolean Bottom left corner should be round
  //@param bottomRight boolean Bottom right corner should be round
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

  //Renders a circle
  //@param x number The position X
  //@param y number The position Y
  //@param radius number The radius of the corners's circle
  //@param quality integer The amount of triangles that will the circle
  function circle(x: number, y: number, radius: number, quality: number): void;

  //Renders Text
  //@param x number The position X
  //@param y number The position Y
  //@param text string The text to render
  function text(x: number, y: number, text: string): void;

  //Renders Text
  //@param x number The position X
  //@param y number The position Y
  //@param text string The text to render
  //@param scale number The scale of the text (2x will be two times as big)
  function text(x: number, y: number, text: string, scale: number): void;

  //Renders an Item
  //@param x number The position X
  //@param y number The position Y
  //@param itemLocation number Get it from an item in the player's inventory, dont guess it
  function item(x: number, y: number, itemLocation: number): void;

  //Renders an Item
  //@param x number The position X
  //@param y number The position Y
  //@param item Item The item to render
  function item(x: number, y: number, item: Item): void;

  //Renders an Item
  //@param x number The position X
  //@param y number The position Y
  //@param itemLocation number Get it from an item in the player's inventory, dont guess it
  //@param scale number The scale of the item
  function item(x: number, y: number, itemLocation: number, scale: number): void;

  //Renders an Item
  //@param x number The position X
  //@param y number The position Y
  //@param itemLocation number Get it from an item in the player's inventory, dont guess it
  //@param scale number The scale of the item
  //@param renderDecorations boolean Should render the decorations (item count/durability)
  function item(x: number, y: number, itemLocation: number, scale: number, renderDecorations: boolean): void;

  //Loads a gfx texture from texture pack root
  //@param filepath string
  //@return string GfxTexture The texture (not actually a string but its for the autocomplete to not have yellow lines)
  function loadTexture(filepath: string): string;

  //Loads a gfx image from Scripts/Data
  //@param filepath string
  //@return string GfxTexture the image (not actually a string but its for the autocomplete to not have yellow lines)
  function loadImage(filepath: string): string;

  //Renders an Image
  //@param x number The position X
  //@param y number The position Y
  //@param width number The Width of the rectangle to render the image in
  //@param height number The Height of the rectangle to render the image in
  //@param filepath string From the Scripts/Data folder
  function image(x: number, y: number, width: number, height: number, filepath: string): void;

  //Draws a part of the source image
  //@param x number The position X
  //@param y number The position Y
  //@param width number The Width of the rectangle to render the image in
  //@param height number The Height of the rectangle to render the image in
  //@param filepath string From the Scripts/Data folder
  //@param startX number The starting X position
  //@param startY number The starting Y position
  //@param sizeX number The X size
  //@param sizeY number The Y size
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

  //Renders a Texture (from the game)
  //@param x number The position X
  //@param y number The position Y
  //@param width number The Width of the rectangle to render the image in
  //@param height number The Height of the rectangle to render the image in
  //@param filepath string From the root of a texture pack ex: textures/blocks/stone
  function texture(x: number, y: number, width: number, height: number, filepath: string): void;

  //Draws a part of the source texture
  //@param x number The position X
  //@param y number The position Y
  //@param width number The Width of the rectangle to render the image in
  //@param height number The Height of the rectangle to render the image in
  //@param filepath string From the root of a texture pack ex: textures/blocks/stone
  //@param startX number The starting X position
  //@param startY number The starting Y position
  //@param sizeX number The X size
  //@param sizeY number The Y size
  //@return nil
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

  //@param filepath string the filepath you used in gfx.image or gfx.texture
  function unloadimage(filepath: string): void;

  //Renders the icon of an effect
  //@param x number The position X
  //@param y number The position Y
  //@param width number The Width of the rectangle to render the image in
  //@param height number The Height of the rectangle to render the image in
  //@param effectId integer you can get it from player.effects()'s effects
  function effect(x: number, y: number, width: number, height: number, effectId: number): void;

  //Renders a line (2d, use in render)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  function line(x_1: number, y_1: number, x_2: number, y_2: number): void;

  //Renders a line (3d, use in render3d)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param z_1 number The position Z (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  //@param z_2 number The position Z (2)
  function line(x_1: number, y_1: number, z_1: number, x_2: number, y_2: number, z_2: number): void;

  //Renders a triangle (2d, use in render)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  //@param x_3 number The position X (3)
  //@param y_3 number The position Y (3)
  function triangle(x_1: number, y_1: number, x_2: number, y_2: number, x_3: number, y_3: number): void;

  //Renders a triangle (3d, use in render3d)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param z_1 number The position Z (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  //@param z_2 number The position Z (2)
  //@param x_3 number The position X (3)
  //@param y_3 number The position Y (3)
  //@param z_3 number The position Z (3)
  function triangle(
    x_1: number,
    y_1: number,
    z_1: number,
    x_2: number,
    y_2: number,
    z_2: number,
    x_3: number,
    y_3: number,
    z_3: number
  ): void;

  //Renders a triangle (3d, use in render3d)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param z_1 number The position Z (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  //@param z_2 number The position Z (2)
  //@param x_3 number The position X (3)
  //@param y_3 number The position Y (3)
  //@param z_3 number The position Z (3)
  //@param bothSides boolean Should render both sides (would be visible from only one side if set to false)
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
    bothSides: boolean
  ): void;

  //Renders a quad (2d, use in render)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  //@param x_3 number The position X (3)
  //@param y_3 number The position Y (3)
  //@param x_4 number The position X (4)
  //@param y_4 number The position Y (4)
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

  //Renders a quad (3d, use in render)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param z_1 number The position Z (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  //@param z_2 number The position Z (2)
  //@param x_3 number The position X (3)
  //@param y_3 number The position Y (3)
  //@param z_3 number The position Z (3)
  //@param x_4 number The position X (4)
  //@param y_4 number The position Y (4)
  //@param z_4 number The position Z (4)
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
    z_4: number
  ): void;

  //Renders a quad (3d, use in render)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param z_1 number The position Z (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  //@param z_2 number The position Z (2)
  //@param x_3 number The position X (3)
  //@param y_3 number The position Y (3)
  //@param z_3 number The position Z (3)
  //@param x_4 number The position X (4)
  //@param y_4 number The position Y (4)
  //@param z_4 number The position Z (4)
  //@param bothSides boolean Should render both sides (would be visible from only one side if set to false)
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
    bothSides: boolean
  ): void;

  //Renders a textured triangle (2d, use in render)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param uvx_1 number The position X (1)
  //@param uvy_1 number The position Y (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  //@param uvx_2 number The position X (2)
  //@param uvy_2 number The position Y (2)
  //@param x_3 number The position X (3)
  //@param y_3 number The position Y (3)
  //@param uvx_3 number The position X (3)
  //@param uvy_3 number The position Y (3)
  //@param texturePath string the texture file (starting with "textures" will be taken from the resource pack otherwise data folder)
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

  //Renders a textured triangle (3d, use in render3d)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param z_1 number The position Z (1)
  //@param uvx_1 number The position X (1)
  //@param uvy_1 number The position Y (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  //@param z_2 number The position Z (2)
  //@param uvx_2 number The position X (2)
  //@param uvy_2 number The position Y (2)
  //@param x_3 number The position X (3)
  //@param y_3 number The position Y (3)
  //@param z_3 number The position Z (3)
  //@param uvx_3 number The position X (3)
  //@param uvy_3 number The position Y (3)
  //@param texturePath string the texture file (starting with "textures" will be taken from the resource pack otherwise data folder)
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
    texturePath: string
  ): void;

  //Renders a textured triangle (3d, use in render3d)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param z_1 number The position Z (1)
  //@param uvx_1 number The position X (1)
  //@param uvy_1 number The position Y (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  //@param z_2 number The position Z (2)
  //@param uvx_2 number The position X (2)
  //@param uvy_2 number The position Y (2)
  //@param x_3 number The position X (3)
  //@param y_3 number The position Y (3)
  //@param z_3 number The position Z (3)
  //@param uvx_3 number The position X (3)
  //@param uvy_3 number The position Y (3)
  //@param texturePath string the texture file (starting with "textures" will be taken from the resource pack otherwise data folder)
  //@param bothSides boolean Should render both sides (would be visible from only one side if set to false)
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
    bothSides: boolean
  ): void;

  //Renders a textured quad (2d, use in render)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param uvx_1 number The position X (1)
  //@param uvy_1 number The position Y (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  //@param uvx_2 number The position X (2)
  //@param uvy_2 number The position Y (2)
  //@param x_3 number The position X (3)
  //@param y_3 number The position Y (3)
  //@param uvx_3 number The position X (3)
  //@param uvy_3 number The position Y (3)
  //@param x_4 number The position X (4)
  //@param y_4 number The position Y (4)
  //@param uvx_4 number The position X (4)
  //@param uvy_4 number The position Y (4)
  //@param texturePath string the texture file (starting with "textures" will be taken from the resource pack otherwise data folder)
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

  //Renders a textured quad (3d, use in render)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param z_1 number The position Z (1)
  //@param uvx_1 number The position X (1)
  //@param uvy_1 number The position Y (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  //@param z_2 number The position Z (2)
  //@param uvx_2 number The position X (2)
  //@param uvy_2 number The position Y (2)
  //@param x_3 number The position X (3)
  //@param y_3 number The position Y (3)
  //@param z_3 number The position Z (3)
  //@param uvx_3 number The position X (3)
  //@param uvy_3 number The position Y (3)
  //@param x_4 number The position X (4)
  //@param y_4 number The position Y (4)
  //@param z_4 number The position Z (4)
  //@param uvx_4 number The position X (4)
  //@param uvy_4 number The position Y (4)
  //@param texturePath string the texture file (starting with "textures" will be taken from the resource pack otherwise data folder)
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
    texturePath: string
  ): void;

  //Renders a textured quad (3d, use in render)
  //@param x_1 number The position X (1)
  //@param y_1 number The position Y (1)
  //@param z_1 number The position Z (1)
  //@param uvx_1 number The position X (1)
  //@param uvy_1 number The position Y (1)
  //@param x_2 number The position X (2)
  //@param y_2 number The position Y (2)
  //@param z_2 number The position Z (2)
  //@param uvx_2 number The position X (2)
  //@param uvy_2 number The position Y (2)
  //@param x_3 number The position X (3)
  //@param y_3 number The position Y (3)
  //@param z_3 number The position Z (3)
  //@param uvx_3 number The position X (3)
  //@param uvy_3 number The position Y (3)
  //@param x_4 number The position X (4)
  //@param y_4 number The position Y (4)
  //@param z_4 number The position Z (4)
  //@param uvx_4 number The position X (4)
  //@param uvy_4 number The position Y (4)
  //@param texturePath string the texture file (starting with "textures" will be taken from the resource pack otherwise data folder)
  //@param bothSides boolean Should render both sides (would be visible from only one side if set to false)
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
    bothSides: boolean
  ): void;

  //@param filepath string Filepath to the .obj file
  //@return userdata
  function objLoad(filepath: string): DataView;

  //@param content string Filepath to the .obj file
  //@param isFilepath boolean use 'content' as filepath or obj file content
  //@return userdata
  function objLoad(content: string, isFilepath: boolean): DataView;

  //Renders a obj mesh (you can move scale and rotate it with gfx.pushTransformation)
  //@param mesh userdata
  function objRender(mesh: DataView): void;

  //Renders a obj mesh with texture (you can move scale and rotate it with gfx.pushTransformation)
  //@param mesh userdata
  //@param texture string
  function objRender(mesh: DataView, texture: string): void;

  //Pushes transformation(s)
  //@param transformations table
  function pushTransformation(transformations: { [key: string | number]: any }): void;

  //Pops transformation(s)
  function popTransformation(): void;

  //Pops transformation(s)
  //@param count integer Number of transformations to pop
  function popTransformation(count: number): void;
}
