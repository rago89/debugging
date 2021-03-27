'use strict';


/*
  browser: Firefox dev. edition

  name: SyntaxError
  message: unlabeled break must be inside loop or switch

  callstack:

  Uncaught SyntaxError: unlabeled break must be inside loop or switch
    onload http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    studyWithEval http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:158
    initJsUi http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:158
    JavaScriptFE http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:18
    <anonymous> http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/init.js:3
blank:20:2

  the mistake: ilegal break statement 
  the fix(es): delete the break statement
*/

const userName = 'wingdoz';

if (userName.length > 3) {
  console.log(userName);
  break; // error //mistake
}
