declare interface Objective {
  /** The name of the objective */
  name: string;
  /** The display/pretty name of the objective */
  displayName: string;
  /** The scores, keys are the name of the holder and the value is the score */
  scores: table;
}

declare interface DisplayObjective extends Objective {
  /** If the objective is sorted in descending order (big boy first) */
  isDescendingOrder: boolean;
}

/** @noSelf */
declare interface Scoreboard {
  /**
   * Gives you the display objective for that location
   * @param {"sidebar" | "belowname" | "list"} place
   * @returns {DisplayObjective} The display objective
   */
  getDisplayObjective(place: "sidebar" | "belowname" | "list"): DisplayObjective;

  /**
   * Gives you the display objective for that location
   * Note: that its not it's not guaranteed you will get anything beyond the display ones.
   * @param {string} name The name of the objective (not the display name)
   * @returns {Objective} The objective or nil if it was not found
   */
  getObjective(name: string): Objective | void;

  /**
   * Gives you the display objective for that location
   * Note: that its not it's not guaranteed you will get anything beyond the display ones.
   * @returns {Objective[]} The objectives
   */
  getObjectives(): Objective[];

  /**
   * Gives you the display objective for that location
   * Note: that its not it's not guaranteed you will get anything beyond the display ones.
   * @returns {string[]} objectives The objective names
   */
  getObjectiveNames(): string[];
}

declare namespace server {
  /**
   * The current ip the user is connected to
   * @returns {string} The current ip the user is connected to
   */
  function ipConnected(): string;

  /**
   * The ip that you used to join the server
   * @returns {string} The ip used to join the server
   */
  function ip(): string;

  /**
   * The port
   * @returns {number} The current server port
   */
  function port(): number;

  /**
   * The name of the world (whats in top right in pause screen)
   * @returns {string} The world name
   */
  function worldName(): string;

  /**
   * The name of everyone in the pause menu
   * example of usage:
   * ```ts
   * for (const playerName of server.players()) {
   *   // ...
   * }
   * ```
   * @returns {string[]} The name of everybody in the playerlist (same as pause menu)
   */
  function players(): string[];

  /**
   * Gets you the server scoreboard
   * @return {Scoreboard} scoreboard The scoreboard
   */
  function scoreboard(): Scoreboard;
}
