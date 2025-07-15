"use client";

import { Skeleton } from "@/components/ui/skeleton";

const BlogPostSkeleton = () => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* User avatar and name row */}
      <div className="flex items-center gap-3">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="w-32 h-4 rounded" />
          <Skeleton className="w-24 h-3 rounded" />
        </div>
      </div>

      {/* Post thumbnail */}
      <Skeleton className="w-full h-64 rounded-md" />

      {/* Title and description */}
      <Skeleton className="w-3/4 h-5 rounded" />
      <Skeleton className="w-full h-4 rounded" />
      <Skeleton className="w-5/6 h-4 rounded" />

      {/* Bottom stats */}
      <div className="flex gap-4 mt-2">
        <Skeleton className="w-12 h-5 rounded-full" />
        <Skeleton className="w-12 h-5 rounded-full" />
        <Skeleton className="w-20 h-5 rounded-full" />
      </div>
    </div>
  );
};

export default BlogPostSkeleton;
