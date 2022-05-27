
export const TopRatedMovieSchema = {
    name: 'TopRatedMovie',
    properties: {
        id: "int",
        title: "string",
        poster_path: "string",
        release_date: "string",
        vote_average: "int",
        overview: "string",
        genre_ids: "int<>"
    }
}

