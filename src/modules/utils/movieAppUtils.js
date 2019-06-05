export default class MovieAppUtils {
  static getMappedData = data => {
    return data.map(ele => {
      return {
        id: ele.id,
        title: ele.title,
        description: ele.description,
        year: ele.year,
        duration: ele.duration,
        director: ele.director.toString(),
        genre: ele.genre.toString(),
        reviews: ele.reviews || []
      };
    });
  };
}
