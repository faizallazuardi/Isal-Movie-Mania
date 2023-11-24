import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "animate.css";

export default function DetailMovie() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null); // Ganti inisialisasi state dengan null
  const navigate = useNavigate();

  useEffect(() => {
    const Details = async () => {
      try {
        const respon = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cdcc55e784190fdbbdb9c2f2b3787456`);
        setMovieDetail(respon.data);
      } catch (err) {
        console.error(err);
      }
    };

    Details();
  }, [id]);

  useEffect(() => {
    if (movieDetail) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const releaseDate = new Date(movieDetail.release_date).toLocaleDateString("en-US", options);
      Swal.fire({
        title: movieDetail.title,
        showClass: {
          popup: "animate__animated animate__bounceInDown",
        },
        hideClass: {
          popup: "animate__animated animate__bounceOutDown",
        },
        imageUrl: `https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`,
        html: `Release : ${releaseDate} <br/><br/> Rating : ${movieDetail.vote_average.toFixed(1)}.<br/><br/> Countries : ${movieDetail.production_countries[0].name} <br/><br/> Sinoposis : <br/> ${movieDetail.overview}`,
        imageWidth: 500,
        imageHeight: 270,
        width: 500,
        padding: ".8rem",
        imageAlt: "Custom image",
        background: "rgba(255, 255, 255, .7)",
        backdrop: `
        rgba(128, 128, 128, .3)`,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  }, [movieDetail]);

  return <></>;
}
