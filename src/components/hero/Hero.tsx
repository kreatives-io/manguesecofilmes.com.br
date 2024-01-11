import React from "react";
import Image from "next/image";

const GRID_IMG_SIZE = 9;

export default function Hero() {
  const gridArray = Array.from(Array(GRID_IMG_SIZE).keys());

  return (
    <section className="w-full max-w-[100%] mx-auto max-h-screen justify-center items-center xl:max-w-[80%] 2xl:max-w-[70%] 2xl:max-w-[50%]">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {gridArray.map((_, index) => (
          <Image
            key={index}
            src={`/images/image-${index + 1}.png`}
            alt="hero image"
            width={1000}
            height={0}
            className="object-cover h-full w-full"
          />
        ))}
      </div>
    </section>
  );
}
