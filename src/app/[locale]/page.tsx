import { Hero } from "@/components";
import SectioHero from "@/components/section-hero/SectionHero";
import { client } from "@/lib/sanity/lib/client";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const works = await client.fetch(
    `*[_type == "work"] { category, artist, slug, publishedAt, mainImage, workName }`
  );

  return <SectioHero />;
}
