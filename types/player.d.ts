/**
 * @class Skin
 */
//local _acp__Player_Skin = {}

/** @noSelf */
declare class Skin {
  /**
   * Gives you the skin id (you should be able to just check id or fullid to see if player changed skin)
   * @returns {string} skinId skin The skin identifier
   */
  public id(): string;

  /**
   * Gives you the skin id (but sometimes longer)  (you should be able to just check id or fullid to see if player changed skin)
   * @returns {string} fullSkinId The full skin identifier (sometimes larger than id)
   */
  public fullId(): string;

  /**
   * Gives you the cape id (you should be able to just check capeId to see if player has changed cape)
   * @returns {string} capeid The cape identifier
   */
  public capeId(): string;

  /**
   * Tells you if the skin has a cape or no
   * @returns {boolean} hasCape If this skin has a cape
   */
  public hasCape(): boolean;

  /**
   * Saves the skin's texture into a file
   * @param {string} FilePath The path to save the texture to
   * @returns {boolean} HasSaved If the skin saved or no
   */
  public save(FilePath: string): boolean;

  /**
   * Saves the cape's texture into a file (check if present with hasCape)
   * @param {string} FilePath The path to save the texture to
   * @returns {boolean} HasSaved If the cape saved or no
   */
  public saveCape(FilePath: string): boolean;

  /**
   * Gets you the skin geometry
   * @returns {string} geometry Json skin geometry
   */
  public geometry(): string;

  /**
   * Gets the skin texture as a gfx2 texture dont have to write to disk
   * this function is slow, well faster than disk but as its convenient to call it every frame, DONT
   * @returns {Gfx2Texture} texture The skins gfx2 texture
   */
  public texture(): gfx2.Gfx2Texture;

  /**
   * Gets the cape texture as a gfx2 (check if present with hasCape) texture dont have to write to disk
   * this function is slow, well faster than disk but as its convenient to call it every frame, DONT
   * @returns {Gfx2Texture} texture The skins gfx2 texture
   */
  public capeTexture(): gfx2.Gfx2Texture;
}

/**
 * @class player
 */
