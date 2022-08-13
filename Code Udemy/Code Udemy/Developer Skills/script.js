// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [7, -4, -11, -19, `error`, -12, 25, 56, 45, 19, -4, -20];
//1)Understanding the problem
// What is amplitude ? Answer : difference between highest and lowest temperatures
// // How to compute highest and min temperature ?
// //     whats a sensor error ? what to do ?

//2) Breaking up the problem
// How to ignore errors ?
// find max value in Array
// find min value in Array
// substract min from max and return it

temperatures.push(...temperatures2);
console.log(temperatures);

const maximum = function(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (typeof max !== `number`) continue;
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
};

const minimum = function(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (typeof min !== `number`) continue;
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
};

const calcAmplitude = function(min, max) {
    const amp = max - min;
    return amp;
};

console.log(maximum(temperatures));
console.log(minimum(temperatures));
console.log(calcAmplitude(minimum(temperatures), maximum(temperatures)));



const measureKelvin = function() {
    const measurement = {
        type: `temp`,
        unit: `celcius`,
        value: Number(prompt(`Degree celcius`)),
    };
    //debugger;
    //B) FIND
    console.log(measurement.value);
    console.log(measurement);
    //console.table(measurement);
    const kelvin = measurement.value + 273;
    return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

*/