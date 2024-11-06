import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <li className="list-none">
      <Link to={`/details`}>
        <img
          className="w-[200px] h-[300px]"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <h2 className="w-[200px]">{movie.original_title}</h2>
        <p className="pr-5">평점 : {movie.vote_average}</p>
      </Link>
    </li>
  );
}
