"use client";
import { CustomKanban } from "./_components/KanbanBoard";
import { Undo2 } from "lucide-react";

const KanbanBoard = () => {
  return (
    <div>
      <div className="px-5 py-5 font-raleway flex items-center gap-4 border-b border-input">
        <Undo2 className="w-5 h-5" onClick={() => history.back()} /> Task Board
      </div>
      <CustomKanban></CustomKanban>
    </div>
  );
};

export default KanbanBoard;
