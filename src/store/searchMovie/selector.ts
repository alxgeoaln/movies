import {createSelector} from '@reduxjs/toolkit';
import { RootState } from '..';

const selectsearchMovie = (state: RootState) => state.searchMovie;

export const searchMovieSelector = createSelector(
  selectsearchMovie,
  state => state,
);
