# Onix Client Scripting TypeScript Type Definitions

This repository contains TypeScript type definitions for Onix Client scripting. It allows developers to write scripts for Onix Client using TypeScript.<br>

⚠️ **Disclaimer: This project is EXPERIMENTAL! Some features may not work as expected!** ⚠️<br>
*This project uses [typescript-to-lua](https://typescripttolua.github.io/docs/). Scripts written in TypeScript can be transpiled to Lua, which can then be run in Onix Client. Some JS/TS functions/features may behave differently to Lua equivalents, or may not even exist, hence why this is experimental. **Async programming is especially unpredictable.***

## Prerequisites
Before using this, you need to have the following installed on your system:

- Onix Client Scripting
- [Node.js](https://nodejs.org/en/download/current)

### Optional Tools
While the following tools are optional, they can enhance your development experience:

- [Git](https://git-scm.com/downloads)
- Yarn (`npm install --global yarn`) (Alternative to NPM)
- [TypeScriptToLua VSCode extension](https://marketplace.visualstudio.com/items?itemName=typescript-to-lua.vscode-typescript-to-lua)

---
## Setup
To set up the TypeScript type definitions for Onix Client scripting, follow these steps:

1. Open your terminal and navigate to the `Scripts` folder inside the Onix Client folder.
2. Clone this repository by running: `git clone https://github.com/OnixClient-Scripts/TS-Compat` (If you haven't got git installed, just download and extract the zip from the GitHub repository.)
3. Change into the cloned repository directory: `cd TS-Compat`
4. Install dependencies by running either `npm run setup` or `yarn setup`.
5. Move back to the parent folder: `cd ../`
6. Install the project's dependencies: `npm install` or `yarn`
---
## Usage
To create your scripts using TypeScript, place them in their corresponding folders inside `TS-Compat/`. Once you've written your scripts, build them using the following command:
```bash
npm run build
```
or
```bash
yarn build
```
---
## Updating
To stay up to date with the type definitions on the repo, you need to refetch the repo when there's an update. This is easy if you've got [Git](https://git-scm.com/downloads) installed:
```bash
cd TS-Compat
git pull
```
- You can also simply redownload and re-extract the repository's folder and move your TypeScript source files into the new folder.
---
## Troubleshooting
- If you face other problems, consider deleting the `TS-Compat` folder and starting the setup process again. You can follow the [setup guide](https://github.com/OnixClient-Scripts/TS-Compat/blob/main/README.md#setup) for assistance.
---
## FAQ

### Does *x* JavaScript/TypeScript feature work?
*Most features from vanilla JS/TS or Node.JS **Don't work**. Basic things like Array.map()/filter()/reduce(), string.split(), and arrow functions work fine. Some things, like asynchronous programming (promises) are unpredictable and may not work as expected. `async`/`await` syntax doesn't work at all.*
*Importing things from other files also doesn't work with `import x from "x"` syntax, and using `import`/`export` may break your code. If you need to import code from another file, make a lib for that code, and use `importLib()`.*

### Can I upload a script I made in TS to the repo?
*Yes, just PR the source (TS file) to this repo, and the output lua file to the [main repo](https://github.com/OnixClient-Scripts/OnixClient_Scripts/).*

---
## TODO
We have some improvements planned for this repository:

- Create a script to automatically generate type definitions from the Autocomplete folder.
- Simplify the setup process for an easier installation experience.
