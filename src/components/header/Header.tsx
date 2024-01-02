"use client";
import React from 'react'
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import type {LinkShape} from "./partials/navigation/Navigation";

export default function Header() {
    const links: LinkShape[]= [
        {label: "works", href:"#"},
        {label: "shop", href:"#"},
        {label: "about", href:"#"},
    ];
  return (
    <header className='flex justify-center w-full py-10'>
        <HeaderDesktop links={links} />
        <HeaderMobile links={links}/>
    </header>
  )
}
