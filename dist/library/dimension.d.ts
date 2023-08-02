// TODO: make this automatic

declare class LightPair {
  //-@class LightPair
  //-@field blockLight integer The light level caused by torches and stuff
  //-@field skyLight integer The light level of the environement (will not adapt to time)

  public blockLight: number;
  public skyLight: number;
}

declare class Block {
  //-@class Block
  //-@field id integer The numerical identifier of the block (changes with versions)
  //-@field data integer The data of the block: example the color of the wool in a /setblock
  //-@field name string The name that would be used in /setblock
  //-@field hash integer Unique hash for the block

  public id: number;
  public data: number;
  public name: string;
  public hash: number;
}

declare class Biome {
  //-@class Biome
  //-@field id integer The numerical identifier of the biome (might change with versions)
  //-@field name string The name of the biome
  //-@field temperature number The temperature of the biome
  //-@field snow boolean Can it snow in that biome
  //-@field canRain boolean Can it rain in that biome

  public id: number;
  public name: string;
  public temperature: number;
  public snow: boolean;
  public canRain: boolean;
}

/**
 * @class RaycastInfo
 * @field x integer The x position of the hit block
 * @field y integer The y position of the hit block
 * @field z integer The z position of the hit block
 * @field px number The precise x position on the block where the hit happened
 * @field py number The precise y position on the block where the hit happened
 * @field pz number The precise z position on the block where the hit happened
 * @field isEntity boolean If the raycast hit an entity
 * @field isBlock boolean If the raycast hit a block
 * @field blockFace integer What face of a block did the raycast hit
 */
declare class RaycastInfo {
  public x: number;
  public y: number;
  public z: number;
  public px: number;
  public py: number;
  public pz: number;
  public isEntity: boolean;
  public isBlock: boolean;
  public blockFace: number;
}

/** @noSelf */
declare namespace dimension {
  //-@class dimension
  //dimension = {}

  //-The numerical identifier of the dimension
  //-0 == Overworld
  //-1 == Nether
  //-2 == TheEnd
  //-@return number id The dimension id of the current dimension
  function id(): number;

  //-The name of the dimension
  //-The default dimensions are:
  //-"Overworld"
  //-"Nether"
  //-"TheEnd"
  //-@return string name
  function name(): string;

  //-The time in the dimension
  //-Ranges from 0 to 1, 0 is the start of the day 0.5 is night and 1 is the end of the day will wrap to 0
  //-@return number time The current time in the dimension
  function time(): number;

  //-Will return true if it is currently raining
  //-@return boolean isRaining Is it raining right now?
  function isRaining(): boolean;

  //-Plays a sound at these coordinates
  //-Will not work on 1.18.30+
  //-@param x integer | number The x position
  //-@param y integer | number The y position
  //-@param z integer | number The z position
  //-@param name string any minecraft sounds: https://www.digminecraft.com/lists/sound_list_pe.php
  function sound(x: number, y: number, z: number, name: string): void;

  //-Gets the light levels of these coordinates
  //-The highest between sky and block is the real brightness
  //-note that as the sun goes down this number will not change
  //-@param x integer | number The x position
  //-@param y integer | number The y position
  //-@param z integer | number The z position
  //-@return LightPair lightPair The light level
  function getBrightness(x: number, y: number, z: number): LightPair;

  //-Gets the block at these coordinates
  //-@param x integer | number The x position
  //-@param y integer | number The y position
  //-@param z integer | number The z position
  //-@return Block block The block information
  function getBlock(x: number, y: number, z: number): Block;

  //-Gets the block at these coordinates
  //-@param x integer | number The x position
  //-@param y integer | number The y position
  //-@param z integer | number The z position
  //-@return table blockEntity The NBT of the block entity
  function getBlockEntity(x: number, y: number, z: number): table;

  //-Gets the block entity nbt at these coordinates
  //-@param x integer | number The x position
  //-@param y integer | number The y position
  //-@param z integer | number The z position
  //-@param getServerSideEntity boolean Should we get the server one (unstable outside of the LocalServerUpdate event)
  //-@return table blockEntity The NBT of the block entity
  function getBlockEntity(x: number, y: number, z: number, getServerSideEntity: boolean): table;

