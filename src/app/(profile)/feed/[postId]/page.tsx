import CommentSection from "@/components/shared/posts/CommentSection";
import PostContent from "@/components/shared/posts/PostContent";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Post Details",
  description: "View the full post details",
};

// 👇 The key fix is making params a Promise
type Props = {
  params: Promise<{ postId: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
};

const SinglePost = async ({ params }: Props) => {
  const { postId } = await params;

  return (
    <div className="pb-10">
      <PostContent postId={postId} />
      <CommentSection postId={postId} />
    </div>
  );
};

export default SinglePost;
