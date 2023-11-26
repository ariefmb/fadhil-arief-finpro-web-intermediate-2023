import React from "react";
import { BeatLoader } from "react-spinners";
export default function Loading({ loading }) {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <BeatLoader loading={loading} size={30} color="#DB2887" />
    </div>
  );
}
