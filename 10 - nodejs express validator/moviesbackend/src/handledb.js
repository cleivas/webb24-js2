import fs from "fs/promises";

async function getAllMovies(){
    const rawdata =  await fs.readFile('./src/moviedb.json');
    return JSON.parse(rawdata);
}

async function addMovie(newMovie){
    const movies = await getAllMovies();
    movies.push(newMovie);

    await fs.writeFile('./src/moviedb.json', JSON.stringify(movies, null, 2));
}

export {getAllMovies, addMovie};