'use strict';
//Coding challenge #1

//1)Create Array
//2) Create function printForecast that recieves 'arr' as a parameter
//3)Print forecast string knowing that every position increases the forecast day by one day. example: arr[0]= temp in 1 day, arr[1] = temp in 2 days, arr[2]= temp in 3 days.

const temp = [12, 5, -5, 0, 4];
//const tempString = temp.toString();

const printForecast = function(arr) {
    let forecast = ``;
    for (let i = 0; i < arr.length; i++) {
        forecast += `... ${arr[i]}ºC in ${i + 1} days`;
        //console.log(forecast);
    }
    return console.log(forecast);
};

printForecast(temp);