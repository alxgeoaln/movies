import {createAsyncThunk} from '@reduxjs/toolkit';

import {searchMovie} from '@src/api';

import {Movie} from './type';

interface Result {
  results: Movie[];
}

export const searchMovieThunk = createAsyncThunk(
  'search-movie/get',
  async (query: string) => {
    try {
      const searchMoviesResponse = await searchMovie(query);
      const searchMovieJson: Result = await searchMoviesResponse.json();

      return searchMovieJson.results;
    } catch (e) {
      return [];
    }
  },
);
