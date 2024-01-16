import { Works } from "@/components";
import React from "react";

export default function page() {
  return (
    <>
      <Works type="featured" />
      <Works type="unpublished" />
    </>
  )
}
