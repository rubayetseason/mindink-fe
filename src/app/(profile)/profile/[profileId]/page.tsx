import GoBackButton from "@/components/shared/others/GoBackButton";
import { type Metadata } from "next";
import UserInformation from "./_components/UserInformation";
import UserPosts from "./_components/UserPosts";

export const metadata: Metadata = {
  title: "User Profile",
  description: "View the user profile",
};

// ✅ Fix: Both params and searchParams must be Promise types
type Props = {
  params: Promise<{ profileId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const ProfilePage = async ({ params, searchParams }: Props) => {
  const { profileId } = await params;
  const search = await searchParams;
  console.log(profileId, search);

  return (
    <div className="font-raleway">
      <div className="px-5 py-5 flex items-center gap-4 border-b border-input">
        <GoBackButton></GoBackButton>
        <span className="flex flex-col items-start">
          <span className="text-xl font-semibold">John Doe</span>
          <span className="text-sm">36 Posts</span>
        </span>
      </div>
      <UserInformation></UserInformation>
      <UserPosts></UserPosts>
    </div>
  );
};

export default ProfilePage;
