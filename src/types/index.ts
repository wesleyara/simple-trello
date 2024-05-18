export interface CreateCardProps {
  listId: string;
  title: string;
  description: string;
  message?: string;
}

export interface GetListsProps {
  boardId: string;
}

export interface GetCardsProps {
  listId: string;
}
