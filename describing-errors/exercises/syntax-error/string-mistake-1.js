'use strict';

/*
  environment:

  name: SyntaxError
  message:  '' string literal contains an unescaped line break

  callstack:
   
  onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    JavaScriptFE http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:18
    <anonymous> http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/init.js:3
blank:20:18

  life cycle: declaration phase

  the mistake: missing break line \n and closing quote line 28 and missing starting quote line

  the fix(es): add \n and closing quote line 29 and add starting quote line

*/

const a = 'this is 
two lines';
