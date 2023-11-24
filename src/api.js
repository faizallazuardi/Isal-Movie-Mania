import axios from "axios";
const Baseurl = process.env.REACT_APP_BASEURL;
const Apikey = process.env.REACT_APP_APIKEY;

export const getMovieData = async () => {
  const movie = await axios.get(`${Baseurl}/movie/popular?page=1&api_key=${Apikey}`);
  return movie.data.results;
};

export const getMovieData2 = async () => {
  const movie = await axios.get(`${Baseurl}/movie/upcoming?page=1&api_key=${Apikey}`);
  return movie.data.results;
};

export const searchMovie = async (film) => {
  const search = await axios.get(`${Baseurl}/search/movie?query=${film}&page=1&api_key=${Apikey}`);
  return search.data.results;
};

// export const getGenreMovie = async () => {
//   const movie = await axios.get(`${Baseurl}/discover/movie?page=1&api_key=${Apikey}&with_genres=${genreId}`);
//   return movie.data.results;
// };
