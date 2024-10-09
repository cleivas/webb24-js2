import { Result } from "./Result.jsx";
import { useRef, useState } from "react";

export function Guess(){
    // useRef används när en komponent behöver "minnas" data mellan renderingar men när den datan inte används i renderingen. Dvs när den inte behöver synas i GUI:t
    const randomNumber = useRef(Math.floor(Math.random()*100)+1);
    
    // Eftersom vi har två värden som ska uppdateras i ett state la vi ihop dem till ett state som är ett objekt
    const [guess, setGuess] = useState({text: 'No guess yet', cssClass: ''})

    let tempInputValue;

    // Loggas vid varje rendering eftersom komponentens funktion anropas då
    console.log(guess);
    console.log(randomNumber);

    function handleChange(event){
        // console.log(event.target.value)
        tempInputValue = event.target.value;
    }

    function handleSubmit(event){
        event.preventDefault();
        // console.log(tempInputValue == randomNumber.current);
        let text;
        let cssClass;

        // Om gissningen är rätt
        if(tempInputValue == randomNumber.current){
            text = `${tempInputValue} är rätt!`;
            cssClass = 'correct';
            randomNumber.current = Math.floor(Math.random()*100)+1;
        }
        // Om gissningen är fel
        else{ 
            text = `${tempInputValue} är fel!`;
            cssClass = 'wrong';
        }


        // Statet behöver uppdateras vid varje submit eftersom texten ändras vid varje gissning
        setGuess({
            text:  text,//gissningen och om det är rätt eller fel
            cssClass: cssClass//correct eller wrong
        })
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <button>Guess</button>
        </form>

        <Result cssClass={guess.cssClass} text={guess.text}/>
    </>
}