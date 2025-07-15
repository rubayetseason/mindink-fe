import CommentSection from "@/components/shared/posts/CommentSection";
import PostContent from "@/components/shared/posts/PostContent";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Post Details",
  description: "View the full post details",
};

// ✅ Fix: Both params and searchParams must be Promise types
type Props = {
  params: Promise<{ postId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const SinglePost = async ({ params, searchParams }: Props) => {
  const { postId } = await params;
  const search = await searchParams;

  return (
    <div className="pb-10">
      <PostContent postId={postId} />
      <CommentSection postId={postId} />
    </div>
  );
};

export default SinglePost;
