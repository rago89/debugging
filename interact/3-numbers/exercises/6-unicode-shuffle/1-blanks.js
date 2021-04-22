'use strict';

let userInput = '';
let unicodeShift = NaN;

let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:'
  );

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

<<<<<<< HEAD:interact/3-numbers/exercises/6-ascii-shuffle/1-blanks.js
  while (true) {
    const asciiShiftInput = prompt(
      'how many ascii numbers do you want the characters to shift?'
=======
  while (_) {
    const unicodeShiftInput = prompt(
      'how many unicode numbers do you want the characters to shift?'
>>>>>>> upstream/master:interact/3-numbers/exercises/6-unicode-shuffle/1-blanks.js
    );

    if (unicodeShiftInput === null || unicodeShiftInput === '') {
      alert('enter something');
      continue;
    }

<<<<<<< HEAD:interact/3-numbers/exercises/6-ascii-shuffle/1-blanks.js
    asciiShift = Number(asciiShiftInput);

    if (Number.isNaN(asciiShift)) {
      alert('"' + asciiShiftInput + '" is not a number');
=======
    _ = Number(unicodeShiftInput);

    if (_) {
      alert('"' + unicodeShiftInput + '" is not a number');
>>>>>>> upstream/master:interact/3-numbers/exercises/6-unicode-shuffle/1-blanks.js
    } else {
      break;
    }
  }
  const confirmMessage =
<<<<<<< HEAD:interact/3-numbers/exercises/6-ascii-shuffle/1-blanks.js
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + asciiShift;
  userConfirmed = confirm(confirmMessage);
=======
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + unicodeShift;
  _ = confirm(confirmMessage);
>>>>>>> upstream/master:interact/3-numbers/exercises/6-unicode-shuffle/1-blanks.js
}

let encodedString = '';

for (const character of userInput) {
<<<<<<< HEAD:interact/3-numbers/exercises/6-ascii-shuffle/1-blanks.js
  const characterCode = character.charCodeAt();
  const newCharCode = characterCode + asciiShift;
  const encodedCharacter = String.fromCharCode(newCharCode);
=======
  const characterCode = character._();
  const newCharCode = characterCode + unicodeShift;
  const encodedCharacter = String._(newCharCode);
>>>>>>> upstream/master:interact/3-numbers/exercises/6-unicode-shuffle/1-blanks.js
  encodedString += encodedCharacter;
}

const finalMessage = `"${userInput}" -> "${encodedString}"`;
alert(finalMessage);
