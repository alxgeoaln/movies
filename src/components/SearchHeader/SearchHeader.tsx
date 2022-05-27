import React from 'react';
import {View, Text, TextInput} from 'react-native';

import {Props} from './type';

import styles from './SearchHeader.styles';

const SearchHeader = ({handleSearchQuery, searchQuery}: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Hello, what do you want to watch?</Text>
      <TextInput
        value={searchQuery}
        onChangeText={handleSearchQuery}
        placeholder="Search"
        style={styles.searchInput}
      />
    </View>
  );
};

export default SearchHeader;
