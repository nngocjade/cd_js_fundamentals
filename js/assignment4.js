// 6. Assignment 4 - Loops
// Declare two integers a and b (0 < a < b < 10). Write a for loop to print all numbers from a to b inclusively, in increasing order, if a < b, or in decreasing order, if a > b.
// // Example input: a = 1, b = 5
// // Example output: 1 2 3 4 5

// // Example input: a = 7, b = 4
// // Example output: 7 6 5 4

console.log(`Assignment 4 - Loops`);

function printAtoB(a, b) {
  let s = " ";

  if (a < b) {
    for (let i = a; i <= b; i++) {
      s = s + i + " ";
    }
  } else {
    for (let i = a; i >= b; i--) {
      s = s + i + " ";
    }
  }
  console.log(s);
}
printAtoB(1, 10);

// Declare two integers x and y (0 < x < y < 999). Write a loop to calculate the sum of numbers from x to y inclusively. Print out the result in an user-friendly way.
// // Example: Sum of numbers from 1 to 800 is: ...

function sumRangeOfTwoNumbers(x, y) {
  j = 0;
  for (let i = x; i <= y; i++) {
    j += i;
    console.log((j += i));
  }
  console.log(`The sum of numbers between ${x} and ${y} is: ${j}`);
}
sumRangeOfTwoNumbers(1, 10);

// Declare a number that has 4 digits of your choice. Write code to print out the sum of its digit.
// // Example input: 1024
// // Example output: Sum of digits of 1024 is 7

let tempArr = [];

function sumOfDigits(num) {
  let sum = 0;
  let tempArr = [];
  let digit = num.toString();

  // fill temp array
  for (let i = 0; i < digit.length; i++) {
    tempArr[i] = digit.charAt(i);
  }
  // using another for loop to sum all the digits for the tempArr
  for (let i = 0; i < tempArr.length; i++) {
    console.log(tempArr[i]);
    sum += parseInt(tempArr[i]); //The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN . If not NaN , the return value will be the integer that is the first argument taken as a number in the specified radix
  }
  console.log(sum);
}
sumOfDigits(2654);
sumOfDigits(4356593786);
