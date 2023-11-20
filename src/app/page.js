"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import MovieList from "./movieList/page";

export default function Home() {
  return (
    <main className="min-h-screen p-24 pt-30 bg-gradient-to-r from-black to-stone-950">
      <MovieList />
    </main>
  );
}
