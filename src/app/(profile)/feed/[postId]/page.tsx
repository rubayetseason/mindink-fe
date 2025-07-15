import CommentSection from "@/components/shared/posts/CommentSection";
import PostContent from "@/components/shared/posts/PostContent";
import { FC } from "react";

interface PostPageProps {
  params: {
    postId: string;
  };
}

const SinglePost: FC<PostPageProps> = ({ params }) => {
  console.log(params?.postId);

  return (
    <div className="pb-10">
      <PostContent></PostContent>
      <CommentSection></CommentSection>
    </div>
  );
};

export default SinglePost;
