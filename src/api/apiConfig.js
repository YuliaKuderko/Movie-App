export const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'be0ac07a05f47280873761bd49926d01',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}