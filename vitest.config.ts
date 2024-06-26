import { defineConfig } from "vitest/config";

export default defineConfig({
  root: "src",
  test: {
    globals: true,
    setupFiles: ["dotenv/config"],
  },
});
