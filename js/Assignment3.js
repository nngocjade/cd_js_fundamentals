// 5. Assignment 3 - Conditionals
// Declare a variable named x and assign it with a number of your choice.
// Write code to log to the console whether x is equal to 0 or a positive/negative number in an "user-friendly" way. Example 5 is a positive number, 0 is zero.
// Declare 3 variables named a, b, c, and assign them with values in the range 0 to 99 of your choice. Write code to print out the smallest and biggest number between them. Example:

console.log("----------------Assignment 3 - Conditionals-------------------");

function equalZeroEvenOrOddNumber(x) {
  if (x === 0) {
    console.log(`${x} is equal to zero`);
  } else if (x % 2 == 0) {
    console.log(`${x} is an even number`);
  } else {
    console.log(`${x} is an odd number`);
  }
}

equalZeroEvenOrOddNumber(5);
equalZeroEvenOrOddNumber(4);
equalZeroEvenOrOddNumber(0);

function smallestAndBiggest(a, b, c) {
  let smallest = a;
  let biggest = a;

  if (smallest > b) {
    smallest = b;
  }
  if (smallest > c) {
    smallest = c;
  }
  if (biggest > b) {
    biggest = b;
  }
  if (biggest < c) {
    biggest = c;
  }
  return (result = `${smallest} is the smallest number, and ${biggest} is the biggest number`);
}
console.log(smallestAndBiggest(5, 20, 70));
