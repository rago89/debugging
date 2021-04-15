'use strict';

let userInput = '';
let repetitions = NaN;

while (true) {
  userInput = prompt('enter a phrase to repeat:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const repetitionsInput = prompt('how many times do you want to repeat it?');
  /* -- BEGIN: gather input and cast it to a number -- */
  repetitions = Number(repetitionsInput);
  /* -- END -- */
  if (Number.isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }
  /* -- BEGIN: ask the user to confirm their input -- */
  const confirmMessage =
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + repetitions;
  const confirmation = confirm(confirmMessage);
  /* -- END -- */
  if (confirmation) {
    break;
  }
}
/* -- BEGIN: repeat the input -- */
let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}
/* -- END -- */

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
