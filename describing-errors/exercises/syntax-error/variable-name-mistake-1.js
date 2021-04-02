'use strict';


/*
  browser: Chrome
  environment:

  name: SyntaxError
  message: Unexpected number

  callstack:
  
evaller.onload	@	study-with.js:40
load (async)		
(anonymous)	@	study-with.js:27
studyWith	@	javascript-class.js:316
(anonymous)	@	javascript-class.js:158


  life cycle: declaration phase

  the mistake: cannot create numbes as variables

  the fix(es): change the number for a string
*/


const 3 = 'three';
