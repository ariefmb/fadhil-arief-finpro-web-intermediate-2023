"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/Loading";
import MovieCard from "@/components/MovieCard";

const Upcoming = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUpcomingList();
  }, []);

  const getUpcomingList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TMDB_BASEURL}/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_URL}`,
        { cache: "no-store" }
      );
      console.log(response.data.results);
      setItem(response.data.results);
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div className="min-h-screen p-20 pt-35 bg-gradient-to-r from-black to-stone-950">
      <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {item.map((movie, key) => (
          <MovieCard movie={movie} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
