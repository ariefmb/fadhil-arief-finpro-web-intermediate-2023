import React from "react";
import Head from "next/head";

export default function DMetadata(title, overview) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={overview} />
    </Head>
  );
}
