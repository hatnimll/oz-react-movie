import axios from 'axios';

const APIKEY = import.meta.env.VITE_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';

export const tmdbAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: APIKEY,
    language: 'ko-KR',
  },
});
