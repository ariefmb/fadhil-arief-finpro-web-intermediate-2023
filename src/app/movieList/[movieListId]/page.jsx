"use client";

import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";

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
        <div>
          <div className="">
            <section
              style={{ backgroundImage: `url(/img/bg.jpg)` }}
              className="bg-center bg-no-repeat bg-blend-multiply"
            >
              <div className="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-20">
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
                  {item.genres?.map((genre, key) => (
                    <div
                      key={key}
                      className="border border-[#DB2887] rounded-lg px-2 py-1 text-sm font-medium text-[#DB2887]"
                    >
                      {genre.name}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
