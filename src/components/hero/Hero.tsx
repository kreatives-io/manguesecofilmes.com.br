'use client';

import Image from "next/image";
import Link from "next/link";

import useImageGenerator from "@/hooks/useImageGenerator";

interface IHero {
  works: any;
  locale: string;
}

const GRID_IMG_SIZE = 9;

export default function Hero({ works, locale }: IHero) {
  const gridArray = works.slice(0, GRID_IMG_SIZE);
  const generateImage = (imageData: any) => useImageGenerator(imageData);

  return (
    <section className="w-full max-w-[100%] mx-auto justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {gridArray.map((item: any, index: number) => {
          const { width, height, src } = generateImage(item.mainImage) as any;
          const workLink = `/${locale}/works/${works[index].slug.current}`;
          
          return (
            <Link key={index} className="text-center opacity-100 relative cursor-pointer" href={workLink}>
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 flex flex-col items-center gap-2 justify-center ease-in-out transition-opacity duration-250">
                <span className="font-freight text-4xl uppercase">{item.artist}</span>
                <span className="font-freight text-4xl capitalize">{item.workName}</span>
              </div>
              <Image
                src={src}
                alt="hero image"
                width={width}
                height={height}
                className="object-cover h-full w-full"
              />
            </Link>
          )
        })}
      </div>
    </section>
  );
}
