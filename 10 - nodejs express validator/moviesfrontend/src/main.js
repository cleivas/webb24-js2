import { getAllMovies, addMovie } from "./modules/moviesrequests.js";
import { displayMovies } from "./modules/gui.js";

const form = document.querySelector('form');

getAllMovies().then(displayMovies);

form.addEventListener('submit', event =>{
    event.preventDefault();

    // Hämta värdet i alla inputs
    const name = document.querySelector('#title').value;
    const director = document.querySelector('#director').value;
    const genre = document.querySelector('#genre').value;
    const year = document.querySelector('#year').value;

    // Objektet som ska postas till backendappen
    const movieToAdd = {name, director, genre, year};
    addMovie(movieToAdd);
    // console.log(movieToAdd);
})