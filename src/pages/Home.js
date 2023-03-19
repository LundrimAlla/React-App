import Header from "../components/Header";
import Slider from "../components/Slider";
import LatestProducts from "../components/LatestProduct";
import About from "../components/About";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  const API_KEY = "api_key=d2e656a6f501edc27354f92a11c38738";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = `${BASE_URL}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&${API_KEY}`;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((resp) => setMovies(resp.data.results.splice(0, 4)))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header />
      <Slider />
      <LatestProducts movies={movies} />
      <About />
      <Footer />
    </>
  );
}

export default Home;
