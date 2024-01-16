import { Works } from "@/components";
import React from "react";

export default function page() {
  return (
    <section className="min-h-[900px] xl:min-h-[1920px]">
      <Works type="featured" />
      <Works type="unpublished" />
    </section>
  )
}
