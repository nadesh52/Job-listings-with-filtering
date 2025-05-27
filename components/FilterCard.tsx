"use client";
import React from "react";
import FilterTag from "./FilterTag";
import { useFilter } from "@/contexts/FilterContext";

export default function FilterCard() {
  const { filters, clearFilters } = useFilter();

  if (filters.length === 0) return null;

  return (
    <div className="desktop:px-[165px] flex w-full justify-center px-[24px]">
      <div className="desktop:h-full desktop:max-w-[1110px] shadow-primary/30 z-10 -mt-[34px] w-full max-w-[328px] rounded-lg bg-white shadow-2xl">
        <div className="desktop:px-10 px-[20px] py-5">
          <div className="flex flex-row items-center justify-between gap-[20px]">
            <div className="flex flex-row flex-wrap gap-4">
              {filters.map((filter: any, i: any) => (
                <FilterTag key={i} filter={filter} />
              ))}
            </div>
            <button
              onClick={clearFilters}
              className="text-primary cursor-pointer font-bold tracking-wide underline underline-offset-1"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
