"use strict";

/*

  remove all the vowels from user input

*/
const vowels = "aeiou";
let inputWithoutVowels = "";
let userInput = "";
let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt("enter a word, all vowels will be removed:");
  console.log("userInput:", typeof userInput, userInput);

  if (!userInput) {
    alert("nope, enter something");
    continue;
  }
  // The user must enter at least one vowel
  if (!userInput.toLowerCase().includes("a", "e", "i", "o", "u")) {
    alert("nope, enter at least one vowel");
    continue;
  }

  const confirmMessage =
    "do you want to remove vowels from this word?\n\n" +
    '- "' +
    userInput +
    '"';
  userConfirmed = confirm(confirmMessage);
}

// <---------------------FIRST METHOD-------------------------->

// the method replace is goin to remove all the vowels in a sentence using de sintax (/inside text to be removed and | separator /gi)
inputWithoutVowels = userInput.toLowerCase().replace(/a|e|i|o|u/gi, "");

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

const finalMessage = `"${userInput}" -> "${inputWithoutVowels}"`;
alert(finalMessage);
