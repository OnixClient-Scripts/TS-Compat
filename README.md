# Onix Client Scripting TypeScript Type Definitions

This repository contains TypeScript type definitions for Onix Client scripting. It allows developers to write scripts for Onix Client using TypeScript.

⚠️ **Disclaimer: This project is not official. It is EXPERIMENTAL! Some features may not work as expected!** ⚠️

## Prerequisites
Before using these type definitions, you need to have the following installed on your system:

- Onix Client Scripting
- [Node.js](https://nodejs.org/en/download/current)

### Optional Tools
While the following tools are optional, they can enhance your development experience:

- [Git](https://git-scm.com/downloads)
- Yarn (`npm install --global yarn`) (Alternative to NPM)

## Setup
To set up the TypeScript type definitions for Onix Client scripting, follow these steps:

1. Open your terminal and navigate to the `Scripts` folder inside Onix Client.
2. Clone this repository by running: `git clone https://github.com/OnixClient-Scripts/TS-Compat`
3. Change into the cloned repository directory: `cd ts-compat`
4. Install dependencies by running either `npm run setup` or `yarn setup`.
5. Move back to the parent folder: `cd ../`
6. Install the project's dependencies: `npm install` or `yarn`

## Usage
To create your scripts using TypeScript, place them in their corresponding folders inside `TS-Compat/`. Once you've written your scripts, build them using the following command:
```
npm run build
```
or
```
yarn build
```

## Troubleshooting
If you face other problems, consider deleting the `TS-Compat` folder and starting the setup process again. You can follow the [setup guide](https://github.com/OnixClient-Scripts/TS-Compat/blob/main/README.md#setup) for assistance.

## TODO
We have some improvements planned for this repository:

- Create a script to automatically generate type definitions from the Autocomplete folder.
- Simplify the setup process for an easier installation experience.
