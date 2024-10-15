/**
 * Functions for sending http requests to the server containing the highscore list
 */

const url = 'http://localhost:3000/highscore'
let minScoreInList;

async function getHighscore(){
    const res = await fetch(url);
    const highscore = await res.json();

    // Store the minimun score in the list to compare user score with
    minScoreInList = highscore[highscore.length-1].score;

    return highscore;
}

async function addHighscore(score){

    const options = {
        method: 'PUT',
        body: JSON.stringify(score),
        headers: {
                "Content-type": "application/json; charset=UTF-8"
            } 
    }

    const res = await fetch(url, options);
    const highscore = await res.json();

    return highscore;
}

export {getHighscore, addHighscore, minScoreInList}