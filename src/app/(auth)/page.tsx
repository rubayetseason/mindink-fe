"use client";
import { mindInkAssets } from "@/assets";
import { Key, User, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-[var(--custom-width)] mx-auto w-full h-screen font-raleway flex justify-center items-center gap-10">
      <div className="w-1/2">
        <Image
          src={mindInkAssets?.logos?.logo_black}
          alt="logo"
          className="mx-auto"
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-5xl font-semibold text-center">
          Welcome to MindInk.
        </h1>
        <div className="w-1/2 mx-auto mt-10 px-2 flex items-center border border-gray-500/50 focus-within:border-black transition-colors duration-300">
          <User />
          <input
            type="text"
            className="px-3 py-2.5 outline-none w-full"
            placeholder="@username"
          />
        </div>

        <div className="w-1/2 mx-auto mt-5 px-2 flex items-center border border-gray-500/50 focus-within:border-black transition-colors duration-300">
          <Key className="text-gray-700" />
          <input
            type={showPassword ? "text" : "password"}
            className="px-3 py-2.5 outline-none w-full"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-gray-700 hover:text-black transition-colors duration-300"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="w-1/2 mx-auto">
          <button className="bg-gradient-animate hover-pulse mt-10 px-2 py-2.5 w-full bg-black text-white text-lg font-medium">
            Sign In
          </button>
        </div>
        <div className="my-11 w-1/2 mx-auto">
          <Separator />
        </div>

        <h1 className="text-center">
          Don&apos;t have an account?{" "}
          <span className="underline text-indigo-950 font-semibold cursor-pointer">
            <Link href="/register">Sign Up</Link>
          </span>
        </h1>
        <div className="w-1/2 mx-auto">
          <button className="mt-10 px-2 py-2.5 w-full bg-black text-white flex justify-center items-center gap-3">
            <FcGoogle />
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
}
