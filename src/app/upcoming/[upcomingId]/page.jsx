"use client";

import axios from "axios";
import Loading from "@/components/Loading";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DMetadata from "@/components/DMetadata";
import MovieDetail from "@/components/MovieDetailCard";

export default function detailUpcoming() {
  const { upcomingId } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  let linkDetail = "";

  const linkStringify = (props) => {
    return JSON.stringify(props);
  };

  const getUpcomingList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TMDB_BASEURL}/movie/${upcomingId}?api_key=${process.env.NEXT_PUBLIC_API_URL}`
      );
      setItem(response.data);
      linkDetail = response.data.homepage;
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUpcomingList();
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div className="mt-5">
      <DMetadata title={item.title} overview={item.overview} />
      <MovieDetail item={item} linkDetail={linkDetail} />
    </div>
  );
}
