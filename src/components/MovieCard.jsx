import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <li>
      <Link to={`/details`}>
        <img
          className="w-[200px]"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <h2>{movie.original_title}</h2>
        <p>{movie.vote_average}</p>
      </Link>
    </li>
  );
}
