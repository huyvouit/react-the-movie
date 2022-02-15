const apiConfig = {
  baseUrl: "https://www.themoviedb.org/3/",
  apiKey: "287aa449eff0c33e6d5f4e80d8d13f00",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
