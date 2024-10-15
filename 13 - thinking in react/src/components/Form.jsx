export function Form({updateLastSearches}){
    let tempSearchTerm = '';

    function handleChange(event){
        // event.target innehåller textinputen
        tempSearchTerm = event.target.value;
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(tempSearchTerm);
        updateLastSearches(tempSearchTerm);
        // event.target innehåller form
        event.target.reset(); 
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder="swedish"/>
            <button>Search!</button>
        </form>
    )
}