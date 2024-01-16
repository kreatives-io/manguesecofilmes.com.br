import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Header } from "@/components";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import React from "react";
import Footer from "@/components/footer";

const freight = localFont({
  src: [
    {
      path: "../../../public/fonts/FreightBigPro-Medium.otf",
      weight: "500",
    },
  ],
  variable: "--font-freight",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edvaldo Raw",
  description: "Director, photographer, and visual artist.",
};

const locales = ["en", "pt"];

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }
  const messages = useMessages();
  {
    return (
      <html lang={locale} className={`${freight.variable} font-sansmono`}>
        <body>
          <NextIntlClientProvider messages={messages}>
            <Header locale={locale} />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }
}
