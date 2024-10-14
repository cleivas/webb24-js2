import { useEffect, useState } from "react";
import { fetchDogBreeds, fetchDogImage } from "../utils/dogapi";

export function DisplayDogImage(){
    const [breeds, setBreeds] = useState([]);
    const [dogImgUrl, setDogImgUrl] = useState('');
    const [breed, setBreed] = useState('basenji');

    function handleBreedChange(event){
        setBreed(event.target.value);
    }

    // fetchDogBreeds anropas första gången komponenten DisplayDogImage renderas
    useEffect(()=>{
        fetchDogBreeds().then(breedList => setBreeds(breedList));
    }, []);

    // fetchDogImage andropas första gången komponenten renderas och sedan varje gång statet breed uppdateras
    useEffect(()=>{
        fetchDogImage(breed).then(imgUrl => setDogImgUrl(imgUrl));
    }, [breed])

    return (
        <div>
            <select onChange={handleBreedChange}>
                {/* options element, ett för varje breed, hämtas från api:t*/}
                {breeds.map( breed => <option key={breed} value={breed}>{breed}</option> )}
            </select>

            <br/>

            {/* imgurlen ska hämtas från api */}
            <img src={dogImgUrl}/>
        </div>
    )
}