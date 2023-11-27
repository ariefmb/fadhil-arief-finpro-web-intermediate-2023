"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    console.log("error");
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">404</h1>
      <h2 className="mb-4 text-xl font-bold">Page Not Found</h2>
      <Link href="/" className=" bg-[#DB2887] px-3 py-1 rounded-xl">
        Go back to home
      </Link>
    </div>
  );
}
