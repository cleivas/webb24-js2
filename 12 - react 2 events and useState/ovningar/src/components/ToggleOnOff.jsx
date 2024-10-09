export function ToggleOnOff({text, setOnOff}){

    function handleClick(){
        setOnOff(text);
    }

    return <button onClick={handleClick}>{text}</button>
}