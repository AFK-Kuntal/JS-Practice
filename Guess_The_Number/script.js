'use strict';


let randNumber = Math.trunc(Math.random() * 20) + 1;
let score = 0;
let highScore = 20;
let playing = true;
const displayMessage = message => document.querySelector(".guess").textContent = message;
const resetTheGame = ()=>{
    playing = true;
    score = 0;
    let randNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent =  `🎯Score`;
    document.querySelector("body").style.backgroundColor = "#232323";
    document.querySelector(".number").textContent = "?";
    displayMessage("Keep Guessing..");
};

document.querySelector(".click").addEventListener("click", ()=> {
    if(playing) {
        const userGuess = Number(document.querySelector(".input-field").value)  //as user input is always a string
        console.log(userGuess);
        if(!userGuess) displayMessage("❌Invalid Number");
        else if(score < 20) {
            if(userGuess === randNumber) {
                displayMessage("💯Correct Guess");
                document.querySelector("body").style.backgroundColor = "#60b347";
                document.querySelector(".number").textContent = randNumber;
                if(score < highScore) {
                    highScore = score;
                    document.querySelector(".HighScore").textContent = `🔝HighScore:${highScore}`; 
                }
                playing = false;
            }else {
                displayMessage(userGuess > randNumber ? "📉Lower Please.." : "📈Higher Please..");
                score++;
                document.querySelector(".score").textContent =  `🎯Score: ${score}`;
            }
        }else {
            displayMessage("You've Lost");
            document.querySelector("body").style.backgroundColor = "red";
            document.querySelector(".input-field").value = NaN;
            score = 0;
            document.querySelector(".score").textContent +=  `🎯Score: ${score}`;
            setTimeout(resetTheGame, 3000);
        }
    }

})

document.querySelector(".again").addEventListener("click", resetTheGame);
