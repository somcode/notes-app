 var note_list = new NoteList();

 function testNoteListIsEmpty() {
   note_list = new NoteList();
   assert.isEmpty("it is an empty list", note_list.list === []);
 };
 testNoteListIsEmpty();


function testAddNoteToList() {
  var note = new Note("javascript");
  var note_list = new NoteList();
  assert.isTrue("note was added to the list", note_list.addNoteToList(note) === 1);
};
testAddNoteToList();


function testGetNoteIsReturningNoteList() {
  note = new Note("javascript");
  note_list = new NoteList();
  note_list.addNoteToList(note);
  assert.isTrue("get the list of notes", note_list.getNoteFromList()[0] === note);
};
testGetNoteIsReturningNoteList();


function testCreateAndStoreNewNote() {
  note_list = new NoteList();
  note_list.createAndStore('javascript');
  assert.isTrue("create and store notes", note_list.createAndStore('javascript')[0].text === "javascript");
};
testCreateAndStoreNewNote();
