/**
 * @class network
 */
//network = {}

/** @noSelf */
declare namespace network {
  /**
   * Does a web request to the specified url
   * You will receive the data in the onNetworkData callback
   * function onNetworkData(code, identifier, data)
   *
   *;
   * @param {string} url What url we sending our request to
   * @param {string} identifier Will be the second parameter of onNetworkData (can be anything u want, allows you to identify what data you received) (can be anything u want, allows you to identify what data you received)
   */
  function get(url: string, identifier: string): void;

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
  function get(url: string, identifier: string, headers: string[]): void;

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
  function fileget(filepath: string, url: string, identifier: string): void;

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
  function fileget(filepath: string, url: string, identifier: string, headers: string[]): void;

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
  function post(url: string, identifier: string, data: string): void;

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
  function post(url: string, identifier: string, headers: string[], data: string): void;

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
  function filepost(filepath: string, url: string, identifier: string, data: string): void;

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
  function filepost(filepath: string, url: string, identifier: string, headers: string[], data: string): void;

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
  function _delete(url: string, identifier: string, data: string): void; //todo

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
  function _delete(url: string, identifier: string, headers: string[], data: string): void; //todo

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
  function filedelete(filepath: string, url: string, identifier: string, data: string): void;

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
  function filedelete(filepath: string, url: string, identifier: string, headers: string[], data: string): void;

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
  function patch(url: string, identifier: string, data: string): void;

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
  function patch(url: string, identifier: string, headers: string[], data: string): void;

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
  function filepatch(filepath: string, url: string, identifier: string, data: string): void;

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
  function filepatch(filepath: string, url: string, identifier: string, headers: string[], data: string): void;

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
  function put(url: string, identifier: string, data: string): void;

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
  function put(url: string, identifier: string, headers: string[], data: string): void;

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
  function fileput(filepath: string, url: string, identifier: string, data: string): void;

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
  function fileput(filepath: string, url: string, identifier: string, headers: string[], data: string): void;
}
