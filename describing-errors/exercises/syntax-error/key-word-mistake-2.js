'use strict';

/*
  browser: Chrome
  environment:

  name: SyntaxError
  message: Unexpected token 'for'

  callstack:

evaller.onload	@	study-with.js:40
load (async)		
(anonymous)	@	study-with.js:27
studyWith	@	javascript-class.js:316
(anonymous)	@	javascript-class.js:158
﻿

  life cycle: declaration phase

  the mistake: trying to declare a for loop  as a variable

  the fix(es): delete the keyword const and = sign 
*/

const for = (let i = 0; i < 5; i++) { //error and mistake 
  console.log(i);
}
