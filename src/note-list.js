(function(exports) {
  function NoteList(list) {
    this.notearray = [];

    NoteList.prototype.listModel = function() {
     this.notearray.push(list)
     return this.notearray
    };

  };

  exports.NoteList = NoteList;
})(this);
