"use client";

import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import Link from "next/link";
import Loading from "@/components/Loading";
export default function test() {
  const { movieListId } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  let linkDetail = "";

  const linkStringify = (props) => {
    return JSON.stringify(props);
  };

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieListId}?api_key=c16992a5b9f59d213a1cec6070ba68a5`
      );

      setItem(response.data);
      linkDetail = response.data.homepage;
      console.log(linkDetail);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    console.log(item);

    console.log(linkDetail);
    getData();
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  // ...

  return (
    <div className="mt-5">
      <div
        className="relative inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)),  url(${process.env.NEXT_PUBLIC_TMDB_BASEIMGURL}/${item.poster_path})`,
        }}
      >
        <div className="flex flex-col items-center justify-center h-screen p-10 text-white">
          <section className="flex flex-col items-center justify-center md:flex-row">
            <div className="md:mr-8">
              <Image
                className="mt-[20rem] sm:mt-1 mb-4 rounded-lg"
                width={400}
                height={300}
                src={`${process.env.NEXT_PUBLIC_TMDB_BASEIMGURL}/${item.poster_path}`}
                alt=""
              />
            </div>
            <div className="flex flex-col mt-4 md:mt-0">
              <h1 className="text-2xl font-bold md:text-7xl">{item.title}</h1>
              <div className="flex flex-wrap mt-2">
                {item.genres?.map((genre, key) => (
                  <div
                    key={key}
                    className="px-2 py-1 mr-2 text-sm font-medium text-white border border-white rounded-xl"
                  >
                    {genre.name}
                  </div>
                ))}
              </div>
              <div className="flex mt-2 space-x-2 font-bold">
                <FaStar className="mt-0.5" />
                {item.vote_average}
                <div>|</div>
                <div className="text">{item.runtime} minutes</div>
              </div>
              <div className="flex flex-col mt-2 md:flex-row md:space-x-4">
                <p className="text-white">{item.overview}</p>
              </div>
              <a
                href={linkDetail}
                className="mt-2 mb-10 underline md:mt-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.homepage}
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
