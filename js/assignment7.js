// 9. 🚀 Assignment 7 - Random Number
console.log(`Assignment 7 - Random Number`);
// To get a random number, we will use a built-in function of JavaScript called Math.random(). This function will return a random between 0 and less than 1 (i.e. 0.99999...).

// Let's try it!

console.log(Math.random());
// If you hit Run a few times (or copy and paste this line multiple times), you should see a different result each time.

// So how do we turn these results into usable numbers? If we multiply them by 3 (or any number), we will get results ranging from 0 (inclusive) and 3 (exclusive):

// If we just take the integer part of each number, then the results will be among 0, 1 and 2 (but not 3)! And we can use Math.floor() to round down these floating numbers to their integer values. For example, the result of Math.floor(5.95) will be 5.

// Combining Math.random() and Math.floor(), we can get random integers between 0 and some number - 1.

console.log(Math.floor(Math.random() * 3)); // => will output a number between 0 and 2
// Print out a random number between 0 and 1
console.log(Math.random() * 1);
// Print out a random number between 0 and 10
console.log(Math.floor(Math.random() * 10));
