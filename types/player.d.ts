/** @noSelf */
declare interface Skin {
  /**
   * Gives you the skin id (you should be able to just check id or fullid to see if player changed skin)
   * @returns {string} skin The skin identifier
   */
  id(): string;

  /**
   * Gives you the skin id (but sometimes longer)  (you should be able to just check id or fullid to see if player changed skin)
   * @returns {string} The full skin identifier (sometimes larger than id)
   */
  fullId(): string;

  /**
   * Gives you the cape id (you should be able to just check capeId to see if player has changed cape)
   * @returns {string} The cape identifier
   */
  capeId(): string;

  /**
   * Tells you if the skin has a cape or no
   * @returns {boolean} If this skin has a cape
   */
  hasCape(): boolean;

  /**
   * Saves the skin's texture into a file
   * @param {string} FilePath The path to save the texture to
   * @returns {boolean} If the skin saved or no
   */
  save(FilePath: string): boolean;

  /**
   * Saves the cape's texture into a file (check if present with hasCape)
   * @param {string} FilePath The path to save the texture to
   * @returns {boolean} If the cape saved or no
   */
  saveCape(FilePath: string): boolean;

  /**
   * Gets you the skin geometry
   * @returns {string} Json skin geometry
   */
  geometry(): string;

  /**
   * Gets the skin texture as a gfx2 texture dont have to write to disk
   * this function is slow, well faster than disk but as its convenient to call it every frame, DONT
   * @returns {Gfx2Texture} The skins gfx2 texture
   */
  texture(): Gfx2Texture;

  /**
   * Gets the cape texture as a gfx2 (check if present with hasCape) texture dont have to write to disk
   * this function is slow, well faster than disk but as its convenient to call it every frame, DONT
   * @returns {Gfx2Texture} The skins gfx2 texture
   */
  capeTexture(): Gfx2Texture;
}

/** @noSelf */
declare interface PlayerSkin extends Skin {
  /**
   * Changes the skin of the player
   * @param {string|Gfx2Texture} skinTextureOrFilepath The skin texture or the path to the skin texture.
   * @param {boolean?} isLocal If the skin change is client sided or a proper skin change (server sided)
   */
  setSkin(skinTextureOrFilepath: string | Gfx2Texture, isLocal?: boolean): void;

  /**
   * Changes the cape of the player
   * @param {string|Gfx2Texture} capeTextureOrFilepath The cape texture or the path to the cape texture.
   * @param {boolean?} isLocal If the cape change is client sided or a proper cape change (server sided)
   */
  setCape(capeTextureOrFilepath: string | Gfx2Texture, isLocal?: boolean): void;

  /**
   * Changes the geometry of the player
   * @param {string} geometry The geometry data of the player
   * @param {string} geometryName The name of the geometry among the geometryData
   * @param {boolean?} isLocal If the geometry change is client sided or a proper geometry change (server sided)
   */
  setGeometry(geometry: string, defaultGeometryName: string, geometryName: string, isLocal?: boolean): void;

  /**
   * Changes the skin and cape of the player
   * @param {string|Gfx2Texture} skinTextureOrFilepath The skin texture or the path to the skin texture.
   * @param {string|Gfx2Texture|undefined} capeTextureOrFilepath The cape texture or the path to the cape texture, nil to remove the cape.
   * @param {boolean?} isLocal If the skin and cape change is client sided or a proper skin and cape change (server sided)
   */
  setSkinCape(
    skinTextureOrFilepath: string | Gfx2Texture,
    capeTextureOrFilepath?: string | Gfx2Texture,
    isLocal?: boolean
  ): void;

  /**
   * Changes the skin the cape and the geometry of the player.
   * @param {string|Gfx2Texture} skinTextureOrFilepath The skin texture or the path to the skin texture.
   * @param {string|Gfx2Texture|undefined} capeTextureOrFilepath The cape texture or the path to the cape texture, nil to remove the cape.
   * @param {string?} geometry The geometry data of the player
   * @param {string?} geometryName The name of the geometry among the geometryData
   * @param {boolean?} isLocal If the skin cape and geometry change is client sided or a proper skin cape and geometry change (server sided)
   */
  setSkinCapeGeometry(
    skinTextureOrFilepath: string | Gfx2Texture,
    capeTextureOrFilepath?: string | Gfx2Texture,
    geometry?: string,
    defaultGeometryName?: string,
    geometryName?: string,
    isLocal?: boolean
  ): void;

