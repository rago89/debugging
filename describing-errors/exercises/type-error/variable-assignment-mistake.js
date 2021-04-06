"use strict";

/*
  environment: Chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  callstack:
   
evaller.onload	@	study-with.js:40
load (async)		
(anonymous)	@	study-with.js:27
studyWith	@	javascript-class.js:316
(anonymous)	@	javascript-class.js:161

  life cycle: declaration phase

  the mistake: the reassingmet is on the left side of the variable line 21

  the fix(es): invert the code
*/

let isHappy = false;

true = isHappy; // error
