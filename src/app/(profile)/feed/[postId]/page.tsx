import CommentSection from "@/components/shared/posts/CommentSection";
import PostContent from "@/components/shared/posts/PostContent";

const SinglePost = ({ params }: { params: { postId: string } }) => {
  console.log(params?.postId);

  return (
    <div className="pb-10">
      <PostContent></PostContent>
      <CommentSection></CommentSection>
    </div>
  );
};

export default SinglePost;
