"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Hamburger from 'hamburger-react';
import { Link } from "@/i18n/routing";
import Image from "next/image";

const Navbar = () => {
    const pathname = usePathname();
    const isHomeActive = pathname === '/' || pathname === '/Home';
    const [isOpen, setOpen] = useState(false);

    // Effect to lock/unlock body scrolling based on isOpen state
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            document.body.style.overflow = 'auto'; // Enable scroll
        }

        // Cleanup on component unmount or state change
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Function to close the navbar when a link is clicked
    const handleLinkClick = () => {
        setOpen(false); // Close the navbar
    };

    return (
        <>
            <nav className="sticky top-0 h-24 pr-2 pl-2 sm:pr-6 sm:pl-6 w-full flex items-center bg-white z-50 border-b-2 border-bodercolor mx-auto">
                <div className="flex items-center justify-between w-full">
                    {/* Left Section: Hamburger Icon, Logo, and Title */}
                    <div className="flex items-center space-x-4">
                        <div className="z-4 lg:hidden">
                            <Hamburger
                                toggled={isOpen}
                                toggle={() => setOpen(!isOpen)}
                            />
                        </div>
                        <div>
                            <Link href={"/"}>
                            <Image
                                src="/assets/samam-logo.png"
                                alt="Logo"
                                width={80}
                                height={80}
                                priority
                                className="hidden sm:block"
                            />
                            </Link>
                        </div>
                        <div>
                            <Link href={"/"}>
                            <h1 className="text-xl font-semibold">Satyanveshana Mandali</h1>
                            </Link>
                        </div>
                    </div>

                    {/* Right Section: Navbar Links and Contact Button */}
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-16 tracking-widest">
                        <ul className={`flex space-x-12 items-end font-medium leading-5 text-base ${isOpen ? 'hidden' : 'flex'}`}>
                            <li className={`relative hidden lg:block ${isHomeActive ? 'text-white' : 'text-gray'}`}>
                                <Link href="/about" onClick={handleLinkClick}>About Us</Link>
                            </li>
                            <li className={`relative hidden lg:block ${isHomeActive ? 'text-white' : 'text-gray'}`}>
                                <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div
                className={`fixed left-0 w-full h-full z-50 bg-white text-black transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="p-4">
                    <ul className="space-y-4 font-[600px] text-base uppercase">
                        <li className="text-lg font-medium">
                            <Link href="/about" onClick={handleLinkClick}>About Us</Link>
                        </li>
                        <li className="text-lg font-medium">
                            <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
