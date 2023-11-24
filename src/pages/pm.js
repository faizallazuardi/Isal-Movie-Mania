import { useState, useEffect } from "react";
import { getMovieData } from "../api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function PopularMovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovieData().then((response) => {
      setMovies(response);
      // console.log(response);
    });
  }, []);

  const imgUrl = process.env.REACT_APP_BASEIMGURL;
  return (
    <section id="Popular">
      <h1>Popular Movie</h1>
      <div className="wrapper">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            360: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          loop={false}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {movies.map((film) => {
            return (
              <SwiperSlide key={film.id}>
                <div className="Movie-wraper">
                  <div className="Movie-title">{film.title}</div>
                  <img className="Movie-img" src={`${imgUrl}/${film.poster_path}`} alt={film.title} />
                  <Link to={`/detail/${film.id}`} className="btn-detail">
                    Detail
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
