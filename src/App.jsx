import './App.css';
import MovieCard from './components/MovieCard';
import movieListData from './assets/data/movieListData';
import { useState } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import MovieDetail from './MovieDetail';

function App() {
  const [movieData] = useState(movieListData.results);

  return (
    <>
      <h1 className="text-7xl m-5 bg-black text-white px-7 h-[100px]">
        oz movie
      </h1>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-wrap m-10 gap-10 justify-center">
              {movieData.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          }
        />
        <Route path="/details" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
