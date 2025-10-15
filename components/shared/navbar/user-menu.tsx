/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { BoltIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Button } from "../../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

export default function UserMenu({ user }: { user: any }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto p-0 hover:bg-transparent focus:ring focus:ring-gray-700-500 rounded-full"
        >
          <Avatar className="w-10 h-10 border border-transparent hover:border-gray-700-500 transition-colors duration-200">
            <AvatarImage
              src="/male-avatar-boy-face-man-user-7.svg"
              alt="Profile image"
            />{" "}
            {/* Updated path */}
            <AvatarFallback className="bg-gray-800 text-gray-200">
              KK
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="max-w-64 bg-[#020617] dark:bg-gray-800 border-gray-800 shadow-lg"
        align="end"
      >
        <DropdownMenuLabel className="flex min-w-0 flex-col p-3">
          <span className="text-gray-100 truncate text-sm font-medium">
            {user?.name}
          </span>
          <span className="text-gray-300 truncate text-xs font-normal  dark:text-gray-400">
            {user?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center gap-2 px-3 py-2  cursor-pointer rounded-md text-gray-50 hover:bg-[#020617] hover:text-gray-100 ">
            <Link className="flex items-center gap-1" href="/dashboard">
              <BoltIcon
                size={16}
                className="opacity-60 text-gray-50"
                aria-hidden="true"
              />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
