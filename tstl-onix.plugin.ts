import ts from "typescript";
import * as tstl from "typescript-to-lua";

const consoleObj = `
-- Console object
local console = {
  log = function(...)
    local str = ""
    for _, v in ipairs({ ... }) do
      if type(v) == "table" then v = tableToJson(v, true) end
      str = str .. " " .. tostring(v)
    end
    print("§8[§7" .. name .. "§8]§r" .. str)
  end,
  warn = function(...)
    local str = ""
    for _, v in ipairs({ ... }) do
      if type(v) == "table" then v = tableToJson(v, true) end
      str = str .. " " .. tostring(v)
    end
    print("§8[§7" .. name .. "§8]§r§e" .. str .. "§r")
  end,
  error = function(...)
    local str = ""
    for _, v in ipairs({ ... }) do
      if type(v) == "table" then v = tableToJson(v, true) end
      str = str .. " " .. tostring(v)
    end
    print("§8[§7" .. name .. "§8]§r§c" .. str .. "§r")
  end,
}
-- End of Console object
`

const plugin: tstl.Plugin = {
  beforeEmit(program: ts.Program, options: tstl.CompilerOptions, emitHost: tstl.EmitHost, result: tstl.EmitFile[]) {
    for (const file of result) {
      file.code = "-- This script was originally written in TypeScript.\n" + file.code;

      const matchConsole = file.code.match(/console/g)
      if (!matchConsole) continue;

      file.code = consoleObj + file.code;
    }
  }
}

export default plugin;
