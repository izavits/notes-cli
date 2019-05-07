# notes-cli

[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Command line tool to store notes in MongoDB.

This is a command line tool to store notes in MongoDB. You can `create`, `list`, `update`, `delete` notes from the command line. This repository started as an example to play with some npm packages, like `commander` and `inquirer` and it is a result of a modification of the [Contacto cli tool](https://github.com/rowlandekemezie/contacto).


## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)
- [License](#license)

## Install
1. Install [Node.js](https://nodejs.org/en/)
2. Install [MongoDB](https://www.mongodb.org/downloads/)
3. Clone the repository
4. Install dependencies: `npm install`
3. Install [Mongoose](http://mongoosejs.com/)
4. Make the `note.js` file executable

## Usage
```
Usage:  [options] [command]

Notes management tool

Options:
  -V, --version       output the version number
  -h, --help          output usage information

Commands:
  addNote|a           Add a note
  getNote|r <string>  Get note
  updateNote|u <_id>  Update note
  deleteNote|d <_id>  Delete note
  getNoteList|l       List notes

```

## Support
If you're having any problem, please raise an issue on GitHub.

## Contributing
PRs accepted. Some general guidelines:

- Write a concise commit message explaining your changes.
- If applies, write more descriptive information in the commit body.
- Refer to the issue/s your pull request fixes (if there are issues in the github repo).
- Write a descriptive pull request title.
- Squash commits when possible.

Before your pull request can be merged, the following conditions must hold:

- All the tests passes (if any).
- The coding style aligns with the project's convention.
- Your changes are confirmed to be working.

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License
The project is licensed under the MIT license.

