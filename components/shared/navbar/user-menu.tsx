import { BoltIcon, LogOutIcon } from "lucide-react";
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

export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto p-0 hover:bg-transparent focus:ring-2 focus:ring-blue-500 rounded-full"
        >
          <Avatar className="w-9 h-9 border-2 border-transparent hover:border-blue-500 transition-colors duration-200">
            <AvatarImage src="/avatar.jpg" alt="Profile image" />{" "}
            {/* Updated path */}
            <AvatarFallback className="bg-blue-500 text-white dark:bg-blue-600">
              KK
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="max-w-64 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg text-gray-900 dark:text-gray-100"
        align="end"
      >
        <DropdownMenuLabel className="flex min-w-0 flex-col p-3">
          <span className="text-foreground truncate text-sm font-medium">
            Keith Kennedy
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal  dark:text-gray-400">
            k.kennedy@originui.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-md">
            <Link href="/dashboard">
              <BoltIcon
                size={16}
                className="opacity-60 text-gray-600 dark:text-gray-300"
                aria-hidden="true"
              />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
        <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-md">
          <LogOutIcon
            size={16}
            className="opacity-60 text-gray-600 dark:text-gray-300"
            aria-hidden="true"
          />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
