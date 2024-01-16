import React from "react";
import { Card } from "./partials";
import { client } from "@/lib/sanity/lib/client";

interface IWorks {
  type: 'featured' | 'unpublished';
}

export default async function Works({ type = 'unpublished' }: IWorks) {
  const SectionTitle = type === 'featured' ? 'Featured' : 'Unpublished';

  const works = await client.fetch(`*[_type == "work"] { category, artist, slug, publishedAt, mainImage, workName }`);
  const dataset = works.filter(({ category }: any) => category === type); 

  return (
    <section className="flex flex-col w-full font-freight items-center justify-center mb-16">
      <div className="container flex flex-col tracking-xg-wide text-persian uppercase py-10 items-center">
        <h3 className="text-[50px]/[45px] pb-2">Works</h3>
        <h5 className="text-2xl">{SectionTitle}</h5>
      </div>
      <div className="container w-full tracking-xg-wide text-persian py-10 items-center justify-center self-center">
        {dataset.map(((work: any, index:any) => (
          <div className='py-10' key={index}>
            <Card  {...work} number={index} />
          </div>
        )))}
      </div>
    </section>
  );
}
