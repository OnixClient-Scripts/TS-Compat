/**
 * @class network
 */
//network = {}

/** @noSelf */
declare class network {
  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received) (can be anything u want, allows you to identify what data you received)
   */
  static get(url: string, identifier: string): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received) (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   */
  static get(url: string, identifier: string, headers: string[]): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   */
  static fileget(filepath: string, url: string, identifier: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   */
  static fileget(filepath: string, url: string, identifier: string, headers: string[]): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to post
   */
  static post(url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to post
   */
  static post(url: string, identifier: string, headers: string[], data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} filepath Where to store the result
   * @param {string} url What url we are sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to post
   */
  static filepost(filepath: string, url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} filepath Where to store the result
   * @param {string} url What url we are sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to post
   */
  static filepost(filepath: string, url: string, identifier: string, headers: string[], data: string): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to delete
   */
  static delete(url: string, identifier: string, data: string): void; //todo

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to delete
   */
  static delete(url: string, identifier: string, headers: string[], data: string): void; //todo

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to delete
   */
  static filedelete(filepath: string, url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to delete
   */
  static filedelete(filepath: string, url: string, identifier: string, headers: string[], data: string): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to patch
   */
  static patch(url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to patch
   */
  static patch(url: string, identifier: string, headers: string[], data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to patch
   */
  static filepatch(filepath: string, url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   * end
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to patch
   */
  static filepatch(filepath: string, url: string, identifier: string, headers: string[], data: string): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to put
   */
  static put(url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to put
   */
  static put(url: string, identifier: string, headers: string[], data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string} data What data to put
   */
  static fileput(filepath: string, url: string, identifier: string, data: string): void;

  /**
   * Does a web request to the specified url and stores the result in the file, data will be filepath
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} filepath Where to store the result
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received)
   * @param {string[]} headers List of headers (Name: Value)
   * @param {string} data What data to put
   */
  static fileput(filepath: string, url: string, identifier: string, headers: string[], data: string): void;
}
