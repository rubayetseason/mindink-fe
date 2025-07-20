import { formatDistanceToNow } from "date-fns";
import GoBackButton from "../others/GoBackButton";
import { samplePost } from "@/constants";
import { Heart, MessageCircle, Repeat, UserRoundCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PostContent = ({ postId }: { postId: string }) => {
  console.log(postId);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-10 space-y-6">
      {/* Title */}
      <GoBackButton></GoBackButton>
      <h1 className="text-5xl font-bold tracking-tight">{samplePost.title}</h1>

      <div className="mt-9 flex items-center gap-4">
        <Link href="/profie/123">
          <Image
            src={samplePost.user.avatar}
            alt={samplePost.user.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </Link>
        <div className="flex-1 flex justify-between items-center">
          <Link href="/profie/123">
            <div>
              <p className="font-medium">{samplePost.user.name}</p>
              <p className="text-sm text-muted-foreground">
                {formatDistanceToNow(new Date(samplePost.postedAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </Link>
          <Link href={`/posts/${postId}/`}>
            <Button>
              <UserRoundCheck /> Following
            </Button>
          </Link>
        </div>
      </div>

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
