import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  return (
    <section className="flex flex-col w-full font-freight items-center justify-center mb-16 md:px-10 4k:max-w-[80%]">
      <div className="container flex flex-col py-10 items-center">
        <h3 className="text-[50px]/[45px] tracking-xg-wide uppercase text-persian pb-10 ">
          {t("h3")}
        </h3>
        <h1 className="hidden lg:flex text-6xl text-center">{t("h1")}</h1>
      </div>
      <div className="container flex flex-col lg:flex-row h-full">
        <div className="relative px-10 py-4 w-full ">
          <Image
            src="/images/edvaldo.png"
            alt="Photo of Edvaldo"
            width={768}
            height={0}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="lg:mx-10 w-full">
          <h2 className="lg:hidden text-[48px]/[54px]">{t("h2")}</h2>
          <h5 className="lg:hidden text-4xl pb-10">{t("h5")}</h5>
          <p className="text-2xl mt-2 xl:text-3xl">{t("description")}</p>
          <p>
            {t("p")} <u>Iconoclast.tv</u>
          </p>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-start items-start absolute top-[50%] w-full max-h-screen[100%] z-[-1] overflow-hidden pointer-events-none">
        <span className="text-[500px]/[90%] uppercase text-persian tracking-xg-wide tranlate-x-[-10%] mr-[15%] leading-90%">
          about
        </span>
        <p className="text-[500px]/[90%] uppercase text-persian tracking-xg-wide tranlate-x-[-100%] ml-[15%] leading-90%">
          about
        </p>
      </div>
    </section>
  );
}
