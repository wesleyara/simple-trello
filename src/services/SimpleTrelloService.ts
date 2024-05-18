import axios from "axios";

import { CreateCardProps } from "../types";
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
}
