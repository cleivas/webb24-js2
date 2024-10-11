/**
 * Functions for updating the GUI
 * - Users score
 * - Highscore list
 * - Error message
 * - Background color flash
 */

export function updateScoreGUI(score){
    const scoreEl = document.querySelector("#score");
    scoreEl.innerText = "Score: " + score;
}


export function displayHighScore(highscoreList){

    const highscoreContainer = document.querySelector('#highscore');
    highscoreContainer.innerHTML = '';

    for(const scoreObj of highscoreList){
        const scoreDiv = document.createElement('div');
        const nameEl = document.createElement('p');
        const scoreEl = document.createElement('p');

        scoreDiv.classList.add('score-div');
        nameEl.innerText = scoreObj.name;
        scoreEl.innerText = scoreObj.score;

        scoreDiv.append(nameEl, scoreEl);
        highscoreContainer.append(scoreDiv);
    }
    
}

export function displayError(){
    const highscoreContainer = document.querySelector('#highscore');
    highscoreContainer.innerHTML = ''

    const pEl = document.createElement('p');
    pEl.classList.add("error");
    pEl.innerText = "Something went wrong when fetching or updating the highscore list. Please try again later.";

    highscoreContainer.append(pEl)
}


// Change background color temporarily to green or red to indicate a correct or wrong guess by the user
export function flashGreen(){
    document.body.classList.add('correct');

    setTimeout(()=>{
        document.body.classList.remove('correct')
    }, 600)
}

export function flashRed(){
    document.body.classList.add('wrong');
    setTimeout(()=>{
        document.body.classList.remove('wrong')
    }, 1000)
}