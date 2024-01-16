import { Hero } from "@/components";
import { client } from "@/lib/sanity/lib/client";

export default async function Home({ params: { locale } }) {
  const works = await client.fetch(
    `*[_type == "work"] { category, artist, slug, publishedAt, mainImage, workName }`
  );

  return <Hero works={works} locale={locale} />;
}
