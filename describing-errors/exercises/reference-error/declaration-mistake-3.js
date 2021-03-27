'use strict';

/*
  browser: Chrome

  name: ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  callstack:
  Uncaught ReferenceError: Cannot access 'isValidUserName' before initialization                        VM162:28
    at <anonymous>:19:19
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
(anonymous) @ VM162:19
evaller.onload @ study-with.js:40
load (async)
(anonymous) @ study-with.js:27
studyWith @ javascript-class.js:316
(anonymous) @ javascript-class.js:158

  the mistake: isValidUserName is called before initialization 
  the fix(es): declare la variable before the execution 
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 3) {
  isValidUserName = true; // Error
}

let isValidUserName; // Mistake

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
