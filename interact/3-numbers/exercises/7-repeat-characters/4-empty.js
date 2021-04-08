"use strict";
// An aplication that repeat each character of a string

/* data */
let userInput = "";
let repetitions = NaN;

/* flags */
let userHasinputed = false;
let userHasConfirmed = false;

// set iteraction to enter a word
while (!userHasConfirmed){
while (!userHasinputed) {
  userInput = prompt("Enter a word to repeat");

  userHasinputed = userInput
    ? (userHasinputed = true)
    : alert("please enter a word");
}
// set iteraction to enter the number of repetitiones
// updating flag
userHasinputed = false;

while (!userHasinputed) {
  // user iteration
  const repetitionsUserInput = prompt('enter number of repetitions');
  
    if (!repetitionsUserInput) {
     alert("please enter a number");
     continue;
    }
    // Number validation
    repetitions = Number(repetitionsUserInput)
    userHasinputed = Number.isNaN(repetitions) ? alert("Is not a number") : userHasinputed = true;  
}
    const confirmMessage =
      "is this correct?\n\n" + '- "' + userInput + '"\n' + "- " + repetitions;
    userHasConfirmed = confirm(confirmMessage);
}
// applying logic
let withRepeatedCharacters = "";

for (let i = 0; i < userInput.length; i++) {
  for (let j = 0; j < repetitions; j++) {
    withRepeatedCharacters += userInput[i];
  }
}

const finalMessage = `"${userInput}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);