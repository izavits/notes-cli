#!/usr/bin/env node

const program=require('commander');
const { prompt }=require('inquirer');
const { addNote, getNote }=require('./server');

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

program.parse(process.argv);

