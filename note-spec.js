(function(exports) {

  function testNoteReturnNote() {
    var note = new Note("hello");

    if (note.text !== "hello") {
      throw new Error("text hello, should return hello");
    }
  };
  testNoteReturnNote();


  function testViewNoteReturnNote() {
    var note = new Note("hello world");

    if (note.viewNote() !== "hello world") {
      throw new Error("viewNote hello world, should return hello world");
    }
  };

  testViewNoteReturnNote();

})(this);
