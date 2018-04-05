// (function(exports) {
//
//   function testNoteReturnNote() {
//     var note = new Note("hello");
//
//     if (note.text !== "hello") {
//       throw new Error("text hello, should return hello");
//     }
//   };
//   testNoteReturnNote();
//
//
//   function testViewNoteReturnNote() {
//     var note = new Note("hello world");
//
//     if (note.viewNote() !== "hello world") {
//       throw new Error("viewNote hello world, should return hello world");
//     }
//   };
//
//   testViewNoteReturnNote();
//
// })(this);

function testNoteIsEmptyByDefault() {
  var note = new Note();
  assert.isEmpty("it is empty note", note.text === '');
};
testNoteIsEmptyByDefault();


function testCreateNote() {
  var note = new Note("hello");
  assert.isTrue("note was created", note.text === "hello");
};
testCreateNote();


function testViewNoteReturnNote() {
  var note = new Note("hello world");
  assert.isTrue("it is returning note", note.viewNote() === "hello world")
};
testViewNoteReturnNote();
