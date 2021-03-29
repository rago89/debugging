'use strict';


/*
  browser: Firefox dev. Edition

  name: Uncaught SyntaxError
  message: continue must be inside loop

  callstack:
  
  onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    JavaScriptFE http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:18
    <anonymous> http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/init.js:3
blank:23:2


  life cycle: declaration phase

  the mistake: continue statement inside add function line 31

  the fix(es): change the continue statement by return.
*/


const add = (x = 0, y = 0) => {
  continue x + y; // error and mistake
};

const seven = add(3, 4);
