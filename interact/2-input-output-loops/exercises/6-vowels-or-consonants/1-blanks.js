'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {
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
  userConfirmed = confirm(confirmMessage);
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

const toRemove = removeVowels ? 'bcdfghjklmnpqrstvwxyz' : 'aeiou';

let filteredInput = '';
for (const character of userInput) {
  const lowerCaseCharacter = character.toLowerCase();
  // is going to search all the characters that are consonants and is going to return it
  if (toRemove.includes(lowerCaseCharacter)) {
    filteredInput += lowerCaseCharacter;
  } 
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);