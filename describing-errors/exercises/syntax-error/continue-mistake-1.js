'use strict';

/*
  browser: Firefox dev. Edition

  name: SyntaxError
  message: continue must be inside loop

  callstack:
  
   onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:161
    JavaScriptFE http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:18
    <anonymous> http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/init.js:3
bla

  life cycle: declaration phase

  the mistake: the continue statement must be inside of a loop not inside of an if condition

  the fix(es): delete the continue
*/

const userName = 'wingdoz';

if (userName.length > 3) {
  console.log(userName);
  continue;  // error and mistake
}
