"use client";
import { useClickAway } from "@/hooks";
import Link from "next/link";
import React, { useState } from "react";

export type LinkShape = {
  label: string;
  href: string;
  subItems?: LinkShape[];
};

interface NavProps {
  links: LinkShape[];
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  ref: any;
}

export default function Navigation({ links, isOpen, setIsOpen, ref }: NavProps) {
  return (
    <nav className="flex flex-row justify-between items-center w-full gap-4 mr-10 h-[24px]">
      {links.map((link) => {
        const hasSubItems = !!link.subItems?.length;

        return (
          <div
            className="relative"
            key={link.label}
            onClick={() => hasSubItems && setIsOpen(!isOpen)}
          >
            <Link href={link.href}>
              <span className="hover:text-persian">{link.label}</span>
            </Link>
            <div className="flex flex-col absolute top-8 left-0">
              {isOpen && (
                <>
                  {link.subItems?.map((subItem, index) => (
                    <Link href={subItem.href} key={index} ref={ref}>
                      <span className="hover:text-persian">
                        {subItem.label}
                      </span>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
