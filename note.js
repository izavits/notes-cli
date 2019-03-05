#!/usr/bin/env node

const program=require('commander');
const { prompt }=require('inquirer');
const {
    addNote,
    getNote,
    updateNote,
    deleteNote,
    getNoteList
}=require('./server');

// Interactive questions
const questions = [
  {
    type : 'input',
    name : 'title',
    message : 'Enter note title  ...'
  },
  {
    type : 'input',
    name : 'description',
    message : 'Enter note description ...'
  },
  {
    type : 'input',
    name : 'tags',
    message : 'Enter note tags ...'
  }
];

program
    .version('1.0.0')
    .description('Notes management tool');

program
    .command('addNote')
    .alias('a')
    .description('Add a note')
    .action(() => {
        prompt(questions).then(answers => addNote(answers));
    });

program
  .command('getNote <string>')
  .alias('r')
  .description('Get note')
    .action(string => getNote(string));

program
  .command('updateNote <_id>')
  .alias('u')
  .description('Update note')
  .action(_id => {
    prompt(questions).then((answers) =>
      updateNote(_id, answers));
  });

program
  .command('deleteNote <_id>')
  .alias('d')
  .description('Delete note')
    .action(_id => deleteNote(_id));

program
  .command('getNoteList')
  .alias('l')
  .description('List notes')
  .action(() => getNoteList());

if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit();
}
program.parse(process.argv);