  /**
   * Changes the skin the cape and the geometry of the player aswell as the id of the skin.
   * @param {string} id The skin id
   * @param {string} fullId the full string id
   * @param {string|Gfx2Texture} skinTextureOrFilepath The skin texture or the path to the skin texture.
   * @param {string|Gfx2Texture|undefined} capeTextureOrFilepath The cape texture or the path to the cape texture, nil to remove the cape.
   * @param {string?} geometry The geometry data of the player
   * @param {string?} geometryName The name of the geometry among the geometryData
   * @param {boolean?} isLocal If the skin cape geometry and id change is client sided or a proper skin cape geometry and id change (server sided)
   */
  setSkinCapeGeometryId(
    id: string,
    fullId: string,
    skinTextureOrFilepath: string | Gfx2Texture,
    capeTextureOrFilepath?: string | Gfx2Texture,
    geometry?: string,
    defaultGeometryName?: string,
    geometryName?: string,
    isLocal?: boolean
  ): void;
}

 /** @noSelf */
declare interface SelectedEntityInfo {
  /** The type of entity, example "player" */
  readonly type: string;
  /** The full type of entity, example "minecraft:player" */
  readonly fullType: string;
  /** The name of the entity */
  readonly nametag: string;
  /** The username of the entity, players only */
  readonly username?: string;
  /** The yaw viewing angle of the entity */
  readonly yaw: number;
  /** The pitch viewing angle of the entity */
  readonly pitch: number;
  /** The X position of the entity */
  readonly x: number;
  /** The Y position of the entity */
  readonly y: number;
  /** The Z position of the entity */
  readonly z: number;
  /** The precise X position of the entity */
  readonly ppx: number;
  /** The precise Y position of the entity */
  readonly ppy: number;
  /** The precise Z position of the entity */
  readonly ppz: number;
  /** The X velocity of the entity */
  readonly vx: number;
  /** The Y velocity of the entity */
  readonly vy: number;
  /** The Z velocity of the entity */
  readonly vz: number;

  /**
   * The player skin
   * @returns {Skin} skin
   */
  skin(): Skin;
}

declare interface Enchants {
  /** The numerical identifier ex: 9 */
  readonly id: number;
  /** the level, ex: 1 */
  readonly level: number;
  /** The name (like in /enchant) ex: sharpness */
  readonly name: string;
}

/**
   * @class Item
   * @field count number
   * @field location number
   * @field id number
   * @field blockid number
   * @field name string
   * @field blockname string
   * @field maxStackCount number
   * @field maxDamage number
   * @field durability number
   * @field data number
   * @field customName string
   * @field enchant Enchants
   */
declare interface Item {
  /** The amount of items in this stack */
  readonly count: number;
  /** dont touch this dont guess it use it when referencing an item to client functions */
  readonly location: number;
  /** The runtime numerical identifier of the item, will change often use for runtime only */
  readonly id: number;
  /** The runtime numerical identifier of the block assosiated with the item, will change often use for runtime only */
  readonly blockid: number;
  /** The name of the item  ex: diamond_sword */
  readonly name: string;
  /** The name of the block assosiated with the item  ex: carrots */
  readonly blockname: string;
  /** The state of the block assosiated with the item */
  readonly blockstate: table;
  /** The maximum amount of this item that can be stacked */
  readonly maxStackCount: number;
  /** The maximum durability of an item */
  readonly maxDamage: number;
  /** The amount of damage applied to that item */
  readonly durability: number;
  /** The data of the item, like in /give with dye and things like that */
  readonly data: number;
  /** The name (ex: from anvils) */
  readonly customName: string;
  /** The item's enchantements */
  readonly enchant: Enchants[];
}

declare interface InventoryArmor {
  /** the item on the head */
  readonly helmet: Item | void;
  /** the item on the torso */
  readonly chestplate: Item | void;
  /** the item on the legs */
  readonly leggings: Item | void;
  /** the item on the feets */
  readonly boots: Item | void;
}

/** @noSelf */
declare interface Inventory {
  /** The size of the inventory */
  readonly size: number;
  /** The selected slot in the inventory (hotbar) */
  readonly selected: number;

