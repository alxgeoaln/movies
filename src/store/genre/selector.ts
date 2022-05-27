import {createSelector} from '@reduxjs/toolkit';
import { RootState } from '..';

const selectGenres = (state: RootState) => state.genres;

export const genresSelector = createSelector(
  selectGenres,
  state => state,
);
