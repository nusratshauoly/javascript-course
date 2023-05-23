// Remember, we're gonna use strict mode in all scripts now!

////////////////////////////

// follow this prettier website
//prettier.io/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// video: 55: Setting up prettier and vs code
/*

-- first go to extension and install prettier then go to settings (follow youtube video) or these video and fix javascript format on settings 

--to use ('') single quote in js open a file (.prettierr.c) and 
--put singleQuote : true; and

-- if there is only one parameter in function give no bracket thats why give these command
"arrowParens": "avoid";


{
  "singleQuote": true,
  "arrowParens": "avoid"
}


*/
https: 'use strict';

const x = '23';
if (x === 23) console.log(23);

if (x === 23) {
}
//-- if there is only one parameter in function give no bracket thats why give these command
// "arrowParens": "avoid";

const calcAge = birthYear => 2037 - birthYear;

/*
to create shortcut for (console.log) => (cl)
go to vs code => code  => preferences => configure user snippets / user snippets => open a search option click there and select (new global snippets file) and type any name like (jonas) there and (enter) => will open a file like (jonas.code-snippets) and we can add any shortcut snippet there (console.log) er shortcut e ja type korbo prefix e tai boshabo.

// Example:

	"Print to console": {
		"scope": "javascript,typescript",
		"prefix": "cl",
		"body": ["console.log();"],
		"description": "Log output to console"
	}
*/
// cl
console.log(calcAge);

console.log('');
console.log();

// 2. another extention is (ESlint, image previewer for html,  Monokai pro for theme color, settings sync, todo highlight - highlight text see youtube video how to enable it or in this video )

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// video - 56: Installing Node.Js, and setting up a dev environment

/*
// extensions : Live server  -- in vs code => go live

// install node.js
https://nodejs.org/en/download


// clear the terminnal (command + k)

// open vs code terminal -- node -v (check the node version)
-- sudo npm install live-server -g (that will make the live server tool globally)  enter;
-- give the password of pc.
-- live server
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

// video - 57: learning how to code
/*
1. set a goal first whn to take the job (in 3/ 4/ 6 months)
2. learn and share publicly (twitter , github)
3. after learning build big projects on your own
4. take challenges
5. learn even when youre working

*/

////////////////////////////////////////////////////////////////////////////////////////////////

// video - 58: How to think like a developer: Become a problem solver

/*
problems when to solve a programming problem

1. He jumps at the problem without much thinking
2. He implements his solutions in an unstructured way
3. He gets stressed out when things don't work
4. he is too proud to research solutions

// how to fix solve these problems

-- stay calm and slow down, don't just jump at a problem without a plan

-- Take a very logical and rational approach (programming is just a logic, in the end...)

**** 4 steps framework to solve the problem......

1. Ist step : Make sure you 100% understand the problem. Ask the right question to get a clear picture of the problem.

* Problem: We need a function that reverses whatever we pass into it ?

* ***** Question asked: ***** *
-- What does "whatever" even mean in this context? What should be reversed? 
* Answer: Only strings, numbers, and arrays make sense to reverse...

-- What to do if something else is passed in?

-- What should be returned? Should it always be a string, or should the type be the same as passed in?

-- How to recognize whether the argument is a number, a string, or an array?

-- How to reverse a number,  a string, and an array?



2. 2nd steps: Divide and conquer: Break a big problem into smaller sub-problems.

* Problem: We need a function that reverses whatever we pass into it.

** sub - problems:
-- Check if argument is a number, a string, or an array

-- Implement reversing a number

-- Implement reversing a string

-- Implement reversing an array

-- Return reversed value


3. 3rd steps: Don't be afraid to do as much reserach as you have to like google, stack overflow and MDN web docs

* Problem: We need a function that reverses whatever we pass into it.

-- How to check if a value is a number in Javascript?

-- How to check if a value is a string in Javascript?

-- How to check if a value is an array in Javascript?

-- How to reverse a number in Javascript?

-- How to reverse a string a Javascript?

-- How to reverse an array in Javascript?


4. 4th steps: For bigger problems, write pseudo-code before writing the actual code

function reverse(value)
    if value type !string  && !number && !array
    	return value
	
	if value type == string
		reverse string
	if value type == number
		reverse number
	if value type == array
	    reverse array

	return reversed value.
 
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// video - 59 : using google, stackoverflow and MDN

/*
we work for a company that builds a smart home thermometer and our most recent task is 

*/
