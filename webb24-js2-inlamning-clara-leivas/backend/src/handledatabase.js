/**
 * Functions for reading and updating the highscore.json file
 *  
 */ 

import fs from "fs/promises";


async function getHighscore(){
    const raw = await fs.readFile('./src/highscore.json');
    return JSON.parse(raw);
}


// Adds a new score to the highscore list, sorts the list in descending order and maintains the length of the list to 5 scores
async function addScore(newScore){
    const highscore = await getHighscore();

    highscore.push(newScore);
    highscore.sort((a, b)=> b.score - a.score);
    const newHighScore = highscore.slice(0, 5);

    await fs.writeFile("./src/highscore.json", JSON.stringify(newHighScore));
    return newHighScore;
}

export {getHighscore, addScore};