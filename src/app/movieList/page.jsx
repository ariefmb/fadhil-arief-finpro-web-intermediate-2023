"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import Loading from "@/components/Loading";
const MovieList = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=c16992a5b9f59d213a1cec6070ba68a5`
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
    <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {item.map((movie, key) => (
        <div
          key={key}
          className="flex flex-col w-full transition duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:z-10"
        >
          <Link href={`/movieList/${movie.id}`}>
            <Image
              width={400}
              height={200}
              loading="lazy"
              className="rounded-t-lg"
              src={`${process.env.NEXT_PUBLIC_TMDB_BASEIMGURL}/${movie.poster_path}`}
              alt=""
            />
          </Link>
          <div className="flex-1 p-2">
            <a href="#" className="hover:underline">
              <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h5>
            </a>
            <p className="text-xs font-normal text-justify text-gray-700 dark:text-white">
              {movie.release_date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieList;
