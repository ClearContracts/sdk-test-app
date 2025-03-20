"use client";

import Image from "next/image";
import styles from "./page.module.css";
import ClaritySDK from "clarity-sdk";

export default function Home() {
  const handleClick = async () => {
    if (typeof window !== "undefined") {
      await ClaritySDK.initialize(
        "preview",
        process.env.NEXT_PUBLIC_CLARITY_SDK_API_KEY || "",
        "Justin'sSweetDAO"
      );
      const wallet = await ClaritySDK.connectWallet("lace");
      const proposals = await ClaritySDK.getProposals();
      console.log(proposals);
      const stakes = await ClaritySDK.getStakes();
      console.log(stakes);
      /*
      const proposalId = await ClaritySDK.createTreasuryWithdrawalProposal(
        stakes[0].txOutRef,
        "addr_test1qqwvhaj2hc9rjh2ame6vgmn8ngrgcku54zk9l3svvwcy06h83aj4rvjhtf2kzc5fwy3l5x9d0rzt4qdq6qp9vcwl6f5sr2szds",
        "",
        "",
        1000000,
        "Test",
        "Test Description"
      );
      console.log(proposalId);
      */
      /*
      const proposalId =
        await ClaritySDK.createUpdateGovernanceParametersProposal(
          stakes[0].txOutRef,
          { execute: 1, create: 1, toVoting: 1, vote: 1, cosign: 1 },
          {
            draftTime: 1800000,
            votingTime: 1800001,
            lockingTime: 1800000,
            executingTime: 1800000,
            minStakeVotingTime: 1800000,
            votingTimeRangeMaxWidth: 1,
          },
          1,
          1,
          "Test update governance parameter proposal",
          "test description"
        );
      console.log(proposalId);
      */
      const proposalId = await ClaritySDK.createNoEffectProposal(
        stakes[0].txOutRef,
        "Test no effect proposal",
        "test description"
      );
      console.log(proposalId);
      /*
      const stakeTxId = await ClaritySDK.createStake(5000000);
      console.log(stakeTxId);
      */
      /*
      const stakeTxId = await ClaritySDK.editStake(
        stakes[stakes.length - 1].txOutRef,
        -3000000
      );
      console.log(stakeTxId);
      */
      /*
      const stakeTxId = await ClaritySDK.deleteStake(
        stakes[stakes.length - 1].txOutRef
      );
      console.log(stakeTxId);
      */
      /*
      const voteTxId = await ClaritySDK.voteOnProposal(
        proposals[proposals.length - 1].txOutRef,
        proposals[proposals.length - 1].proposalId,
        [stakes[stakes.length - 3].txOutRef],
        1
      );
      console.log(voteTxId);
      */
      /*
      const retractVoteTxId = await ClaritySDK.retractVote(
        proposals[proposals.length - 1].txOutRef,
        proposals[proposals.length - 1].proposalId,
        1
      );
      console.log(retractVoteTxId);
      */
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button onClick={handleClick}>Connect lace Wallet</button>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
