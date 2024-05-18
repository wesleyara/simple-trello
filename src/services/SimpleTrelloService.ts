import axios from "axios";

import { CreateCardProps, GetCardsProps, GetListsProps } from "../types";
import { DescriptionService } from "./DescriptionService";

export class SimpleTrello {
  constructor(
    private config: {
      key: string;
      token: string;
    },
    readonly descriptionService = new DescriptionService(),
  ) {}

  createCard = async ({
    listId,
    title,
    description,
    message,
  }: CreateCardProps) => {
    try {
      const { key, token } = this.config;
      const formattedDescription =
        this.descriptionService.formatDescription(description);

      await axios.post(
        `https://api.trello.com/1/cards?idList=${listId}&key=${key}&token=${token}&name=${title}&desc=${formattedDescription}`,
      );

      return { message: message || "Card created successfully" };
    } catch (error) {
      console.error(error);
      throw new Error("Internal server error");
    }
  };

  getBoards = async () => {
    try {
      const { key, token } = this.config;
      const { data } = await axios.get(
        `https://api.trello.com/1/members/me/boards?key=${key}&token=${token}`,
      );

      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Internal server error");
    }
  };

  getLists = async ({ boardId }: GetListsProps) => {
    try {
      const { key, token } = this.config;
      const { data } = await axios.get(
        `https://api.trello.com/1/boards/${boardId}/lists?key=${key}&token=${token}`,
      );

      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Internal server error");
    }
  };

  getCards = async ({ listId }: GetCardsProps) => {
    try {
      const { key, token } = this.config;
      const { data } = await axios.get(
        `https://api.trello.com/1/lists/${listId}/cards?key=${key}&token=${token}`,
      );

      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Internal server error");
    }
  };
}
