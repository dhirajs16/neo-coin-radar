"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <header>
      <div className="main-container inner">
        {/* Title & Logo */}
        <Link href="/" className="inner">
          <Image src="/assets/logo.svg" width={40} height={40} alt="logo" />
          <span className="text-xl font-poppins font-semibold">
            NeoCoin Radar
          </span>
        </Link>

        {/* Nav Links */}
        <nav>
          <Link
            href="/"
            className={cn("nav-link", {
              "is-active": pathName === "/",
              "is-home": true,
            })}
          >
            Home
          </Link>
          <p>Search Modal</p>

          <Link
            href="/coins"
            className={cn("nav-link", { "is-active": pathName === "/coins" })}
          >
            All Coins
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
