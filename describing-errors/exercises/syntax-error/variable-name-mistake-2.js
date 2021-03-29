'use strict';

/*
  browser: Firefox dev. Edition 

  name: SyntaxError
  message:  redeclaration of non-configurable global 

  callstack:

  Uncaught SyntaxError: redeclaration of non-configurable global property undefined
    <anonymous> about:blank line 40 > injectedScript:1
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    JavaScriptFE http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:18
    <anonymous> http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/init.js:3
blank line 40 > injectedScript:1:1

  life cycle: declaration phase

  the mistake: undefined cannot be set a variable it belongs to the global object and cannot be modifyed

  the fix(es): change undefined for anothe variable name 
*/

const undefined = 'three';
