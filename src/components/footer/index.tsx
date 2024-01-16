import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 flex items-center justify-center">
      <p className="flex gap-2">
         © 2023 edvaldoraw.com - All rights reserved | Built with ❤️ by
        <Link href="https://kreatives.io" target="_blank" rel="noopener noreferrer">
          <span>kreatives.io</span>
        </Link>
      </p>
    </footer>
  );
}
