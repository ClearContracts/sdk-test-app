"use client";

import styles from "./page.module.css";
import ClaritySDK, {
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

export default function Home() {
  const [stakes, setStakes] = useState<Stake[]>([]);
  const [proposals, setProposals] = useState<AgoraProposal[]>([]);

  useEffect(() => {
    const network = process.env.NEXT_PUBLIC_CARDANO_NETWORK || "";
    if (network !== "mainnet" && network !== "preview") {
      console.error("Invalid network: " + network);
      return;
    }
    ClaritySDK.initialize(
      network,
      process.env.NEXT_PUBLIC_CLARITY_SDK_API_KEY || "",
      "MattTestOrg-TestnetDev"
    );
    ClaritySDK.connectWallet("lace");
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <GetStakesButton setStakes={setStakes} />
        <CreateStakeButton />
        <EditStakeButton stakes={stakes} />
        <DeleteStakeButton stakes={stakes} />
        <GetProposalsButton setProposals={setProposals} />
        <CreateTreasuryWithdrawalProposalButton stakes={stakes} />
        <CreateUpdateGovernanceParametersProposalButton stakes={stakes} />
        <CreateNoEffectProposalButton stakes={stakes} />
        <VoteOnProposalButton proposals={proposals} stakes={stakes} />
        <RetractVoteButton proposals={proposals} />
        <UnlockStakesButton stakes={stakes} proposals={proposals} />
      </main>
    </div>
  );
}