  /**
   * The armor inventory
   * @returns {InventoryArmor} armorInventory The armor the player is wearing
   */
  armor(): InventoryArmor;

  /**
   * The item in the second hand
   * @returns {Item | void} offhand The item in the offhand
   */
  offhand(): Item | void;

  /**
   * The item in slot or nil
   * @param {number} slot The inventory slot
   * @returns {Item | void} item The item if present otherwise nil for air
   */
  at(slot: number): Item | void;

  /**
   * Changes the player's slot
   * @param {number} slot Which slot should be the selected slot now?
   */
  setSelectedSlot(slot: number): void;

  /**
   *  Which slot to access, slots are listed below
   * -----
   *  - 1 = Inventory Holding
   * -----
   *  - 2 = Anvil Input
   *  - 3 = Anvil Material
   * -----
   *  - 4 = Stone Cutter Input
   * -----
   *  - 5 = Trade2 Ingredient 1
   *  - 6 = Trade2 Ingredient 2
   * -----
   *  - 7 = Trade Ingredient 1
   *  - 8 = Trade Ingredient 2
   * -----
   *  - 10 = Loom Input
   *  - 11 = Loom Dye
   *  - 12 = Loom Material
   * -----
   *  - 13 = Cartography Input
   *  - 14 = Cartography Additional
   * -----
   *  - 15 = Enchanting Input
   *  - 16 = Enchanting Material
   * -----
   *  - 17 = Grindstone Input
   *  - 18 = Grindstone Additional
   * -----
   *  - 28 = BeaconPayment
   * -----
   *  - 29 = Crafting 2x2 Input 1
   *  - 30 = Crafting 2x2 Input 2
   *  - 31 = Crafting 2x2 Input 3
   *  - 32 = Crafting 2x2 Input 4
   * -----
   *  - 33 = Crafting 3x3 Input 1
   *  - 34 = Crafting 3x3 Input 2
   *  - 35 = Crafting 3x3 Input 3
   *  - 36 = Crafting 3x3 Input 4
   *  - 37 = Crafting 3x3 Input 5
   *  - 38 = Crafting 3x3 Input 6
   *  - 39 = Crafting 3x3 Input 7
   *  - 40 = Crafting 3x3 Input 8
   *  - 41 = Crafting 3x3 Input 9
   * -----
   *  - 51 = CreatedItemOutput
   * -----
   * @param {number} slot
   * @returns {Item | void}
   */
  ui(slot: number): Item | void;
}

declare interface Effect {
  /** How long the effect will last in seconds */
  readonly duration: number;
  /** How strong the effect will be: ex Strength II */
  readonly level: number;
  /** The numerical identifier of the effect */
  readonly id: number;
  /** The formated text of the time remaining (ex: 6:45) */
  readonly effectTimeText: string;
  /** The name of the effect ex: night_vision   */
  readonly name: string;
  /** The visual name ex: Night Vision II */
  readonly visualName: string;
}

/** @noSelf */
declare namespace player {
  /**
   * The current gamemode of the player
   * 0 = Survival
   * 1 = Creative
   * 2 = Adventure
   * 3 = SurvivalViewer
   * 4 = CreativeViewer
   * 5 = Default
   * @returns {number} The player's current gamemode
   */
  function gamemode(): 0 | 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * The position of the player
   * @returns {LuaMultiReturn<[number, number, number]>} The player's current position
   */
  function position(): LuaMultiReturn<[number, number, number]>;

  /**
   * The precise position of the player
   * @returns {LuaMultiReturn<[number, number, number]>} The player's current precise position
   */
  function pposition(): LuaMultiReturn<[number, number, number]>;

  /**
   * The position at a chosen distance from the player
   * @param {number} distance How much distance in front of the player to go?
   * @returns {LuaMultiReturn<[number, number, number]>} The position at distance of the player
   */
  function forwardPosition(distance: number): LuaMultiReturn<[number, number, number]>;

  /**
   * The coordinates of the block that has the outline for the player
   * You can check if there is one in the first place with player.facingBlock()
   * @returns {LuaMultiReturn<[number, number, number]>} Selected block position
   */
  function selectedPos(): LuaMultiReturn<[number, number, number]>;

