import GoBackButton from "@/components/shared/others/GoBackButton";
import { CustomKanban } from "./_components/KanbanBoard";
import { Sparkles } from "lucide-react";

const KanbanBoard = () => {
  return (
    <div className="relative">
      <div className="px-5 py-5 font-raleway flex items-center gap-4 border-b border-input">
        <GoBackButton></GoBackButton> Task Board
      </div>
      <CustomKanban></CustomKanban>
      <div className="fixed bottom-12 right-32">
        <div className="relative inline-flex group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#4b749f] via-[#0968e5] to-[#456fe8] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-pulse"></div>
          <h1
            className="px-8 py-4 relative inline-flex justify-center items-center gap-3 text-base font-bold text-black dark:text-white transition-all duration-200 bg-white dark:bg-black rounded-[30px] focus:outline-none"
            role="button"
          >
            <Sparkles /> Ask AI
          </h1>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
