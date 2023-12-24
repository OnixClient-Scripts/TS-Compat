/** @noSelf */
declare const fs: {
  /**
   * Checks if a file exist
   * @param {string} path The path from Scripts/Data
   * @returns {boolean} If the file exists
   */
  exist(path: string): boolean

  /**
   * Opens a folder in explorer
   * @param {string} path The path from Scripts/Data to open
   * @returns {boolean} If the folder was showed
   */
  showFolder(path: string): boolean

  /**
   * Opens a file to read/write data
   * @param {string} path The path from Scripts/Data
   * @returns {string | void} hash The file hash or nil if the file does not exist
   */
  hash(path: string, openmode: string): string | void;

  /**
   * Checks if a path is a directory
   * @param {string} path The path from Scripts/Data
   * @returns {boolean} If the path is a directory
   */
  isdir(path: string): boolean

  /**
   * Creates a directory
   * @param {string} path The path from Scripts/Data
   */
  mkdir(path: string): void;

  /**
   * Deletes a file
   * @param {string} path The path from Scripts/Data
   */
  delete(path: string): void;

  /**
   * Copies a file
   * @param {string} pathFrom The source path from Scripts/Data
   * @param {string} pathTo The destination path from Scripts/Data
   */
  copy(pathFrom: string, pathTo: string): void

  /**
   * Moves a file
   * @param {string} pathFrom The source path from Scripts/Data
   * @param {string} pathTo The destination path from Scripts/Data
   */
  move(pathFrom: string, pathTo: string): void

  /**
   * Renames a file
   * @param {string} pathFrom The source path from Scripts/Data
   * @param {string} pathTo The destination path from Scripts/Data
   */
  rename(pathFrom: string, pathTo: string): void

  /**
   * Give you a list of all files in a directory
   * @param {string} path The path from Scripts/Data
   * @returns {string[]} The filepath o every file in the directory
   */
  files(path: string): string[]

  /**
   * Give you a list of all directories in a directory
   * @param {string} path The path from Scripts/Data
   * @return {string[]} directories The filepath o every directory in the directory
   */
  directories(path: string): string[]

  /**
   * Gets information about a file
   * @param path {string} The path from Scripts/Data
   * @returns {Stats} stats The file informtion
   */
  stats(path: string): Stats

  /**
   * Opens a file to read/write data
   * @param {string} path The path from Scripts/Data
   * @param {"w" | "r" | "a"} openmode how to open the file, w is write mode, r is read mode, a is append(and it will add to an existing file or start)
   * @return {BinaryFile | void} The (hopefully) opened file
   */
  open(path: string, openmode: "w" | "r" | "a"): BinaryFile | void;

  /**
   * Opens a file to read/write data that can also be compressed
   * If you dont skip the header putting anything that isn't 'store' or 'none' will ignore what you supply and read the header, otherwise it will trust you
   * @param {string} path The path from Scripts/Data
   * @param {"w" | "r" | "a" | nil} openmode  how to open the file, w is write mode, r is read mode, a is append(and it will add to an existing file or start), nil to open a memory stream
   * @param {"lzma" | "deflate" | "gzip2" | "store" | "none"} compressionType The compression type to use, anything that isn't store or none will have compression enabled
   * @param {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9} compressionLevel The compression level to use, 0 is terrible compression, 1 is fastest, 6 is balanced, 9 is best compression
   * @param {boolean} compressionHeader If you want to skip the header, if you do you can't read the file without knowing the compression type
   */
  open(path: string, 
    openmode: "w" | "r" | "a", 
    compressionType: "lzma" | "deflate" | "gzip2" | "store" | "none", 
    compressionLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9, 
    compressionHeader: boolean): void
}

declare interface Stats {
  /** Size of the file in bytes */
  readonly size: number;
  /** The last time the file was accessed (unix time) */
  readonly readtime: number;
  /** The last time the file was written to (unix time) */
  readonly writetime: number;
  /** The last time the file was accessed (unix time) */
  readonly statustime: number;
}

