import GoBackButton from "../others/GoBackButton";
import { samplePost } from "@/constants";
import { Heart, MessageCircle, Repeat } from "lucide-react";
import Image from "next/image";

const PostContent = ({ postId }: { postId: string }) => {
  console.log(postId);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-10 space-y-6">
      {/* Title */}
      <GoBackButton></GoBackButton>
      <h1 className="text-5xl font-bold tracking-tight">{samplePost.title}</h1>

      {samplePost.stats.hashtags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {samplePost.stats.hashtags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted flex items-center gap-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Cover Image */}
      <Image
        src={samplePost.coverImage}
        alt={samplePost.title}
        width={1200}
        height={600}
        className="rounded-lg w-full h-auto object-cover"
      />

      {/* Content */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: samplePost.content }}
      />

      {/* Stats */}
      <div className="flex gap-6 pt-6 text-xl border-t border-border text-muted-foreground">
        <div className="flex items-center gap-1">
          <Heart className="w-5 h-5" />
          <span>{samplePost.stats.likes}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle className="w-5 h-5" />
          <span>{samplePost.stats.comments}</span>
        </div>
        <div className="flex items-center gap-1">
          <Repeat className="w-5 h-5" />
          <span>{samplePost.stats.shares}</span>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
