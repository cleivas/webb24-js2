export function ChangeColor({setParentColor, colorText}){

    function handleClick(){
        // setParentColor innehåller setCssClass från parentkomponenten, alltså Container
        setParentColor(colorText);
    }

    return (
        <button onClick={handleClick}>{colorText}</button>
    )

}