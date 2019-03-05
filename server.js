const mongoose=require('mongoose');
const assert=require('assert');
mongoose.Promise=global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/notes-cli');

// Converts value to lowercase
function toLower(v) {
  return v.toLowerCase();
}

// Define schema
const notesSchema = mongoose.Schema({
  tile: { type: String, set: toLower },
  description: { type: String, set: toLower },
  tags: { type: String, set: toLower }
});

// Define model as an interface with the database
const Note = mongoose.model('Note', notesSchema);

/**
 * @function  [addNote]
 * @returns {String} Status
 */
const addNote = (note) => {
  Note.create(note, (err) => {
    assert.equal(null, err);
    console.info('New note added');
    db.disconnect();
  });
};

/**
 * @function  [getNote]
 * @returns {Json} notes
 */
const getNote = (value) => {
  // Define search criteria. The search here is case-insensitive and inexact.
  const search = new RegExp(value, 'i');
  Note.find({$or: [{title: search }, {description: search }]})
  .exec((err, note) => {
    assert.equal(null, err);
    console.info(note);
    console.info(`${note.length} matches`);
    db.disconnect();
  });
};

module.exports = {
    addNote,
    getNote
};
