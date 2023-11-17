"use client";
// Line 34 add image
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
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-gradient-to-r from-black to-stone-950">
      {item.map((movie, key) => (
        <div
          key={key}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform hover:scale-110 transition duration-300 hover:border-blue-200 hover:border-50"
        >
          <a href="#">
            <Image
              width={500}
              height={500}
              className="rounded-t-lg"
              src={`${process.env.NEXT_PUBLIC_TMDB_BASEIMGURL}/${movie.poster_path}`}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}
