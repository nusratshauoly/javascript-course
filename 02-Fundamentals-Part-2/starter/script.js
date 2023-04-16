// video- 32: Activating strict mode

// 'use strict'; mode on only for specific function or a specific block.  
'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; 
if(hasDriversLicense) console.log('i can drive :D');

// const interface = 'Audio';
const private = 534;
const if = 23; // it is error 


// video - 33: functions

// a function is simply a piece of code that that we can reuse over and over again in our code.

function logger(){
    console.log('My name is jonas');
}
// calling / learning / invoking the function
logger();
logger();
logger();


// another function

function fruitProcessor(apples, oranges) {
   console.log(apples, oranges);
   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
   return juice;
}

//fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

///////////////////////////////////////////////////

// / video -34: function declartion vs expressions




//  function declaration

function calcAge1(birthYear){
    return 2037 - birthYear;
    // return age;
}
//calcAge1(1991);
const age1 = calcAge1(1991);
// console.log(age1);


// function expressions

// a function without a name is called anonymous function
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// difference between function declaration and function expressions???????

// we can actually call function declarations before they are defined in the code.

// it will work
const age1 = calcAge1(1991);

function calcAge1(birthYear){
    return 2037 - birthYear;
    // return age;
}
//calcAge1(1991);
// const age1 = calcAge1(1991);


// we cannot call function expressions before they are defined in the code.
// function expressions make code more nicer and structured 

// it won't work
const age2 = calcAge2(1991);

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
// const age2 = calcAge2(1991);
console.log(age1, age2);


/////////////////////////////////////////////////

// video - 35: arrow functions:
// one parameter function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(1991);


// multi parameter function
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


// /////////////////////////////////////////////////////////

//  video - 36: function calling other functions
// lets say a fruitProcessor can only make juice to  small piece of fruit

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    
}