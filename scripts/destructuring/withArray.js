/**
 * Array destructuring
 */

const replaceValue = ([first, second]) => {
  first = "hello";
  second = "world";

  return [first, second];
};

const arr = [1, 2];
const replacedArr = replaceValue(arr);

console.log(replacedArr);
