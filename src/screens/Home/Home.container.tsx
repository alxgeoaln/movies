import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Error, Loading} from '@src/components';
import Home from './Home';

import {Dispatch} from '@src/store';
import {topRatedMoviesSelector} from '@src/store/topRated/selector';
import {searchMovieSelector} from '@src/store/searchMovie/selector';

import {getTopRatedThunk} from '@src/store/topRated/thunk';
import {getGenreThunk} from '@src/store/genre/thunk';
import {searchMovieThunk} from '@src/store/searchMovie/thunk';

import useIsConnected from '@src/hooks/useIsConnected';

import {chunk} from '@src/common/utils';
import {TopRated} from '@src/store/topRated/type';
import {HomeContainerProps} from './Home.types';
import {Movie} from '@src/store/searchMovie/type';

const HomeContainer = ({navigation}: HomeContainerProps) => {
  const dispatch = useDispatch<Dispatch>();
  const {loading, error, movies} = useSelector(topRatedMoviesSelector);
  const {searchMovie} = useSelector(searchMovieSelector);

  const isConnected = useIsConnected();

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(getGenreThunk());
    dispatch(getTopRatedThunk(isConnected));
  }, [dispatch, isConnected]);

  const handleShowMovieDetails = (item: TopRated) =>
    navigation.navigate('MovieDetails', item);

  const handleSearchQuery = (value: string) => {
    setSearchQuery(value);
    dispatch(searchMovieThunk(value));
  };

  const chunckedMovies = useCallback(
    (): TopRated[][] => chunk(movies, 2),
    [movies],
  );

  const chunckedSearchMovies = useCallback(
    (): Movie[][] => chunk(searchMovie, 2),
    [searchMovie],
  );

  return (
    <View style={{flex: 1}}>
      {error && <Error />}
      {loading && <Loading />}
      <Home
        isConnected={isConnected}
        handleShowMovieDetails={handleShowMovieDetails}
        movies={chunckedMovies()}
        handleSearchQuery={handleSearchQuery}
        searchQuery={searchQuery}
        searchMovie={chunckedSearchMovies()}
      />
    </View>
  );
};

export default HomeContainer;
