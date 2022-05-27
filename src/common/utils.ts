import {Genre} from '@src/store/genre/type';
import {TopRated} from '@src/store/topRated/type';

export function chunk(array: any[], size = 1) {
  if (!array) {
    return [[]];
  }

  let arrayChunks = [];
  for (let i = 0; i < array.length; i += size) {
    let arrayChunk = array.slice(i, i + size);
    arrayChunks.push(arrayChunk);
  }
  return arrayChunks;
}

export function defineGenres(
  genres: Genre[],
  genresIds: TopRated['genre_ids'],
) {
  let genresToReturn: string[] = [];

  genresIds.forEach(id => {
    for (let genreIndex = 0; genreIndex < genres.length; genreIndex++) {
      const currentGenre = genres[genreIndex];
      if (id === currentGenre.id) {
        genresToReturn.push(currentGenre.name);
        break;
      }
    }
  });

  return genresToReturn;
}
