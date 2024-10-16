import { Form } from "./Form"
import { Loading } from "./Loading"
import { SearchHistory } from "./SearchHistory"
import { Error } from "./Error"
import { fetchCountries } from "../utils/fetchcountries"
import { CountriesContainer } from "./CountriesContainer"
import { useState, useEffect } from "react"

export function App(){
    const [status, setStatus] = useState('success');
    const [lastSearches, setLastSearches] = useState(['swedish', 'arabic', 'spanish']);
    const [countries, setCountries] = useState([]);

    function updateLastSearches(newSearch){
        // setState kan ta en callbackfunktion som argument, den behöver returnera det nya värdet som statet ska ha
        // Callbackfunktionens parameter kommer innehålla det nuvarande värdet av statet
        setLastSearches( current =>{
            currentClone = [...current];
            currentClone.push(newSearch);
            currentClone.shift();
            return currentClone;
        } );
    }

    useEffect(()=>{
        setStatus('loading');

        fetchCountries(lastSearches[lastSearches.length-1])
            .then((countriesPar)=>{ 
                setCountries(countriesPar); 
                setStatus('success') 
            })
            .catch(()=>{ setStatus('error')} );
    }, [lastSearches])


    return ( 
        <>
            <header>
                <Form updateLastSearches={updateLastSearches}/>
                <SearchHistory updateLastSearches={updateLastSearches} lastSearches={lastSearches}/>
            </header>
            <main>
                {/* Loading eller Error eller CountriesContainer */}
                {status == 'loading' && <Loading/>}
                {status == 'error' && <Error/>}
                {status == 'success' && <CountriesContainer countries={countries}/>}
            </main>
        </>
    )
}