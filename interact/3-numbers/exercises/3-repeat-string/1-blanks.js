'use strict';

let userInput = '';
let repeatedInput = '';
let repetitions = NaN;
<<<<<<< HEAD:interact/4-iterating-user-data/exercises/3-repeat-string.js
while (true) {

=======
while (_) {
>>>>>>> upstream/master:interact/3-numbers/exercises/3-repeat-string/1-blanks.js
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

<<<<<<< HEAD:interact/4-iterating-user-data/exercises/3-repeat-string.js
/* repeat the user input `repetitions` number of times */
for (let i = 0; i < repetitions; i++) {
  repeatedInput = repeatedInput + userInput + ' ';
}

console.log('repeatedInput:', typeof repeatedInput, repeatedInput);

=======
let repeatedInput = '';

/* repeat the user input `repetitions` number of times */
for (_; _; _) {}
>>>>>>> upstream/master:interact/3-numbers/exercises/3-repeat-string/1-blanks.js

const finalMessage = `"${userInput}" -> "${repeatedInput}" `;
alert(finalMessage);
