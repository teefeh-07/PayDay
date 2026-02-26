import { ChainhooksClient } from "@hirosystems/chainhooks-client";
const client = new ChainhooksClient({ apiKey: "YOUR_API_KEY" });
export async function registerHook() {
  const response = await client.createChainhook({
    name: "PayDay Main Hook",
    network: "devnet",
    if_this: {
      scope: "contract_call",
      contract_id: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.payday"
    },