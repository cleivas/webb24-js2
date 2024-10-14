async function fetchDogBreeds(){
    const url = "https://dog.ceo/api/breeds/list/all";

    const res = await fetch(url);
    const data = await res.json();

    const breedList = Object.keys(data.message);

    return breedList;
}

async function fetchDogImage(breed){
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;

    const res = await fetch(url);
    const data = await res.json();
    
    return data.message;
}
export {fetchDogBreeds, fetchDogImage};