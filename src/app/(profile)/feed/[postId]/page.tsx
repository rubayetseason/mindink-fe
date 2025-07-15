import CommentSection from "@/components/shared/posts/CommentSection";
import PostContent from "@/components/shared/posts/PostContent";

interface PostPageProps {
  params: {
    postId: string;
  };
}

const SinglePost = ({ params }: PostPageProps) => {
  console.log(params?.postId);

  return (
    <div className="pb-10">
      <PostContent />
      <CommentSection />
    </div>
  );
};

export default SinglePost;
