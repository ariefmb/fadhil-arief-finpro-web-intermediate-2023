"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";
import Loading from "@/components/Loading";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";

const MovieList = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { searchTerm } = useContext(SearchContext);

  const filteredMovies = item.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=c16992a5b9f59d213a1cec6070ba68a5`,
        { next: { revalidate: 3600 } }
      );
      setItem(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div>
      <div className="flex-col items-center justify-center w-full max-w-screen-lg p-8 mx-auto ">
        <h1 className="mb-4 text-3xl font-bold text-[#DB2887] text-center">
          Welcome to Layar Kaca31
        </h1>
        <SearchBar className="w-full " />
      </div>
      <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredMovies.map((movie, key) => (
          <MovieCard category="movieList" movie={movie} key={key} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
