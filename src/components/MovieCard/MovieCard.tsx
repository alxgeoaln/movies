import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';

import {imageBaseUrl} from '@src/config';
import {TopRated} from '@src/store/topRated/type';

import styles from './MovieCard.styles';

interface Props {
  item: TopRated;
  handleOnPress: () => void;
}

const MovieCard = ({item, handleOnPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Image
        style={styles.image}
        source={{uri: `${imageBaseUrl}${item.poster_path}`}}
      />
      <View style={styles.footer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.rating}>Rating: {item.vote_average}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
