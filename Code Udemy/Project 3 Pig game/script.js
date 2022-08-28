'use strict';

//Selecting elements that we will use often
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const currentScoreEl0 = document.getElementById(`current--0`);
const currentScoreEl1 = document.getElementById(`current--1`);
const dice = document.querySelector(`.dice`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnNew = document.querySelector(`.btn--new`);
const btnHold = document.querySelector(`.btn--hold`);
const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);
let scores, currentPlayer, playing, currentScore;

//randoms a number and displays it on screen, if number is one it will change turns and set score of active player to 0
const rollDice = function() {
    if (playing) {
        let number = Math.trunc(Math.random() * 6 + 1);
        dice.src = `dice-${number}.png`;
        dice.classList.remove(`hidden`);

        if (number !== 1) {
            currentScore += number;
            document.getElementById(`current--${currentPlayer}`).textContent =
                currentScore;
            //switch player
        } else {
            swapPlayer();
        }
    }
};

const holdScore = function() {
    if (playing) {
        scores[currentPlayer] += currentScore;
        console.log(scores);

        document.getElementById(`score--${currentPlayer}`).textContent =
            scores[currentPlayer];
        currentScore = 0;
        document.getElementById(`current--${currentPlayer}`).textContent = 0;
        if (scores[currentPlayer] >= 100) {
            playing = false;
            dice.classList.add(`hidden`);
            document
                .querySelector(`.player--${currentPlayer}`)
                .classList.toggle(`player--winner`);
            console.log(`Player ${currentPlayer} WON!!!`);
        }
        swapPlayer();
    }
};

const swapPlayer = function() {
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove(`player--active`);
    if (currentPlayer === 0) {
        currentPlayer = 1;
        player1.classList.toggle(`player--active`);
    } else {
        currentPlayer = 0;
        player0.classList.toggle(`player--active`);
    }
};

const init = function() {
    dice.classList.add(`hidden`);
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScoreEl0.textContent = 0;
    currentScoreEl1.textContent = 0;
    player0.classList.remove(`player--winner`);
    player0.classList.add(`player--active`);
    player1.classList.remove(`player--winner`);
    player1.classList.remove(`player--active`);
    currentScore = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentPlayer = 0;
    scores = [0, 0];
    playing = true;
};
init();
btnRoll.addEventListener(`click`, rollDice);
btnHold.addEventListener(`click`, holdScore);
btnNew.addEventListener(`click`, init);