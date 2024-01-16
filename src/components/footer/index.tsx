import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full h-[100px] items-center justify-center bg-black py-10">
      <p className="hidden lg:flex lg:flex-row gap-0 lg:gap-2">
        © 2023 <span className="font-freight text-persian uppercase">edvaldoraw.com</span> - All rights reserved | Built with ❤️ by
        <Link
          href="https://kreatives.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>kreatives.io</span>
        </Link>
      </p>
      <p className="flex flex-col items-center gap-2 lg:hidden">
        <span>© 2023 <span className="font-freight text-persian uppercase">edvaldoraw.com</span> - All rights reserved</span>
        <span>
          Built with ❤️ by
          <Link
            href="https://kreatives.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>kreatives.io</span>
          </Link>
        </span>
      </p>
    </div>
  );
}
