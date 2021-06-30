
//basic math
// var sum = 4 + 4
// var minus = 8 - 2
// var mult = 4 * 3
// var dev = 9 / 3

// console.log(sum)
// console.log(minus)
// console.log(mult)
// console.log(dev)

//other math
// var expo = 3 ** 3
// console.log(expo)
// var mogulo = 7 % 2
// console.log(mogulo);


//string
// var exam1 = "hello"
// console.log(exam1.length);

// console.log(exam1.charAt(3));

// console.log(exam1.includes("ello"));


//Boolean
// var booltest1 = 2 > 0
// var booltest2 = 3 === 4
// var booltest3 = -4 <= .7

// console.log(booltest1);
// console.log(booltest2);
// console.log(booltest3);


//undefined
// var  twelve = 

// console.log(twelve);

//var - global scope anything in a file
//let - local scope only in a capulse within block...
//const - protects a variable from being reasinged you can only use it once!

// var testVar = 5
// console.log(testVar + 10);
// console.log(testVar * 3);
// console.log(testVar + testVar);

// var firstWord = "hello "
// var secWord = "world"

// var sentTest = firstWord + secWord

// console.log(firstWord);
// console.log(secWord);
// console.log(sentTest);

//Lesson 1 challenges
// Arithmetic Challenges

// Add 34 and 71
var sumChall = 34 + 71
console.log(sumChall);

// Subtract 67 from 123
var subChall = 123 - 67
console.log(subChall);

// Multiply 56 and 23
var mulChall = 56 * 23
console.log(mulChall);

// Divide 45 by 5
var divChall = 45 / 5
console.log(divChall);

// Calculate 5 to the power of 7
var powerChall = 5 ** 7
console.log(powerChall);

// Find the remainder of 33/6
var modChall = 33 % 6
console.log(modChall);

// String Challenges
// Find the length of a string containing your name
var testName = "fernando"
console.log(testName.length);

// Does your string include the letter "e"?
console.log(testName.includes("e"));

// Boolean Challenges (return true or false)

// Is 34 divided by 3 greater than 67 divided by 2?
var divChall1 = 34 / 3 
var divChall2 = 67 /2
var lastCheckChall = divChall1 > divChall2
console.log(lastCheckChall);

// Does 5 evaluate to the same as "5"?
var evalChall = 5 == "5"
console.log(evalChall);

// Does 5 strictly equal "5"?
var striChall = 5 === "5"
console.log(striChall);

// Does !3 strictly equal 3?
var bangChall = !3 === 3
console.log(bangChall);

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
var learnString = "LEARN"
var learnString2 = "Student"

var compareAndChall = learnString.length === 5 && learnString2.length === 7

console.log(compareAndChall);
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?

var compareOrChall = learnString.length === 5 || learnString2.length === 7
console.log(compareOrChall);

// Variables Challenges

// Set a variable called favNum equal to your favorite number
var favNum = 22

// Log your favorite number divided by 2
console.log(favNum / 2);

// Set another variable called otherNum equal to 13
var otherNum = 13

// What is favNum divided by otherNum?
console.log(favNum / otherNum);

// Save a string as a variable
var stringChallLast = "this is my string"

// Find the length of the string
console.log(stringChallLast.length);

// Use the method charAt() to find what letter is at the 3rd index
console.log(stringChallLast.charAt(3));