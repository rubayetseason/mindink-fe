import CommentSection from "@/components/shared/posts/CommentSection";
import PostContent from "@/components/shared/posts/PostContent";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Post Details",
  description: "View the full post details",
};

interface Props {
  params: { postId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const SinglePost = ({ params }: Props) => {
  return (
    <div className="pb-10">
      <PostContent postId={params.postId} />
      <CommentSection postId={params.postId} />
    </div>
  );
};

export default SinglePost;
