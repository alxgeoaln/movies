import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {StackParamList} from '@src/navigation';
import {TopRated} from '@src/store/topRated/type';

export type MovieContainerProps = NativeStackScreenProps<
  StackParamList,
  'MovieDetails'
>;

export interface Props {
  movie: TopRated;
  genresToRender: string[];
}
