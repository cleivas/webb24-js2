function displayMovies(moviesArray){
    const container = document.querySelector('#moviesContainer');
    container.innerHTML = '';

    for(const movie of moviesArray){
        // console.log(movie);

        // Skapar alla element som behövs
        const movieDiv = document.createElement('div');
        const titleEl = document.createElement('h2');
        const infoEl = document.createElement('p');

        // Lägger till textinnehåll till elementen
        titleEl.innerText = movie.name;
        infoEl.innerText = `${movie.year}, ${movie.director}, ${movie.genre}`;

        // Lägg till elementen till rätt element
        movieDiv.append(titleEl, infoEl);
        container.append(movieDiv);
    }
}

export {displayMovies};