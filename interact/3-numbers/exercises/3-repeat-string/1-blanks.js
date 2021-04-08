'use strict';

let userInput = '';
let repeatedInput = '';
let repetitions = NaN;



while (true) {

  /* gather a string from the user */
  userInput = prompt('enter a phrase to repeat:');

  /* make sure the user input something */
  if (!userInput) {
    alert('nope, enter something');
    continue;
  }

  /* ask the user for a number */
  const repetitionsInput = prompt('how many times do you want to repeat it?');

   if (!repetitionsInput) {
    alert('nope, enter something');
    continue;
  }

  /* convert their string to a number */
  repetitions = Number(repetitionsInput);

  /* make sure the user input a valid number */
  if (Number.isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }

  /* ask the user to confirm their input */
  const confirmMessage =
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + repetitions;
  const confirmation = confirm(confirmMessage);
  if (confirmation) {
    break;
  }
}

repeatedInput = '';

/* repeat the user input `repetitions` number of times */
for (let i = 0; i < repetitions; i++) {

  repeatedInput += userInput;
}


const finalMessage = `"${userInput}" -> "${repeatedInput}" `;
alert(finalMessage);
