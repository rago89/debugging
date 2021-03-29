'use strict';

/*
  browser: Firefox dev. Edition

  name: TypeError
  message: can't access property "length", userInput is null

  callstack:

  <anonymous> about:blank line 40 > injectedScript:20
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:158
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:158
    JavaScriptFE http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:18
    <anonymous> http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/init.js:3
bl

  life cycle: execution phase

  the mistake: the value of user input is an object and  should be a string or array

  the fix(es): change the object null to a string
*/

const userInput = null; // mistake

console.log(userInput.length); // error
