import ReactPlayer from "react-player";

interface IVideoSection {
  source: string;
  artist: string;
  workName: string;
  backdropOpacity?: string;
}

export default function VideoSection({
  source,
  artist,
  workName,
  backdropOpacity = "opacity-45",
}: IVideoSection) {
  return (
    <div className="min-w-full min-h-full">
      {/* <div
        className={`absolute top-0 w-full h-full bg-black ${backdropOpacity}`}
      /> */}
      <div className="flex flex-1 absolute top-0 w-full h-full bg-black opacity-45 object-stretch">
        <ReactPlayer
          url={source}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </div>
      <div className="absolute top-0 min-h-screen w-full flex flex-col gap-2 items-center justify-center">
        <span className="text-4xl">{artist}</span>
        <span>{workName}</span>
      </div>
    </div>
  );
}
