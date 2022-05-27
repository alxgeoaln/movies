import {baseUrl, apiKey} from '@src/config';

export const topRataedMoviesApi = () =>
  fetch(`${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);

export const moviesGenre = () =>
  fetch(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`);

export const searchMovie = (query: string) =>
  fetch(`${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${query}`);
