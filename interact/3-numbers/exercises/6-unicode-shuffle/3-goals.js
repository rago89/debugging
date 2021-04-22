"use strict";

<<<<<<< HEAD:interact/3-numbers/exercises/6-ascii-shuffle/3-goals.js
let userInput = "";
let asciiShift = NaN;
=======
let userInput = '';
let unicodeShift = NaN;
>>>>>>> upstream/master:interact/3-numbers/exercises/6-unicode-shuffle/3-goals.js

let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt(
    "enter a phrase, each character will be shifted by character code:"
  );

  if (userInput === "" || userInput === null) {
    alert("nope, enter something");
  } else {
    while (true) {
<<<<<<< HEAD:interact/3-numbers/exercises/6-ascii-shuffle/3-goals.js
      const asciiShiftInput = prompt(
        "how many ascii numbers do you want the characters to shift?"
      );

      if (asciiShiftInput === null || asciiShiftInput === "") {
        alert("enter something");
=======
      const unicodeShiftInput = prompt(
        'how many unicode numbers do you want the characters to shift?'
      );

      if (unicodeShiftInput === null || unicodeShiftInput === '') {
        alert('enter something');
>>>>>>> upstream/master:interact/3-numbers/exercises/6-unicode-shuffle/3-goals.js
      } else {
        unicodeShift = Number(unicodeShiftInput);

        if (Number.isNaN(unicodeShift)) {
          alert('"' + unicodeShiftInput + '" is not a number');
        } else {
          break;
        }
      }
    }
    /* -- BEGIN: ask the user to confirm their string and shift number -- */
    const confirmMessage =
      "is this correct?\n\n" + '- "' + userInput + '"\n' + "- " + asciiShift;
    userConfirmed = confirm(confirmMessage);

    /* -- END -- */
  }
}

let encodedString = "";

/* -- BEGIN: create the encoded string -- */
for (const character of userInput) {
  const characterCode = character.charCodeAt();
  const newCharCode = characterCode + asciiShift;
  const encodedCharacter = String.fromCharCode(newCharCode);
  encodedString += encodedCharacter;
}
/* -- END -- */

const finalMessage = `"${userInput}" -> "${encodedString}"`;
alert(finalMessage);
