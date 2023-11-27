"use client";

import Loading from "@/components/Loading";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const TopRated = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPopular = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TMDB_BASEURL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_URL}`
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
    <div className="min-h-screen p-20 pt-35 bg-gradient-to-r from-black to-stone-950">
      <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {item.map((movie, key) => (
          <div
            key={key}
            className="flex flex-col w-full transition duration-300 ease-in-out transform bg-[#181818] rounded-lg shadow dark:border-gray-700 hover:scale-105 hover:z-10"
          >
            <Link href={`/popular/${movie.id}`}>
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
                <h5 className="overflow-hidden text-base font-bold tracking-tight text-gray-900 dark:text-white w-50 whitespace-nowrap overflow-ellipsis">
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
    </div>
  );
};

export default TopRated;
