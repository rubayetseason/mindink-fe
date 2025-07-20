import GoBackButton from "@/components/shared/others/GoBackButton";
import { type Metadata } from "next";

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
    <div>
      <div className="px-5 py-5 font-raleway flex items-center gap-4 border-b border-input">
        <GoBackButton></GoBackButton> John Doe
      </div>
    </div>
  );
};

export default ProfilePage;
