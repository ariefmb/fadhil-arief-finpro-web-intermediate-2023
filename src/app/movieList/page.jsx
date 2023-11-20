import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const MovieList = () => {
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
    <div className="flex flex-wrap justify-center gap-2 pt-5">
      {item.map((movie, key) => (
        <div
          key={key}
          className="w-1/6 transition duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:z-10"
        >
          <a href="#">
            <Image
              width={400}
              height={200}
              className="rounded-lg"
              src={`${process.env.NEXT_PUBLIC_TMDB_BASEIMGURL}/${movie.poster_path}`}
              alt=""
            />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="w-40 overflow-hidden text-base font-bold tracking-tight text-gray-900 dark:text-white whitespace-nowrap overflow-ellipsis">
                {movie.title}
              </h5>
            </a>
            <p className="text-xs font-normal dark:text-white text-justify text-gray-700">
              {movie.release_date}
            </p>
            {/* <p className="text-xs font-normal text-justify text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieList;