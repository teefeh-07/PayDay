import { ChainhooksClient } from "@hirosystems/chainhooks-client";
const client = new ChainhooksClient({ apiKey: "YOUR_API_KEY" });
export async function registerHook() {
  const response = await client.createChainhook({
    name: "PayDay Main Hook",