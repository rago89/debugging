"use strict";

let toRepeat = "";
let repetitions = NaN;

let notConfirmed = true;
while (notConfirmed) {
  toRepeat = prompt("enter a phrase, each character will be repeated:");

  if (toRepeat === "" || toRepeat === null) {
    alert("nope, enter something");
  } else {
    /* -- BEGIN: get a number from the user -- */
    while (true) {
      const userRepetitionsInput = prompt(
        "How many times do you want to repeat"
      );

      if (!userRepetitionsInput) {
        alert("ypu hayo to input the number of repetitions");
        continue;
      }

      repetitions = Number(userRepetitionsInput);

      if (Number.isNaN(repetitions)) {
        alert("is not a number");
      } else {
        break;
      }
      /* -- END -- */
    }
    const confirmMessage =
      "is this correct?\n\n" + '- "' + toRepeat + '"\n' + "- " + repetitions;
    notConfirmed = !confirm(confirmMessage);
  }
}
let withRepeatedCharacters = "";

/* -- BEGIN: repeat each character in the string -- */
for (let i = 0; i < toRepeat.length; i++) {
  for (let j = 0; j < repetitions; j++) {
    withRepeatedCharacters += toRepeat[i];
  }
}
/* -- END -- */

const finalMessage = `"${toRepeat}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
