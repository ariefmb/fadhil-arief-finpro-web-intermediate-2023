"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=55d967d7e5b1087ec127059056d3a8a3"
      );
      setItem(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main className="grid grid-cols-5 gap-1 min-h-screen p-24 pt-40 bg-gradient-to-r from-black to-stone-950">
      {item.map((movie, key) => (
        <div
          key={key}
          className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition duration-300 ease-in-out hover:z-10"
        >
          <a href="#">
            <Image
              width={200}
              height={200}
              className="rounded-lg"
              src={`${process.env.NEXT_PUBLIC_TMDB_BASEIMGURL}/${movie.poster_path}`}
              alt=""
            />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden w-40 whitespace-nowrap overflow-ellipsis">
                {movie.title}
              </h5>
            </a>
            <p className="text-xs font-normal text-gray-700 text-justify">
              {movie.release_date}
            </p>
            {/* <p className="text-xs font-normal text-gray-700 dark:text-gray-400 text-justify">
              {movie.overview}
            </p> */}
          </div>
        </div>
      ))}
    </main>
  );
}
