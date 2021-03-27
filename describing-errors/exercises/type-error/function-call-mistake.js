"use strict";

/*
  browser: Firefox dev. edition

  name: TypeError
  message: addedTowNumbers is not a function

  callstack:

  Uncaught TypeError: addedTowNumbers is not a function
    <anonymous> about:blank line 40 > injectedScript:20
    onload http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    studyWithEval http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:158
blank line 40 > injectedScript:20:30

  the mistake: bad function call 
  the fix(es): delete the keyword const, delete the = and + sign, add ( value, value )
  life cycle:

  the mistake:

  the fix(es):
*/

const addedTowNumbers = 3 + 4;

const addTowNumbers = (x = 0, y = 0) => {
  return x + y;
};
const seven = addedTowNumbers(3, 4);

console.assert(seven === addedTowNumbers);
