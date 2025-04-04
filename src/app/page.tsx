"use client";

import styles from "./page.module.css";
import ClaritySDK, {
  type Networks,
  type AgoraProposal,
  type Stake,
} from "@claritydao/clarity-sdk";
import CreateTreasuryWithdrawalProposalButton from "./createTreasuryWithdrawalProposalButton";
import { useState } from "react";
import GetStakesButton from "./getStakesButton";
import { useEffect } from "react";
import CreateUpdateGovernanceParametersProposalButton from "./createUpdateGovernanceParametersProposalButton";
import CreateStakeButton from "./createStakeButton";
import EditStakeButton from "./editStakeButton";
import GetProposalsButton from "./getProposalsButton";
import CreateNoEffectProposalButton from "./createNoEffectProposalButton";
import DeleteStakeButton from "./deleteStakeButton";
import VoteOnProposalButton from "./voteOnProposalButton";
import RetractVoteButton from "./retractVoteButton";
import UnlockStakesButton from "./createUnlockStakesButton";
import { deriveStakeAddressFromRewardAddress } from "./deriveStakeAddressFromRewardAddress";

export default function Home() {
  const [stakes, setStakes] = useState<Stake[]>([]);
  const [proposals, setProposals] = useState<AgoraProposal[]>([]);
  const [walletAddress, setWalletAddress] = useState<string>("");

  useEffect(() => {
    const initializeClaritySDK = async () => {
      const network = process.env.NEXT_PUBLIC_CARDANO_NETWORK || "";
      if (network !== "mainnet" && network !== "preview") {
        console.error("Invalid network: " + network);
        return;
      }
      await ClaritySDK.initialize(
        process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK as Networks,
        "Clarity"
      );
      const wallet = await ClaritySDK.connectWallet("lace");
      if (!wallet) {
        console.error("Wallet not connected");
        return;
      }
      const stakeAddress = await deriveStakeAddressFromRewardAddress(wallet);
      setWalletAddress(stakeAddress.stakeAddress);
    };
    initializeClaritySDK();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <GetStakesButton setStakes={setStakes} />
        <CreateStakeButton />
        <EditStakeButton stakes={stakes} />
        <DeleteStakeButton stakes={stakes} />
        <GetProposalsButton setProposals={setProposals} />
        <CreateTreasuryWithdrawalProposalButton
          stakes={stakes}
          walletAddress={walletAddress}
        />
        <CreateUpdateGovernanceParametersProposalButton
          stakes={stakes}
          walletAddress={walletAddress}
        />
        <CreateNoEffectProposalButton
          stakes={stakes}
          walletAddress={walletAddress}
        />
        <VoteOnProposalButton proposals={proposals} stakes={stakes} />
        <RetractVoteButton proposals={proposals} />
        <UnlockStakesButton stakes={stakes} proposals={proposals} />
      </main>
    </div>
  );
}
