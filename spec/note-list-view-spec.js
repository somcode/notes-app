function testToViewList() {
  note1 = new Note("javascript");
  note2 = new Note("ruby");
  notelistview = new NoteListView([note1, note2]);

  assert.isTrue("view list of notes", notelistview.viewHtmlNotesList() === "<ul><li><div>javascript</div></li><li><div>ruby</div></li></ul>");
};
testToViewList();



function testToViewEmptyList() {

  notelistview = new NoteListView();

  assert.isTrue("list model that has no notes", notelistview.viewHtmlNotesList() === "<ul></ul>");
};
testToViewEmptyList();
