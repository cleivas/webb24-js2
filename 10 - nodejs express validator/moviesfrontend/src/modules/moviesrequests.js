const baseURL = 'http://localhost:3000/movies';

async function getAllMovies(){
    const res = await fetch(baseURL);
    const movies = await res.json();
    // console.log(movies)
    return movies;
}

async function addMovie(newMovie){
    const options = {
        method: 'POST',
        body: JSON.stringify(newMovie),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const res = await fetch(baseURL, options);
    const data = await res.json();
    console.log(data);
}

export {getAllMovies, addMovie};