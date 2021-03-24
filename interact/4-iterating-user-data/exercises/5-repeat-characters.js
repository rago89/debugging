'use strict';

/* repeat each character in a string

  nested for loops!

*/


let userInput = '';
let repetitions = NaN;
while (true) {

  userInput = prompt('enter a phrase, each character will be repeated:');
  console.log('userInput:', typeof userInput, userInput);

  if (!userInput) {
    alert('nope, enter something');
    continue;
  }

  const repetitionsInput = prompt('how many times do you want to repeat each character?');
  console.log('repetitionsInput:', typeof repetitionsInput, repetitionsInput);

  repetitions = Number(repetitionsInput);
  console.log('repetitions:', typeof repetitions, repetitions);

  if (Number.isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }


  const confirmMessage = 'is this correct?\n\n'
    + '- "' + userInput + '"\n'
    + '- ' + repetitions;
  const confirmation = confirm(confirmMessage)
  if (confirmation) {
    break;
  }

}


let withRepeatedCharacters = '';

// loop through each character in the user input
for (let i = 0; i < userInput.length; i++) {
  // append each character multiple times to withRepeatedCharacters
  for (let j = 0; j < repetitions; j++) {
       withRepeatedCharacters += userInput[i];

     console.log('User input inside nested loop: ', userInput)   
  }
}

console.log('withRepeatedCharacters:', typeof withRepeatedCharacters, withRepeatedCharacters);


const finalMessage = `"${userInput}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);