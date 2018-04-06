(function(exports){
  function NoteListView(noteList = []) {
    this.notelist = noteList;
  };

  NoteListView.prototype.viewHtmlNotesList = function () {

  return "<ul>" + this.notelist.map(function(note) {
    return ("<li><div>" + note.text + "</div></li>")
  }).join('') + "</ul>"

  };
  exports.NoteListView = NoteListView;
})(this);