//player = {}

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
   * @returns {number} gamemode The player's current gamemode
   */
  function gamemode(): number;

  /**
   * The position of the player
   * @returns {number} x The player's current position
   * @returns {number} y The player's current position
   * @returns {number} z The player's current position
   */
  function position(): LuaMultiReturn<[number, number, number]>;

  /**
   * The precise position of the player
   * @returns {number} x The player's current precise position
   * @returns {number} y The player's current precise position
   * @returns {number} z The player's current precise position
   */
  function pposition(): LuaMultiReturn<[number, number, number]>;

  /**
   * The position at a chosen distance from the player
   * @param {number} distance How much distance in front of the player to go?
   * @returns {number} x The position at distance of the player
   * @returns {number} y The position at distance of the player
   * @returns {number} z The position at distance of the player
   */
  function forwardPosition(distance: number): LuaMultiReturn<[number, number, number]>;

  /**
   * The coordinates of the block that has the outline for the player
   * You can check if there is one in the first place with player.facingBlock()
   * @returns {number} x Selected block position
   * @returns {number} y Selected block position
   * @returns {number} z Selected block position
   */
  function selectedPos(): LuaMultiReturn<[number, number, number]>;

  /**
   * The block face of the currently selected block
   * You can check if there is one in the first place with player.facingBlock()
   * @returns {number} selectedFace The face of the block the user is currently looking at
   */
  function selectedFace(): number;

  /**
   * The progress for the selected block to be broken (0.0 to 1.0)
   * @returns {number} progress The progress
   */
  function breakProgress(): number;

  /**
   * @class SelectedEntityInfo
   * @field type string The type of entity, example "player"
   * @field fullType string The full type of entity, example "minecraft:player"
   * @field nametag string The name of the entity
   * @field username string|nil The username of the entity, players only
   * @field yaw number The yaw viewing angle of the entity
   * @field pitch number The pitch viewing angle of the entity
   * @field x number The X position of the entity
   * @field y number The Y position of the entity
   * @field z number The Z position of the entity
   * @field ppx number The precise X position of the entity
   * @field ppy number The precise Y position of the entity
   * @field ppz number The precise Z position of the entity
   * @field vx number The X velocity of the entity
   * @field vy number The Y velocity of the entity
   * @field vz number The Z velocity of the entity
   * @noSelf
   */
  class SelectedEntityInfo {
    public type: string;
    public fullType: string;
    public nametag: string;
    public username: string;
    public yaw: number;
    public pitch: number;
    public x: number;
    public y: number;
    public z: number;
    public ppx: number;
    public ppy: number;
    public ppz: number;
    public vx: number;
    public vy: number;
    public vz: number;

    /**
     * The player skin
     * @returns {Skin} skin
     */
    public skin(): Skin;
  }
  //local _acp__SelectedEntityInfo_Skin = {}

  /**
   * The entity the user is currently looking at
   * You can check if there is one in the first place with player.facingEntity()
   * @returns {SelectedEntityInfo} entity The entity the user is looking at
   */
  function selectedEntity(): SelectedEntityInfo;

  /**
   * Where the raytrace hit, example: you look at a block far away, where on that block are you looking at
   * @returns {number} x The precise X position of the selected block
   * @returns {number} y The precise Y position of the selected block
   * @returns {number} z The precise Z position of the selected block
   */
  function lookingPos(): LuaMultiReturn<[number, number, number]>;

  /**
   * Where the player looks at
   * @returns {number} yaw The current yaw rotation
   * @returns {number} pitch The current pitch rotation
   */
  function rotation(): LuaMultiReturn<[number, number]>;

  /**
   * Where the players body looks at
   * @returns {number} yaw The current yaw rotation
   */
  function bodyRotation(): number;

  /**
   * What perspective the player is in
   * 0 == First Person(first person, third person back, third person front)
   * 1 == Third Person Back
   * 2 == Third Person Front
   * @returns {number} perspective The perspective
   */
  function perspective(): number;

  /**
   * If the player is currently facing an entity within reach
   * @returns {boolean} facingEntity Whether the player is looking at an entity or not
   */
  function facingEntity(): boolean;

  /**
   * If the player is currently facing a block within reach
   * @returns {boolean} facingBlock Whether the player is looking at a block or not
   */
  function facingBlock(): boolean;

  /**
   * The xbox pro gamering tag
   * @returns {string} xboxName The xbox username of the user
   */
  function name(): string;

  /**
   * empty without server modification(s)
   * @returns {string} nametag The nametag of the user
   */
  function nametag(): string;

  /**
   * Returns if  true if the flag is true...
   * 0: on fire
   * 1: is sneaking
   * 2: riding an entity
   * 3: sprinting
   * 4: using an item
   * 5: invisible (example: potion)
   * 14: can show nametag
   * 15: always show nametag
   * 16: immobile (when player is dead or unable to move)
   * 19: can climb (if the player can use ladders)
   * 32: gliding with elytra
   * 38: if player is moving
   * 39: if player is breathing
   * 47: has collision with other entities
   * 48: has gravity
   * 49: immune to fire/lava damage
   * 52: returning loyalty trident
   * 55: doing spin attack with riptide trident
   * 56: swimming
   * 68: inside a scaffolding block
   * 69: on top of a scaffolding block
   * 70: falling through a scaffolding block
   * 71: blocking (using shield or riding a horse? confused about how this one gets triggered)
   * 72: transition blocking (same idea as 71)
   * 73: blocked from entity using a shield
   * 74: blocked from entity using a damaged shield (why does this exist?)
   * 75: sleeping
   * 88: if the player should render when they have the invisibility status effect
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
   * @class Effect
   * @field duration number How long the effect will last in seconds
   * @field level number How strong the effect will be: ex Strength II
   * @field id number The numerical identifier of the effect
   * @field effectTimeText string The formated text of the time remaining (ex: 6:45)
   * @field name string The name of the effect ex: night_vision
   * @field visualName string The visual name ex: Night Vision II
   */

  type Effect = any;

  /**
   * @returns {Effect[]} effects The list of effects
   */
  function effects(): Effect[];

  interface AttributeNames {
    [2]: "minecraft:player.hunger";
    [3]: "minecraft:player.saturation";
    [4]: "minecraft:player.exhaustion";
    [5]: "minecraft:player.level";
    [6]: "minecraft:player.experience";
    [7]: "minecraft:health";
    [8]: "minecraft:follow_range";
    [9]: "minecraft:knockback_resistance";
    [10]: "minecraft:movement";
    [11]: "minecraft:underwater_movement";
    [12]: "minecraft:lava_movement";
    [13]: "minecraft:attack_damage";
    [14]: "minecraft:absorption";
    [15]: "minecraft:luck";
  }

  /**
   * @class AttributeListHolder
   * @field size number
   * @noSelf
   */
  class AttributeListHolder {
    public size: number;

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
    public name<ID extends keyof AttributeNames>(attribute_name: AttributeNames[ID]): Attribute<ID>;

    /**
     * Gets the attribute with its id or nil
     * Attribute ids
     * 2: Hunger
     * 3: Saturation
     * 4: Exhaustion
     * 5: Level
     * 6: Experience
     * 7: Health
     * 8: Follow Range
     * 9: Knockback Resistance
     * 10: Movement Speed
     * 11: Underwater Speed
     * 12: Lava Speed
     * 13: Attack Damage
     * 14: Absorption
     * 15: Luck
     * @param {number} attribute_id The attribute id
     * @returns {Attribute|nil} attribute Probably the attribute, but it could be nil.
     */
    public id<ID extends keyof AttributeNames>(attribute_id: ID): Attribute<ID> | void;

    /**
     * Gets the attribute at this position in the list or nil
     *  --you can iterate trough all of them by doing this:
     * for i,attributes.size do
     * 	print(attributes.at(i).id .. ": " .. attributes.at(i).name)
     *;
     * @param {number} position
     * @returns {Attribute | nil} attribute Probably the attribute, but it could be nil.
     */
    public at(position: number): Attribute<keyof AttributeNames> | void;
  }
  //local _acp_AttributeListHolder = {}

  /**
   * @class Attribute
   * @field name string The name of the attribute
   * @field id number The numerical identifier of the attribute
   * @field value number The value of the attribute
   * @field default number The default value of the attribute
   * @field min number The minimum value of the attribute
   * @field max number The maximum value of the attribute
   */
  class Attribute<ID extends keyof AttributeNames> {
    public name: AttributeNames[ID];
    public id: ID;
    public value: number;
    public default: number;
    public min: number;
    public max: number;
  }

  /**
   * Gets the attributes
   * @returns {AttributeListHolder} attributes The attributes
   */
  function attributes(): AttributeListHolder;

  /**
   * @class Enchants
   * @field id number The numerical identifier ex: 9
   * @field level number the level, ex: 1
   * @field name string The name (like in /enchant) ex: sharpness
   */
  class Enchants {
    public id: number;
    public level: number;
    public name: string;
  }

  //local _acp_Enchants = {}

  /**
   * @class Item
   * @field count number The amount of items in this stack
   * @field location number dont touch this dont guess it use it when referencing an item to client functions
   * @field id number The runtime numerical identifier of the item, will change often use for runtime only
   * @field blockid number The runtime numerical identifier of the block assosiated with the item, will change often use for runtime only
   * @field name string The name of the item  ex: diamond_sword
   * @field blockname string The name of the block assosiated with the item  ex: carrots
   * @field maxStackCount number The maximum amount of this item that can be stacked
   * @field maxDamage number The maximum durability of an item
   * @field durability number The amount of damage applied to that item
   * @field data number The data of the item, like in /give with dye and things like that
   * @field customName string The name (ex: from anvils)
   * @field enchant Enchants[] The item's enchantements
   */
  class Item {
    public count: number;
    public location: number;
    public id: number;
    public blockid: number;
    public name: string;
    public blockname: string;
    public maxStackCount: number;
    public maxDamage: number;
    public durability: number;
    public data: number;
    public customName: string;
    public enchant: Enchants[];
  }

  /**
   * @class InventoryArmor
   * @field helmet Item|nil the item on the head
   * @field chestplate Item|nil the item on the torso
   * @field leggings Item|nil the item on the legs
   * @field boots Item|nil the item on the feets
   */
  class InventoryArmor {
    public helmet: Item | void;
    public chestplate: Item | void;
    public leggings: Item | void;
    public boots: Item | void;
  }

  /**
   * @class Inventory
   * @field size number The size of the inventory
   * @field selected number The selected slot in the inventory (hotbar)
   */
  class Inventory {
    public size: number;
    public selected: number;

    /**
     * The armor inventory
     * @returns {InventoryArmor} armorInventory The armor the player is wearing
     */
    public armor(): InventoryArmor;

    /**
     * The item in the second hand
     * @returns {Item|nil} offhand The item in the offhand
     */
    public offhand(): Item | void;

    /**
     * The item in slot or nil
     * @param {number} slot The inventory slot
     * @returns {Item|nil} item The item if present otherwise nil for air
     */
    public at(slot: number): Item | void;

    /**
     * Changes the player's slot
     * @param {number} slot Which slot should be the selected slot now?
     */
    public setSelectedSlot(slot: number): void;

    /**
     *  Which slot to access, slots are listed below
     *  1 = Inventory Holding
     *  2 = Anvil Input
     *  3 = Anvil Material
     *  4 = Stone Cutter Input
     *  5 = Trade2 Ingredient 1
     *  6 = Trade2 Ingredient 2
     *  7 = Trade Ingredient 1
     *  8 = Trade Ingredient 2
     *  10 = Loom Input
     *  11 = Loom Dye
     *  12 = Loom Material
     *  13 = Cartography Input
     *  14 = Cartography Additional
     *  15 = Enchanting Input
     *  16 = Enchanting Material
     *  17 = Grindstone Input
     *  18 = Grindstone Additional
     *  28 = BeaconPayment
     *  29 = Crafting 2x2 Input 1
     *  30 = Crafting 2x2 Input 2
     *  31 = Crafting 2x2 Input 3
     *  32 = Crafting 2x2 Input 4
     *
     *  33 = Crafting 3x3 Input 1
     *  34 = Crafting 3x3 Input 2
     *  35 = Crafting 3x3 Input 3
     *  36 = Crafting 3x3 Input 4
     *  37 = Crafting 3x3 Input 5
     *  38 = Crafting 3x3 Input 6
     *  39 = Crafting 3x3 Input 7
     *  40 = Crafting 3x3 Input 8
     *  41 = Crafting 3x3 Input 9
     *  51 = CreatedItemOutput
     * @param {number} slot
     * @returns {Item|nil}
     */
    public ui(slot: number): Item | void;
  }

  //local _acp_Inventory = {}

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
