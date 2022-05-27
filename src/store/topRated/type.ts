export interface TopRated {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  genre_ids: number[];
}

export interface TopRatedInitialState {
  movies: TopRated[];
  loading: boolean;
  error: boolean;
}
