(function(exports) {

  function NoteList() {
    this.list = [];

    NoteList.prototype.addNoteToList = function(note) {
     return this.list.push(note);
   };

   NoteList.prototype.getNoteFromList = function() {
     return this.list;
   };

   NoteList.prototype.createAndStore = function(string) {
     var note = new Note(string);
     this.addNoteToList(note);
     return this.getNoteFromList();
   };

  };

  exports.NoteList = NoteList;
})(this);
