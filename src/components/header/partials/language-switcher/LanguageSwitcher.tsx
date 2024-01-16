"use client";
import React from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  return (
    <div className="flex">
      <Link locale="pt" href={pathname} className="hover:text-persian">
        PT
      </Link>
      <p className="text-persian px-2">|</p>
      <Link locale="en" href={pathname} className="hover:text-persian">
        EN
      </Link>
    </div>
  );
}
