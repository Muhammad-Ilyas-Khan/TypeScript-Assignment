/* 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */
// test for equality and inequality with strings
var myName = "Ilyas";
console.log("Is myName equal to 'Ilyas'?", myName = "Ilyas");
console.log("Is myName not equal to 'Ahmad'?", myName !== "Ahamd");
// test using the lowercase function
var day = "Tuesday";
console.log("Is day lowercase 'tuesday'?", day.toLowerCase() == "tuesday");
console.log("Is day not lowercase 'monday'?", day.toLowerCase() !== "monday");
// numerical tests involving various operations
var number = 13;
console.log("Is number equal to 13?", number == 13);
console.log("Is number not equal to 7?", number !== 7);
console.log("Is number greater than 5?", number > 5);
console.log("Is number less than 20?", number < 20);
console.log("Is number greater than or equal to 10?", number >= 10);
console.log("Is number less than or equal to 15", number <= 15);
// tests using 'and' and 'or' operators
var age = 21;
var hasLicense = true;
console.log("Is age greater tha 18 and has a license?", age > 18 && hasLicense);
console.log("Is age less tha 16 or doesn't have a license?", age < 16 || !hasLicense);
// test whether an item is in an arry
var fruits = ["apples", "mangoes", "oranges"];
console.log("Are 'apples' in the array?", fruits.includes('apples'));
// test whether an item is not in the array
var colors = ["green", "black", "white"];
console.log("Is 'blue' not in the colors array?", !colors.includes('blue'));
