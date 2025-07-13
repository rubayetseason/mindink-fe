"use client";

import { Button } from "@/components/ui/button";
import {
  Bookmark,
  House,
  LayoutDashboard,
  Moon,
  Rss,
  Search,
  Sparkles,
  Sun,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LogOut } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SidebarThemedLogo from "./SidebarThemedLogo";

const name = "John Doe";
const userName = "@johndoe";

const menuItems = [
  {
    name: "Home",
    href: "/feed",
    icon: House,
  },
  {
    name: "Explore",
    href: "/explore",
    icon: Search,
  },
  {
    name: "My Posts",
    href: "/my-posts",
    icon: Rss,
  },
  {
    name: "Bookmarks",
    href: "/bookmarks",
    icon: Bookmark,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    name: "Kanban Board",
    href: "/kanban",
    icon: LayoutDashboard,
  },
];

const Sidebar = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div>
      <SidebarThemedLogo></SidebarThemedLogo>
      {menuItems.map((item) => (
        <div
          key={item.name}
          className="px-5 py-3 mb-3 text-xl flex items-center gap-4 border-[1px] border-transparent hover:bg-gray-100 dark:hover:bg-gray-300/500 hover:border-blue-700/50 cursor-pointer transition-all duration-300 rounded-[30px]"
        >
          {item?.icon && <item.icon className="size-7"></item.icon>}
          <p>{item.name}</p>
        </div>
      ))}

      <div
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="px-5 py-3 mb-3 text-xl flex items-center gap-4 border-[1px] border-transparent hover:bg-gray-100 dark:hover:bg-gray-300/500 hover:border-blue-700/50 cursor-pointer transition-all duration-300 rounded-[30px]"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="size-7 rotate-0 scale-100 transition-all" />
        ) : (
          <Moon className="size-7 rotate-0 scale-100 transition-all" />
        )}
        <p>{isDark ? "Light Mode" : "Dark Mode"}</p>
      </div>

      <div className="w-full md:w-[75%] mx-auto">
        <button className="bg-gradient-animate hover-pulse mt-10 px-2 py-2.5 w-full text-white text-lg font-medium flex justify-center items-center gap-3 rounded-[30px]">
          Post <Sparkles size="18" />
        </button>
      </div>

      <div className="px-4 w-full absolute bottom-4 left-0">
        <div className="mb-4">
          <Separator />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="relative h-11 w-11 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="#" alt="Avatar" />
                    <AvatarFallback className="bg-transparent text-indigo-700 dark:text-indigo-500 font-medium">
                      {name
                        ?.split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Profile</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex flex-col">
            <h1 className="font-medium">{name}</h1>
            <h1 className="text-sm font-light">{userName}</h1>
          </div>
        </div>

        <div className="mt-6">
          <button className="py-2 w-full text-sm text-red-600 dark:text-red-700 hover:text-white dark:hover:text-white bg-transparent hover:bg-red-700 font-medium flex justify-center items-center gap-2 transition-all duration-500 border-[1px] border-red-600 dark:border-red-700 rounded-[30px] cursor-pointer">
            <LogOut size="16" /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
