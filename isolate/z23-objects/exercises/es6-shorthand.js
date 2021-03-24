'use strict';

(() => {
  const wet = 'soup';
  const dry = 'bread';
  const obj = { wet, dry };
  console.assert(obj.dry === 'bread', 'Test 1');
  console.assert(obj.wet === 'soup', 'Test 2');
  console.assert(deepCompare(obj, { dry: 'bread', wet: 'soup' }), 'Test 3');
})();

(() => {
  const tall = 'tree';
  const obj = {
    tall,
    short: 'bush',
  };
  console.assert(obj.short === 'bush', 'Test 4');
  console.assert(obj.tall === 'tree', 'Test 5');
  console.assert(deepCompare(obj, {tall: 'tree', short: 'bush' }), 'Test 6');
})();

(() => {
  const swimming = 'mackerel';
  const obj = {
    flying: 'crane',
    swimming,
    running: 'cheetah',
  };
  console.assert(obj.flying === 'crane', 'Test 7');
  console.assert(obj.running === 'cheetah', 'Test 8');
  console.assert(obj.swimming === 'mackerel', 'Test 9');
  console.assert(deepCompare(obj, {    flying: 'crane',
    swimming,
    running: 'cheetah',}), 'Test 10');
})();

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}
