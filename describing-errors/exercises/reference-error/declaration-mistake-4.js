"use strict";

/*
  browser:

  name: ReferenceError
  message: seven is not defined

  callstack: 
  Uncaught ReferenceError: seven is not defined
    at <anonymous>:19:7
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
(anonymous) @ VM185:19
evaller.onload @ study-with.js:40
load (async)
(anonymous) @ study-with.js:27
studyWith @ javascript-class.js:316
(anonymous) @ javascript-class.js:158

  the mistake: seven is not defined
  the fix(es): declare seven
  life cycle:

  the mistake:

  the fix(es):
*/

const add = (x = 0, y = 0) => {
  return x + y;
};

seven = add(3, 4);
