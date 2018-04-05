(function(exports) {
  function NoteListView(notes = '') {
    this.notelist = [notes];

    NoteListView.prototype.viewNoteList = function() {
      var string = "";
       for (i = 0; i < this.notelist.length; i++) {
        string += "<li><div>" + this.notelist[i] + "</div></li>";
      }
       return string;

    };
  };

  exports.NoteListView = NoteListView;
})(this);
