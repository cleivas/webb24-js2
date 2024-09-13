// Firebase variables
const baseURL = 'https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main/clara';

const header = {
    "Content-type": "application/json; charset=UTF-8"
}

// DOM-element varables
const containerEl = document.querySelector("#movieContainer");
const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

// Ta bort en film när man klickar på ett p-element
containerEl.addEventListener('click', (event)=>{
    // console.log(event.target.tagName)

    // Deleta endast om vi klickat på ett p-element
    if(event.target.tagName == 'P'){
        console.log(event.target.id);
        deleteMovie(event.target.id)
            .then(getAllMovies)
            .then(displayMovies);
    }
})

// Hämta och visa alla filmer
getAllMovies().then(displayMovies);

// Hämta info från formuläret för att lägga till en ny film till databasen
function handleSubmit(event){
    event.preventDefault();

    // Hämtar allt från formuläret och sparar ner det i ett objekt
    const title = document.querySelector('#titleInput').value;
    const year = document.querySelector('#yearInput').value;
    const movie = {title, year};

    // Lägger till filmen till databasen
    // När det är gjort, hämtas alla filmer igen, när det är gjort visas alla filmer
    postMovie(movie).then(getAllMovies).then(displayMovies);
}

async function postMovie(newMovie){
    const options = {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: header
    }
    const url = baseURL + '.json';

    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
}

async function getAllMovies(){
    const url = baseURL + '.json';

    const response = await fetch(url);
    const movies = await response.json();
    // console.log(movies);
    return movies;
}

function displayMovies(movies){
    containerEl.innerHTML = '';

    // console.log(movies)
    for(const prop in movies){
        //console.log(prop); //egenskapsnamnet
        // console.log(movies[prop]); //Objektet som är innehållet i egenskapsnamnet
        // console.log( movies[prop].year)
        const {title, year} = movies[prop]; //Destructar objektet så att vi har title och year i två variabler

        const pEl = document.createElement('p');
        pEl.innerText = `${title}, ${year}`;
        pEl.id = prop; //Ge varje p-element ett id som är firebase-id:t

        containerEl.append(pEl)
    }

}

// Ta bort filmen vid det specifika firebase-ID:t
async function deleteMovie(firebaseID){
    const url = baseURL + `/${firebaseID}.json`;
    const options = {method: "DELETE"};

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

// Bracket notation för att komma åt egenskapernas värde
// const obj = {
//     one: 1,
//     two: 2
// }

// console.log(obj.one)
// console.log(obj['one'])
// console.log(obj['two'])

// const prop = 'one';
// console.log(obj[prop])

