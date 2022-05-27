import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';

import {genresSelector} from '@src/store/genre/selector';

import MovieDetails from './MovieDetails';
import {MovieContainerProps} from './MovieDetails.types';
import {defineGenres} from '@src/common/utils';

const MovieDetailsContainer = ({route}: MovieContainerProps) => {
  const movie = route.params;

  const {genres} = useSelector(genresSelector);

  const handleGenresToRender = defineGenres(genres, movie.genre_ids);

  return <MovieDetails genresToRender={handleGenresToRender}  movie={movie} />;
};

export default MovieDetailsContainer;