  /**
   * The block face of the currently selected block
   * You can check if there is one in the first place with player.facingBlock()
   * @returns {number} The face of the block the user is currently looking at
   */
  function selectedFace(): number;

  /**
   * The progress for the selected block to be broken (0.0 to 1.0)
   * @returns {number} The progress
   */
  function breakProgress(): number;

  /**
   * The entity the user is currently looking at
   * You can check if there is one in the first place with player.facingEntity()
   * @returns {SelectedEntityInfo} entity The entity the user is looking at
   */
  function selectedEntity(): SelectedEntityInfo;

  /**
   * Where the raytrace hit, example: you look at a block far away, where on that block are you looking at
   * @returns {LuaMultiReturn<[number, number, number]>} The precise Z position of the selected block
   */
  function lookingPos(): LuaMultiReturn<[number, number, number]>;

  /**
   * Where the player looks at
   * @returns {LuaMultiReturn<[number, number, number]>} yaw, pitch: The current yaw and pitch rotations
   */
  function rotation(): LuaMultiReturn<[number, number]>;

  /**
   * Where the players body looks at
   * @returns {number} The current yaw rotation
   */
  function bodyRotation(): number;

  /**
   * What perspective the player is in
   * 0 == First Person(first person, third person back, third person front)
   * 1 == Third Person Back
   * 2 == Third Person Front
   * @returns {number} The perspective
   */
  function perspective(): 0 | 1 | 2;

  /**
   * If the player is currently facing an entity within reach
   * @returns {boolean} Whether the player is looking at an entity or not
   */
  function facingEntity(): boolean;

  /**
   * If the player is currently facing a block within reach
   * @returns {boolean} Whether the player is looking at a block or not
   */
  function facingBlock(): boolean;

  /**
   * The xbox pro gamering tag
   * @returns {string} The xbox username of the user
   */
  function name(): string;

  /**
   * empty without server modification(s)
   * @returns {string} The nametag of the user
   */
  function nametag(): string;

  /**
   * Returns if  true if the flag is true...
   * - 0: on fire
   * - 1: is sneaking
   * - 2: riding an entity
   * - 3: sprinting
   * - 4: using an item
   * - 5: invisible (example: potion)
   * - 14: can show nametag
   * - 15: always show nametag
   * - 16: immobile (when player is dead or unable to move)
   * - 19: can climb (if the player can use ladders)
   * - 32: gliding with elytra
   * - 38: if player is moving
   * - 39: if player is breathing
   * - 47: has collision with other entities
   * - 48: has gravity
   * - 49: immune to fire/lava damage
   * - 52: returning loyalty trident
   * - 55: doing spin attack with riptide trident
   * - 56: swimming
   * - 68: inside a scaffolding block
   * - 69: on top of a scaffolding block
   * - 70: falling through a scaffolding block
   * - 71: blocking (using shield or riding a horse? confused about how this one gets triggered)
   * - 72: transition blocking (same idea as 71)
   * - 73: blocked from entity using a shield
   * - 74: blocked from entity using a damaged shield (why does this exist?)
   * - 75: sleeping
   * - 88: if the player should render when they have the invisibility status effect
   *
   * Do note that status flags are sent by the SERVER.
   * Thus, many custom servers may only send essential flags such as on fire or sneaking.
   * However, more niche flags are expected to be sent by the vanilla bedrock server.
   * The other status flags do not apply to players and are thus omitted from the documentation (for now)
   * @param {number} flag The flag to check
   * @returns {boolean} flag Whether the flag is on/off
   */
  function getFlag(flag: number): boolean;

  /**
   * @returns {Effect[]} effects The list of effects
   */
  function effects(): Effect[];

