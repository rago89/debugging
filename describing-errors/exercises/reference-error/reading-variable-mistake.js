"use strict";

/*
  browser: Firefox dev. edition
  name: ReferenceError
  message: can't access lexical declaration 'tomatoes' before initialization

  callstack:
    Uncaught ReferenceError: can't access lexical declaration 'tomatoes' before initialization  line 40 > injectedScript:15
    <anonymous> about:blank 
    onload http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    studyWithEval http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:158
    initJsUi http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:158
    JavaScriptFE http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:18
    <anonymous> http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/init.js:3


  life cycle: execution phase

  the mistake: the logging happened before the initializatio
  the fix(es): log after declaration
*/

console.log(tomatoes);

let tomatoes = "fresh";
