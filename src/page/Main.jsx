import { useEffect } from 'react';
import { tmdbAPI } from '../assets/data/api';
import { useState } from 'react';
import MovieCard from '../components/MovieCard';

export default function Main() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await tmdbAPI.get('/movie/popular');
        setMovieData(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      {movieData.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}
