'use strict';


/*
  browser: Edge 

  name: SyntaxError
  message: Undefined label 'x'

  callstack:

  Uncaught SyntaxError: Undefined label 'x'         VM115:32
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.console (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:316)
    at HTMLButtonElement.<anonymous> (javascript-class.js:158)
evaller.onload @ study-with.js:40
(anonymous) @ study-with.js:42
studyWith @ javascript-class.js:316
(anonymous) @ javascript-class.js:158
load (async)
(anonymous) @ study-with.js:27
studyWith @ javascript-class.js:316
(anonymous) @ javascript-class.js:158

  the mistake: break estatement inside function line 32
  the fix(es): delete the break statement
*/


const add = (x = 0, y = 0) => {
  break x + y;
};

const seven = add(3, 4);
