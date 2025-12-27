"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../assets/icons/logo.png";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Project", href: "/project" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#020617]/80 backdrop-blur-md transition-all duration-300">
      <div className="flex h-16 items-center justify-between max-w-7xl mx-auto px-4 md:px-6 xl:px-0">
        {/* Logo Section */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src={logo}
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-auto object-contain invert brightness-150"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-300 py-1",
                  isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"
                )}
              >
                {link.name}
                {/* Animated Underline */}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-1 h-0.5 bg-cyan-400 transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
                {!isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-cyan-400/50 w-0 transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side - Resume & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1eK2CPnIF4NVEIPIYSLAbpIxSnhKQZVQ_/view?usp=sharing"
            download="https://drive.google.com/file/d/1eK2CPnIF4NVEIPIYSLAbpIxSnhKQZVQ_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 lg:px-4 py-1.5 lg:py-2 font-medium lg:font-medium text-gray-800 bg-gray-100 rounded-lg transition-colors duration-300 overflow-hidden border cursor-pointer"
          >
            <span>Get Resume</span>

            {/* Border Beam Animation */}
          </a>

          {/* Mobile Menu (Shadcn Popover) */}
          <div className="md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-200">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="w-56 bg-[#020617] border-gray-800 p-2 shadow-2xl"
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 text-sm font-medium rounded-lg transition-all",
                        pathname === link.href
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "text-gray-300 hover:bg-white/5"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
}
