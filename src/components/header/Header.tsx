"use client";
import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import type { LinkShape } from "./partials/navigation/Navigation";
import { useTranslations } from "next-intl";

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("menu");

  const links: LinkShape[] = [
    {
      label: t("works"),
      href: `/${locale}/works`,
      subItems: [
        { label: t("works featured"), href: `/${locale}/works-featured` },
        { label: t("works unpublished"), href: `/${locale}/works-unpublished` },
      ],
    },
    // { label: t("shop"), href: `/${locale}/shop` },
    // { label: t("about"), href: `/${locale}/about` },
  ];

  return (
    <header className="flex justify-center w-full py-12 font-freight">
      <HeaderDesktop links={links} />
      <HeaderMobile links={links} />
    </header>
  );
}
