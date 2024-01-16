"use client";
import React from "react";
import Link from "next/link";

export type LinkShape = {
    label: string;
    href: string;
  };
  
  interface NavProps {
    links: LinkShape[];
  }

export default function DropDownMenu({links}:NavProps){
  return (
    <div className="flex flex-col">
      <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <Link key={link.label} href={link.href}>
          <span className="hover:text-persian">{link.label}</span>
        </Link>
      ))}
      </ul>
    </div>
  );
}
