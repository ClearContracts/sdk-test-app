import type { NextApiRequest, NextApiResponse } from "next";
import ClaritySDK, { type Networks } from "@claritydao/clarity-sdk";

ClaritySDK.initialize(
  process.env.NEXT_PUBLIC_CARDANO_NETWORK as Networks,
  "Clarity"
);

/**
 * Sends a request to the Clarity Sync server to retrieve all stakes for a specific used address for a specific DAO
 * @param req - Request object
 * @param res - Response object
 * @returns Array of stakes
 */
const getStakes = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse> => {
  const usedAddresses = req.query.usedAddresses;
  if (!usedAddresses || Array.isArray(usedAddresses)) {
    return res.status(400).json({ error: "Incorrect used addresses provided" });
  }
  const usedAddressesArray = usedAddresses.split(",");
  const stakes = await ClaritySDK.getStakes(usedAddressesArray);
  return res.status(200).json(stakes);
};

export default getStakes;
