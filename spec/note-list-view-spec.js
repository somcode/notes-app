function testToViewList() {
  note1 = new Note("javascript");
  list = new NoteListView(note1);

  assert.isTrue("view list of notes", list.viewNoteList(note1) === "<li><div>" + note1 + "</div></li>");
};
testToViewList();
