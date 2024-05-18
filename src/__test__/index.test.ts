import { describe, expect, it } from "vitest";

import { SimpleTrello } from "../index";
import { DescriptionService } from "../services/DescriptionService";

describe("lib tests", () => {
  const descriptionService = new DescriptionService();
  const simpleTrello = new SimpleTrello({
    key: process.env.API_KEY as string,
    token: process.env.API_TOKEN as string,
  });

  it("description formatting", () => {
    const description = "Hello, world!\nMy name is John Doe.";
    const formattedDescription =
      descriptionService.formatDescription(description);

    expect(formattedDescription).toBe(
      "Hello,%20world!%0AMy%20name%20is%20John%20Doe.",
    );
  });

  it("card creation with message", async () => {
    const listId = process.env.LIST_ID as string;
    const title = "Test card";
    const description = "Hello, world!\nMy name is John Doe.";
    const message = "Card created successfully";

    const response = await simpleTrello.createCard({
      listId,
      title,
      description,
      message,
    });

    expect(response.message).toBe(message);
  });

  it("card creation without message", async () => {
    const listId = process.env.LIST_ID as string;
    const title = "Test card";
    const description = "Hello, world!\nMy name is John Doe.";

    const response = await simpleTrello.createCard({
      listId,
      title,
      description,
    });

    expect(response.message).toBe("Card created successfully");
  });

  it("card creation with error", async () => {
    const title = "Test card";
    const description = "Hello, world!\nMy name is John Doe.";

    try {
      await simpleTrello.createCard({
        listId: "invalid-list-id",
        title,
        description,
      });
    } catch (error) {
      expect(error.message).toBe("Internal server error");
    }
  });
});
