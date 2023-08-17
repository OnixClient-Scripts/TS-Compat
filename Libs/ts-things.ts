// This lib is for use when scripting in TypeScript.
// make sure to importLib("ts-things") when using things from this lib.
// I will try to keep adding more things that are missing from TS-Compat but are available in JS/TS.

// Fetch function
const networkListeners = new Map<string, (code: keyof typeof curlErrorCodes, data: string) => void>();

importLib("curl-error-codes");

type FetchOptions = (
  | {
      method: "GET";
      body?: string;
    }
  | {
      method: "POST" | "PATCH" | "PUT" | "DELETE";
      body: string;
    }
  | {
      method: undefined;
    }
) & { headers?: `${string}: ${string}`[] };

/**
 * basic fetch implementation to use in scripts instead
 * of messing with onNetworkData
 * @param url The URL to fetch.
 * @param options options: method, headers, body
 */
function fetch(this: void, url: string, options?: FetchOptions): Promise<string> {
  let resolve: (val: string) => void;
  let reject: (err: Error) => void;
  const promise = new Promise<string>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  const identifier = Math.random().toString(36).substring(2, 15);

  networkListeners.set(identifier, (code, data) => {
    if (code > 0) return reject(new Error(curlErrorCodes[code]));
    return resolve(data);
  });

  if (!options) {
    network.get(url, identifier);
  } else {
    if (!options.headers) options.headers = [];

    switch (options.method) {
      case "POST":
        network.post(url, identifier, options.headers, options.body);
        break;
      case "PATCH":
        network.patch(url, identifier, options.headers, options.body);
        break;
      case "PUT":
        network.put(url, identifier, options.headers, options.body);
        break;
      case "DELETE":
        network.delete(url, identifier, options.headers, options.body);
        break;
      default:
        network.get(url, identifier, options.headers);
        break;
    }
  }
  return promise;
}

/**
 * Call this in `onNetworkData` to handle fetch requests.
 */
const fetchNetworkData: typeof onNetworkData = (code, id, data) => {
  const listener = networkListeners.get(id);
  if (!listener) return;
  listener(code as keyof typeof curlErrorCodes, data);
};
