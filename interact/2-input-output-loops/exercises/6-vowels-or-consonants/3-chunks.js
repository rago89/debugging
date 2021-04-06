'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
while (true) {
  userInput = prompt('enter a word to filter:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const whiteSpaceRegex = new RegExp('\\s', 'g');
  if (whiteSpaceRegex.test(userInput)) {
    alert("words can't have white space");
    continue;
  }

  const confirmMessage =
    'do you want to filter this word?\n\n' + '- "' + userInput + '"';
 let userConfirmed = confirm(confirmMessage);

 if (userConfirmed) {
   break;
 }
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

let toRemove = '';
if (removeVowels) {
  toRemove = 'BCDFGHJKLMNPQRSTVWXYZ';
} else {
  toRemove = 'AEIOU';
}

/* -- BEGIN: filter input -- */
let filteredInput = '';
for (const character of userInput) {
  const lowerCaseCharacter = character.toLowerCase();
  // is going to search all the characters that are consonants and is going to return it
  if (toRemove.toLowerCase().includes(lowerCaseCharacter)) {
    filteredInput += lowerCaseCharacter;
  } 
}
/* -- END: filter input -- */

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
