"use client";

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
      {menuItems.map((item) => (
        <div
          key={item.name}
          className="px-5 py-3 mb-3 text-xl flex items-center gap-4 border-[1px] border-transparent hover:bg-gray-100 hover:border-blue-700/50 cursor-pointer transition-all duration-300 rounded-[30px]"
        >
          {item?.icon && <item.icon className="size-7"></item.icon>}
          <p>{item.name}</p>
        </div>
      ))}

      <div
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="px-5 py-3 mb-3 text-xl flex items-center gap-4 border-[1px] border-transparent hover:bg-gray-100 hover:border-blue-700/50 cursor-pointer transition-all duration-300 rounded-[30px]"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
        ) : (
          <Moon className="h-5 w-5 rotate-0 scale-100 transition-all" />
        )}
        <p>{isDark ? "Light Mode" : "Dark Mode"}</p>
      </div>

      <div className="w-full md:w-2/3 mx-auto">
        <button className="bg-gradient-animate hover-pulse mt-10 px-2 py-2.5 w-full text-white text-lg font-medium flex justify-center items-center gap-3 rounded-[30px]">
          Post <Sparkles />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
