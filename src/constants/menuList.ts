import {
    Bookmark,
    House,
    LayoutDashboard,
    Rss,
    Search,
    User
} from "lucide-react";

export const menuItems = [
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
