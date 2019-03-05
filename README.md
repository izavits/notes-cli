# notes-cli
Command line tool to store notes in MongoDB. You can `create`, `list`, `update`, `delete` notes from the command line.

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

## Notes
This repository started as an example to play with some npm packages, like `commander` and `inquirer` and it is a result of a modification of the [Contacto cli tool](https://github.com/rowlandekemezie/contacto).
