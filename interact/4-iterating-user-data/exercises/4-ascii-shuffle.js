'use strict';


let userInput = '';
let asciiShift = NaN;
while (true) {

  userInput = prompt('enter a phrase, each character will be shifted by character code:');
  console.log('userInput:', typeof userInput, userInput);

  if (!userInput) {
    alert('nope, enter something');
    continue;
  }

  const asciiShiftInput = prompt('how many ascii numbers do you want the characters to shift?');
  console.log('asciiShiftInput:', typeof asciiShiftInput, asciiShiftInput);

  asciiShift = Number(asciiShiftInput);
  console.log('asciiShift:', typeof asciiShift, asciiShift);

  if (Number.isNaN(asciiShift)) {
    alert('"' + asciiShiftInput + '" is not a number');
    continue;
  }


  const confirmMessage = 'is this correct?\n\n'
    + '- "' + userInput + '"\n'
    + '- ' + asciiShift;
  const confirmation = confirm(confirmMessage)
  if (confirmation) {
    break;
  }

}


let encodedString = '';

// iterate through each character in the user input
for (let character of userInput) {
  // find the charCode for the current character
  const characterToCode = character.charCodeAt();
  // add asciiShift to the character code
  const characterToCodeAcc = characterToCode + asciiShift;
  // convert the new character code to a string
  const characterCodedToString = String.fromCharCode(characterToCodeAcc);
  // add the new character to the encoded string
  encodedString += characterCodedToString;
}

console.log('encodedString:', typeof encodedString, encodedString);


const finalMessage = `"${userInput}" -> "${encodedString}"`;
alert(finalMessage);
