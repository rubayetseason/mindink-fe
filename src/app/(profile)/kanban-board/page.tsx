import GoBackButton from "@/components/shared/others/GoBackButton";
import { CustomKanban } from "./_components/KanbanBoard";

const KanbanBoard = () => {
  return (
    <div>
      <div className="px-5 py-5 font-raleway flex items-center gap-4 border-b border-input">
        <GoBackButton></GoBackButton> Task Board
      </div>
      <CustomKanban></CustomKanban>
    </div>
  );
};

export default KanbanBoard;
