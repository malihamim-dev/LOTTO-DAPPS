'use client';
import * as React from 'react';
import { FaMoon } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import binance from '../../../public/(home-page-image)/Navbar-image/binance.png'
import metamask from '../../../public/(home-page-image)/Navbar-image/Metamask2.png'
import trustwallet from '../../../public/(home-page-image)/Navbar-image/trustwallet.png'


import { useEffect, useState, useRef } from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import Image from 'next/image';
import Connect_Wallet from '../(Shard-Component)/Connect_Wallet';


// Simple logo component for the navbar
const Logo = (props: React.SVGAttributes<SVGElement>) => {
    return (
        <p className=' text-2xl md:text-3xl text-[#BA3FEC]  '>
            <FaStarOfLife />
        </p>
    );
};
// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
    <svg
        className={cn('pointer-events-none', className)}
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4 12L20 12"
            className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
        />
        <path
            d="M4 12H20"
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
        />
        <path
            d="M4 12H20"
            className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
        />
    </svg>
);
// Types
export interface Navbar01NavLink {
    href: string;
    label: string;
    active?: boolean;
    mobileOnly?: boolean;

}
export interface Navbar01Props extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode;
    logoHref?: string;
    navigationLinks?: Navbar01NavLink[];
    signInText?: string;
    signInHref?: string;
    ctaText?: string;
    ctaHref?: string;
    onSignInClick?: () => void;
    onCtaClick?: () => void;
}
// Default navigation links
const defaultNavigationLinks: Navbar01NavLink[] = [
    { href: '/', label: 'Home', active: true },
    { href: '/How-It-Works', label: 'How It Works' },
    { href: '/Raffles', label: 'Raffles' },
    { href: '/Winner', label: 'Winner' },
    { href: '/Blogs', label: 'Blogs' },
    { href: '/WhitePaper', label: 'White Paper' },
    { href: '/About', label: 'About' },





];
export const Navbar = React.forwardRef<HTMLElement, Navbar01Props>(



    (
        {
            className,
            logo = <Logo />,
            logoHref = '#',
            navigationLinks = defaultNavigationLinks,
            signInText = 'Sign In',
            signInHref = '#signin',
            ctaText = 'Get Started',
            ctaHref = '#get-started',
            onSignInClick,
            onCtaClick,
            ...props
        },
        ref
    ) => {
        const [isMobile, setIsMobile] = useState(false);
        const [showWallet, setShowWallet] = useState(false);
        const containerRef = useRef<HTMLElement>(null);
        const pathname = usePathname();

        useEffect(() => {
            const checkWidth = () => {
                if (containerRef.current) {
                    const width = containerRef.current.offsetWidth;
                    setIsMobile(width < 1024); // 768px is md breakpoint
                }
            };
            checkWidth();
            const resizeObserver = new ResizeObserver(checkWidth);
            if (containerRef.current) {
                resizeObserver.observe(containerRef.current);
            }
            return () => {
                resizeObserver.disconnect();
            };
        }, []);
        // Combine refs
        const combinedRef = React.useCallback((node: HTMLElement | null) => {
            containerRef.current = node;
            if (typeof ref === 'function') {
                ref(node);
            } else if (ref) {
                ref.current = node;
            }
        }, [ref]);
        return (
            <header
                ref={combinedRef}
                className={cn(
                    'sticky top-0 z-50 w-full   bg-[#190A4F]   px-4 md:px-6  h-20  pt-1.5',
                    className)}{...props}>
                <div className=" mx-auto flex h-16  items-center justify-between gap-4">
                    {/* Left side */}
                    <div className="flex flex-row-reverse lg:flex-row gap-2 w-full justify-between lg:justify-start ">
                        {/* Mobile menu trigger */}
                        <div>
                            {isMobile && (
                                <Popover >
                                    <PopoverTrigger asChild>
                                        <Button
                                            className="group h-10 w-16 text-white border-2  text-4xl rounded-full"
                                            variant="ghost"
                                            size="icon">
                                            <HamburgerIcon className="text-5xl " />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="p-5 w-screen bg-[#190A4F] border-none mt-0 md:mt-4 transform -translate-x-4 translate-y-0">
                                        <NavigationMenu className="">
                                            <NavigationMenuList className="flex-col items-start gap-1">
                                                {navigationLinks.map((link, index) => (
                                                    <NavigationMenuItem key={index} className="">
                                                        <button
                                                            onClick={(e) => e.preventDefault()}
                                                            className={cn(
                                                                "flex w-full items-center rounded-md px-4 py-3 text-xl font-semibold transition-colors hover:bg-[#1d0f3b] hover:text-[#00ECE2] cursor-pointer no-underline",
                                                                link.active ? "text-[#00ECE2]" : "text-white/80")}>
                                                            {link.label}
                                                        </button>
                                                    </NavigationMenuItem>
                                                ))}
                                            </NavigationMenuList>
                                        </NavigationMenu>

                                        {/* Wallet icons section */}
                                        <div className="grid grid-cols-4 md:grid-cols-8 items-center justify-between w-full gap-x-5 pl-3">
                                            <div>
                                                <Image src={binance} alt="binance" className="object-contain" />
                                            </div>
                                            <div>
                                                <Image src={metamask} alt="metamask" className="object-contain" />
                                            </div>
                                            <div>
                                                <Image src={metamask} alt="metamask" className="object-contain" />
                                            </div>
                                        </div>

                                        {/* Bottom buttons */}
                                        <div className="flex items-center justify-between w-full gap-x-5 my-10">
                                            <div className="flex items-center gap-3 pl-3">
                                                {/* V button */}
                                                <div className="p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block">
                                                    <Button className="w-10 h-10 rounded-full text-center text-sm xl:text-sm text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4]">
                                                        V
                                                    </Button>
                                                </div>

                                                {/* F button */}
                                                <div className="p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block">
                                                    <Button className="w-10 2xl:w-16 h-10 rounded-full text-center text-[10px] text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4]">
                                                        F
                                                    </Button>
                                                </div>
                                                {/* Eng button */}
                                                <div className="p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block">
                                                    <Button className="w-10 h-10 rounded-full text-center text-sm lg:text-[10px] xl:text-sm text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4]">
                                                        Eng
                                                    </Button>
                                                </div>
                                                {/* Moon icon button */}
                                                <div className="p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block">
                                                    <Button className="w-10 h-10 rounded-full text-center text-sm lg:text-[10px] xl:text-sm text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4]">
                                                        <FaMoon />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            )}
                        </div>
                        {/* Main nav */}
                        <div className="flex gap-6 lg:gap-x-2 xl:gap-x-6">
                            <button
                                onClick={(e) => e.preventDefault()}
                                className="flex  space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer">
                                <div className=' flex items-center justify-between gap-x-3 lg:gap-x-3  xl:gap-x-3 '>
                                    <div className=" text-lg md:text-2xl text-[#BA3FEC]">
                                        {logo}
                                    </div>
                                    <div>
                                        <h4 className=" font-bold  text-[16px] md:text-lg lg:text-sm xl:text-[14px] 2xl:text-lg sm:inline-block text-[#BA3FEC]  ">LOTTO UNIVERSE</h4>
                                    </div>
                                </div>
                            </button>
                            {/* Navigation menu */}
                            {!isMobile && (
                                <NavigationMenu className="flex">
                                    <NavigationMenuList className="gap-1">
                                        {navigationLinks.map((link, index) => (
                                            <NavigationMenuItem key={index}>
                                                <Link
                                                    href={link.href}
                                                    className={cn(
                                                        "group inline-flex h-9 w-max items-center justify-center px-4 lg:px-1.5 xl:px-4 py-2 text-lg lg:text-sm xl:text-[16px] 2xl:text-[18px] font-medium transition-colors",
                                                        pathname === link.href ? "text-[#00ECE2]" : "text-white hover:text-[#00ECE2]")}>
                                                    {link.label}
                                                </Link>
                                            </NavigationMenuItem>
                                        ))}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            )}
                        </div>
                    </div>
                    {/* Right side */}
                    <div className=' hidden lg:block'>
                        <div className="flex items-center gap-3 ">
                            <div className="p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block hover:scale-105 cursor-pointer">
                                <Button
                                    onClick={() => setShowWallet(true)}
                                    className="w-24 lg:w-10 2xl:w-24 h-10 rounded-full text-center text-sm lg:text-[10px] xl:text-sm text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4] cursor-pointer ">
                                    Play
                                    {showWallet && <Connect_Wallet onClose={() => setShowWallet(false)} />}

                                </Button>
                            </div>
                            <div className="p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block hover:scale-105 cursor-pointer">
                                <Button className="w-16 lg:w-10 2xl:w-16 h-10 rounded-full text-center text-sm lg:text-[10px] xl:text-sm  text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4] cursor-pointer">
                                    V
                                </Button>
                            </div>
                            <div className="p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block hover:scale-105 cursor-pointer">
                                <Button className="w-16 lg:w-10 2xl:w-16 h-10 rounded-full text-center text-sm lg:text-[10px] xl:text-sm  text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4] cursor-pointer">
                                    F
                                </Button>
                            </div>
                            <div className="p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block hover:scale-105 cursor-pointer">
                                <Button className="w-24 lg:w-10 2xl:w-24  h-10 rounded-full text-center text-sm lg:text-[10px] xl:text-sm  text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4] cursor-pointer">
                                    Eng
                                </Button>
                            </div>
                            <div className="p-0.5 rounded-full bg-linear-to-r from-[#dc838a] to-[#433281] shadow-2xl inline-block hover:scale-105 cursor-pointer">
                                <Button className="w-10 h-10 rounded-full text-center text-sm lg:text-[10px] xl:text-sm  text-white bg-linear-to-r from-[#2d1c59bd] to-[#281a52e4] cursor-pointer">
                                    <FaMoon />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                 {showWallet && (
                    <Connect_Wallet onClose={() => setShowWallet(false)} />
                )}
            </header>
        );
    }
);
Navbar.displayName = 'Navbar01';
export { Logo, HamburgerIcon };
