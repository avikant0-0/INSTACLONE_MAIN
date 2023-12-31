import { createClient } from "@sanity/client";
import dotenv from "dotenv";
dotenv.config();

export default createClient({
  projectId: "0yv1juf6",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-02-22",
  token: process.env.SANITY_API_TOKEN,
});
