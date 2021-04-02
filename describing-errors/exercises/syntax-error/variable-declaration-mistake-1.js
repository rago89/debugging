"use strict";

/*
  browser: Chrome
  environment:

  name: SyntaxError
  message: Identifier 'tree' has already been declared

  callstack:
  
evaller.onload	@	study-with.js:40
load (async)		
(anonymous)	@	study-with.js:27
studyWith	@	javascript-class.js:316
(anonymous)	@	javascript-class.js:158
﻿

  life cycle: declaration phase

  the mistake: keyword let added line 27

  the fix(es): delete the let keyword
*/

let tree = "oak";

let tree = "birch"; //error
