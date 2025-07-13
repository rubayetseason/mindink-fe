"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { SignupFormData } from "@/schemas/authSchemas";
import { Eye, EyeOff, Key, Mail, User } from "lucide-react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<SignupFormData>;
  onSubmit: (data: SignupFormData) => void;
};

export default function SignupForm({ form, onSubmit }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full md:w-1/2 mx-auto">
                  <div className="mt-5 px-2 flex items-center border border-gray-500/50 focus-within:border-black transition-colors duration-300">
                    <User />
                    <input
                      {...field}
                      type="text"
                      placeholder="@username"
                      className="px-3 py-2.5 outline-none w-full"
                    />
                  </div>
                  <FormMessage className="mt-2 text-sm text-red-600 font-medium" />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full md:w-1/2 mx-auto">
                  <div className="mt-3 px-2 flex items-center border border-gray-500/50 focus-within:border-black transition-colors duration-300">
                    <Mail />
                    <input
                      {...field}
                      type="email"
                      placeholder="Email"
                      className="px-3 py-2.5 outline-none w-full"
                    />
                  </div>
                  <FormMessage className="mt-2 text-sm text-red-600 font-medium" />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full md:w-1/2 mx-auto">
                  <div className="relative mt-3 px-2 flex items-center border border-gray-500/50 focus-within:border-black transition-colors duration-300">
                    <Key />
                    <input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="px-3 py-2.5 outline-none w-full"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 hover:text-black transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <FormMessage className="mt-2 text-sm text-red-600 font-medium" />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full md:w-1/2 mx-auto">
                  <div className="relative mt-3 px-2 flex items-center border border-gray-500/50 focus-within:border-black transition-colors duration-300">
                    <Key />
                    <input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="px-3 py-2.5 outline-none w-full"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 hover:text-black transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <FormMessage className="mt-2 text-sm text-red-600 font-medium" />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="w-full md:w-1/2 mx-auto">
          <button className="bg-gradient-animate hover-pulse mt-10 px-2 py-2.5 w-full text-white text-lg font-medium">
            Sign Up
          </button>
        </div>
      </form>
    </Form>
  );
}
