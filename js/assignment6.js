// 8. Assignment 6 - Swapping values of two variables
console.log(`Assignment 6 - Swapping values of two variables`);
// Declare variable a with value 111 and variable b with value 999

// Declare a temporary variable called temp
// Write the code to swap the value of a and b
// Log the values of a and b before and after swapping in an "user-friendly" way

function swapAandB() {
  let a = 111;
  let b = 999;
  let temp = 0;
  console.group(`swapAandB();`);
  console.log(`before a=${a}, b=${b}`);
  if ((temp = a)) {
    a = b;
    b = temp;
  }
  console.log(`after a=${a}, b=${b}`);
}
swapAandB();
console.groupEnd();

// Rocket (optional): Swap values without using the temporary variable.
function swapAandBWithoutTempValue() {
  let a = 222;
  let b = 333;

  console.group(`swapAandBWithoutTemp();`);
  console.log(`before a=${a}, b=${b}`);

  [a, b] = [b, a];

  console.log(`after a=${a}, b=${b}`);
}
swapAandBWithoutTempValue();
console.groupEnd();
