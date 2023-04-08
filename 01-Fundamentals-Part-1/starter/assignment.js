//video- 10: LECTURE: Values and Variables

/* 1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console  */

let country = "Portugal";
let continent = "Europe";
let population = 11;
console.log(country);
console.log(continent);
console.log(population);

////////////////////////////////////////////

// video- 11: LECTURE: Data Types

/*1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */
 
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//////////////////////////////////////////////

//video- 13: LECTURE: let, const and var

/* 1. Set the value of 'language' to the language spoken where you live (some
    countries have multiple languages, but just choose one)
    2. Think about which variables should be const variables (which values will never
    change, and which might change?). Then, change these variables to const.
    3. Try to change one of the changed variables now, and observe what happens */
const country = "Bangladesh";
const continent = "Asia";
let language = "Bangla";
language = 'English';
const isIsland = true;
isIsland = false;

//////////////////////////////////////////////

// video-14: LECTURE: Basic Operators
/* 1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese. */

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description = country + 'is in ' + continent + ', and its ' + population + 'million people speak portuguese';
console.log(description);
//////////////////////////////////////////

// video - 16: coding challenge - 1

//Coding Challenge #1
/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */

// data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2 ;
const BMIJohn = massJohn / (heightJohn * heightJohn) ;
// console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

// data 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2 ;
const BMIJohn = massJohn / (heightJohn * heightJohn) ;

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

//////////////////////////////////////////////////////////////


//video - 17: LECTURE: Strings and Template Literals
/* 1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax */

let description1 = `${country} is in ${continent}, and its ${population}million people speak portuguese`;
console.log(description1);


////////////////////////////////////////
//video - 18.
//LECTURE: Taking Decisions: if / else Statements
/* 1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original */
// let population = 22;
let population = 13;
if(population > 33){
    console.log(`${country}'s population is above average`);
}else{
    console.log(`${country}'s population is ${33 - population} million below average`);
}

/////////////////////////////////////////
//vid - 19: Coding Challenge #2
/* Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!" */

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2 ;
const BMIJohn = massJohn / (heightJohn * heightJohn) ;
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}
else{
   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

///////////////////////////////////////

//video - 20 : type conversopn and coercion

//LECTURE: Type Conversion and Coercion

/* 1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right
*/
console.log('9' - '5'); // => 4
console.log('19' - '13' + '17'); // => 617
console.log('19' - '13' + 17); // => 23
console.log('123' < 57);  // => false
console.log(5 + 6 + '4' + 9 - 4 - 2); // => 1143

