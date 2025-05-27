"use client";
import React, { createContext, useContext, useState } from "react";

type FilterContextType = {
  filters: string[];
  addFilter: (tag: string) => void;
  removeFilter: (tag: string) => void;
  clearFilters: () => void;
};

const filterContext = createContext<FilterContextType | undefined>(undefined);

export default function FilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (tag: string) => {
    setFilters((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
  };

  const removeFilter = (tag: string) => {
    setFilters((prev) => prev.filter((t) => t !== tag));
  };

  const clearFilters = () => setFilters([]);

  return (
    <filterContext.Provider
      value={{ filters, addFilter, removeFilter, clearFilters }}
    >
      {children}
    </filterContext.Provider>
  );
}

export const useFilter = () => {
  const context = useContext(filterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
