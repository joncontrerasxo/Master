'use strict';
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `Correct Number!`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 20;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);

*/
const secretNumber = Math.trunc(Math.random() * 20) * 1;
document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, function() {
    console.log(Number(document.querySelector(`.number`).value));
    const guess = Number(document.querySelector(`.guess`).value);
    console.log(typeof guess, guess);

    if (!guess) {
        document.querySelector(`.message`).textContent = `NO Number!`;
    } else if (guess === secretNumber) {
        document.querySelector(`.message`).textContent = `Correct Number!`;
    }
});