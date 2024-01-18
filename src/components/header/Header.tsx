"use client";
import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import type { LinkShape } from "./partials/navigation/Navigation";

export default function Header() {
  const t = useTranslations("menu");
  const { locale } = useParams();

  const links: LinkShape[] = [
    // {
    //   label: t("works"),
    //   href: `/${locale}/works`,
    //   subItems: [
    //     { label: t("works featured"), href: `/${locale}/works-featured` },
    //     { label: t("works unpublished"), href: `/${locale}/works-unpublished` },
    //   ],
    // },
    // { label: t("shop"), href: `/${locale}/shop` },
    // { label: t("about"), href: `/${locale}/about` },
  ];

  return (
    <header className="flex justify-center w-full py-12">
      <HeaderDesktop links={links} />
      <HeaderMobile links={links} />
    </header>
  );
}
