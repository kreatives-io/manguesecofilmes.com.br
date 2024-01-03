"use client";
import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import type { LinkShape } from "./partials/navigation/Navigation";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations('menu');
  const links: LinkShape[] = [
    { label: t('works'), href: '#' },
    { label: t('shop'), href: '#' },
    { label: t('about'), href: '#' },
  ];
  return (
    <header className="flex justify-center w-full py-10">
      <HeaderDesktop links={links} />
      <HeaderMobile links={links} />
    </header>
  );
}
