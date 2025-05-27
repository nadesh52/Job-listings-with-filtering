"use client";
import { useFilter } from "@/contexts/FilterContext";
import Image from "next/image";
import React from "react";

export default function Card({ data }: any) {
  const { addFilter } = useFilter();

  return (
    <div
      className={`${
        data.featured && "border-primary border-s-[5px]"
      } desktop:w-[1110px] desktop:h-[152px] desktop:px-[40px] shadow-primary/30 relative rounded-lg bg-white px-[24px] py-8 shadow-2xl`}
    >
      <div className="desktop:hidden absolute -top-[24px] left-[24px] size-[48px]">
        <Image src={`Job-listings-with-filtering/assets/${data.logo}`} width={88} height={88} alt="logo" />
      </div>
      <div className="desktop:flex-row desktop:items-center flex flex-col justify-between">
        <div className="flex flex-row gap-6">
          <div className="desktop:block hidden size-[88px]">
            <Image
              src={`Job-listings-with-filtering/assets/${data.logo}`}
              width={88}
              height={88}
              alt="logo"
            />
          </div>
          <div className="desktop:gap-1 flex flex-col justify-center gap-3">
            <div className="desktop:gap-4 flex h-[24px] flex-row gap-6">
              <div className="text-primary font-bold tracking-wider">
                {data.company}
              </div>
              <div className="flex flex-row gap-2">
                {data.new && (
                  <div className="h-[24px]x bg-primary flex items-center justify-center rounded-full p-[8px] font-medium text-white">
                    NEW!
                  </div>
                )}
                {data.featured && (
                  <div className="h-[24px]x bg-secondary-400 flex items-center justify-center rounded-full p-[8px] font-medium text-white">
                    FEATURED
                  </div>
                )}
              </div>
            </div>
            <p className="desktop:text-custom-22 hover:text-primary font-bold tracking-wide hover:cursor-pointer">
              {data.position}
            </p>
            <div className="desktop:gap-[18px] text-secondary-300 flex flex-row gap-[10px] font-medium">
              <div>{data.postedAt}</div>
              <div>·</div>
              <div>{data.contract}</div>
              <div>·</div>
              <div>{data.location}</div>
            </div>
          </div>
        </div>

        <hr className="border-secondary-300 my-[14px] h-[1px]" />

        <div className="desktop:flex-row flex flex-wrap gap-4">
          <button onClick={() => addFilter(data.role)} className="badge-tech">
            {data.role}
          </button>
          <button onClick={() => addFilter(data.level)} className="badge-tech">
            {data.level}
          </button>
          {data.languages.map((lang: any, i: any) => (
            <button
              onClick={() => addFilter(lang)}
              key={i}
              className="badge-tech"
            >
              {lang}
            </button>
          ))}
          {data.tools.map((tool: any, i: any) => (
            <button
              onClick={() => addFilter(tool)}
              key={i}
              className="badge-tech"
            >
              {tool}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
