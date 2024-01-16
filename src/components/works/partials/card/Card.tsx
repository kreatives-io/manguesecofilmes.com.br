import React from "react";
import Image from "next/image";
import useImageGenerator from "@/hooks/useImageGenerator";

interface Props {
  number: number;
  artist: string;
  workName: string;
  mainImage: {
    alt: string;
    asset: {
      _ref: string;
    }
  }
}

export default function Card({ mainImage, number, artist, workName }: Props) {
  const isNumberMultipleOfTwo = number % 2 === 0;
  const containerClasses = `container flex flex-col w-full font-freight ${
    isNumberMultipleOfTwo ? "lg:flex-row-reverse" : "lg:flex-row"
  }`;

  const { src, width, height } = useImageGenerator(mainImage);
  
  return (
    <div className={containerClasses}>
      <div className="relative w-full justify-center items-center self-center lg:w-[60%]">
        <Image
          src={src}
          width={width}
          height={height}
          alt={mainImage.alt}
          className="object-cover h-full w-full"
          priority
        />
      </div>
      <div className="flex flex-col w-full py-5 my-auto lg:px-4 lg:w-[40%]">
        <a href="#">
          <span className="text-3xl md:text-[52px]/[55px] justify-center items-center uppercase py-5 text-white cursor-pointer">
            {artist}
          </span>
        </a>
        <a href="#">
          <span className="text-3xl md:text-[52px]/[58px] justify-center items-center text-white capitalize cursor-pointer">
            {workName}
          </span>
        </a>
      </div>
    </div>
  );
}
