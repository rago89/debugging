'use strict';

/* look out for:

  - loop check logic
  - variable declarations
  - assignment vs. comparison
  - wrong interaction functions
  - off-by-one in for loop

*/

let userInput = '';
let userConfirmed = false;
<<<<<<< HEAD
while (!userConfirmed) {
  userInput = prompt('enter a word to filter:');
=======
while (userConfirmed) {
  const userInput = prompt('enter a word to filter:');
>>>>>>> upstream/master

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  // regular expression, this works!
  const whiteSpaceRegex = new RegExp('\\s', 'g');
<<<<<<< HEAD
  if (whiteSpaceRegex.test(userInput)) {
=======
  if (whiteSpaceRegex.test(userInput) === true) {
>>>>>>> upstream/master
    alert("words can't have white space");
  } else {
    const confirmMessage =
      'do you want to filter this word?\n\n' + '- "' + userInput + '"';
    userConfirmed = confirm(confirmMessage);
  }
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

const toRemove = removeVowels ? 'bcdfghjklmnpqrstvwxyz' : 'aeiou';

let filteredInput = '';
for (let i = 0; i <= userInput.length -1; i++) {
  const lowerCaseCharacter = userInput[i].toLowerCase();
  if (toRemove.includes(lowerCaseCharacter)) {
    filteredInput += lowerCaseCharacter;
  }
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
