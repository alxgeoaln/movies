import {configureStore} from '@reduxjs/toolkit';

import topRatedReducer from './topRated/slice';
import genresReducer from './genre/slice';
import searchMovieReducer from './searchMovie/slice';

import {GenreInitialState} from './genre/type';
import {TopRatedInitialState} from './topRated/type';
import {MovieInitialState} from './searchMovie/type';

export interface RootState {
  topRatedMovies: TopRatedInitialState;
  genres: GenreInitialState;
  searchMovie: MovieInitialState;
}

export const store = configureStore({
  reducer: {
    topRatedMovies: topRatedReducer,
    genres: genresReducer,
    searchMovie: searchMovieReducer,
  },
});

export type Dispatch = typeof store.dispatch;
