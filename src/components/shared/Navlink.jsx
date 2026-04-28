"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children }) => {
    const pathName = usePathname();
    console.log(pathName)
    const isActive = href === pathName
    console.log(isActive)
    return <Link href={href}>{children}</Link>
};

export default Navlink;