/**
 * Contains all the logic for the game.
 * Updates the highscore if the user score is more than the minimun score on the list
 * 
 */

import { displayHighScore, updateScoreGUI, flashGreen, flashRed, displayError } from "./gui.js";
import { addHighscore, minScoreInList } from "./highscorefetch.js";

    
const btnContainer = document.querySelector("#guessBtns");
let userScore;

// Reset game variables
export function startGame() {
    userScore = 0;
    updateScoreGUI(userScore);
}


//Check users guess 
btnContainer.addEventListener('click', event => {

    if (event.target.tagName == "BUTTON") {
        const userGuess = event.target.innerText;
        const randomNumber = getRandomNumber();
        // const randomNumber = 1; //For testing

        if (userGuess == randomNumber) {
            flashGreen();
            userScore++;
            updateScoreGUI(userScore);
        }
        else {
            flashRed();

            // Using timeout to make sure the background color change is visible before the prompt shows
            setTimeout(() => {
                const name = prompt(`Du gissade rätt ${userScore} gånger. Skriv in ditt namn och se om du platsar på highscorelistan`, 'Clara the Mighty');

                if (name && userScore>minScoreInList){
                    addHighscore({ name, score: userScore })
                        .then(displayHighScore)
                        .catch(displayError);
                }
                    
                startGame();
            }, 300)
        }
    }
})

// Generate random number from 1 to 3
function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}
