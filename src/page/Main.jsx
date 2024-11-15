import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import { tmdbAPI } from '../services/api';

export default function Main() {
  const [popularMovieData, setPopularMovieData] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const res = await tmdbAPI.get('/movie/popular');
        setPopularMovieData(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPopularMovies();
  }, []);

  return (
    <>
      {popularMovieData.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}
