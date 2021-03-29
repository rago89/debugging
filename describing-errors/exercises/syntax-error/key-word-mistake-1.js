'use strict';

/*
  browser: Chrome

  name: SyntaxError
  message:  Unexpected identifier

  callstack:

    at HTMLIFrameElement.evaller.onload (study-with.js:40)
evaller.onload @ study-with.js:40
load (async)
(anonymous) @ study-with.js:27
studyWith @ javascript-class.js:316
(anonymous) @ javascript-class.js:161

  life cycle: declaration phase

  the mistake: set an if keyword instead  for 
  the fix(es): change the if by for 
*/

if (let i = 0; i < 5; i++) {  // error and mistake
  console.log(i);
}
