import { client } from '@/lib/sanity/lib/client';
import { WorkDetail, Works } from "@/components";

interface IWorkBySlugProps {
  params: {
    slug: string
  }
}

export default async function page({ params: { slug } }: IWorkBySlugProps) {
  const work = await client.fetch(`*[_type == "work" && slug.current == $slug][0]`, { slug });
  
  if (!work) {
    return <span>work not found</span>
  }

  return (
    <section className="min-h-[900px] xl:min-h-[1920px]">
      <WorkDetail {...work} />
    </section>
  )
}
