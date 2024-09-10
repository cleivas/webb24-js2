const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const country = document.querySelector('input').value;
    // console.log(country)

    // fetch... country
    // display country 

    getCountry(country).then( displayCountry );
}

async function getCountry(countryPar){
    const APIURL = `https://restcountries.com/v3.1/name/${countryPar}`

    const response = await fetch(APIURL);
    const countryArray = await response.json();

    console.log(countryArray);


    // Utan destructuring
    // const countryObj = {
    //      name: countryArray[0].name.official,
    //      flag: countryArray[0].flags.png
    // }
    // console.log(countryObj)

    // Med destructuring
    const {name, flags, population} = countryArray[0];
    console.log(population, name, flags);
    
    const {official} = name;
    const {png} = flags;
    
    
    // const countryObj = {official, png};
    const countryObj = {
        name: official,
        flag: png,
        population
    }
    console.log(countryObj);

    return countryObj;
}

function displayCountry(countryObjPar){
    // console.log(countryObjPar);

    const h1 = document.createElement('h1');
    const imgEl = document.createElement('img');
    const container = document.querySelector('div');

    container.innerHTML = '';
    container.append(h1, imgEl);

    h1.innerText = countryObjPar.name;
    imgEl.src = countryObjPar.flag;

}

