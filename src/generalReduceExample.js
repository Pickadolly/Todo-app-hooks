// GENERAL REDUCE FUNCTION
// (accumalatedValue, nextItem) => nextAccumulatedValue
// takes two values and reduces them down to one value
// 0 can be another value for example 5 then accumulate starts at 5 => 1 + 5 = 6
// taking all items in the array and sum them all together =>
// step1: 1 + 0 = 1
// step2: 1 + 2 = 3
// step4: 3 + 3 = 6
// step5: 6 + 4 = 10
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, nextThing) => accumulator + nextThing;
console.log(array1.reduce(reducer, 0));

// step1: "C" and so on => "CHICKEN"
const letters = ["c", "h", "i", "c", "k", "e", "n"];
const wordReducer = function (accumulatedResult, arrayItem) {
  return accumulatedResult + arrayItem.toUpperCase();
};

var word = letters.reduce(wordReducer, "");

// REACT REDUCER
// (state, action) => newState
// -the current state
// -an action that (may) update the state

