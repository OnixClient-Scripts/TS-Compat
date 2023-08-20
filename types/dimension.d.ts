declare interface LightPair {
  /** The light level caused by torches and stuff */
  readonly blockLight: number;
  /** The light level of the environement (will not adapt to time) */
  readonly skyLight: number;
}

declare interface Block {
  /** The numerical identifier of the block (changes with versions) */
  readonly id: number;
  /** The data of the block: example the color of the wool in a /setblock */
  readonly data: number;
  /** The name that would be used in /setblock */
  readonly name: string;
  /** The block state */
  readonly state: { [key: string]: any }
  /** Unique hash for the block (not including state) */
  readonly hash: number;
}

declare interface Biome {
  /** The numerical identifier of the biome (might change with versions) */
  readonly id: number;
  /** The name of the biome */
  readonly name: string;
  /** The temperature of the biome */
  readonly temperature: number;
  /** Can it snow in that biome */
  readonly snow: boolean;
  /** Can it rain in that biome */
  readonly canRain: boolean;
}

declare interface BiomeColorData {
  /** The color of the grass */
  readonly grass: ColorProperties;
  /** The color of the water */
  readonly water: ColorProperties;
}

declare interface RaycastInfo {
  /** The x position of the hit block */
  readonly x: number;
  /** The y position of the hit block */
  readonly y: number;
  /** The z position of the hit block */
  readonly z: number;
  /** The precise x position on the block where the hit happened */
  readonly px: number;
  /** The precise y position on the block where the hit happened */
  readonly py: number;
  /** The precise z position on the block where the hit happened */
  readonly pz: number;
  /** If the raycast hit an entity */
  readonly isEntity: boolean;
  /** If the raycast hit a block */
  readonly isBlock: boolean;
  /** What face of a block did the raycast hit */
  readonly blockFace: number;
}

/** @noSelf */
declare namespace dimension {
  /**
   * The numerical identifier of the dimension
   * 0 == Overworld
   * 1 == Nether
   * 2 == TheEnd
   * @returns {number} The dimension id of the current dimension
   */
  function id(): 0 | 1 | 2;

  /**
   * The name of the dimension
   * The default dimensions are:
   * "Overworld"
   * "Nether"
   * "TheEnd"
   * @returns {string}
   */
  function name(): "Overworld" | "Nether" | "TheEnd";

  /**
   * The time in the dimension
   * Ranges from 0 to 1, 0 is the start of the day 0.5 is night and 1 is the end of the day will wrap to 0
   * @return number time The current time in the dimension
   */
  function time(): number;

  /**
   * Will return true if it is currently raining
   * @returns {boolean} Is it raining right now?
   */
  function isRaining(): boolean;

  /**
   * Plays a sound at these coordinates
   * Will not work on 1.18.30+
   * @param {number} x The x position
   * @param {number} y The y position
   * @param {number} z The z position
   * @param {string} name any minecraft sounds: https://www.digminecraft.com/lists/sound_list_pe.php
   */
  function sound(x: number, y: number, z: number, name: string): void;

  /**
   * Gets the light levels of these coordinates
   * The highest between sky and block is the real brightness
   * note that as the sun goes down this number will not change
   * @param {number} x The x position
   * @param {number} y The y position
   * @param {number} z The z position
   * @returns {LightPair} The light level
   */
  function getBrightness(x: number, y: number, z: number): LightPair;

  /**
   * Gets the block at these coordinates
   * @param {number} x The x position
   * @param {number} y The y position
   * @param {number} z The z position
   * @returns {Block} The block information
   */
  function getBlock(x: number, y: number, z: number): Block;

  /**
   * Finds a block among the world
   * const [x, y, z] = result[0]
   * @param {string} name The name of the block
   * @param {number} blockData The data of the block
   * @param {number} radius The radius to search in (will be chunk aligned to then center of the chunk
   * @param {number} x The x center position
   * @param {number} y The y center position
   * @param {number} z The z center position
   * @returns {integer[][]} The block information
   */
  function findBlock(name: string, blockData?: number, radius?: number, x?: number, y?: number, z?: number): number[][] 

  /**
   * Finds a block among the world 
   * @param {number} x The x center position
   * @param {number} y The y center position
   * @param {number} z The z center position
   * @returns {BiomeColorData} colorData The color of the water and grass at this x,z
   */
  function getBiomeColor(x: number, y: number, z: number): BiomeColorData;

  /**
   * Gets the block entity nbt at these coordinates
   * @param {number} x The x position
   * @param {number} y The y position
   * @param {number} z The z position
   * @param {boolean?} getServerSideEntity Should we get the server one (unstable outside of the LocalServerUpdate event)
   * @return {table} The NBT of the block entity
   */
  function getBlockEntity(x: number, y: number, z: number, getServerSideEntity?: boolean): table;

  /**
   * Gets the biome at these coordinates
   * @param {number} x The x position
   * @param {number} y The y position
   * @param {number} z The z position
   * @return {Biome} The biome information
   */
  function getBiome(x: number, y: number, z: number): Biome;

  /**
   * Gets the color that would show on a minecraft map
   * @param {number} x The x position
   * @param {number} y The y position
   * @param {number} z The z position
   * r The red part of the color
   * g The green part of the color
   * b The blue part of the color
   * a The opacity part of the color
   * @returns {LuaMultiReturn<[number, number, number, number]>}
   */
  function getMapColor(x: number, y: number, z: number): LuaMultiReturn<[number, number, number, number]>;

  /**
   * Casts a ray in the world between two points
   * Traces a line in the world hoping or not to hit a block
   * @param {number} startX The x start position
   * @param {number} startY The y start position
   * @param {number} startZ The y start position
   * @param {number} endX the x end position, where are we going
   * @param {number} endY the y end position, where are we going
   * @param {number} endZ the z end position, where are we going
   * @param {number} maxDistance (default: distance between start and stop) Maximum distance to travel before giving up (lower values can make no hit waste less time)
   * @param {boolean} hitLiquid (default: false) If don't want to go through liquid make this true
   * @param {boolean} solidBlocksOnly (default: true) Will ignore things like grass, flowers, etc that you can walk through
   * @param {boolean} fullBlocksOnly (default: false) not certain, probably wont go through opened trapdoors and that kindof stuff
   * @return {RaycastInfo} The result of the raycast
   */
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
