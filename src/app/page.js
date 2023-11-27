"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import MovieList from "./movieList/page";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen p-20 pt-35 bg-gradient-to-r from-black to-stone-950">
      <Head>
        <title>LayarKaca31 || FE Project</title>
        <meta
          name="description"
          content="Website ini dibuat dengan rangka menyelesaikan tugas FE yang diberikan"
        />
        <meta name="keywords" content="Movie, NextJS, TailwindCSS, TMDB" />
      </Head>
      <MovieList />
    </main>
  );
}
