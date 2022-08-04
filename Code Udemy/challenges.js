/*
//Coding Challenge #1

const massJohn = 92;
const massMark = 45;
const heightJohn = 1.95;
const heightMark = 1.69;
let bmiMark;
let bmiJohn;
let markHigherBMI;

//BMI formula 1

bmiJohn = Math.round(massJohn / heightJohn ** 2);

console.log("John's BMI is: " + bmiJohn);

bmiMark = Math.round(massMark / heightMark ** 2);

console.log("Mark's BMI is: " + bmiMark);


//BMI formula 2

bmiJohn = Math.round(massJohn / (heightJohn ** 2));

console.log("John's BMI is: " + bmiJohn);

bmiMark = Math.round(massMark / (heightMark ** 2));

console.log("Mark's BMI is: " + bmiMark);

markHigherBMI = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's ? " + markHigherBMI);


//Coding Challenge #2

if (markHigherBMI == true) {
    console.log(`Mark's BMI: (${bmiMark}) is higher than John's (${bmiJohn}!!)`);
} else {
    console.log(`John's BMI: (${bmiJohn}) is higher than Mark's (${bmiMark}!!)`);
}


const averageDolphin = (96 + 108 + 89) / 3
const averageKoala = (88 + 91 + 110) / 3

console.log(`Dolphin score:${averageDolphin}`);
console.log(`Koala score:${averageKoala}`);

if (averageDolphin > averageKoala && averageDolphin >= 100) {
    console.log(`The winners are the dolphins!!!`);
} else if (averageKoala >= 100 && averageKoala > averageDolphin) {
    console.log(`The winners are the koalas!!!`);
} else if (averageDolphin === averageKoala && averageDolphin >= 100 && averageKoala >= 100) {
    console.log(`The game is a DRAW!!!`);
} else console.log(`There are no winners!!!`);



//Coding Challenge #4

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const grandTotal = bill + tip;

console.log(`The bill is: ${bill}
The tip is: ${tip}
The Grand total is: ${grandTotal}`);
*/

//Fundamental part 2 

//Coding Challenge #1