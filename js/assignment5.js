// 7. Assignment 5 - Functions
console.log("7. Assignment 5 - Functions");
// Write a function that does not take any argument, and it logs "Wow, it worked!" to the console
function writeSomething() {
  let string = "wow it worked!!!";
  console.log(string);
  return string;
}
writeSomething();
// Write a function that does not take any argument, and it returns your favorite movie as a string. "console.log" the result
function favoriteTvSeries() {
  favTvSeries = "Ten Miles of Peach Blossom";
  console.log(`My favorite T.V Series is : '${favTvSeries}'`);
}
favoriteTvSeries();
// Write a function that takes one argument, your name, and return your name in the middle of a sentence. "console.log" the result
function NameInMiddle(name) {
  console.log(`My name is ${name}. Nice to Meet you!`);
}
NameInMiddle("Nguyen Ai Ngoc");
// Put the code of the previous Assignment 4 in functions that take the input numbers as arguments and return the expected output
// // Example
function seriesOfNumber(a, b) {
  let s = " ";

  if (a < b) {
    for (let i = a; i <= b; i++) {
      s = s + i.toString() + " ";
    }
  } else {
    for (let i = a; i >= b; i--) {
      s = s + i.toString() + " ";
    }
  }
  console.log(s);
}

seriesOfNumber(8, 5); // In the console: 8 7 6 5
