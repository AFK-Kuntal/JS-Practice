"use strict";

let play = true;
let diceNumber = 0;

const player0el = document.querySelector(".player-0");
const player1el = document.querySelector(".player-1");
const score0 = document.querySelector(".score-0");
const score1 = document.querySelector(".score-1");
const currScore0 = document.querySelector(".left-current-score");
const currScore1 = document.querySelector(".right-current-score");
const rollDice = document.querySelector(".btn-rolldice");
const diceImg = document.querySelector(".dice-image")

let scores,activePlayer,currentScore, playing;
const initialize = function(){
    scores = [0, 0];
    activePlayer = 0; //at starting player 0 is the player
    currentScore = 0;
    playing = true;

    diceImg.src = `Assets/dice-6.png`;
    score0.textContent = 0;
    score1.textContent = 0;
    currScore0.textContent = 0;
    currScore1.textContent = 0;

    player0el.classList.add("active-player");
    player1el.classList.remove("active-player");
}
initialize();
const switchPlayer = function() {
    currentScore = 0;
    document.querySelector(`.score-${activePlayer}`).textContent = currentScore;
    activePlayer === 0 ? 1 : 0;
    player0el.classList.toggle("active-player");
    player1el.classList.toggle("active-player");
}

rollDice.addEventListener("click", ()=>{
    diceNumber = Math.trunc(Math.random() * 6) + 1;
    if(playing) {
        diceImg.src = `Assets/dice-${diceNumber}.png`;
        if(diceNumber != 1) {
            currentScore += diceNumber;
            document.querySelector(`.score-${activePlayer}`).textContent = currentScore;
        }else {
            switchPlayer();
        }
    }
})