import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { tmdbAPI } from '../services/api';

export default function MovieDetail() {
  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const res = await tmdbAPI.get(`/movie/${id}`);
        console.log(res.data);
        setMovieDetail(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movieDetail) return <p>Loading...</p>;

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-10 px-4 py-6">
      <img
        className="w-full sm:w-[300px] lg:w-[400px] mb-6 sm:mb-0 sm:mr-7 rounded-lg shadow-lg"
        src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
      />
      <div className="flex flex-col items-center sm:items-start w-full max-w-[500px] gap-4 sm:gap-[50px]">
        <div className="flex flex-col sm:flex-row sm:gap-7 items-center sm:items-start gap-4">
          <h2 className="text-3xl sm:text-5xl font-bold">
            {movieDetail.title}
          </h2>
          <p className="text-2xl sm:text-3xl ">
            평점 : {movieDetail.vote_average}
          </p>
        </div>
        <p className="text-lg sm:text-xl flex flex-wrap gap-3">
          {movieDetail.genres.map((genre) => (
            <span
              className="bg-gray-200 px-3 py-2 rounded-md text-sm sm:text-base"
              key={genre.id}
            >
              {genre.name}
            </span>
          ))}
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          줄거리 : {movieDetail.overview}
        </p>
      </div>
    </div>
  );
}
