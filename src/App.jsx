import MovieCard from './components/MovieCard';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from './MovieDetail';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
import { tmdbAPI } from './assets/data/api';

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await tmdbAPI.get('/popular');
        setMovieData(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <>
      <header className=" bg-black text-white px-7 w-[100%] h-[100px] fixed top-0">
        <NavBar />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-wrap m-10 gap-10 justify-center pt-[100px]">
              {movieData.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          }
        />
        <Route path="/details/:id" element={<MovieDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
