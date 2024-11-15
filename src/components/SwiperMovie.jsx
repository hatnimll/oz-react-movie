import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import { useEffect } from 'react';
import { tmdbAPI } from '../services/api';

export default function SwiperMovie() {
  const [topRatedMovieData, setTopRatedMovieData] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const res = await tmdbAPI.get('/movie/top_rated');
        setTopRatedMovieData(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTopRatedMovies();
  }, []);

  return (
    <Swiper
      spaceBetween={5}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      slidesPerView={5}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className=""
    >
      {topRatedMovieData.map((movie) => (
        <SwiperSlide key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
