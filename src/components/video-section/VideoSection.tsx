import ReactPlayer from "react-player";

interface IVideoSection {
  source: string;
  artist?: string;
  workName?: string;
  backdropOpacity?: string;
}

export default function VideoSection({
  source,
  artist,
  workName,
  backdropOpacity = "opacity-45",
}: IVideoSection) {
  return (
    <div className="relative min-w-full min-h-full">
      <div
        className={`absolute top-0 w-full h-full bg-black ${backdropOpacity}`}
      />
      <ReactPlayer
        url={source}
        playing
        loop
        muted
        width="100vw"
        height="100vh"
      />

      <div className="absolute top-0 min-h-screen w-full flex flex-col gap-2 items-center justify-center">
        {artist && <span className="text-4xl">{artist}</span>}
        {workName && <span>{workName}</span>}
      </div>
    </div>
  );
}
