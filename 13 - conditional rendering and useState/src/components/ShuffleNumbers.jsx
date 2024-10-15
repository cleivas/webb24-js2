import { useState } from "react";
import { Number } from "./Number.jsx";
import _, { map } from "underscore";

export function ShuffleNumbers(){
    const [numbersArr, setNumbersArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

    // const compArr = [
    //         <Number n={numbersArr[0]} />,
    //         <Number n={numbersArr[1]} />,
    //         <Number n={numbersArr[2]} />,
    //         <Number n={numbersArr[3]} />
    // ]

    function handleClick(){
        // numbersArr blandas med hjälp av underscore-biblioteket
        setNumbersArr( _.shuffle(numbersArr) )
    }

    return (
        <>
        {/* Här genererar vi en array med Number-komponenter utifrån numbersArr*/}
        {numbersArr.map( num => <Number key={num} n={num}/> )}
        <br/>
        <button onClick={handleClick}>Shuffle</button>

        {/* det går att rendera en array med komponenter */}
        {/* {compArr} */}
        </>
    )
}