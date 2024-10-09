import { ColorChange } from "./ColorChange.jsx";
import { useState } from "react";

export function ColorContainer(){
    const [color, setColor] = useState('red');

    function handleClick(event){
        // console.log(event.target.innerText);
        setColor(event.target.innerText);
    }

    return <>
        <button onClick={handleClick}>red</button>
        <button onClick={handleClick}>green</button>
        <button onClick={handleClick}>blue</button>

        <ColorChange color={color}/>
    </>
}