"use client";
import React from "react";
import Card from "@/components/Card";
import data from "@/utils/data.json";
import { useFilter } from "@/contexts/FilterContext";

export default function CardList() {
  const { filters } = useFilter();

  const filteredData = data.filter((d) => {
    const tags = [d.role, d.level, ...d.languages, ...d.tools];
    return filters.length === 0 || filters.every((f) => tags.includes(f));
  });

  return (
    <div className="px-[24px] pt-[56px] desktop:pt-[40px] pb-[120px]">
      <div className="flex flex-col desktop:items-center gap-10 desktop:gap-6">
        {filteredData.map((d: any, i: any) => (
          <div key={i}>
            <Card data={d} />
          </div>
        ))}
      </div>
    </div>
  );
}
