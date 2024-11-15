import { Routes, Route } from 'react-router-dom';
import MovieDetail from './page/MovieDetail';
import NavBar from './components/NavBar';
import Signup from './page/Signup';
import Login from './page/Login';
import Search from './page/Search';
import Main from './page/Main';
import SwiperMovie from './components/SwiperMovie';

function App() {
  return (
    <div className="flex justify-center items-center ">
      <header className=" bg-black text-white w-full h-20 sm:h-24 lg:h-28 fixed top-0 z-10">
        <NavBar />
      </header>
      <main className="top-20 sm:top-24 lg:top-28 flex flex-wrap gap-3 sm:gap-6 lg:gap-8 justify-center items-center py-20 sm:py-24 px-4 sm:px-10 lg:px-16 h-full">
        <SwiperMovie />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:id" element={<MovieDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search/:debouncedSearchValue" element={<Search />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
