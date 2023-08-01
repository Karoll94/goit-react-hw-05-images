import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "9ef1eff025718d98ad0048890235eeb2";

const categories = {
  trending: "/trending/all/week",
  querySearch: "/search/movie",
  genre: "/genre/movie/list",
  basic: "&language=en-US",
};

export const getMoviesTrending = async (page = 1) => {
  const response = await axios.get(
    `${categories.trending}?api_key=${API_KEY}&page=${page}`
  );
  return response.data;
};

export const searchMoviesQuery = async (query, page = 1) => {
  const response = await axios.get(
    `${categories.querySearch}?api_key=${API_KEY}${categories.basic}&query=${query}&page=${page}&include_adult=false`
  );
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}${categories.basic}`
  );
  return response.data;
};

export const getMovieCredits = async (id) => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}${categories.basic}`
  );
  return response.data;
};

export const getReviews = async (id) => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}${categories.basic}&page=1`
  );
  return response.data;
};

export const fakePromise = (time = 1500) =>
  new Promise((resolve) => setTimeout(resolve, time));

export default {
  getMoviesTrending,
  searchMoviesQuery,
  getMovieDetails,
  getMovieCredits,
  getReviews,
  fakePromise,
};