declare interface BinaryFile {
  /** Close the file (when you are done with it please close thx) */
  close(): void

  /** Flushes the written content to the file, Makes what you wrote to it actually go to disk without closing it */
  flush(): void

  /**
   * If the file has reach the end of the file
   * @returns {boolean} Is is the end of the file
   */
  eof(): boolean

  /**
   * The size of the file in bytes (**not remaining bytes to read**)
   * @returns {number} The size of the file
   */
  size(): number

  /**
   * Goes to a position in the file
   * @param {number} position Where to go from the file start(0)
   */
  seek(position: number): void

  /**
   * The current position in the file (ex: reading from start + 56)
   * @return {number} Position in the file
   */
  tell(): number

  /**
   * Writes content to the file, make sure not to screw up the byteCount
   * @param {string} content What to take the bytes from
   * @param {number} byteCount how many bytes we taking from your string
   */
  write(content: string, byteCount: number): void

  /**
   * Writes a byte to the file
   * @param {number} Byte a number in the range of -128 to 127
   */
  writeByte(Byte: number): void

  /**
   * Writes a short to the file
   * @param {integer} Short a number in the range of -32768 to 35767
   */
  writeShort(Short: number): void

  /**
   * Writes an int to the file
   * @param {number} Int a number from from -2147483648 to 2147483647
   */
  writeInt(Int: number): void

  /**
   * Writes an unsigned byte to the file
   * @param {number} Byte a number in the range of 0 to 255
   */
  writeUByte(Byte: number): void

  /**
   * Writes a short to the file
   * @param {number} Short a number in the range of 0 to 65535
   */
  writeUShort(Short: number): void

  /**
   * Writes an int to the file
   * @param {number} Int a number from from 0 to 4294967295
   */
  writeUInt(Int: number): void

  /**
   * Writes a long to the file
   * @param {number} Long a number from from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
   */
  writeLong(Long: number): void

  /**
   * Writes a float to the file
   * @param {number} Float a number with decimal places
   */
  writeFloat(Float: number): void

  /**
   * Writes a double to the file
   * @param {number} Double a number with decimal 
   */
  writeDouble(Double: number): void

  /**
   * Writes Text to the file
   * @param {string} Text the text to put in the file
   */
  writeString(Text: string): void

  /**
   * Writes Data to the file
   * @param {userdata} Data the data to put in the file
   */
  writeRaw(Data: any): void

  /**
   * Reads content from the file, make sure not to fail on the byteCount
   * @param {number} byteCount how many bytes we taking from the file
   * @return {string} What was read
   */
  read(byteCount: number): string;

  /**
   * Reads a byte from the file
   * @return {number} Byte The byte that was read
   */
  readByte(): number;

  /**
   * Reads a short from the file
   * @returns {number} The short that was read
   */
  readShort(): number

  /**
   * Reads an int from the file
   * @returns {number} The int that was read
   */
  readInt(): number

  /**
   * Reads a byte from the file
   * @returns {number} The unsigned byte that was read
   */
  readUByte(): number

  /**
   * Reads a short from the file
   * @return {number} The unsigned short that was read
   */
  readUShort(): number

  /**
   * Reads an int from the file
   * @returns {number} The unsigned int that was read
   */
  readUInt(): number

  /**
   * Reads a long from the file
   * @returns {number} The long that was read
   */
  readLong(): number

  /**
   * Reads a float from the file
   * @returns {number} The float that was read
   */
  readFloat(): number

  /**
   * Reads a double from the file
   * @returns {number} The double that was read
   */
  readDouble(): number

  /**
   * Reads Text from the file
   * @returns {string} The text that was read
   */
  readString(): string

  /**
   * Reads Data from the file
   * @param {number} bytesToRead How many bytes to read
   * @return {userdata} The data that was read
   */
  readRaw(bytesToRead: number): any
}
