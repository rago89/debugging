'use strict';

const word = 'pitsicola';

let index = 0;
let logThisOne = true;
while (index < word.length) {

  const nextLetter = word[index];

  index += 1;
  logThisOne = !logThisOne;

  if (nextLetter.length === word.length) {
    break;
  }

  console.log(index + ': ' + nextLetter);

}

console.assert(index === 9, 'there are this many letters in the word');
