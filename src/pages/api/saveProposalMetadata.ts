import type { NextApiRequest, NextApiResponse } from "next";
import ClaritySDK, { type Networks } from "@claritydao/clarity-sdk";

ClaritySDK.initialize(
  process.env.NEXT_PUBLIC_CARDANO_NETWORK as Networks,
  "Clarity"
);

/**
 * Sends a request to the Clarity API to save metadata for a specific proposal
 * @param req - Request object
 * @param res - Response object
 * @returns Success message
 */
const saveProposalMetadata = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse> => {
  const { proposalMetadata } = req.body;
  const metadataSaved = await ClaritySDK.saveProposalMetadata(proposalMetadata);
  if (!metadataSaved.status) {
    console.error("Failed to save proposal metadata");
    return res.status(500).json(metadataSaved.message);
  } else {
    console.log("Proposal metadata saved successfully");
    return res.status(200).json("Proposal metadata saved successfully");
  }
};

export default saveProposalMetadata;
