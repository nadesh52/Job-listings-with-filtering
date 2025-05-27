"use client";
import { useFilter } from "@/contexts/FilterContext";
import React from "react";

export default function FilterTag({ filter }: any) {
  const { removeFilter } = useFilter();

  return (
    <div className="flex h-full flex-row items-center font-medium">
      <div className="text-primary bg-secondary-200 rounded-l px-[8px] py-[4px] font-medium">
        {filter}
      </div>
      <button
        onClick={() => removeFilter(filter)}
        className="bg-primary hover:bg-secondary-400 rounded-r text-white hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="m-1 size-6"
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
