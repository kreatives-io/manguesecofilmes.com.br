import React from 'react'
import Navigation,{LinkShape} from "./partials/navigation/Navigation";

interface NavProps {
    links: LinkShape[];
  }

export default function HeaderDesktop({links}:NavProps) {
  return (
      <div className='relative w-full container hidden lg:flex px-4 text-xl'>
      <div className="hidden lg:flex w-full justify-between items-center">
      <div className="mt-2 uppercase tracking-extra-wide text-xl">
            <p className="text-persian">EDVALDO</p>
            <p className="text-persian">RAW</p>
          </div>
        </div>
        <div className="hidden lg:flex absolute uppercase right-0 top-[22%] bottom-0 h-[24px] items-center justify-center ">
          <Navigation links={links} />
      </div>
      </div>
    );
  };
