"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link
        href="/"
        className="flex items-center gap-2 text-white font-bold font-bebas-neue"
      >
        <Image src="/icons/logo.svg" width={40} height={40} alt="logo" />
        Narratives & Novelist
      </Link>
      <ul className="flex items-center gap-6">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathName === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            Library
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
