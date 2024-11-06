import { useState } from 'react';
import movieDetailData from './assets/data/movieDetailData';

export default function MovieDetail() {
  const [movieDetail] = useState(movieDetailData);

  return (
    <div className="flex justify-center items-center m-10">
      <img
        className="w-[400px] mr-7"
        src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
      />
      <div>
        <h2 className="text-5xl mb-[50px]">{movieDetail.original_title}</h2>
        <p className="text-3xl mb-[30px]">평점 : {movieDetail.vote_average}</p>
        <p className="text-3xl mb-[30px]">
          장르 :
          {movieDetail.genres.map((genre) => (
            <span key={genre.id}>{genre.name}/</span>
          ))}
        </p>
        <p className="text-xl">줄거리 : {movieDetail.overview}</p>
      </div>
    </div>
  );
}
