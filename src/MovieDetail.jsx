import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { tmdbAPI } from './assets/data/api';

export default function MovieDetail() {
  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const res = await tmdbAPI.get(`/${id}`);
      console.log(res.data);
      setMovieDetail(res.data);
    };

    fetchMovieDetail();
  }, [id]);

  if (!movieDetail) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center m-10 pt-[100px]">
      <img
        className="w-[400px] mr-7"
        src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
      />
      <div>
        <div className="flex my-[50px] gap-5 items-center">
          <h2 className="text-5xl">{movieDetail.original_title}</h2>
          <p className="text-3xl">평점 : {movieDetail.vote_average}</p>
        </div>
        <p className="text-3xl mb-[30px] flex gap-4 ">
          {movieDetail.genres.map((genre) => (
            <span className="bg-gray-200 px-3 py-2 rounded-[px]" key={genre.id}>
              {genre.name}
            </span>
          ))}
        </p>
        <p className="text-xl">줄거리 : {movieDetail.overview}</p>
      </div>
    </div>
  );
}
