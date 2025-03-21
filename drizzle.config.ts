import { config } from "dotenv";
import { drizzleConfig } from "drizzle-kit";

config({ path: ".env" });

export default drizzleConfig({
  schema: "./src/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
