"use strict";

/*
  browser: Firefox dev. Edition
  environment:

  name: ReferenceError
  message: isValidUserName is not defined

  callstack:
  Uncaught ReferenceError: isValidUserName is not defined  blank line 40 > injectedScript:46:33
    <anonymous> about:blank 
    onload http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    studyWithEval http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:158
    initJsUi http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:158
    JavaScriptFE http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:18
    <anonymous> http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/init.js:3
    blank line 40 > injectedScript:24:33
    <anonymous> about:blank line 40 > injectedScript:24
    onload http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:40
    (Async: EventHandlerNonNull)
    studyWithEval http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:27
    studyWith http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:316
    initJsUi http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:158
    (Async: EventListener.handleEvent)
    initJsUi http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:158
    JavaScriptFE http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:18
    <anonymous> http://localhost:5000/own_static_resources_lenses/study/static/types/javascript/init.js:3
    InnerModuleEvaluation self-hosted:2379
    evaluation self-hosted:2330


  life cycle: execution phase

  the mistake: Escope error isValidUserName is declared only inside of the condition and is declared twice
  the fix(es): declare outside of the condition and call it in the condition
*/

const userName = "chiobin";
console.log("userName:", typeof userName, userName);

if (userName.length > 4) {
  const isValidUserName = true; // Mistake
} else {
  const isValidUserName = false; // Mistake
}

console.log("isValidUserName:", typeof isValidUserName, isValidUserName); // Error
