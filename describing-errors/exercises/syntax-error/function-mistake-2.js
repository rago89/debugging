'use strict';

/*
  browser: firefox dev. Edition

  name: SyntaxError
  message: invalid arrow-function arguments (parentheses around the arrow-function may help)

  callstack:

  onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    JavaScriptFE http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:18
    <anonymous> http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/init.js:3
blank:20:23

  life cycle: declaration phase

  the mistake: missing parenthesis for parameters

  the fix(es): add open paren before x line 27 and close paren after 0 same line
*/

const add = x = 0, y = 0 => { // error
  return x + y;
};

const seven = add(3, 4);
