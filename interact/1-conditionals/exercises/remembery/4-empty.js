"use strict";

alert(`Game to remenber the phrases.
You will prompted 3 phrases.
You have to guess one of three phrases.
`);

// Setting data

let input1 = null;
let input2 = null;
let input3 = null;
let userGuess = "";
let phraseToGuess = "";
// flags
let userHasGuessed = false;
// 3 prompts to the user to input

while (input1 === "" || input1 === null) {
  input1 = prompt("Enter first phrase to guess");
}
// printing in the console input 1
console.log("First input: ", input1, typeof input1);

while (input2 === "" || input2 === null) {
  input2 = prompt("Enter second phrase to guess");
}
// printing in the console input 2
console.log("Second input: ", input2, typeof input2);

while (input3 === "" || input3 === null) {
  input3 = prompt("Enter third phrase to guess");
}
// printing in the console input 3
console.log("Third input: ", input3, typeof input3);

// promt alert showing to that all phrases are saved
alert("all saved! get ready to remember");

// Setting random number to guess
const randomNumberToAsk = Math.ceil(Math.random() * 3);

// printing in the console randomNumberToAsk
console.log(
  "Random number to ask: ",
  randomNumberToAsk,
  typeof randomNumberToAsk
);

if (randomNumberToAsk === 1) {
  phraseToGuess = input1;
}
if (randomNumberToAsk === 2) {
   phraseToGuess = input2;3
} 
 if (randomNumberToAsk === 3) {
   phraseToGuess = input3;
} 

// comparing user guess with initial phrases

while (!userHasGuessed) {
   userGuess = prompt('Enter phrase number ' + randomNumberToAsk);

   if (phraseToGuess === userGuess) {
     alert('correct! phrase ' + randomNumberToAsk + ' was ' + phraseToGuess);
     userHasGuessed = true;
   } else {
     alert('Nope :(')
   }

} 





