// Assignment 2 - Operators & Comparison
// Print the results of the expressions below in this format:

// EXPRESSION = RESULT
// Example:

// "Coder" + "School" = "CoderSchool"
// Before you execute the code, predict in your head what will be returned.

console.log("``````````````````````````````````````````````````````````");

let assignment2 =
  "ASSIGNMENT 2" + " : " + "Operators" + " +  & " + "Comparison";
console.log(assignment2);

// --------------------Operators------------------------
console.log("---Operators---");

let ten = 10;
let twentyFour = 24;
let addition = 10 + 24;
console.log(ten + " + " + twentyFour + " = " + addition);
//
let string = "10" + "24";
console.log('"10"' + " + " + '"24"' + " = " + string);
//
let concatenation = "Hello" + " " + 2021;
console.log('"Hello"' + " + " + '" " ' + " + " + 2021 + " = " + concatenation);
//
let math = 1 + 2 * 3;
console.log("1 + 2 * 3" + " = " + math);
//
let math1 = (1 + 3) ** 2;
console.log("(1 + 3) ** 2" + " = " + math1);
//
let division = 1 / 0;
console.log("1 / 0" + " = " + division);
//
let modulusDivisionRemainder = 6 % 2;
console.log("6 % 2" + " = " + modulusDivisionRemainder);
//
let modulusDivisionRemainder1 = 5.5 % 2;
console.log("5.5 % 2" + " = " + modulusDivisionRemainder1);
//
let number = Number("123");
console.log(number);
//
let typeOf = typeof (1 + "");
console.log(typeOf);
//
// ----------------Logical & Comparison-------------------
console.log("---Logical & Comparison ---");

let equalTo = 5 == "5";
console.log("5 == '5'" + " = " + equalTo);
//
let equalValueAndEqualType = 5 === "5";
console.log(' 5 === "5"' + " = " + equalValueAndEqualType);
//
let notEqual = 8 != 8.0;
console.log("8 != 8.0" + " = " + notEqual);
//
let notEqualValueOrNotEqualType = 8 !== 8.0;
console.log("8 !== 8.0" + " = " + notEqualValueOrNotEqualType);
//
let notEqualValueAndNotEqualType = "true" === true;
console.log('"true" === true' + " = " + notEqualValueAndNotEqualType);
//
let lessThanOrEqualTo = 4 <= 4.0;
console.log("4 <= 4.0" + " = " + lessThanOrEqualTo);
//
let greaterThanOrEqualTo = 7 >= 7;
console.log("7 >= 7" + " = " + greaterThanOrEqualTo);
//
let trueAndTrue = true && true;
console.log(`true && true = ${trueAndTrue}`);
//
let trueAndFalse = true && false;
console.log(`true && false = ${trueAndFalse}`);
//
let trueOrTrue = true || true;
console.log(`true || true = ${trueAndTrue}`);
//
//The logical OR ( || ) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true. It is typically used with Boolean (logical) values. When it is, it returns a Boolean value.
let falseOrTrue = false || true;
console.log(`false || true = ${falseOrTrue}`);
//
let notTrue = !true;
console.log(`!true = ${notTrue}`);
//
let notFalse = !false;
console.log(`!false = ${notFalse}`);
//
//The logical AND (&&) operator (logical conjunction) for a set of operands is true if and only if all of its operands are true. It is typically used with Boolean (logical) values. When it is, it returns a Boolean value. However, the && operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.
let falseAndOrTrue = false && (true || true);
console.log(`false && (true || true) = ${falseAndOrTrue}`);
//
let falseAndOrTrue1 = (false && true) || true;
console.log(`(false && true) || true = ${falseAndOrTrue1}`);
