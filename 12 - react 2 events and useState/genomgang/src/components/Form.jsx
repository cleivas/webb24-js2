import { useState } from "react";

export function Form(){
    const [text, setText] = useState('Start');
    let tempText = "";

    function handleInputChange(event){
        // Logga det som står i textinputen varje gång värdet förändras i den
        // console.log(event.target.value);
        tempText = event.target.value;
    }

    function handleSubmit(event){
        event.preventDefault();
        // console.log(tempText);
        // Uppdatera statet med värdet från inputen för att trigga en ny rendering
        setText(tempText);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange}/>
                <button>Change Text</button>
            </form>
            <h1>{text}</h1>
        </div>
    )
}