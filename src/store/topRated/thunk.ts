import {createAsyncThunk} from '@reduxjs/toolkit';
import Realm from 'realm';

import {topRataedMoviesApi} from '@src/api';
import {TopRatedMovieSchema} from '@src/database';
import {TopRated} from './type';

interface Result {
  results: TopRated[];
}

export const getTopRatedThunk = createAsyncThunk(
  'top-rated/getTopRated',
  async (isConnected: boolean | null) => {
    try {
      const topRatedMoviesResponse = await topRataedMoviesApi();
      const topRatedMoviesJson: Result = await topRatedMoviesResponse.json();

      const offlineData = topRatedMoviesJson.results.slice(0, 10);

      const topRatedMovieRealm = await Realm.open({
        schema: [TopRatedMovieSchema],
      });

      if (isConnected) {
        topRatedMovieRealm.write(() => {
          topRatedMovieRealm.deleteAll();
        });
      }

      const offlineMovies = topRatedMovieRealm.objects('TopRatedMovie');
      const offlineMoviesLength = offlineMovies.length;
      const offlineMoviesToRender: TopRated[] = topRatedMovieRealm
        .objects('TopRatedMovie')
        .toJSON();

      if (offlineMoviesLength === 0) {
        topRatedMovieRealm.write(() => {
          for (let i = 0; i < offlineData.length; i++) {
            const itemToWrite = offlineData[i];
            topRatedMovieRealm.create('TopRatedMovie', itemToWrite);
          }
        });
      }

      return isConnected ? topRatedMoviesJson.results : offlineMoviesToRender;
    } catch (e) {
      return [];
    }
  },
);
