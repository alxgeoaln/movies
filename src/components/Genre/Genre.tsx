
import React from 'react';
import { Text, View } from 'react-native';

import { Props } from './type';

import styles from './Genre.styles';

const Genre = ({genre, extraStyle}: Props) => (
  <View style={[styles.container, extraStyle]}>
    <Text style={styles.text}>{genre}</Text>
  </View>
);

export default Genre;
