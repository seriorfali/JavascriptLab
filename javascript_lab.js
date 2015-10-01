
// JavaScript Review Lab
//   Working as a team, replace the null values
//    with JavaScript that completes the task.
//
// For each challenge, copy and paste it into
//   a browser's console. Make it work inside
//   the console. Then, put the working version
//   into this file!


/************************
 *  BASICS
 ************************/

/* 1. Declare variables that are examples of the
     five primitive types. For example, assign
     true to booleanValue, since true is a boolean
     value. Show two different ways to make a
     variable undefined! */

var booleanValue    = (10 > 5);
var numberValue     = 7;
var stringValue     = "Hey!";
var nullValue       = null;
var undefinedValue  = undefined;
var undefinedValue2;

/* 2. In your console, use the typeof operator on
	each of the above variables. For example: */

typeof booleanValue // Boolean.
typeof numberValue // Number.
typeof stringValue // String.
typeof nullValue // Object.
typeof undefinedValue // Undefined.
typeof undefinedValue2 // Undefined.

/* 3. Which of the above variables does typeof NOT
	 show the expected primitive type? This is
	 a bug in JavaScript! It has not been fixed
	 since a lot of code online depends on it. */

nullValue

/* Mia, Albert, and Tony are going to a party.
     Set "attendees" to an array of their names. */

var attendees = ["Mia", "Albert", "Tony"];


/* Create the same array in a different way --
      by creating a new Array object. */

var m = "Mia";
var a = "Albert";
var t = "Tony";
attendees = [m, a, t];

/* Access the third element in the array. */

attendees[2];

/* Write a statement which sorts the array. */

attendees.sort();

/* Write a statement which removes the last
     element of the array. */

attendees.pop();

/* Write a statement which shifts a new element
     into the array as element 0 -- "Elaine" */

attendees.unshift("Elaine");

/* console.log the following poem. Do it using
	a single console.log statement! Make sure there
	are four separate lines in the console output. */

var poem = ("Computers are fun \n Because they are neat. \n Javascript and Ruby, \n They cannot be beat!")

console.log(poem);

/************************
 *  WHILE LOOPS
 ************************/

/* Fix the below while loop so that the user
     is continually asked whether he or she is done.
     Continue looping while the user enters "no".
     Remember you can place console.log statements
     inside loops to "see" the values change. */

var isDone = "no";
while (isDone === "no") {
	isDone = prompt("Are you done?");
}

/* Modify the solution to the above while loop
     below. Now, continue looping if "no" OR "No"
     is entered. */

var isDone = "no";
while (isDone === "no" || isDone === "No") {
	isDone = prompt("Are you done?");
}

/* Explain to each other in English what this statement
     does. It should be a simple statement.
     Look up functions such as Math.round() and
     Math.random() if they are new. Try pasting the
     individual parts of this statement into
     your console to better understand it! */

var theTarget = Math.round(100 * Math.random()) + 1;
/* Returns 1 greater than random number between 0 (inclusive) and 100 (exclusive) rounded to nearest integer. */

/* Number guessing game. While the guess is not
     the target value, continue asking the user
     for a guess and informing whether the guess
     is too low or too high. */

var guess = 0;
var theTarget = Math.round(100 * Math.random()) + 1;
while (guess !== theTarget) {
	guess = prompt("Make a guess!");

	if (guess > theTarget) {
		alert("Too high!");
	} else if (guess < theTarget) {
		alert("Too low!");
	}
}

/* The following while loop implements a
      "count up" clock. Make it console.log the
      numbers 1, 2, 3, 4, and 5. */

var i = 1;
while (i < 6) {
	console.log(i);
	i++;
}

/************************
 *  FOR LOOPS
 ************************/

/* Rewrite the "count up" clock as a for loop! */

for (var i = 1; i < 6; i++) {
	console.log(i);
}

/* Rewrite the for loop to have no initial conditions. */

var i = 1;
for (; i < 6; i++) {
	console.log(i);
}

/* Rewrite the for loop to have no incrementing statement. */

for (i = 1; i < 6; ) {
	console.log(i);
	i++;
}

/* Rewrite the for loop to have no incrementing or intial
     statements. */

i = 1;
for (; i < 6; ) {
	console.log(i);
	i++;
}

/* Note that this is identical to the while loop! */

/* Let's make a count DOWN clock. We will display
     5, 4, 3, 2, 1, 0. */

var i = 5;
while (i >= 0) {
	console.log(i);
	i -= 1;
}

/* Now, rewrite the countdown clock as a for loop! */

for (i = 5; i >= 0; i -= 1) {
	console.log(i);
}

/* Using a for loop, print each value of the array
     to the console. */

var foods = ["Burger", "Fries", "Drink", "Tomato"];

for (i=0; i<foods.length; i++) {
	console.log(foods[i]);
}

/* Using a for loop, print each value of the array
     to the console, backwards! */

var foods = ["Burger", "Fries", "Drink", "Tomato"];

for (i=foods.length-1; i >= 0; i -= 1) {
	console.log(foods[i]);
}

/************************
 *  FUNCTIONS
 ************************/

/* Given the following function, call the function with
     appropriate example values. In a comment, write
     what the expected output will be. */

function concatStrings(str, appendString) {
	return str + appendString;
}

concatStrings("Hello ", "there!")
// Expected output: "Hello there!"

/* Write a function that takes one number as a parameter,
     and returns that number plus one. Choose good
     variable names! Call the function with an appropriate
     parameter. */

function increment(n) {
	return n + 1;
}

increment(4);
// Expected output: 5

/* Complete the below function. It accepts a
	 number and returns a string with "a" repeated
	 that many times. For example, calling the
	 function with 3 will return "aaa".
     Use a for loop to construct the return
     string. Call the function
     with example values and write the output as
     a comment. */

function repeatA(x) {
	var returnString = [];
	for (var i = 0; i < x; i++) {
		returnString += "a";
	}
	return returnString;
}

repeatA(4);
// Expected output: "aaaa"

/* Let's generalize the last function. Now, a
     second parameter will be passed which is the
     character (or string) to repeat! Call the function
     with example values and write the output as
     a comment. */

function repeatString(n, str) {
	var returnString = [];
	for (var i = 0; i < n; i++) {
		returnString += str;
	}
	return returnString;
}

repeatString(6, "Hey! ");
// Expected output: "Hey! Hey! Hey! Hey! Hey! Hey! "

/* Write a function which returns the original array,
     but reversed! */

function reverseStrings(arrayOfStrings)
{
	var reversedArray = [];
	for (i=arrayOfStrings.length-1; i >=0; i -= 1) {
		reversedArray.push(arrayOfStrings[i]);
	}
	return reversedArray;
}

var foods = ["Burger", "Fries", "Drink", "Tomato"];
reverseStrings(foods);

/* Note that variables can be assigned functions. */

var someVariable = repeatA;
var anotherVariable = repeatA;

/* Try running the above two lines in your browser.
     Now, try calling the functions by using the
     new variables. (i.e. run the below code!) */

someVariable(3);
anotherVariable(5);

/* This is an important fact about JavaScript --
     functions can be assigned to variables and
     passed around as arguments to functions! */

/* CONGRATULATIONS! YOU MADE IT TO THE END! */
