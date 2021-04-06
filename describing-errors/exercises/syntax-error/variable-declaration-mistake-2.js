"use strict";

/*
  environment: Chrome

  name: SyntaxError
  message: Missing initializer in const declaration
  callstack:
  	evaller.onload	@	study-with.js:40
load (async)		
(anonymous)	@	study-with.js:27
studyWith	@	javascript-class.js:316
(anonymous)	@	javascript-class.js:161
﻿
​
  life cycle: declaration phase

  the mistake: Missing initializer line 25

  the fix(es): initialize as empty string
*/

const userName = "qopiznu";

const path; // error

if (userName.length > 4) {
  path = "if";
} else {
  path = "else";
}

console.log(path);
