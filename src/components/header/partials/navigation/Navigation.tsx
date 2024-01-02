"use client";
import Link from "next/link";
import React from "react";

export type LinkShape = {
  label: string;
  href: string;
};

interface NavProps {
  links: LinkShape[];
}

export default function Navigation({ links }: NavProps) {
  return (
    <nav className="flex flex-row justify-between items-center w-full gap-4 mr-10 h-[24px]">
      {links.map((link) => (
        <Link key={link.label} href={link.href}>
          <span>{link.label}</span>
        </Link>
      ))}
    </nav>
  );
}
