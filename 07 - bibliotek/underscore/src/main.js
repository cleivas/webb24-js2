import _, { map } from 'underscore';

// console.log(_)

async function getCountries(){

    const response = await fetch("https://restcountries.com/v3.1/lang/spanish");

    const countriesArray = await response.json();

    console.log(countriesArray)

    const nameArray = _.pluck(countriesArray, 'name');
    console.log(nameArray);

    // Utgå från nameArray, använd pluck för att plocka ut en array med det officiella namnen
    const officialArray = _.pluck(nameArray, 'official');
    console.log(officialArray)

    // Sortera arrayen utifrån egenskapen "population". Landet med lägst population ligger först i arrayen.
    const sortedByPopulation = _.sortBy(countriesArray, 'population');
    console.log(sortedByPopulation);
}

getCountries();