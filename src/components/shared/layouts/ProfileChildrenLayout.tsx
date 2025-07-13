import Sidebar from "./Sidebar";

const ProfileChildrenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="px-4 max-w-[var(--custom-width)] mx-auto min-h-screen w-full flex">
        <div className="relative pr-5 w-72">
          <Sidebar></Sidebar>
        </div>
        <div className="flex-1 border-l-[1px] border-gray-400/50 dark:border-gray-600/50">
          {children}
        </div>
      </div>
    </>
  );
};

export default ProfileChildrenLayout;
