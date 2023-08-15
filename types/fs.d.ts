//@meta

//@class fs
//fs = {}

/** @noSelf */
declare namespace fs {
  //Checks if a file exist
  //@param path string The path from Scripts/Data
  //@return boolean exists If the file exists
  function exist(path: string): boolean

  //Opens a folder in explorer
  //@param path string The path from Scripts/Data to open
  //@return boolean showed If the folder was showed
  function showFolder(path: string): boolean

  //Opens a file to read/write data
  //@param path string The path from Scripts/Data
  //@return string|nil hash The file hash or nil if the file does not exist
  function hash(path: string, openmode: string): string | void;

  //Checks if a path is a directory
  //@param path string The path from Scripts/Data
  //@return boolean isDirectory If the path is a directory
  function isdir(path: string): boolean

  //Creates a directory
  //@param path string The path from Scripts/Data
  function mkdir(path: string): void;

  //Deletes a file
  //@param path string The path from Scripts/Data
  function _delete(path: string): void; //todo

  //Copies a file
  //@param pathFrom string The source path from Scripts/Data
  //@param pathTo string The destination path from Scripts/Data
  function copy(pathFrom: string, pathTo: string): void

  //Moves a file
  //@param pathFrom string The source path from Scripts/Data
  //@param pathTo string The destination path from Scripts/Data
  function move(pathFrom: string, pathTo: string): void

  //Renames a file
  //@param pathFrom string The source path from Scripts/Data
  //@param pathTo string The destination path from Scripts/Data
  function rename(pathFrom: string, pathTo: string): void

  //Give you a list of all files in a directory
  //@param path string The path from Scripts/Data
  //@return string[] files The filepath o every file in the directory
  function files(path: string): string[]

  //Give you a list of all directories in a directory
  //@param path string The path from Scripts/Data
  //@return string[] directories The filepath o every directory in the directory
  function directories(path: string): string[]

  //Gets information about a file
  //@path string The path from Scripts/Data
  //@return Stats stats The file informtion
  function stats(path: string): Stats

  
  //Opens a file to read/write data
  //@param path string The path from Scripts/Data
  //@param openmode string | "'w'" | "'r'" | "'a'" how to open the file, w is write mode, r is read mode, a is append(and it will add to an existing file or start)
  //@return BinaryFile|nil file The (hopefully) opened file
  function open(path: string, openmode: "w" | "r" | "a"): BinaryFile | void;
}

declare class Stats {
  //@class Stats
  //@field size integer Size of the file in bytes
  //@field readtime integer The last time the file was accessed (unix time)
  //@field writetime integer The last time the file was written to (unix time)
  //@field statustime integer The last time the file was accessed (unix time)

  public size: number;
  public readtime: number;
  public writetime: number;
  public statustime: number;
}

declare class BinaryFile {
  //@class BinaryFile
  //local _acp_BinaryFile = {}

  //Close the file (when you are done with it please close thx)
  public close(): void

  //Flushes the written content to the file, Makes what you wrote to it actually go to disk without closing it
  public flush(): void

  //If the file has reach the end of the file
  //@return boolean eof Is is the end of the file
  public eof(): boolean

  //The size of the file in bytes (**not remaining bytes to read**)
  //@return integer fileSize The size of the file
  public size(): number

  //Goes to a position in the file
  //@param position integer Where to go from the file start(0)
  public seek(position: number): void

  //The current position in the file (ex: reading from start + 56)
  //@return integer filepos Position in the file
  public tell(): number

  //Writes content to the file, make sure not to screw up the byteCount
  //@param content string What to take the bytes from
  //@param byteCount integer how many bytes we taking from your string
  public write(content: string, byteCount: number): void

  //Writes a byte to the file
  //@param Byte integer a number in the range of -128 to 127
  public writeByte(Byte: number): void

  //Writes a short to the file
  //@param Short integer a number in the range of -32768 to 35767
  public writeShort(Short: number): void

  //Writes an int to the file
  //@param Int integer a number from from -2147483648 to 2147483647
  public writeInt(Int: number): void

  //Writes a byte to the file
  //@param Byte integer a number in the range of -0 to 255
  public writeUByte(Byte: number): void

  //Writes a short to the file
  //@param Short integer a number in the range of 0 to 65535
  public writeUShort(Short: number): void

  //Writes an int to the file
  //@param Int integer a number from from 0 to 4294967295
  public writeUInt(Int: number): void

  //Writes a long to the file
  //@param Long integer a number from from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
  public writeLong(Long: number): void

  //Writes a float to the file
  //@param Float number a number with decimal places
  //@return nil
  public writeFloat(Float: number): void

  //Writes a double to the file
  //@param Double number a number with decimal 
  public writeDouble(Double: number): void

  //Writes Text to the file
  //@param Text string the text to put in the file
  public writeString(Text: string): void

  //Writes Data to the file
  //@param Data userdata the data to put in the file
  public writeRaw(Data: DataView): void

  //Reads content from the file, make sure not to fail on the byteCount
  //@param byteCount integer how many bytes we taking from the file
  //@return string content What was read
  public read(byteCount: number): string;

  //Reads a byte from the file
  //@return integer Byte The byte that was read
  public readByte(): number;

  //Reads a short from the file
  //@return integer Short The short that was read
  public readShort(): number

  //Reads an int from the file
  //@return integer Int The int that was read
  public readInt(): number

  //Reads a byte from the file
  //@return integer Byte The unsigned byte that was read
  public readUByte(): number

  //Reads a short from the file
  //@return integer Short The unsigned short that was read
  public readUShort(): number

  //Reads an int from the file
  //@return integer Int The unsigned int that was read
  public readUInt(): number

  //Reads a long from the file
  //@return integer Long The long that was read
  public readLong(): number

  //Reads a float from the file
  //@return number Float The float that was read
  public readFloat(): number

  //Reads a double from the file
  //@return number Double The double that was read
  public readDouble(): number

  //Reads Text from the file
  //@return string Text The text that was read
  public readString(): string

  //Reads Data from the file
  //@param bytesToRead integer How many bytes to read
  //@return userdata Data The data that was read
  public readRaw(bytesToRead: number): DataView

}
