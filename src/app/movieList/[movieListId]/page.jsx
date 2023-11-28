"use client";

import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import Head from "next/head";

import Link from "next/link";
import Loading from "@/components/Loading";
import DMetadata from "@/components/DMetadata";
import MovieDetail from "@/components/MovieDetailCard";
export default function test() {
  const { movieListId } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
      setError(error.message);
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
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        Error: {error}
        <Link href="/" className=" bg-[#DB2887] px-3 py-1 rounded-xl mt-4">
          Go back to home
        </Link>
      </div>
    );
  }

  // ...

  return (
    <div className="mt-5">
      <DMetadata title={item.title} overview={item.overview} />
      <MovieDetail item={item} linkDetail={linkDetail} />
    </div>
  );
}
