/**
 * In this game a player needs to guess a number from 1 to 3. 
 * - When a guess is correct the user gets one point.
 * - When a guess is incorrect the game is over. The user then enters their name and if the user's score is more than the minimum score on the list, the highscore list is updated with the users name and score. 
 * 
 * The highscore list is stored in a json file and accessible through a nodejs express server running locally. 
 * 
 */
import { startGame } from "./modules/game.js";
import { getHighscore } from "./modules/highscorefetch.js";
import { displayHighScore, displayError } from "./modules/gui.js";


getHighscore()
    .then( displayHighScore )
    .catch( displayError );

startGame();