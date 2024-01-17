'use client'
import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Icons
import { HiOutlineXMark } from "react-icons/hi2";
import { CiMenuBurger } from "react-icons/ci";
// UI Elements
//@TODO: Adjust this import to avoid repeating hamburguer menu name
import HamburguerMenu from "./partials/hamburguer-menu/HamburguerMenu";

export type LinkShape = {
  label: string;
  href: string;
};

interface NavProps {
  links: LinkShape[];
}

export default function HeaderMobile({ links }: NavProps) {
  const [isToggleOpen, setToggleOpen] = useState(false);

  const toggleNavBar = () => {
    setToggleOpen(!isToggleOpen);
  };

  const menuAnimationClass = useMemo(
    () =>
      `${
        isToggleOpen ? "h-screen" : "h-10"
      } min-h-24 transition-all ease-in-out duration-300`,
    [isToggleOpen]
  );

  const opacityAnimation = useMemo(
    () =>
      `${
        isToggleOpen ? "opacity-1" : "opacity-0"
      } transition-all ease-in-out duration-300`,
    [isToggleOpen]
  );

  return (
    <div
      className={`flex ${menuAnimationClass} w-full justify-center align-center self-center relative container lg:hidden`}
    >
      <div className="flex w-full">
      <Link className="uppercase tracking-extra-wide text-xl cursor-pointer" href="/">
          <Image
            alt="Logo"
            src="/images/logo.png"
            width={40}
            height={40}
          />
        </Link>
        <div className={opacityAnimation}>
          {isToggleOpen && <HamburguerMenu links={links} />}
        </div>
        <div className="absolute top-2 right-0 px-4">
          {isToggleOpen ? (
            <HiOutlineXMark onClick={toggleNavBar} size={30} />
          ) : (
            <CiMenuBurger
              onClick={toggleNavBar}
              size={30}
              className="text-persian"
            />
          )}
        </div>
      </div>
    </div>
  );
}
