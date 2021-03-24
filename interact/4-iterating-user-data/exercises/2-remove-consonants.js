'use strict';

/*

  Remove all the consonants from user input

*/
const consonants = 'bcdfghijklmnpqrstvwxyz';
let inputWithoutConsonants = '';
let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {

  userInput = prompt('enter a word, all consonants will be removed:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  // if (!userInput.toLowerCase().includes("b", "c", "d", "f", "g", 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z')) {
  //   alert("nope, enter at least one consonant");
  //   continue;
  // }

  const confirmMessage = 'do you want to remove consonants from this word?\n\n'
    + '- "' + userInput + '"';
  userConfirmed = confirm(confirmMessage);

}




// <---------------------FIRST METHOD-------------------------->

// the method replace is goin to remove all the vowels in a sentence using de sintax (/inside text to be removed and | separator /gi)
inputWithoutConsonants = userInput.toLowerCase().replace(/b|c|d|f|g|h|i|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z/gi, "");

// there is more than one way to write this loop
//  try to find at least 3

// <---------------------SECOND METHOD-------------------------->

// for (const character of userInput) {
//   if (vowels.toLowerCase().search(character) === -1) {
//     inputWithoutVowels = inputWithoutVowels + character;
//   }
// }

// <---------------------THIRD METHOD-------------------------->

// for (let i = 0; i < userInput.length; i++) {
//  if (vowels.search(userInput[i]) === -1) {
//     inputWithoutVowels = inputWithoutVowels +
//     userInput[i];
// }
// }

// build up inputWithoutVowels by checking each character in the user input
//  if the character is a consonant, add it to inputWithoutVowels
//

const finalMessage = `"${userInput}" -> "${inputWithoutConsonants}"`;
alert(finalMessage);
