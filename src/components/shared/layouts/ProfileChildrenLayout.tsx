import { mindInkAssets } from "@/assets";
import Image from "next/image";
import Sidebar from "./Sidebar";

const ProfileChildrenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="px-4 max-w-[var(--custom-width)] mx-auto min-h-screen w-full flex">
        <div className="pr-5 w-72 border-2 border-red-500">
          <Image
            src={mindInkAssets?.logos?.logo_black}
            alt="logo"
            className="w-20"
          />
          <Sidebar></Sidebar>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default ProfileChildrenLayout;
