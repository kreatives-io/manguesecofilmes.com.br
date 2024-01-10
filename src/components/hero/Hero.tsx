import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='w-full max-w-[100%] mx-auto max-h-screen justify-center items-center px-4 4k:max-w-[80%] font-freight'>
        <div className='flex flex-wrap justify-center items-center lg:grid-cols-2 2xl:fgrid-cols-3'>
            <div className="relative w-[95%] lg:w-[50%] py-2 2xl:w-[33%]">
                <Image 
                    src="/images/image-1.png"
                    alt="Photo 1"
                    width={1000}
                    height={0}
                    
                />
            </div>
            <div className="relative w-[95%] lg:w-[50%] py-2 2xl:w-[33%]">
                <Image 
                    src="/images/image-2.png"
                    alt="Photo 2"
                    width={1000}
                    height={0}
                />
            </div>
            <div className="relative w-[95%] lg:w-[50%] py-2 2xl:w-[33%]">
                <Image 
                    src="/images/image-3.png"
                    alt="Photo 3"
                    width={1000}
                    height={0}
                />
            </div>
            <div className="relative w-[95%] lg:w-[50%] py-2 2xl:w-[33%]">
                <Image 
                    src="/images/image-4.png"
                    alt="Photo 3"
                    width={1000}
                    height={0}
                />
            </div>
            <div className="relative w-[95%] lg:w-[50%] py-2 2xl:w-[33%]">
                <Image 
                    src="/images/image-5.png"
                    alt="Photo 3"
                    width={1000}
                    height={0}
                />
            </div>
            <div className="relative w-[95%] lg:w-[50%] py-2 2xl:w-[33%]">
                <Image 
                    src="/images/image-8.png"
                    alt="Photo 3"
                    width={1000}
                    height={0}
                />
            </div>
            <div className="relative w-[95%] lg:w-[50%] py-2 2xl:w-[33%]">
                <Image 
                    src="/images/image-6.png"
                    alt="Photo 3"
                    width={1000}
                    height={0}
                />
            </div>
            <div className="relative w-[95%] lg:w-[50%] py-2 2xl:w-[33%]">
                <Image 
                    src="/images/image-9.png"
                    alt="Photo 3"
                    width={1000}
                    height={0}
                />
            </div>
            <div className="relative w-[95%] lg:w-[50%]  py-2 2xl:w-[33%]">
                <Image 
                    src="/images/image-7.png"
                    alt="Photo 3"
                    width={1000}
                    height={0}
                />
            </div>
            
            
        </div>
    </section>
  )
}
