"use client";

import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import Link from "next/link";
export default function test() {
  const { movieListId } = useParams();
  const [item, setItem] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieListId}?api_key=c16992a5b9f59d213a1cec6070ba68a5`
      );
      console.log(response.data);
      setItem(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    console.log(item);
    getData();
  }, []);

  return (
    <div>
      <div className="mt-[5rem]">
<<<<<<< Updated upstream
        <div>
          <div className="">
            <section
              style={{ backgroundImage: `url(/img/bg.jpg)` }}
              className="bg-center bg-no-repeat bg-blend-multiply"
            >
              <div className="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-20 cursor-default">
                <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-3xl">
                  {item.title}
                </h1>
                <div className="flex justify-center">
                  <Image
                    className="items-baseline justify-center mb-4 bg-cover rounded-lg"
                    width={200}
                    height={200}
                    src={`${process.env.NEXT_PUBLIC_TMDB_BASEIMGURL}/${item.poster_path}`}
                    alt=""
                  />
                </div>

                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                  <div className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-[#DB2887] rounded-lg  gap-x-2">
                    <FaStar />
                    {item.vote_average}
                  </div>
                  <div className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-[#DB2887] rounded-lg hover:text-gray-900 sm:ms-4 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 gap-x-2">
                    <MdAccessTimeFilled />
                    {item.runtime} min
                  </div>
                </div>
                <div className="flex flex-col mt-5 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 gap-x-4">
=======
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)),  url(${process.env.NEXT_PUBLIC_TMDB_BASEIMGURL}/${item.poster_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col flex-wrap items-center justify-center">
            <section className="mt-[15rem] flex flex-row flex-wrap items-start justify-center overflow-x-auto">
              <div>
                <Image
                  className="items-baseline justify-center mb-4 bg-cover rounded-lg"
                  width={200}
                  height={200}
                  src={`${process.env.NEXT_PUBLIC_TMDB_BASEIMGURL}/${item.poster_path}`}
                  alt=""
                />
              </div>
              <div className="flex flex-col pr-5 ml-6 space-y-4 ">
                <h1 className="text-2xl font-bold sm:text-7xl">{item.title}</h1>
                <div className="flex flex-wrap">
>>>>>>> Stashed changes
                  {item.genres?.map((genre, key) => (
                    <div
                      key={key}
                      className="px-2 py-1 mr-2 text-sm font-medium text-white border border-white rounded-xl "
                    >
                      {genre.name}
                    </div>
                  ))}
                </div>
                <div className="flex mt-2 font-bold gap-x-2">
                  <FaStar className="mt-0.5" />
                  {item.vote_average}
                  <div>|</div>
                  <div className="text">{item.runtime} minutes</div>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center max-w-3xl overflow-auto">
                  <h1 className="text-white">{item.overview}</h1>
                </div>
                <a href={item.homepage} className="underline">
                  {item.homepage}
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
