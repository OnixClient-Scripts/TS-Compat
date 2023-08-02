//@class server
//server = {}

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
}
