import React from "react";

export default function Loading() {
  return (
    <div className="h-screen grid place-items-center bg-black text-white z-50">
      <h1 className="animate-pulse uppercase font-bold text-xl">Loading ...</h1>
    </div>
  );
}
