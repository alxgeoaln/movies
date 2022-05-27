import {createSlice} from '@reduxjs/toolkit';

import {getGenreThunk} from './thunk';

import {GenreInitialState} from './type';

export const initialState: GenreInitialState = {
  genres: [],
  loading: false,
  error: false,
};

const genresSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getGenreThunk.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getGenreThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.genres = action.payload;
    });
    builder.addCase(getGenreThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default genresSlice.reducer;
