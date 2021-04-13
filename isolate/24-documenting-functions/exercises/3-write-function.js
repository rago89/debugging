'use strict';

// write the function to pass the assertions
// fill in the documentation to describe the function

/**
 * A function that concatenates text
 * @param {string} param1
 * @param {string} param2
 * @param {string} param3
 * @returns a concatenation of three parameters
 * Is an argument is not passed it will return an empty string
 */
const scramble = (param1 = '', param2 = '', param3 = '') => {
  return param3 + param1 + param2;
};

const _1_expect = "yxz";
const _1_actual = scramble('x', 'z', 'y');
const _1_test = _1_actual === _1_expect;
console.assert(_1_test, 'Test 1');

const _2_expect = "zxy";
const _2_actual = scramble('x', 'y', 'z');
const _2_test = _2_actual === _2_expect;
console.assert(_2_test, 'Test 2');

const _3_expect = "yzx";
const _3_actual = scramble('z', 'x', 'y');
const _3_test = _3_actual === _3_expect;
console.assert(_3_test, 'Test 3');

