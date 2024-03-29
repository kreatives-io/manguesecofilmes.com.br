"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navigation, { LinkShape } from "./partials/navigation/Navigation";
import LanguageSwitcher from "./partials/language-switcher/LanguageSwitcher";
import Link from "next/link";
import { useClickAway } from "@/hooks";

interface NavProps {
  links: LinkShape[];
}

export default function HeaderDesktop({ links }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => setIsOpen(false));

  return (
    <div className="relative w-full container hidden lg:flex px-4 text-xl">
      <div className="hidden lg:flex w-full justify-between items-center">
        <Link
          className="mt-2 uppercase tracking-extra-wide text-xl cursor-pointer"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <Image
            alt="Logo"
            src="/images/logo_name_white.png"
            width={330}
            height={250}
          />
        </Link>
      </div>
      <div className="hidden lg:flex absolute uppercase right-0 top-[22%] bottom-0 h-[24px] items-center justify-center px-4">
        <Navigation
          links={links}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          clickRef={ref}
        />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
