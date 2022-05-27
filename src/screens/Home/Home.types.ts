import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {StackParamList} from '@src/navigation';
import { Movie } from '@src/store/searchMovie/type';
import {TopRated} from '@src/store/topRated/type';

export type HomeContainerProps = NativeStackScreenProps<StackParamList, 'Home'>;

export interface Props {
  movies: TopRated[][];
  handleShowMovieDetails: (item: TopRated) => void;
  isConnected: boolean | null;
  searchQuery: string;
  handleSearchQuery: (value: string) => void;
  searchMovie: Movie[][]
}
