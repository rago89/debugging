'use strict';

/*
  browser: Firefox dev. Edition

  name: SyntaxError
  message: missing variable name

  callstack:

  onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    JavaScriptFE http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:18
    <anonymous> http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/init.js:3
blank:20:6

  life cycle: declaration phase

  the mistake: missing variable name

  the fix(es): create a variable name
*/

const = 'always be learning'; // error
