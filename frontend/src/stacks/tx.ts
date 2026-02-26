import { makeContractCall, broadcastTransaction, AnchorMode, PostConditionMode } from "@stacks/transactions";
export async function invokePayDayExt() {
  const txOptions = {
    contractAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    contractName: "payday",
    functionName: "distribute-salary",
    functionArgs: [],
    senderKey: "private-key-mock",
    validateWithAbi: true,
    network: "devnet",
    postConditionMode: PostConditionMode.Allow,
    anchorMode: AnchorMode.Any
  };