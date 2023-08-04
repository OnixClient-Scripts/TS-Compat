//@class server
//server = {}

/**
   * @class Objective
   * @field name string The name of the objective
   * @field displayName string The display/pretty name of the objective
   * @field scores table The scores, keys are the name of the holder and the value is the score
   */
declare class Objective {
  public name: string;
  public displayName: string;
  public scores: table;
}

/**
 * @class DisplayObjective : Objective
 * @field isDescendingOrder boolean If the objective is sorted in descending order (big boy first)
 */
declare class DisplayObjective extends Objective {
  public isDescendingOrder: boolean;
}

declare class Scoreboard {
  /**
   * Gives you the display objective for that location
   * @param place "sidebar" | "belowname" | "list"
   */
  public getDisplayObjective(place: "sidebar" | "belowname" | "list"): DisplayObjective;

  /**
   * Gives you the display objective for that location
   * Note: that its not it's not guaranteed you will get anything beyond the display ones.
   * @param name The name of the objective (not the display name)
   * @returns {Objective} objective The objective or nil if it was not found
   */
  public getObjective(name: string): Objective | void;

  /**
   * Gives you the display objective for that location
   * Note: that its not it's not guaranteed you will get anything beyond the display ones.
   * @returns {Objective[]} objectives The objectives
   */
  public getObjectives(): Objective[];

  /**
   * Gives you the display objective for that location
   * Note: that its not it's not guaranteed you will get anything beyond the display ones.
   * @returns {string[]} objectives The objective names
   */
  public getObjectiveNames(): string[];
}

declare namespace server {
  /**
   * The current ip the user is connected to
   * @returns {string} ip The current ip the user is connected to
   */
  function ipConnected(): string;

  /**
   * The ip that you used to join the server
   * @returns {string} ip The ip used to join the server
   */
  function ip(): string;

  /**
   * The port
   * @returns {number} integer port The current server port
   */
  function port(): number;

  /**
   * The name of the world (whats in top right in pause screen)
   * @returns {string} name The world name
   */
  function worldName(): string;

  /**
   * The name of everyone in the pause menu
   * example of usage:
   * for _, playerName in pairs(server.players()) do
   *
   * end
   * @returns {string[]} playernames The name of everybody in the playerlist (same as pause menu)
   */
  function players(): string[];

  /**
   * Gets you the server scoreboard
   * @return {Scoreboard} scoreboard The scoreboard
   */
  function scoreboard(): Scoreboard;
}
