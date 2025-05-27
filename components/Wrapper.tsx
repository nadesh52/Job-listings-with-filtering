"use client";
import React from "react";
import CardList from "./CardList";
import FilterCard from "./FilterCard";
import FilterProvider from "@/contexts/FilterContext";

export default function Wrapper() {
  return (
    <FilterProvider>
      <FilterCard />
      <CardList />
    </FilterProvider>
  );
}
