import {createSlice} from '@reduxjs/toolkit';
import {getTopRatedThunk} from './thunk';

import {TopRatedInitialState} from './type';

export const initialState: TopRatedInitialState = {
  movies: [],
  loading: false,
  error: false,
};

const topRatedSlice = createSlice({
  name: 'top-rated',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTopRatedThunk.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getTopRatedThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.movies = action.payload;
    });
    builder.addCase(getTopRatedThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default topRatedSlice.reducer;
