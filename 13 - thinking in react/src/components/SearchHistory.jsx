export function SearchHistory({lastSearches, updateLastSearches}){

    function handleClick(event){
        // event.target innehåller det h3-elementet som man klickat på
        // console.log(event.target.innerText)
        updateLastSearches(event.target.innerText);
    }

    return (
        <div className='flex'>
            {lastSearches.map( (searchTerm, i) => <h3 onClick={handleClick} key={i}>{searchTerm}</h3> )}
        </div>
    )
}