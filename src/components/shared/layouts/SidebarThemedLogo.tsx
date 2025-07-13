"use client";
import { mindInkAssets } from "@/assets";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const SidebarThemedLogo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logoSrc =
    resolvedTheme === "dark"
      ? mindInkAssets?.logos?.logo_white
      : mindInkAssets?.logos?.logo_black;

  return <Image src={logoSrc} alt="logo" className="w-14 md:w-20" />;
};

export default SidebarThemedLogo;
