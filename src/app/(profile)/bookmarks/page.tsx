import GoBackButton from "@/components/shared/others/GoBackButton";
import BookmarkedPosts from "./_components/BookmarkedPosts";

const BookmarkPage = () => {
  return (
    <div>
      <div className="px-5 py-5 font-raleway flex items-center gap-4 border-b border-input">
        <GoBackButton></GoBackButton> Bookmarked Posts
      </div>
      <BookmarkedPosts></BookmarkedPosts>
    </div>
  );
};

export default BookmarkPage;
