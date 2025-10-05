"use client";

import UserMenu from "@/components/shared/navbar/user-menu";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b  border-gray-700 px-4 md:px-6 bg-[#020617] shadow-sm text-gray-100">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <Link href="/" className="text-2xl font-bold text-gray-300">
          Portfolio
        </Link>
        <div className="flex flex-1  gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-48 p-1 md:hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  <Link
                    href="/"
                    className="block py-2 px-3 text-gray-100  hover:bg-gray-100  rounded-md"
                  >
                    Home
                  </Link>
                  <Link
                    href="/project"
                    className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    Project
                  </Link>
                  <Link
                    href="/blog"
                    className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    Contact
                  </Link>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
        </div>
        {/* Middle area */}
        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="gap-10">
            <Link
              href="/"
              className="text-gray-200 text-lg font-medium  hover:text-blue-400 hover:font-normal transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/project"
              className="text-gray-200 text-lg font-medium  hover:text-blue-400 hover:font-normal transition-colors duration-200"
            >
              Project
            </Link>
            <Link
              href="/blog"
              className="text-gray-200 text-lg font-medium  hover:text-blue-400 hover:font-normal transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-200 text-lg font-medium  hover:text-blue-400 hover:font-normal transition-colors duration-200"
            >
              Contact
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
