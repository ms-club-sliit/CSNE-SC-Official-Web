"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import Navigation from "@/components/Navbar/Navigation";
import MobileNavigation from "@/components/Navbar/MobileNavigation";

export default function Navbar() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`p-4 lg:pl-32 lg:pr-32 text-black font-semibold fixed w-full transition-all ${
                isMobileMenuOpen || scrolled ? 'bg-white shadow-lg' : 'bg-white'
            }`}
            style={{zIndex: 100}}
        >
            <div
                className={`container mx-auto flex justify-between items-center ${
                    isMobileMenuOpen ? "flex-col items-center" : "pl-0"
                }`}
            >
                <div
                    className={`text-center ${isMobileMenuOpen ? "w-full" : "w-auto"} ${
                        isMobileMenuOpen ? "mx-auto" : ""
                    }`}
                ></div>
                <div className="hidden md:block text-lg w-full">
                    <div className="flex items-center justify-between">
                        {/* Logo on the left */}
                        <div className="flex items-center">
                            {/* SLIIT CSNE Logo */}
                            <Link href="/">
                                <img src="/images/logo.svg" alt="Logo"/>
                            </Link>
                        </div>

                        {/* Navigation items on the right */}
                        <Navigation/>
                    </div>
                </div>
                <div className="md:hidden flex justify-between pl-3 pr-3 w-full">

                    {/* SLIIT CSNE Logo */}
                    <Link href="/">
                        <img src="/images/logo.svg" alt="Logo" className="h-12"/>
                    </Link>

                    {/* Hamburger menu button */}
                    <button
                        className="text-black text-2xl"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                        }
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isMobileMenuOpen ? "block animate-slide-down" : "hidden"} `}>
                <MobileNavigation/>
            </div>

        </nav>
    );
}
