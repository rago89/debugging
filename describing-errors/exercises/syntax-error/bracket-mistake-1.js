'use strict';


/*
  browser: Firefox dev. edition

  name: SyntaxError
  message: missing } in compound statement

  callstack:

  Uncaught SyntaxError: missing } in compound statement      blank:22note: { opened at line 32, column 28
    onload http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    studyWithEval http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:158
    initJsUi http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:158
    JavaScriptFE http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:18
    <anonymous> http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/init.js:3


  the mistake: missing } in compound statement
  the fix(es): put the }
  life cycle:

  the mistake:

  the fix(es):
*/



for (let i = 0; i < 5; i++) {
  console.log(i);


