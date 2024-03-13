"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavigationLink = ({ href, label }) => {
  const isCurrentPage = usePathname() === href;

  return (
    <li
      className={`md:pl-1 md:pr-1 lg:pl-2 lg:pr-2 ${
        isCurrentPage
          ? "border-b-2 border-black"
          : "md:pl-1 md:pr-1 lg:pl-2 lg:pr-2"
      }`}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
};

const Navigation = () => {
  //get current year
  const currentYear = new Date().getFullYear();
  return (
    <ul className="flex space-x-6 text-center">
      <NavigationLink href="/" label="Home" />
      <NavigationLink href="/about" label="About" />
      <NavigationLink href={`/events/2023`} label="Events" />
      <NavigationLink href="/board" label="Board" />
      <NavigationLink href="/stories" label="Stories" />
      <NavigationLink href="/contactUs" label="Contact Us" />
    </ul>
  );
};

export default Navigation;
