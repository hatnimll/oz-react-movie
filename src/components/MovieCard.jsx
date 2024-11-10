import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <li className="list-none w-[140px] sm:w-[180px] lg:w-[220px]">
      <Link to={`/details/${movie.id}`}>
        <img
          className="w-[140px] sm:w-[180px] lg:w-[220px] h-[210px] sm:h-[270px] lg:h-[330px]"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <h2 className="text-xs sm:text-sm lg:text-base">{movie.title}</h2>
        <p className="text-xs sm:text-sm lg:text-base pr-2">
          평점 : {movie.vote_average}
        </p>
      </Link>
    </li>
  );
}
