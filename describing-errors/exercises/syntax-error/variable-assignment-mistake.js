'use strict';

/*
  browser: Chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  callstack:
   
      at HTMLIFrameElement.evaller.onload (study-with.js:40)
evaller.onload @ study-with.js:40
load (async)
(anonymous) @ study-with.js:27
studyWith @ javascript-class.js:316
(anonymous) @ javascript-class.js:161

  life cycle: creation phase

  the mistake: the assigment before the variable

  the fix(es): invert the statement
*/

let favoriteNumber = 4;
3 = favoriteNumber; // error
