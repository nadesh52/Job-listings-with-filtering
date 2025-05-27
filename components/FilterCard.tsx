"use client";
import React from "react";
import FilterTag from "./FilterTag";
import { useFilter } from "@/contexts/FilterContext";

export default function FilterCard() {
  const { filters, clearFilters } = useFilter();

  if (filters.length === 0) return null;

  return (
    <div className="px-[24px] desktop:px-[165px] flex justify-center w-full">
      <div className="bg-white -mt-[34px] desktop:h-full z-10 w-full max-w-[328px] desktop:max-w-[1110px] rounded-lg shadow-2xl shadow-primary/30">
        <div className="py-5 px-[20px] desktop:px-10">
          <div className="flex flex-row justify-between gap-[20px] items-center">
            <div className="flex flex-row flex-wrap gap-4">
              {filters.map((filter: any, i: any) => (
                <FilterTag key={i} filter={filter} />
              ))}
            </div>
            <button
              onClick={clearFilters}
              className="underline underline-offset-1 cursor-pointer text-primary font-bold tracking-wide"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
