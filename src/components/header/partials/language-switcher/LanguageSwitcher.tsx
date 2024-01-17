import React from "react";
import Link from 'next/link';

export default function LanguageSwitcher() {  
  return (
    <div className="flex">
      <Link locale="pt" href={'/pt'} className="hover:text-persian">
        PT
      </Link>
      <p className="text-persian px-2">|</p>
      <Link locale="en" href={'/en'} className="hover:text-persian" >
        EN
      </Link>
    </div>
  );
}
