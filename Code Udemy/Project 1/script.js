'use strict';
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `Correct Number!`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 20;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector(`.number`).textContent = secretNumber;
let score = 20;
document.querySelector(`.again`).addEventListener(`click`, function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) * 1;
    document.querySelector(`.message`).textContent = `Start guessing...`;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.guess`).value = ``;
});
document.querySelector(`.check`).addEventListener(`click`, function() {
    //console.log(Number(document.querySelector(`.number`).value));
    const guess = Number(document.querySelector(`.guess`).value);

    console.log(typeof guess, guess);
    //When there is no input
    if (!guess) {
        document.querySelector(`.message`).textContent = `NO Number!`;
        //When player wins
    } else if (guess === secretNumber) {
        document.querySelector(`.number`).textContent = secretNumber;
        document.querySelector(`.message`).textContent = `Correct Number!`;
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        document.querySelector(`.number`).style.width = `30rem`;
        document.querySelector(`.highscore`).textContent = score;
        //When guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(`.message`).textContent = `Number is smaller`;
            score--;
            document.querySelector(`.score`).textContent = score;
        } else {
            document.querySelector(`.message`).textContent = `You have lost :(`;
            document.querySelector(`.score`).textContent = 0;
        }
        //When guess is to low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(`.message`).textContent = `Number is bigger`;
            score--;
            document.querySelector(`.score`).textContent = score;
        } else {
            document.querySelector(`.message`).textContent = `You have lost :(`;
            document.querySelector(`.score`).textContent = 0;
        }
    }
});