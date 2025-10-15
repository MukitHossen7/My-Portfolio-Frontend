import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/icons/logo.png";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Button } from "../../ui/button";
import { NavigationMenu, NavigationMenuList } from "../../ui/navigation-menu";
import UserMenu from "./user-menu";
import { getMe } from "../../../services/userServices";

export default async function Navbar() {
  const response = await getMe();
  const user = response?.data || null;
  return (
    <header className="border-b border-gray-800 sticky top-0 z-50 backdrop-blur-2xl  bg-[#020617] shadow-sm text-gray-100 px-4 md:px-6 lg:px-0">
      <div className="flex h-16 items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Left side */}
        <Link href="/" className="text-xl font-bold text-gray-300">
          <Image
            src={logo}
            alt="Logo"
            className="w-8 h-auto object-contain invert brightness-20"
          />
        </Link>
        <div className="flex flex-1 gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden text-gray-200"
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
              className="w-48 p-1 md:hidden bg-[#020617] border-gray-800  shadow-lg"
            >
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  <Link
                    href="/"
                    className="block py-2 px-3 text-gray-100 rounded-md"
                  >
                    Home
                  </Link>
                  <Link
                    href="/project"
                    className="block py-2 px-3 text-gray-100 rounded-md"
                  >
                    Project
                  </Link>
                  <Link
                    href="/blog"
                    className="block py-2 px-3 text-gray-100 rounded-md"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-2 px-3 text-gray-100 rounded-md"
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
              className="text-gray-200 font-medium hover:text-cyan-400 hover:font-normal transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/project"
              className="text-gray-200  font-medium  hover:text-cyan-400 hover:font-normal transition-colors duration-200"
            >
              Project
            </Link>
            <Link
              href="/blog"
              className="text-gray-200 font-medium hover:text-cyan-400 hover:font-normal transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-200 font-medium  hover:text-cyan-400 hover:font-normal transition-colors duration-200"
            >
              Contact
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-4">
          {user?.email ? (
            <UserMenu user={user} />
          ) : (
            <Link href="/login">
              <Button className="border border-gray-700 bg-[#020617] text-gray-100">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
