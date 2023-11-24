import React, { useState, useRef } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { searchMovie } from "./api";
import PopularMovieList from "./pages/pm";
import UpComingMovie from "./pages/up";
import DetailMovie from "./components/Detail";
import Swal from "sweetalert2";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const input = useRef(null);
  const navigate = useNavigate();

  // const search = async (q) => {
  //   if (q.length > 3) {
  //     const query = await searchMovie(q);
  //     // setMovies(query);
  //     // console.log(query);
  //   }
  // };
  const imgUrl = process.env.REACT_APP_BASEIMGURL;
  const isi = async () => {
    const film = input.current.value;
    const query = await searchMovie(film);
    // console.log(query);

    if (query.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Film ga ada cuy!",
      });
      setMovies([]); // Mengosongkan hasil pencarian jika tidak ada hasil
      navigate("/");
    } else {
      setMovies(query);
    }
  };

  function Hasilsearch() {
    return (
      <>
        <h2>Hasil Pencarian</h2>
        <div className="Movie-out-wraper">
          {movies.map((film) => {
            return (
              <div className="Movie-wrap" key={film.id}>
                <div className="Movie-title">{film.title}</div>
                <img className="Movie-img" src={`${imgUrl}/${film.poster_path}`} />
                <Link to={`/detail/${film.id}`} className="btn-detail-search">
                  Detail
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  function HalamanDepan() {
    return (
      <>
        <PopularMovieList />
        <UpComingMovie />
      </>
    );
  }

  return (
    <div className="App">
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        Isal Teater Mania
      </h1>
      <div className="form">
        <input type="text" placeholder="Cari film disini..." ref={input} className="Movie-search" />
        <button className="btn-cari" onClick={isi}>
          🔍
        </button>
      </div>
      <div className="Movie-container">
        <Routes>
          {movies.length > 0 ? <Route path="/" element={<Hasilsearch />} /> : <Route path="/" element={<HalamanDepan />} />}
          <Route path="/detail/:id" element={<DetailMovie />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
