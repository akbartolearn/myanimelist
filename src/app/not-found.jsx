"use client";

import React from "react";

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="min-h-screen flex justify-center items-center gap-4 flex-col">
      <FileSearch size={44} className="text-color-accent" />
      <h3 className="text-color-accent text-4xl font-bold"> NOT FOUND </h3>{" "}
      <button
        onClick={handleBack}
        className="text-color-primary hover:text-color-accent transition-all underline"
      >
        Kembali
      </button>
    </div>
  );
};

export default NotFound;
