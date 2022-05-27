import {createAsyncThunk} from '@reduxjs/toolkit';
import {moviesGenre} from '@src/api';
import {Response} from './type';

export const getGenreThunk = createAsyncThunk('genre/get', async () => {
  try {
    const genreResponse = await moviesGenre();
    const genreJson: Response = await genreResponse.json();

    return genreJson.genres;
  } catch (e) {
    return [];
  }
});
