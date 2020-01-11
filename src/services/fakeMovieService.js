import * as genresAPI from "./fakeGenreService";
const axios=require("axios");
let movies=[];
export async function getMovies() {
  movies=await axios.get("/movies");
 return movies;
}

export async function getMovie(id) {
  let movie=await axios.get("/movies/"+id);
  return movie;
}

export function saveMovie(movie) {
  console.log(movie);
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}