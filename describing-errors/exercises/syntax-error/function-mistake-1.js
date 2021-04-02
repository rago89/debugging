'use strict';

/*
  browser: Chrome
  environment:

  name: SyntaxError
  message:  Unexpected token '{'

  callstack:
  
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
evaller.onload @ study-with.js:40
load (async)
(anonymous) @ study-with.js:27
studyWith @ javascript-class.js:316
(anonymous) @ javascript-class.js:158

  life cycle: declaration phase

  the mistake: missing the arrow after the parameters sign 

  the fix(es): add the arrow after the parameters ans open curly braces
*/

const add = (x = 0, y = 0){ //error
  return x + y;
};

const seven = add(3, 4);
