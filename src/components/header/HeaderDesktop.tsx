"use client";
import React from "react";
import Navigation, { LinkShape } from "./partials/navigation/Navigation";
import LanguageSwitcher from "./partials/language-switcher/LanguageSwitcher";
import Link from "next/link";

interface NavProps {
  links: LinkShape[];
}

export default function HeaderDesktop({ links }: NavProps) {
  return (
    <div className="relative w-full container hidden lg:flex px-4 text-xl">
      <Link className="hidden lg:flex w-full justify-between items-center cursor-pointer" href="/">
        <div className="mt-2 uppercase tracking-extra-wide text-xl">
          <p className="text-persian">EDVALDO</p>
          <p className="text-persian">RAW</p>
        </div>
      </Link>
      <div className="hidden lg:flex absolute uppercase right-0 top-[22%] bottom-0 h-[24px] items-center justify-center px-4">
        <Navigation links={links} />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
