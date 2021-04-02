"use strict";

/*
  browser: Chrome
  environment:

  name: ReferenceError
  message: welf isnot defined

  callstack:

VM158:15 Uncaught ReferenceError: welf is not defined WBM158:15
    at <anonymous>:15:6
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
(anonymous) @ VM158:15
evaller.onload @ study-with.js:40
load (async)
(anonymous) @ study-with.js:27
studyWith @ javascript-class.js:316
(anonymous) @ javascript-class.js:158

  the mistake: welf is not defined
  the fix(es): declare with let or const according needs
  life cycle: execution phase

  the mistake: the variable welf is not declared

  the fix(es): use let or const to doclare it 
*/

welf = "ingrad"; // error

console.log(welf);
