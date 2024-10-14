import { ConditionalRendering } from "./ConditionalRendering.jsx"
import { ShuffleNumbers } from "./ShuffleNumbers.jsx"
import { DisplayDogImage } from "./DisplayDogImage.jsx"
export default function App(){

    return (
        <>
            <DisplayDogImage/>
            <ShuffleNumbers/>
            <ConditionalRendering/>
        </>
    )
}