export function CounterButtons({setCount, currentCount}){

    function handlePlus(){
        setCount(currentCount+1);
    }
    function handleMinus(){
        setCount(currentCount-1)
    }


    return(
        <>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
        </>
    )
}