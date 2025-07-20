"use client";

import { useEffect, useState } from "react";
import { BlogPostCard } from "@/components/shared/others/BlogPostCard";
import { blogPosts } from "@/constants";
import BlogPostSkeleton from "@/components/loaders/BlogPostSkeleton";

const HashtagResult = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="my-10 space-y-6 border-t border-input">
      <div className="my-5 flex justify-between items-center">
        <h1 className="text-2xl font-medium">Hashtags</h1>
        <h1 className="text-lg font-medium">2 Results Found</h1>
      </div>
      {loading
        ? Array.from({ length: 2 }).map((_, i) => <BlogPostSkeleton key={i} />)
        : blogPosts
            .slice(0, 2)
            .map((post) => <BlogPostCard key={post.postId} {...post} />)}
    </div>
  );
};

export default HashtagResult;
