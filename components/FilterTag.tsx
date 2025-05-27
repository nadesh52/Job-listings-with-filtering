"use client";
import { useFilter } from "@/contexts/FilterContext";
import React from "react";

export default function FilterTag({ filter }: any) {
  const { removeFilter } = useFilter();

  return (
    <div className="flex flex-row font-medium items-center h-full">
      <div className="px-[8px] py-[4px] text-primary bg-secondary-200 font-medium rounded-l">
        {filter}
      </div>
      <button
        onClick={() => removeFilter(filter)}
        className="bg-primary rounded-r text-white hover:bg-secondary-400 hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-6 m-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
