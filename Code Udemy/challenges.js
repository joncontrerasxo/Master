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


//Fundamental part 2 

//Coding Challenge #1

const calcAverage = (scr1, scr2, scr3) => (scr1 + scr2 + scr3) / 3;

const checkWinner = function(averageDolphin, averageKoala) {
    if (averageDolphin >= 2 * averageKoala) {
        console.log(`Dolphin's WIN (${averageDolphin} vs ${averageKoala})`)
    } else if (averageKoala >= 2 * averageDolphin) {
        console.log(`Koala's WIN (${averageKoala} vs ${averageDolphin})`)
    } else console.log(`NOBODY WINS`);

}

const averageDolphin = calcAverage(85, 54, 41);
const averageKoala = calcAverage(23, 34, 27);


console.log(`Average dolphin is ${averageDolphin}, Average Koala is ${averageKoala}`)
checkWinner(averageDolphin, averageKoala);



//Coding Challenge #2

const calcTip = function(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15
    } else tip = bill * 0.2
    return tip;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
    //console.log(bills.length - 1);
console.log(tips);
console.log(total);

*/