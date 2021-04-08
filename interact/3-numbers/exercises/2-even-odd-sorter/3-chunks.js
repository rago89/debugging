'use strict';

let userNumber = NaN;
while (true) {
  const userInput = prompt('enter a number');

  /* -- BEGIN: exit if userInput is a valid number -- */
  userNumber = Number(userInput);
  /* -- END -- */
  if (Number.isNaN(userNumber)) {
    alert(`"${userInput}" is not a number `);
    continue;
   } else {
     break;
   }
}

const message = userNumber % 2 === 0 ? ' is even' : ' is odd';
alert(userNumber + message);
