/** @noSelfInFile */
declare const network: {
  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ``` 
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received) (can be anything u want, allows you to identify what data you received)
   * @param {string[]?} headers List of headers (Name: Value)
   */
  get(this: void, url: string, identifier: string, headers?: `${string}: ${string}`[]): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]?} headers List of headers (Name: Value)
   */
  fileget(this: void, filepath: string, url: string, identifier: string, headers?: `${string}: ${string}`[]): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to post
   */
  post(this: void, url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to post
   */
  post(this: void, url: string, identifier: string, headers: `${string}: ${string}`[], data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} filepath Where to store the result
   * @param {string} url What url we are sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to post
   */
  filepost(this: void, filepath: string, url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} filepath Where to store the result
   * @param {string} url What url we are sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to post
   */
  filepost(this: void, filepath: string, url: string, identifier: string, headers: `${string}: ${string}`[], data: string): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to delete
   */
  delete(this: void, url: string, identifier: string, data: string): void; //todo

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to delete
   */
  delete(this: void, url: string, identifier: string, headers: `${string}: ${string}`[], data: string): void; //todo

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to delete
   */
  filedelete(this: void, filepath: string, url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to delete
   */
  filedelete(this: void, filepath: string, url: string, identifier: string, headers: `${string}: ${string}`[], data: string): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to patch
   */
  patch(this: void, url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to patch
   */
  patch(this: void, url: string, identifier: string, headers: `${string}: ${string}`[], data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to patch
   */
  filepatch(this: void, filepath: string, url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to patch
   */
  filepatch(this: void, filepath: string, url: string, identifier: string, headers: `${string}: ${string}`[], data: string): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to put
   */
  put(this: void, url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to put
   */
  put(this: void, url: string, identifier: string, headers: `${string}: ${string}`[], data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to put
   */
  fileput(this: void, filepath: string, url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * ```ts
   * onNetworkData = (code, identifier, data) => {
   *   // ...
   * }
   * ```
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to put
   */
  fileput(this: void, filepath: string, url: string, identifier: string, headers: `${string}: ${string}`[], data: string): void;
}
