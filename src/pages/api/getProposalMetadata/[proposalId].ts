import type { NextApiRequest, NextApiResponse } from "next";
import ClaritySDK, { type Networks } from "@claritydao/clarity-sdk";

ClaritySDK.initialize(
  process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK as Networks,
  "Clarity"
);

/**
 * Sends a request to the Clarity API to retrieves information about a specific proposal from the DB for an Organization/DAO
 * @param req - Request object
 * @param res - Response object
 * @returns Proposal metadata
 */
const getProposalMetadata = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse> => {
  const proposalId = req.query.proposalId;
  const proposalMetadata = await ClaritySDK.getProposalMetadata(
    proposalId as string
  );
  return res.status(200).json(proposalMetadata);
};

export default getProposalMetadata;
