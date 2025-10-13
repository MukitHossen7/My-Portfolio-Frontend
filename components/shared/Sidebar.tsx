"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import logo from "../../assets/icons/logo.png";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Profile",
      items: [
        {
          title: "Create Blog",
          url: "/dashboard/create-blog",
        },
        {
          title: "Manage Blog",
          url: "/dashboard/manage-blog",
        },
        {
          title: "Create Project",
          url: "/dashboard/create-project",
        },
        {
          title: "Manage Project",
          url: "/dashboard/manage-project",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <div className="bg-[#020617] flex flex-col h-full">
      <Sidebar {...props} className="flex flex-col h-full">
        <Link href="/">
          <SidebarHeader className="bg-[#020617] pl-4">
            <Image
              src={logo}
              alt="Logo"
              className="w-9 h-auto object-contain invert brightness-20"
            />
          </SidebarHeader>
        </Link>

        {/* Sidebar Main Content */}
        <SidebarContent className="bg-[#020617] text-gray-200 flex-1">
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel className="text-gray-200 mb-3 text-sm font-normal">
                <Link href="/dashboard">{item.title}</Link>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((subItem) => (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton
                        asChild
                        className="hover:bg-gray-800 hover:text-gray-100 transition-all duration-200 mb-3"
                      >
                        <Link href={subItem.url}>{subItem.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>

        {/* ✅ Logout Button (Bottom) */}
        <div className="p-4 border-t border-gray-800 bg-[#020617]">
          <button className="w-full flex items-center gap-2 text-gray-200 hover:text-gray-100 hover:bg-gray-800 transition-all px-3 py-2 rounded-md border border-gray-700">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>

        <SidebarRail />
      </Sidebar>
    </div>
  );
}
