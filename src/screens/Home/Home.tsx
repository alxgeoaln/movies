import React from 'react';
import {View, FlatList} from 'react-native';

import { Movie } from '@src/store/searchMovie/type';
import {TopRated} from '@src/store/topRated/type';
import {Props} from './Home.types';

import {MovieCard, NoInternetHeader, SearchHeader} from '@src/components';

import styles from './Home.styles';

const Home = ({
  movies,
  handleShowMovieDetails,
  isConnected,
  searchQuery,
  handleSearchQuery,
  searchMovie
}: Props) => {
  const renderItem = ({item}: {item: TopRated[] | Movie[]}) => {
    return (
      <View style={styles.row}>
        {item.map(movie => (
          <MovieCard
            key={movie.id}
            item={movie}
            handleOnPress={() => handleShowMovieDetails(movie)}
          />
        ))}
      </View>
    );
  };

  const renderHeader = () => {
    return isConnected ? (
      <SearchHeader
        searchQuery={searchQuery}
        handleSearchQuery={handleSearchQuery}
      />
    ) : (
      <NoInternetHeader />
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.overlay}>
        <FlatList
          contentContainerStyle={styles.flatlist}
          data={searchQuery.length ? searchMovie : movies}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;
