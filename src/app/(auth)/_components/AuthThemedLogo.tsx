"use client";
import { mindInkAssets } from "@/assets";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const AuthThemedLogo = () => {
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

  return (
    <Image src={logoSrc} alt="logo" className="w-44 md:w-96 mx-auto" priority />
  );
};

export default AuthThemedLogo;
