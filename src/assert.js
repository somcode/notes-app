var assert = {
  isTrue: function(description, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Assertion passed: " + assertionToCheck + " is truthy, " + description);
    }
  },


  isEmpty: function(description, assertionToCheck) {
    if (!assertionToCheck.length === 0) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not nil");
    } else {
      console.log("Assertion passed:" + description);
    }
  },

  isFalse: function(description, assertionToCheck) {
    if(assertionToCheck) {
      throw new Error("Assertion failed " + assertionToCheck + " is not falsey");
    } else {
      console.log("Assertion passed: " + assertionToCheck + " is falsey" + description);
    }
  }
};
