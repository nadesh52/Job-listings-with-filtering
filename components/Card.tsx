"use client";
import { useFilter } from "@/contexts/FilterContext";
import Image from "next/image";
import React from "react";

export default function Card({ data }: any) {
  const { addFilter } = useFilter();

  return (
    <div
      className={`${
        data.featured && "border-s-[5px] border-primary"
      } bg-white desktop:w-[1110px] desktop:h-[152px] rounded-lg px-[24px] desktop:px-[40px] py-8 shadow-2xl shadow-primary/30 relative`}
    >
      <div className="absolute -top-[24px] left-[24px] size-[48px] desktop:hidden">
        <Image src={`/assets/${data.logo}`} width={88} height={88} alt="logo" />
      </div>
      <div className="flex flex-col desktop:flex-row justify-between desktop:items-center">
        <div className="flex flex-row gap-6">
          <div className="size-[88px] hidden desktop:block">
            <Image
              src={`/assets/${data.logo}`}
              width={88}
              height={88}
              alt="logo"
            />
          </div>
          <div className="flex flex-col justify-center gap-3 desktop:gap-1">
            <div className="h-[24px] flex flex-row gap-6 desktop:gap-4">
              <div className="text-primary font-bold tracking-wider">
                {data.company}
              </div>
              <div className="flex flex-row gap-2">
                {data.new && (
                  <div className="h-[24px]x p-[8px] rounded-full flex items-center justify-center font-medium text-white bg-primary">
                    NEW!
                  </div>
                )}
                {data.featured && (
                  <div className="h-[24px]x p-[8px] rounded-full flex items-center justify-center font-medium text-white bg-secondary-400">
                    FEATURED
                  </div>
                )}
              </div>
            </div>
            <p className="font-bold desktop:text-custom-22 tracking-wide hover:cursor-pointer hover:text-primary">
              {data.position}
            </p>
            <div className="flex flex-row gap-[10px] desktop:gap-[18px] text-secondary-300 font-medium">
              <div>{data.postedAt}</div>
              <div>·</div>
              <div>{data.contract}</div>
              <div>·</div>
              <div>{data.location}</div>
            </div>
          </div>
        </div>

        <hr className="h-[1px] my-[14px] border-secondary-300" />

        <div className="flex flex-wrap desktop:flex-row gap-4">
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
