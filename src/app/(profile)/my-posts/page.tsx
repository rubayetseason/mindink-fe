import GoBackButton from "@/components/shared/others/GoBackButton";
import MyPosts from "./_components/MyPosts";

const MyPostsPage = () => {
  return (
    <div>
      <div className="px-5 py-5 font-raleway flex items-center gap-4 border-b border-input">
        <GoBackButton></GoBackButton> My Posts
      </div>
      <MyPosts></MyPosts>
    </div>
  );
};

export default MyPostsPage;
