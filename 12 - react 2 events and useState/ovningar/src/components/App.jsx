import { ColorContainer } from "./ColorContainer.jsx"
import { Guess } from "./Guess.jsx"
import { OnOffContainer } from "./OnOffContainer.jsx"

export function App(){
    return ( 
        <>
            {/* Sharing states between components övning 1 */}
            <OnOffContainer/>


            {/* Forms and inputs övning 4 */}
            <Guess/>

            {/* useState övning 4 */}
            <ColorContainer/>
        </>
    )
}