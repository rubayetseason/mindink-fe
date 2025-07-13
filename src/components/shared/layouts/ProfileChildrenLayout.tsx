import Sidebar from "./Sidebar";
import SidebarThemedLogo from "./SidebarThemedLogo";

const ProfileChildrenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="px-4 max-w-[var(--custom-width)] mx-auto min-h-screen w-full flex">
        <div className="pr-5 w-72">
          <SidebarThemedLogo></SidebarThemedLogo>
          <Sidebar></Sidebar>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default ProfileChildrenLayout;
