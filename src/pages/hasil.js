import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchMovie } from "./api";
import Swal from "sweetalert2";
import "./App.css";

function HasilSearch() {
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

  return (
    <>
      <h2>Hasil Pencarian</h2>
      <div className="Movie-out-wraper">
        {movies.map((film) => {
          return (
            <div className="Movie-wrap" key={film.id}>
              <div className="Movie-title">{film.title}</div>
              <img className="Movie-img" src={`${imgUrl}/${film.poster_path}`} />
              <Link to={`/detail/${film.id}`} className="btn-detail">
                Detail
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HasilSearch;
