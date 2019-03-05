const mongoose=require('mongoose');
const assert=require('assert');
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/notes-cli', {'useNewUrlParser': true});
const db=mongoose.connection;

// Converts value to lowercase
function toLower(v) {
  return v.toLowerCase();
}

// Define schema
const notesSchema = mongoose.Schema({
  title: { type: String, set: toLower },
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
    db.close();
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
    db.close();
  });
};

/**
 * @function  [updateNote]
 * @returns {Sting} status
 */
const updateNote = (_id, note) => {
  Note.update({ _id }, note)
  .exec((err, status) => {
    assert.equal(null, err);
    console.info('Updated successfully');
    db.close();
  });
};

/**
 * @function  [deleteNote]
 * @returns {String} status
 */
const deleteNote = (_id) => {
  Note.remove({ _id })
  .exec((err, status) => {
    assert.equal(null, err);
    console.info('Deleted successfully');
    db.close();
  });
};

/**
 * @function  [getNoteList]
 * @returns [notelist] notes
 */
const getNoteList = () => {
  Note.find()
  .exec((err, notes) => {
    assert.equal(null, err);
    console.info(notes);
    console.info(`${notes.length} matches`);
    db.close();
  });
};

module.exports = {
    addNote,
    getNote,
    updateNote,
    deleteNote,
    getNoteList
};
