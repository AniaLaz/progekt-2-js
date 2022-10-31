const BASEURL = 'https://pixabay.com/api/';
const keyApiPix = '30040272-179178153c29e3da83ceec1ea';

const KEY = "5b1449ced393d87bc0a1ea0f9fb4bc3e";




export default async function fetchFilm(keyWord, perPage, page) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/550?api_key=${KEY}`
  );

  return response;
}