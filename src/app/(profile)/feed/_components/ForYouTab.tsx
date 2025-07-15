import { BlogPostCard } from "@/components/shared/others/BlogPostCard";
import { blogPosts } from "@/constants";
import React from "react";

const ForYouTab = () => {
  return (
    <div>
      <div className="px-5 space-y-6 py-10">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.postId} {...post} />
        ))}
      </div>
    </div>
  );
};

export default ForYouTab;
