import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="flex gap-6 text-2xl justify-between items-center">
      <h1 className="text-7xl">oz movie</h1>
      <div className="flex gap-6">
        <Link to="/login">
          <button>로그인</button>
        </Link>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
      </div>
    </nav>
  );
}
