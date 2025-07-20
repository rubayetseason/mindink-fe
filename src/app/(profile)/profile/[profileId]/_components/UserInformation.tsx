import { Calendar, MapPin } from "lucide-react";
import EditProfileDialog from "./EditProfileDialog";
import Link from "next/link";

const UserInformation = () => {
  return (
    <div>
      <div className="relative h-52">
        <div className="h-full w-full bg-gray-600"></div>
        <div className="size-36 bg-gray-300 absolute -bottom-16 left-4 border border-black rounded-full"></div>
      </div>
      <div className="mt-5 px-5 flex justify-end">
        <EditProfileDialog />
      </div>
      <div className="mt-10 px-5 border-b border-input">
        <h1 className="text-2xl font-semibold">John Doe</h1>
        <h1 className="text-sm text-muted-foreground">@johndoe</h1>
        <div className="my-3 text-muted-foreground">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos
            quas atque perspiciatis ab velit voluptatem aperiam at
            necessitatibus libero.
          </h1>
        </div>
        <h1 className="mt-3 text-sm text-muted-foreground flex items-center gap-2">
          <MapPin size={20} /> Dhaka, Bangladesh
        </h1>
        <h1 className="mt-3 text-sm text-muted-foreground flex items-center gap-2">
          <Calendar size={20} /> Joined in August 5, 2025
        </h1>

        <div className="my-5 text-muted-foreground flex items-center gap-5">
          <Link href={`/profile/123/followers-and-following?tab=followers`}>
            <h1 className="flex items-center gap-2 cursor-pointer hover:underline">
              <span className="text-black dark:text-white font-semibold">
                36
              </span>
              Followers
            </h1>
          </Link>
          <Link href={`/profile/123/followers-and-following?tab=following`}>
            <h1 className="flex items-center gap-2 cursor-pointer hover:underline">
              <span className="text-black dark:text-white font-semibold">
                5
              </span>
              Following
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
