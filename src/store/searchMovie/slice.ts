import {createSlice} from '@reduxjs/toolkit';
import {searchMovieThunk} from './thunk';

import {MovieInitialState} from './type';

export const initialState: MovieInitialState = {
  searchMovie: [],
  loading: false,
  error: false,
};

const searchMovieSlice = createSlice({
  name: 'search-movie',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(searchMovieThunk.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(searchMovieThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.searchMovie = action.payload;
    });
    builder.addCase(searchMovieThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default searchMovieSlice.reducer;