  //-Gets the biome at these coordinates
  //-@param x integer | number The x position
  //-@param y integer | number The y position
  //-@param z integer | number The z position
  //-@return Biome biome The biome information
  function getBiome(x: number, y: number, z: number): Biome;

  //-Gets the color that would show on a minecraft map
  //-@param x integer | number The x position
  //-@param y integer | number The y position
  //-@param z integer | number The z position
  //-@return integer r The red part of the color
  //-@return integer g The green part of the color
  //-@return integer b The blue part of the color
  //-@return integer a The opacity part of the color
  function getMapColor(x: number, y: number, z: number): LuaMultiReturn<[number, number, number, number]>;

  //-Casts a ray in the world between two points
  //-Traces a line in the world hoping or not to hit a block
  //-@param startX number The x start position
  //-@param startY number The y start position
  //-@param startZ number The y start position
  //-@param endX number the x end position, where are we going
  //-@param endY number the y end position, where are we going
  //-@param endZ number the z end position, where are we going
  //-@return RaycastInfo hit The result of the raycast
  //function raycast(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): RaycastInfo

  //-Casts a ray in the world between two points
  //-Traces a line in the world hoping or not to hit a block
  //-@param startX number The x start position
  //-@param startY number The y start position
  //-@param startZ number The y start position
  //-@param endX number the x end position, where are we going
  //-@param endY number the y end position, where are we going
  //-@param endZ number the z end position, where are we going
  //-@param maxDistance integer (default: distance between start and stop) Maximum distance to travel before giving up (lower values can make no hit waste less time)
  //-@return RaycastInfo hit The result of the raycast
  //function raycast(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, maxDistance: number): RaycastInfo

  //-Casts a ray in the world between two points
  //-Traces a line in the world hoping or not to hit a block
  //-@param startX number The x start position
  //-@param startY number The y start position
  //-@param startZ number The y start position
  //-@param endX number the x end position, where are we going
  //-@param endY number the y end position, where are we going
  //-@param endZ number the z end position, where are we going
  //-@param maxDistance integer (default: distance between start and stop) Maximum distance to travel before giving up (lower values can make no hit waste less time)
  //-@param hitLiquid boolean (default: false) If don't want to go through liquid make this true
  //-@return RaycastInfo hit The result of the raycast
  //function raycast(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, maxDistance: number, hitLiquid: boolean): RaycastInfo

  //-Casts a ray in the world between two points
  //-Traces a line in the world hoping or not to hit a block
  //-@param startX number The x start position
  //-@param startY number The y start position
  //-@param startZ number The y start position
  //-@param endX number the x end position, where are we going
  //-@param endY number the y end position, where are we going
  //-@param endZ number the z end position, where are we going
  //-@param maxDistance integer (default: distance between start and stop) Maximum distance to travel before giving up (lower values can make no hit waste less time)
  //-@param hitLiquid boolean (default: false) If don't want to go through liquid make this true
  //-@param solidBlocksOnly boolean (default: true) Will ignore things like grass, flowers, etc that you can walk through
  //-@return RaycastInfo hit The result of the raycast
  //function raycast(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, maxDistance: number, hitLiquid: boolean, solidBlocksOnly: boolean): RaycastInfo

  //-Casts a ray in the world between two points
  //-Traces a line in the world hoping or not to hit a block
  //-@param startX number The x start position
  //-@param startY number The y start position
  //-@param startZ number The y start position
  //-@param endX number the x end position, where are we going
  //-@param endY number the y end position, where are we going
  //-@param endZ number the z end position, where are we going
  //-@param maxDistance integer (default: distance between start and stop) Maximum distance to travel before giving up (lower values can make no hit waste less time)
  //-@param hitLiquid boolean (default: false) If don't want to go through liquid make this true
  //-@param solidBlocksOnly boolean (default: true) Will ignore things like grass, flowers, etc that you can walk through
  //-@param fullBlocksOnly boolean (default: false) not certain, probably wont go through opened trapdoors and that kindof stuff
  //-@return RaycastInfo hit The result of the raycast
  function raycast(
    startX: number,
    startY: number,
    startZ: number,
    endX: number,
    endY: number,
    endZ: number,
    maxDistance?: number,
    hitLiquid?: boolean,
    solidBlocksOnly?: boolean,
    fullBlocksOnly?: boolean
  ): RaycastInfo;
}

