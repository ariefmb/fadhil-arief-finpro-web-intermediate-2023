"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import Loading from "@/components/Loading";
import DMetadata from "@/components/DMetadata";
import MovieDetail from "@/components/MovieDetailCard";

export default function detailTopRated() {
  const { topRatedId } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  let linkDetail = "";

  const linkStringify = (props) => {
    return JSON.stringify(props);
  };

  const getTopRated = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TMDB_BASEURL}/movie/${topRatedId}?api_key=c16992a5b9f59d213a1cec6070ba68a5`
      );
      linkDetail = response.data.homepage;
      setItem(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopRated();
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div className="mt-5">
      <DMetadata title={item.title} overview={item.overview} />
      <MovieDetail
        item={item}
        linkDetail={linkDetail}
        path={item.poster_path}
      />
    </div>
  );
}