  interface AttributeNames {
    [1]: "minecraft:player.hunger";
    [2]: "minecraft:player.saturation";
    [3]: "minecraft:player.exhaustion";
    [4]: "minecraft:player.level";
    [5]: "minecraft:player.experience";
    [6]: "minecraft:health";
    [7]: "minecraft:follow_range";
    [8]: "minecraft:knockback_resistance";
    [9]: "minecraft:movement";
    [10]: "minecraft:underwater_movement";
    [11]: "minecraft:lava_movement";
    [12]: "minecraft:attack_damage";
    [13]: "minecraft:absorption";
    [14]: "minecraft:luck";
  }
  interface AttributeIDs {
    "minecraft:player.hunger": 1;
    "minecraft:player.saturation": 2;
    "minecraft:player.exhaustion": 3;
    "minecraft:player.level": 4;
    "minecraft:player.experience": 5;
    "minecraft:health": 6;
    "minecraft:follow_range": 7;
    "minecraft:knockback_resistance": 8;
    "minecraft:movement": 9;
    "minecraft:underwater_movement": 10;
    "minecraft:lava_movement": 11;
    "minecraft:attack_damage": 12;
    "minecraft:absorption": 13;
    "minecraft:luck": 14;
  }

  /** @noSelf */
  interface AttributeListHolder {
    readonly size: number;

    /**
     * Gets the attribute with this name or nil
     * Attribute Names
     * "minecraft:player.hunger"
     * "minecraft:player.saturation"
     * "minecraft:player.exhaustion"
     * "minecraft:player.level"
     * "minecraft:player.experience"
     * "minecraft:health"
     * "minecraft:follow_range"
     * "minecraft:knockback_resistance"
     * "minecraft:movement"
     * "minecraft:underwater_movement"
     * "minecraft:lava_movement"
     * "minecraft:attack_damage"
     * "minecraft:absorption"
     * "minecraft:luck"
     *
     * @param {string} attribute_name | '"minecraft:player.hunger"' | "\"minecraft:player.saturation\"" | "\"minecraft:player.exhaustion\"" | "\"minecraft:player.level\"" | "\"minecraft:player.experience\"" | "\"minecraft:health\"" | "\"minecraft:follow_range\"" | "\"minecraft:knockback_resistance\"" | "\"minecraft:movement\"" | "\"minecraft:underwater_movement\"" | "\"minecraft:lava_movement\"" | "\"minecraft:attack_damage\"" | "\"minecraft:absorption\"" | "\"minecraft:luck\""
     * @returns {Attribute} attribute Probably the attribute, but it could be nil.
     */
    name<Name extends AttributeNames[keyof AttributeNames]>(attribute_name: Name): Attribute<Name>;

    /**
     * Gets the attribute with its id or nil
     * Attribute ids
     * 1: Hunger
     * 2: Saturation
     * 3: Exhaustion
     * 4: Level
     * 5: Experience
     * 6: Health
     * 7: Follow Range
     * 8: Knockback Resistance
     * 9: Movement Speed
     * 10: Underwater Speed
     * 11: Lava Speed
     * 12: Attack Damage
     * 13: Absorption
     * 14: Luck
     * @param {number} attribute_id The attribute id
     * @returns {Attribute|nil} attribute Probably the attribute, but it could be nil.
     */
    id<ID extends AttributeIDs[keyof AttributeIDs]>(attribute_id: ID): Attribute<ID> | void;

    /**
     * Gets the attribute at this position in the list or nil.
     * You can iterate trough all of them by doing this:
     * ```ts
     * for (let i = 0; i < attributes.size; i++) {
     * 	 print(attributes.at(i).id .. ": " .. attributes.at(i).name)
     * }
     * ```
     * @param {number} position
     * @returns {Attribute | nil} attribute Probably the attribute, but it could be nil.
     */
    at(position: number): Attribute<keyof AttributeIDs> | void;
  }

  interface Attribute<ID extends keyof AttributeNames | keyof AttributeIDs> {
    /** The name of the attribute */
    readonly name: ID extends keyof AttributeNames ? AttributeNames[ID] : ID;
    /** The numerical identifier of the attribute */
    readonly id: ID extends keyof AttributeIDs ? AttributeIDs[ID] : ID;
    /** The value of the attribute */
    readonly value: number;
    /** The default value of the attribute */
    readonly default: number;
    /** The minimum value of the attribute */
    readonly min: number;
    /** The maximum value of the attribute */
    readonly max: number;
  }

  /**
   * Gets the attributes
   * @returns {AttributeListHolder} attributes The attributes
   */
  function attributes(): AttributeListHolder;

  /**
   * Gets the contents of the players inventory
   * @returns {Inventory} inventory The player's inventory
   */
  function inventory(): Inventory;

  /**
   * Gets the player skin
   * @returns {Skin} skin The user's current skin
   */
  function skin(): Skin;
}
