import React from 'react';
import {ScrollView, Text, Image, View} from 'react-native';

import {imageBaseUrl} from '@src/config';
import {Props} from './MovieDetails.types';

import {Genre} from '@src/components';

import styles from './MovieDetails.styles';

const MovieDetails = ({movie, genresToRender}: Props) => {
  const renderGenres = () => {
    return (
      <View style={styles.genreRow}>
        {genresToRender.map(genre => (
          <Genre key={genre} genre={genre} extraStyle={styles.genre} />
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={{uri: `${imageBaseUrl}${movie.poster_path}`}}
      />
      {renderGenres()}
      <View style={styles.row}>
        <Text style={styles.rowText}>Release date: {movie.release_date}</Text>
        <Text style={styles.rowText}>Rating: {movie.vote_average}</Text>
      </View>
      <Text style={styles.overview}>{movie.overview}</Text>
    </ScrollView>
  );
};

export default MovieDetails;
