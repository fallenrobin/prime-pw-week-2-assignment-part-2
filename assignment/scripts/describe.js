// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. We make a variable called Dane and set it to the string "Dane."
// We create a condition where if the name variable strictly matches the string "Mary" it will console.log "Hi Mary!"
// The default is that the console.log will print "How do you do?"
//
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. We create a variable called "secret" with an undefined value.
// We create a variable called code which is the number 123.
// We create a condition where if the variable  "code" is strictly equal to number "123" then the variable "Secret" has the value of string "Super" and the variable "code" is overwritten to be 123 multiplied by 2.
// We create a condition where if the the variable  "code" is greater than the number 250 then the variable "secret" has the value of string "duper"
//Console.log prints "Super" because the first condition is true ("code" was strictly equal to 123) and false in the second condition ("code" was 146 and therefore not greater than 250)

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. We make a boolean variable called isStudent which is defined as true.
// We make a number variable with a value of 34.
// We make a number variable with a value of 55407.
// We check if variable isStudent is strictly true AND if variable zip is greater than 80000; if BOTH conditions are met then the console.log will print "You're a student on the West Coast!"
// We check if variable isStudent is strictly false OR the variable age is less than 30. If BOTH are false then the console.log will print 'What are your hobbies?'
// We check if variable isStudent is strictly true and if so then the console.log will print 'Welcome to Prime!'
// The console.log prints 'How about the weather?'as the default since none of the previous conditions run (execute? compute? what is the right term?)

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
FIX according to above, line 136 should be set to 'blue'
let colorOne = 'red';
FIX according to above, line 138 should be set to 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
FIX colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
FIX line 155 should be if (temp > 39 && time >= 4) because they BOTH need to be true
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
FIX line 168 should be if(age < minAge)
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
