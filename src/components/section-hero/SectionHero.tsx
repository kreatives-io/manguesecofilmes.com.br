"use client";

import ReactPlayer from "react-player";
import { Header } from "..";
import VideoSection from "../video-section/VideoSection";

export default function SectioHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      <div className="absolute top-0 w-full z-10">
        <Header />
      </div>
      <VideoSection
        source="/videos/section-bg.mp4"
        artist="Artist Name Goes Here - TV"
        workName="Work Name"
      />
    </section>
  );
}
