// //conditionals

var carOn = false

if (carOn === true) {
    console.log("The car is on");
} else {
    console.log("This engine is off.");
}

console.log(carOn); //"This engine is off."

// // //Equality operators 
var myNum = 42 
console.log(myNum === 42); //true
console.log(myNum === 43); //false
console.log(myNum == '42'); //true

// // //relational operators 
// // //<> <= >=

console.log(4 < 8); //true
console.log(5 > 8); //false

// //logical operators 
var logTest =  5 > 4 && 9 > 10

console.log(logTest); //false

var logOrTest = 17 > 3 || 3 > 23
console.log(logOrTest); //true 

// //negation
// //bang operator ! makes it the oposite !true === false

// console.log(!true); //false

// //if/else statements
// if(false){
//     console.log("this is true!");
// } else {
//     console.log("here is the else");
// }

var myCohort = "alpha"

if (myCohort === "alpha") {
    console.log("hey alpha class");    
} else {
    console.log("hey learn student");
}

// // var num1 = 24
// // var num2 = 58

// // var num1 = 70
// // var num2 = 58

var num1 = "b"
var num2 = 58

if (num1 < num2) {
    console.log(`the outcome..  ${num1} is less then ${num2}`);
} else if (num1 > num2) {
    console.log(`the outcome... ${num1} is greater then ${num2}`);
} else if (num1 === num2) {
    console.log(`${num1} and ${num2} are the same`);
} else {
    console.log("not a number");
}

// Challenges

// Make sure you try different options and change the variables to ensure properly working code.

// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.

//setting up if else that takes a var and logs if price is <= 100

var itemPrice = 250
if (itemPrice <= 100) {
    console.log(` ${itemPrice} is in budget`);
}else {console.log('not in budget')}

// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

//set up if else statement that take a var hungry log "eat food" else "keep coding if !hungry"

var tummyRumblin = false
if (tummyRumblin === true) {
    console.log("go eat fatty!");
} else{
    console.log("keep coding");
}

// Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

//set up if/else statement tha takes var trafficLight log "Go" for green log "slow down" for yellow and "stop for red"

var trafficLight = "yellow"

if (trafficLight === "green") {
    console.log("Go");    
} else if (trafficLight === "yellow") {
    console.log("slow down");
}else if (trafficLight === "red") {
    console.log("stop");
}else{
    console.log("pick a color man!");
}

// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.

// set up if/else statement that takes 2 var num1 num2 out the larger num or logs equal if the numbers are the same

var num1Chall = 232
var num2Chall = 12

if (num1Chall > num2Chall) {
    console.log(num1Chall);
}else if (num1Chall < num2Chall) {
    console.log(num2Chall);
}else if (num1Chall === num2Chall) {
    console.log("these are the sane num");
}else{"pick sum numbers!"}

// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.

//set up if/else statment that takes a var num and sees if num is odd even or zero

var oddoOrEven = 4

if (oddoOrEven % 2 === 0) {
    console.log(`${oddoOrEven} is even`);
}else if (oddoOrEven %2 !== 0) {
    console.log(`${oddoOrEven} is odd`);
}else if (oddoOrEven === 0) {
    console.log(`${oddoOrEven} is a Zero`);
}else {
    console.log("pick a number");
}

// STRETCH Challenges

// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

//set up if/else statment that takes in var of grade % and outputs grade based on 100 "perfect score" 97-99 "A+" 93-96 "A" 90-92 "A-"  87-89 "B+" 83-86 "B" 80-82 "B-" 77-79 "C+" 73-76 "C" 70-72 "C-" 67-69 "D+" 63-66 "D" 60-62 "D-" 1-59 "F" 0 "No Grade Available"

var grade = 100

if (grade === 100) {
    console.log("Perfect Score!!!");
} else if (grade <= 99 && grade >= 97) {
    console.log("You got an A+");
} else if (grade <= 96 && grade >= 93) {
    console.log("You got an A");
} else if (grade <= 92 && grade >= 90) {
    console.log("You got an A-");
} else if (grade <= 89 && grade >= 87) {
    console.log("You got an B+");
} else if (grade <= 86 && grade >= 83) {
    console.log("You got an B");
} else if (grade <= 82 && grade >= 80) {
    console.log("You got an B-");
} else if (grade <= 79 && grade >= 77) {
    console.log("You got an C+");
} else if (grade <= 76 && grade >= 73) {
    console.log("You got an C");
} else if (grade <= 72 && grade >= 70) {
    console.log("You got an C-");
} else if (grade <= 69 && grade >= 67) {
    console.log("You got an D+");
} else if (grade <= 66 && grade >= 63) {
    console.log("You got an D");
} else if (grade <= 62 && grade >= 60) {
    console.log("You got an D-");
} else if (grade <= 59 && grade >= 1) {
    console.log("You Failed!");
} else if (grade === 0) {
    console.log("No Grade Available");
} else{
    console.log("please give a grage");
}


// Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.

//set up if/else statment that check typeof var

var typeOfChall = "string"

if (typeof typeOfChall === 'number') {
    console.log(`${typeOfChall} is a number!`);
} else if (typeof typeOfChall === 'string') {
    console.log(`${typeOfChall} is a string`);
}else {
    console.log("its something else!");
}

// Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

//set up if/else statment that will check if password.length >= 11 && .includes("!") logs "That is a mighty strong password!" else if password.length >= 8 || password.includes("!") log anything else as "That is not a valid password"

var passwordChall = "thisis"
if (passwordChall.length >= 11 && passwordChall.includes("!")) {
    console.log("That is a mighty strong password!");
} else if (passwordChall.length >=8 || passwordChall.includes("!")) {
 console.log("That password is strong enough.");   
} else {
    console.log("That is not a valid password");
}