"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { SearchContext } from "@/context/SearchContext";
import Loading from "@/components/Loading";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";

const Popular = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = item.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPopular = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TMDB_BASEURL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_URL}`,
        { next: { revalidate: 3600 } }
      );
      setItem(response.data.results);
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <div className="min-h-screen p-20 pt-35 bg-gradient-to-r from-black to-stone-950">
        <div className="flex-col items-center justify-center w-full max-w-screen-lg p-8 mx-auto ">
        <h1 className="mb-4 text-3xl font-bold text-[#6580C4] text-center">
          Popular Movies
        </h1>
          <SearchBar className="w-full " />
        </div>
        <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredMovies.map((movie, key) => (
            <MovieCard category="popular" movie={movie} key={key} />
          ))}
        </div>
      </div>
    </SearchContext.Provider>
  );
};

export default Popular;
