'use client';

import { usePathname } from 'next/navigation'
import Link from 'next/link';

const MobileNavigationLink = ({ href, label }) => {
    const isCurrentPage = usePathname() === href;

    return (
        <li className={`mb-3 ${isCurrentPage ? 'border-b-2 border-black' : ''}`}>
            <Link href={href}>{label}</Link>
        </li>
    );
};

const MobileNavigation = () => {
    //get current year
    const currentYear = new Date().getFullYear();
    return (
        <ul className="flex flex-col items-center">
            <MobileNavigationLink href="/" label="Home" />
            <MobileNavigationLink href="/about" label="About" />
            <MobileNavigationLink href={`/events/${currentYear}`} label="Events" />
            <MobileNavigationLink href="/board" label="Board" />
            <MobileNavigationLink href="/stories" label="Stories" />
            <MobileNavigationLink href="/contactUs" label="Contact Us" />
        </ul>
    );
};

export default MobileNavigation;
