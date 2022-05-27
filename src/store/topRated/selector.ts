import {createSelector} from '@reduxjs/toolkit';
import { RootState } from '..';

const selectTopRatedMovies = (state: RootState) => state.topRatedMovies;

export const topRatedMoviesSelector = createSelector(
  selectTopRatedMovies,
  state => state,
);
