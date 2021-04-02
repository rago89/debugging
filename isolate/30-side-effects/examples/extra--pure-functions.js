'use strict';

/* pure functions:
  only uses variables that are:
  - parameters or
  - locally declared
  do not modify data passed as arguments (no side effects)

  can you identify which of these are pure functions?
  questions to ask yourself:
  1. where was each variable declared?
  2. are array arguments copied?
  3. is the copy or the original modified?
*/

<<<<<<< HEAD:isolate/22-side-effects/5-pure-functions.js


const reverseArray1 = (arr) => {
=======
const reverseArray1 = arr => {
>>>>>>> upstream/master:isolate/28-side-effects/examples/extra--pure-functions.js
  return arr.reverse();
};
// Line 18, a function that reverse the index of an array
// line 19, return the array modified
// This function creates side eeffects because there isn't a new variable that copies the original array 

const reverseArray2 = arr => {
  return [...arr].reverse();
};
// Line 25, a function that reverse the index of an array and return a new copy of it
// Line 26, the function returns a new reversed copy of the array



const replaceEntry = (array, index ,newValue) => {
  const copy = [...array];
  copy[index] = newValue;
  return copy;
};
// Line 33, A function that replace the entry of an array
// Line 34, Creates a new variable and copy the array entered as argument
// Line 35, Is asigned the new value to the index [2] of the new variable named 'copy'
// Line 36, Return the new variable named 'copy' with the index [2] modified




const removeEntry = (arr, index) => {
  const copy = [...arr];
  arr.splice(index, 1);
  return copy;
};
// Line 46, A function that one entry of the array
// Line 47, Creates a new variable and copy the array entered as argument
// Line 48, Remove the index of the array, inside of the slice the first parameter is the index and the second is the number of indexs to be deleted
// Line 49, Return the new variable named 'copy' with the index removed



const addEntry = (arr, index, newEntry) => {
  const copy = [...arr];
  copy.splice(index, 1, newEntry);
  return copy;
};
// Line 46, A function that one entry of the array
// Line 47, Creates a new variable and copy the array entered as argument
// Line 48, Remove the index of the array, inside of the slice the first parameter is the index and the second is the number of indexs to be deleted
// Line 49, Return the new variable named 'copy' with the index [2] removed


// helpful links
//  https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
//  https://futurestud.io/tutorials/clone-copy-an-array-in-javascript-and-node-js
