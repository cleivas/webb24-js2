const correctNumber = Math.floor( Math.random()*100 )+1;
// console.log(correctNumber)
let numberOfGuesses = 0;
const formEl = document.querySelector('form');

formEl.addEventListener('submit', getUserGuess )


function getUserGuess(event){
    event.preventDefault();
    
    const userAnswer = document.querySelector('input').value;
    // console.log(userAnswer);
    formEl.reset();
    
    
    numberOfGuesses++;
    // console.log('number of guesses: ', numberOfGuesses)

    const resultEl = document.querySelector('#resultP');

    if(correctNumber == userAnswer){
        resultEl.innerText = `Rätt! Det tog dig ${numberOfGuesses} gissningar`;
    }
    else if(userAnswer < correctNumber){
        resultEl.innerText = 'Fel! Din gissning vad för låg';
    }
    else if(userAnswer > correctNumber){
        resultEl.innerText = 'Fel! Din gissning vad för hög';
    }
}
