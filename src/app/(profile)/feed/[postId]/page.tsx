interface PostPageProps {
  params: {
    postId: string;
  };
}

const SinglePost = ({ params }: PostPageProps) => {
  return (
    <div className="pb-10">
      <PostContent postId={params.postId} />
      <CommentSection postId={params.postId} />
    </div>
  );
};

export default SinglePost;
