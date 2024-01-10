'use client'
import React, { useMemo, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { CiMenuBurger } from "react-icons/ci";
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
        <div className="mt-2 uppercase tracking-extra-wide">
          <p className="text-persian text-lg">EDVALDO</p>
          <p className="text-persian text-lg">RAW</p>
        </div>
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
