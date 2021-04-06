"use strict";

/*
  environment: Chrome

  name: SyntaxError
  message: Illegal return statement

  callstack:

  
at HTMLIFrameElement.evaller.onload (study-with.js:40)
evaller.onload @ study-with.js:40
load (async)
(anonymous) @ study-with.js:27
studyWith @ javascript-class.js:316
(anonymous) @ javascript-class.js:161

  life cycle: declaration phase

  the mistake: return statement in a inside of a condition

  the fix(es): change the 'return' inside of the control structure by 'break' statement
*/

let iterations = 0;

while (true) {
  iterations += 1;

  if (iterations > 8) {
    return; // mistake
  }
}

console.log(iterations);
