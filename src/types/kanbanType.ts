import { Dispatch, SetStateAction } from "react";

export type CardType = {
  title: string;
  id: string;
  column: ColumnType;
};

export type CardProps = CardType & {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  handleDragStart: Function;
};

export type ColumnProps = {
  title: string;
  headingColor: string;
  bgColor: string;
  cards: CardType[];
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

export type ColumnType = "backlog" | "todo" | "doing" | "done";

export type DropIndicatorProps = {
  beforeId: string | null;
  column: string;
};
