// utils/TMDbApi.js

import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

//新作
export const fetchNowPlayingMovies = async () => {
  let fetchedMovies = [];
  let page = 1;
  const maxPages = 5;

  while (fetchedMovies.length < 20 && page <= maxPages) {
    const response = await axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ja-JP&page=${page}`
    );
    const filteredMovies = response.data.results.filter(
      (movie) => movie.overview && movie.poster_path
    );
    fetchedMovies = [...fetchedMovies, ...filteredMovies].slice(0, 20);
    page++;
  }

  return fetchedMovies;
};

//人気
export const fetchPopularMovies = async () => {
  let fetchedMovies = [];
  let page = 1;
  const maxPages = 5;

  while (fetchedMovies.length < 20 && page <= maxPages) {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ja-JP&page=${page}`
    );
    const filteredMovies = response.data.results.filter(
      (movie) => movie.overview && movie.poster_path
    );
    fetchedMovies = [...fetchedMovies, ...filteredMovies].slice(0, 20);
    page++;
  }

  return fetchedMovies;
};

//高評価
export const fetchTopRatedMovies = async () => {
  let fetchedMovies = [];
  let page = 1;
  const maxPages = 5;

  while (fetchedMovies.length < 20 && page <= maxPages) {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ja-JP&page=${page}`
    );
    const filteredMovies = response.data.results.filter(
      (movie) => movie.overview && movie.poster_path
    );
    fetchedMovies = [...fetchedMovies, ...filteredMovies].slice(0, 20);
    page++;
  }

  return fetchedMovies;
};

export const fetchMovieImages = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/images?api_key=${API_KEY}`
  );
  //console.log(response);
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

/*-------------------------------------------------------------------------*/

export const fetchPopularAnimes = async () => {
  let fetchedAnimes = [];
  let page = 1;
  const maxPages = 5;

  while (fetchedAnimes.length < 20 && page <= maxPages) {
    const response = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ja-JP&with_genres=16&sort_by=popularity.desc&page=${page}`
    );
    const filteredAnimes = response.data.results.filter(
      (anime) => anime.name && anime.overview && anime.poster_path
    );
    fetchedAnimes = [...fetchedAnimes, ...filteredAnimes].slice(0, 20);
    page++;
  }

  return fetchedAnimes;
};

export const fetchDateAnimes = async () => {
  let fetchedAnimes = [];
  let page = 1;
  const maxPages = 5;

  while (fetchedAnimes.length < 20 && page <= maxPages) {
    const response = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ja-JP&with_genres=16,10759&sort_by=first_air_date.desc&first_air_date.gte=2021-01-01&first_air_date.lte=2022-12-31&page=${page}`
    );
    const filteredAnimes = response.data.results.filter(
      (anime) => anime.name && anime.overview && anime.poster_path
    );
    fetchedAnimes = [...fetchedAnimes, ...filteredAnimes].slice(0, 20);
    page++;
  }

  return fetchedAnimes;
};

export const fetchAverageAnimes = async () => {
  let fetchedAnimes = [];
  let page = 1;
  const maxPages = 5;

  while (fetchedAnimes.length < 20 && page <= maxPages) {
    const response = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,10759&language=ja-JP&page=${page}`
    );
    const filteredAnimes = response.data.results.filter(
      (anime) => anime.name && anime.overview && anime.poster_path
    );
    fetchedAnimes = [...fetchedAnimes, ...filteredAnimes].slice(0, 20);
    page++;
  }

  return fetchedAnimes;
};

export const fetchAnimeImages = async (animeId) => {
  const response = await axios.get(
    `${BASE_URL}/tv/${animeId}/images?api_key=${API_KEY}&include_image_language=ja,en`
  );
  return response.data;
};

export const fetchAnimeCredits = async (animeId) => {
  const response = await axios.get(
    `${BASE_URL}/tv/${animeId}/credits?api_key=${API_KEY}`
  );
  //console.log(response);
  return response.data;
};

export const fetchNowPlayingAnimes = async () => {
  let fetchedAnimes = [];
  let page = 1;
  const maxPages = 5;

  while (fetchedAnimes.length < 20 && page <= maxPages) {
    const response = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ja-JP&sort_by=popularity.desc&with_genres=16&page=${page}`
    );
    const filteredAnimes = response.data.results.filter(
      (anime) => anime.name && anime.overview && anime.poster_path
    );
    fetchedAnimes = [...fetchedAnimes, ...filteredAnimes].slice(0, 20);
    page++;
  }

  return fetchedAnimes;
};

/************ */

export const fetchCurrentlyAiringTVShows = async () => {
  let fetchedTVShows = [];
  let page = 1;
  const maxPages = 6;

  while (fetchedTVShows.length < 20 && page <= maxPages) {
    const response = await axios.get(
      `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=ja-JP&page=${page}`
    );
    const filteredTVShows = response.data.results.filter(
      (show) => show.name && show.overview && show.poster_path
    );
    fetchedTVShows = [...fetchedTVShows, ...filteredTVShows].slice(0, 20);
    page++;
  }

  return fetchedTVShows;
};

export const fetchTrendingTVShows = async () => {
  let fetchedTVShows = [];
  let page = 1;
  const maxPages = 5;

  while (fetchedTVShows.length < 20 && page <= maxPages) {
    const response = await axios.get(
      `${BASE_URL}/trending/tv/week?api_key=${API_KEY}&language=ja-JP&page=${page}`
    );
    const filteredTVShows = response.data.results.filter(
      (show) => show.name && show.overview && show.poster_path
    );
    fetchedTVShows = [...fetchedTVShows, ...filteredTVShows].slice(0, 20);
    page++;
  }

  return fetchedTVShows;
};

export const fetchTrendingMoviesThisWeek = async () => {
  let fetchedMovies = [];
  let page = 1;
  const maxPages = 5;

  while (fetchedMovies.length < 20 && page <= maxPages) {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=ja-JP&page=${page}`
    );
    const filteredMovies = response.data.results.filter(
      (movie) => movie.overview && movie.poster_path
    );
    fetchedMovies = [...fetchedMovies, ...filteredMovies].slice(0, 20);
    page++;
  }

  return fetchedMovies;
};
