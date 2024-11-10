import { IoSearchSharp } from 'react-icons/io5';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import { useEffect } from 'react';

export default function NavBar() {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const [clickedSearchButton, setClickedSearchButton] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (searchValue && debouncedSearchValue.length > 0) {
      navigate(`/search/${debouncedSearchValue}`);
    }
  }, [searchValue, debouncedSearchValue, navigate]);

  const handleSearchButtonClick = () => {
    setClickedSearchButton(true);
  };

  const handleLogoClick = () => {
    setClickedSearchButton(false);
    navigate('/');
    setSearchValue('');
  };

  const handleLoginClick = () => {
    setSearchValue('');
    setClickedSearchButton(false);
    navigate('/login');
  };

  const handleSignupClick = () => {
    setSearchValue('');
    setClickedSearchButton(false);
    navigate('/signup');
  };

  return (
    <nav className="flex text-sm sm:text-2xl  lg:text-3xl justify-between items-center px-3 sm:px-6 lg:px-10 h-full">
      <h1 className="text-2xl sm:text-5xl" onClick={handleLogoClick}>
        oz 무비
      </h1>
      <div className="flex gap-3 sm:gap-5 lg:gap-8">
        {clickedSearchButton ? (
          <>
            <IoSearchSharp />
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="border-b border-solid border-b-white w-[120px] sm:w-[150px] lg:w-[180px] bg-black text-sm sm:text-lg lg:text-xl"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </>
        ) : (
          <button onClick={handleSearchButtonClick}>
            <IoSearchSharp />
          </button>
        )}
        <button onClick={handleLoginClick}>로그인</button>
        <button onClick={handleSignupClick}>회원가입</button>
      </div>
    </nav>
  );
}
