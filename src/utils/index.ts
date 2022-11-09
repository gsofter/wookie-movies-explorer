export const calcRating = (imdb_rating: number) => {
  return imdb_rating / 2;
};

export const getYear = (date: string) => {
  return new Date(date).getFullYear();
};
