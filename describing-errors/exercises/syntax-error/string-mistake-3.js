'use strict';

/*
  browser: firefox dev. Edition
  environment:

  name: SyntaxError
  message: unexpected token: string literal

  callstack:

  onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    JavaScriptFE http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:18
    <anonymous> http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/init.js:3
blank:20:41

  life cycle: declaration phase

  the mistake: intenal single quote inside the string
 
  the fix(es):  delete the single quotes
*/

const quotesInQuotes = 'remind yourself ''i can do this!'' at least once a day';
