export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  genre_ids: number[];
}

export interface MovieInitialState {
  searchMovie: Movie[];
  loading: boolean;
  error: boolean;
}
