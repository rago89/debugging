'use strict';


/*
  browser: Chrome


  name: SyntaxError
  message: Unexpected token '}'

  callstack:

  VM156:20 Uncaught SyntaxError: Unexpected token '}'
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
evaller.onload @ study-with.js:40
load (async)
(anonymous) @ study-with.js:27
studyWith @ javascript-class.js:316
(anonymous) @ javascript-class.js:158

  the mistake: extra closing curly brace
  the fix(es): delete the ectra closing curly brace line 27
  life cycle:

  the mistake:

  the fix(es):
*/



for (let i = 0; i < 5; i++) { } // mistake
console.log(i);
} // error
