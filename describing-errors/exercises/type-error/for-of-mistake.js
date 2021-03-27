'use strict';

/*
  browser: Edge

  name: TypeError
  message: max is not iterable

  callstack:
   Uncaught TypeError: max is not iterable  VM202:33 
    at <anonymous>:17:20
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.console (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:316)
    at HTMLButtonElement.<anonymous> (javascript-class.js:158)
(anonymous) @ VM157:17
evaller.onload @ study-with.js:40
(anonymous) @ study-with.js:42
studyWith @ javascript-class.js:316
(anonymous) @ javascript-class.js:158
load (async)
(anonymous) @ study-with.js:27
studyWith @ javascript-class.js:316
(anonymous) @ javascript-class.js:158


  the mistake: the variable max should be an array, string or object
  the fix(es): change the value of the variable ot=r change the tipe of loop
*/

const max = 12;

for (const step of max) {
  console.log(step);
}
