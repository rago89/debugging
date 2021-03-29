'use strict';

/*
  browser: Chrome

  name: SyntaxError
  message: Unexpected token '{'

  callstack:
  
      at HTMLIFrameElement.evaller.onload (study-with.js:40)
evaller.onload @ study-with.js:40
load (async)
(anonymous) @ study-with.js:27
studyWith @ javascript-class.js:316
(anonymous) @ javascript-class.js:161


  life cycle: declaration phase

  the mistake: missing the if keyword after the else line 31

  the fix(es): add the if after the else
*/

const userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');

} else (userName.length < 5) {
  console.log('just right');

} else {
  console.log('too long');
}
