import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
export default function MovieCard({ movie }) {
  return (
    <div className="flex flex-col w-full transition duration-300 ease-in-out transform  rounded-lg shadow bg-[#181818] border-gray-700 hover:scale-105 hover:z-10">
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
        <div className="flex mt-2 space-x-2 font-bold ">
          <FaStar className="mt-0.5 text-[#DB2887] mr-2" />
          {movie.vote_average}
        </div>
      </div>
    </div>
  );
}
