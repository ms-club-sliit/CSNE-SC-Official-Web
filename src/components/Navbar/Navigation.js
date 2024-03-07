'use client';

import { usePathname } from 'next/navigation'
import Link from 'next/link';

const NavigationLink = ({ href, label }) => {
    const isCurrentPage = usePathname() === href;

    return (
        <li className={`pl-2 pr-2 ${isCurrentPage ? 'border-b-2 border-black' : 'pl-2 pr-2'}`}>
            <Link href={href}>{label}</Link>
        </li>
    );
};

const Navigation = () => {
    return (
        <ul className="flex space-x-6 text-center">
            <NavigationLink href="/" label="Home" />
            <NavigationLink href="/about" label="About" />
            <NavigationLink href="/events" label="Events" />
            <NavigationLink href="/board" label="Board" />
            <NavigationLink href="/stories" label="Stories" />
            <NavigationLink href="/contactUs" label="Contact Us" />
        </ul>
    );
};

export default Navigation;
