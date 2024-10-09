import { Button } from "./Button.jsx"
import { Form } from "./Form.jsx"
import { Container } from "./Container.jsx"
import { CounterDisplay } from "./CounterDisplay.jsx"
import { CounterButtons } from "./CounterButtons.jsx"
import { useState } from "react"

export function App(){
    // State används i CounterButtons och i CounterDisplay. Inte i App men App behöver äga statet eftersom App är den närmaste gemensamma parent component till CounterDisplay och CounterButtons
    const [count, setCount] = useState(0);

    return ( 
        <>
            {/* Klickar man på en av knapparna i CounterButtons uppdateras siffran i CounterDisplay */}
            <CounterButtons setCount={setCount} currentCount={count}/>
            <CounterDisplay currentCount={count}/>

            {/* Klickar man på en av knapparna i Container ändras bakgrundsfärgen i Container */}
            <Container/>

            {/* När man submittar formet byts h1-texten ut till texten från inputen */}
            <Form/>

            {/* Klickar man på en av knapparna loggas texten från knappen. Hovrar man över någon av knapparna byts färgen till rosa */}
            <Button btnText="Första knappen"/>
            <Button btnText="Andra knappen"/>
            <Button btnText="Tredje knappen"/>
            <Button btnText="TEST"/>
        </>
    )
} 
