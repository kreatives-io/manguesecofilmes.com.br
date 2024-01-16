import React from "react";
import Image from "next/image";
import { useNextSanityImage } from 'next-sanity-image';
import useImageGenerator from "@/hooks/useImageGenerator";

interface IHero {
  works: any;
}

const GRID_IMG_SIZE = 9;

export default function Hero({ works }: IHero) {
  const gridArray = works.slice(0, GRID_IMG_SIZE);
  const generateImage = (imageData: any) => useImageGenerator(imageData);

  return (
    <section className="w-full max-w-[100%] mx-auto justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {gridArray.map((item: any, index: number) => {
          const { width, height, src } = generateImage(item.mainImage) as any;

          return (
            <Image
              key={index}
              src={src}
              alt="hero image"
              width={width}
              height={height}
              className="object-cover h-full w-full"
            />
          )
        })}
      </div>
    </section>
  );
}
