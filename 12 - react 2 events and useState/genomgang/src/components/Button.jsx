import { useState } from "react";

export function Button({btnText}){
    // useState returnerar en array som vi destructar
    //statet hooverClass används i button-elementet för att ge elementet en class som vi har en stilregel för i css-filen
    const [hooverClass, setHooverClass] = useState('');

    // Anropas vid ett click event 
    function handleClick(event){
        console.log(event.target.innerText);
    }

    //Anropas vid ett mouseEnter event
    function handleMouseEnter(event){
        console.log(event.target.innerText, 'enter');
        setHooverClass("hoover"); //Uppdaterar statet hooverClass till "hoover"
    }

    // Anropas vid ett mouseLeave event
    function handleMouseLeave(event){
        console.log(event.target.innerText, 'leave');
        setHooverClass("");  //Uppdaterar statet hooverClass till ""
    }

    return (
        <button className={hooverClass} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >{btnText}</button>
    )
}

