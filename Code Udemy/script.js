/*
let js = 'amazing';

console.log('jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name convention
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'teacher';

let job1 = 'Coder';
let job2 = 'teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);

javascriptIsFun = 'YES MON!';

console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

// How to declare variables
//let variables can mutate
let age = 30;
console.log(age);

age = 35;
console.log(age);

//Cant never be mutated and cannot have an empty const variable
const birthYear = 1991;

console.log('This is the birth year ' + birthYear);

//birthYear = 2006;
//const vaca;

//Operators

//Substraction, multiplication, division
const now = 2034;
const ageJon = now - 1994;
const ageMel = now - 1993;
console.log(ageJon, ageMel);

console.log(ageJon * ageMel, ageJon / 8);
//Concatenating strings
const firstName = "Contreras";
const lastName = "Arre";

console.log(firstName + ' ' + lastName);

//Assigment operator

let x = 10 + 5; //x is 15
x += 10; // x= x + 10
x *= 4; //x= x * 4
x++; // x = x + 1
x--; //x = x - 1 
console.log(x);

//Comparison Operators

console.log(ageJon > ageMel); // <, >, <=,  >=
console.log(ageMel >= 18);

const isOfAge = (ageMel >= 18);

console.log(isOfAge);

//operator precedence

//All mathematical operators have a higher execution presedence than comparison operators

console.log(now - 1993 > now - 1994);

//In this line of code the two operations are executed first and then the comparison is made

console.log(25 - 10 - 5);

//In this line of code the operators are read from left to right
//if read from righ to left he result would be different.

let x, y;

x = y = 25 - 10 - 5;

console.log(x, y);


//Template literals
const firstName = "Jon";
const job = "Unemployed";
const birthYear = 1994;
const currentYear = 2022;

const jon = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + "!";
console.log(jon);

const jonNew = `I'm ${firstName}, a ${currentYear-birthYear} years old ${job}!`;
console.log(jonNew);

//Conditionals

const age = 15;

if (age >= 18) {
    console.log(`Sarah is old enough`);

} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is not old enough, wait ${yearsLeft} years`);
}

const birthYear = 2011;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


//Conversions and Coercion
//Conversions
const inputYear = `1994`;

console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

//Will return NaN(Invalid number)
console.log(Number(`Jon`));

console.log(String(23), 23);

//Coercions
console.log("I am " + 28 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);



//Falsy and Truthy Values
//Falsy: 0, ` `, undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(``));
console.log(Boolean({}));

const money = 0;

if (money) {
    console.log(`Dont spend it all;`);
} else {
    console.log(`You should get a job!`);
}
//0 turned to boolean always gives undefined, could cause potetial bugs
let height = 0;

if (height) {
    console.log(`Yay! Height is defined`);
} else {
    console.log(`Height is undefined`);
}

//Equality operators
const age = `18`;
if (age === 18) console.log(`You just became an adult(Strict)`);

if (age == 18) console.log(`You just became an adult(loose)`);

const favourite = Number(prompt(`What's your favorite number?`));
console.log(typeof favourite);
//
if (favourite === 23) {
    console.log(`23 is an amazing number`);
} else if (favourite === 7) {
    console.log(`7 is also a cool number`);
} else if (favourite === 9) {
    console.log(`9 is also a cool number`)
} else {
    console.log(`Number is not 23 or 7 or 9`);
}

if (favourite !== 23) {
    console.log(`Why not the 23`);
}



//Logical operators

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Karen should drive`);
// } else {
//     console.log(`Maybe someone else should drive...`);
// }

const isTired = false; //C

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Karen should drive`);
} else {
    console.log(`Maybe someone else should drive...`);
}

*/

const day = `friday`;

// switch (day) {
//     case `monday`: //day === `monday`
//         console.log(`Plan course scructure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case `tuesday`:
//         console.log(`Prepare theory videos`);
//         break;
//     case `wednesday`:
//     case `thursday`:
//         console.log(`Write code examples`);
//         break;
//     case `friday`:
//         console.log(`Record videos`);
//         break;
//     case `saturday`:
//     case `sunday`:
//         console.log(`Enjoy the weekened :D`);
//         break;
//     default:
//         console.log(`Not a valid day!`);
// }

//Coding challenge 

if (day == `monday`) {
    console.log(`Plan course scructure`);
    console.log(`Go to coding meetup`);
} else if (day === `tuesday`) {
    console.log(`Prepare theory videos`);
} else if (day === `wednesday` || day === `thursday`) {
    console.log(`Write code examples`);
} else if (day === `friday`) {
    console.log(`Record videos`);
} else if (day === `saturday` || day === `sunday`) {
    console.log(`Enjoy the weekened :D`);
} else {
    console.log(`Day selected not valid!`);
}