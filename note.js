const program=require('commander');
const { addNote, getNote } = require('./server');

program
    .version('1.0.0')
    .description('Notes management tool');

program
  .command('addNote <title> <description> <tags>')
  .alias('a')
  .description('Add a note')
  .action((title, description, tags) => {
    addNote({title, description, tags});
  });

program
  .command('getNote <string>')
  .alias('r')
  .description('Get note')
  .action(string => getNote(string));

program.parse(process.argv);

