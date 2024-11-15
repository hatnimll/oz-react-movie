import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { tmdbAPI } from '../services/api';

export default function Search() {
  const { debouncedSearchValue } = useParams();
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const res = await tmdbAPI.get('/search/movie', {
          params: { query: debouncedSearchValue },
        });
        setSearchMovies(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearchData();
  }, [debouncedSearchValue]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-[20px]">
      {searchMovies.length > 0 ? (
        searchMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p className="text-2xl lg:text-4xl">일치하는 영화가 없습니다.</p>
      )}
    </div>
  );
}
