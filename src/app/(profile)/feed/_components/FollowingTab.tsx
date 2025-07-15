"use client";

import BlogPostSkeleton from "@/components/loaders/BlogPostSkeleton";
import { BlogPostCard } from "@/components/shared/others/BlogPostCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { blogPosts } from "@/constants";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const name = "John Doe";

const FollowingTab = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="md:px-5 space-y-6 md:py-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
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
          <div>
            <h1 className="text-gray-400 dark:text-gray-600">
              What&apos;s on your mind...
            </h1>
          </div>
        </div>
        <button className="bg-gradient-animate hover-pulse px-5 py-2.5 w-fit text-white text-lg font-medium flex justify-center items-center gap-3 rounded-[30px]">
          Create a Post <Sparkles size="18" />
        </button>
      </div>
      {loading
        ? Array.from({ length: 3 }).map((_, i) => <BlogPostSkeleton key={i} />)
        : blogPosts.map((post) => <BlogPostCard key={post.postId} {...post} />)}
    </div>
  );
};

export default FollowingTab;
