export interface Genre {
  id: number;
  name: string;
}

export interface GenreInitialState {
  genres: Genre[];
  loading: boolean;
  error: boolean;
}

export interface Response {
  genres: Genre[]
}
