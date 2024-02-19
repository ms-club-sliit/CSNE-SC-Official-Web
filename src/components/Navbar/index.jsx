"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 text-black font-semibold">
      <div
        className={`container mx-auto flex justify-between items-center ${
          isMobileMenuOpen ? "flex-col items-center" : "pl-20"
        }`}
      >
        <div
          className={`text-center ${isMobileMenuOpen ? "w-full" : "w-auto"} ${
            isMobileMenuOpen ? "mx-auto" : ""
          }`}
        ></div>
        <div className="hidden md:block text-lg">
          <ul className="flex space-x-6 pr-20">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="pl-5">
              <Link href="/about">About</Link>
            </li>
            <li className="pl-5">
              <Link href="/events">Events</Link>
            </li>
            <li className="pl-5">
              <Link href="/board">Board</Link>
            </li>
            <li className="pl-5">
              <Link href="/stories">Stories</Link>
            </li>
            <li className="pl-5">
              <Link href="/contactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="animate-bounce text-black"
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>
        </div>
      </div>
      <ul
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } border-t border-black`}
      >
        <div className="flex flex-col items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/board">Board</a>
          </li>
          <li>
            <a href="/stories">Stories</a>
          </li>
          <li>
            <a href="/contactUs">Contact Us</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
