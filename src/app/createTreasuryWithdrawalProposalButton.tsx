import ClaritySDK, { type Stake } from "@claritydao/clarity-sdk";

interface Props {
  stakes: Stake[];
  walletAddress: string;
}

const CreateTreasuryWithdrawalProposalButton = (props: Props) => {
  const { stakes, walletAddress } = props;

  const handleClick = async () => {
    const proposalData = await ClaritySDK.createTreasuryWithdrawalProposal(
      stakes[2].txOutRef,
      "addr_test1qqwvhaj2hc9rjh2ame6vgmn8ngrgcku54zk9l3svvwcy06h83aj4rvjhtf2kzc5fwy3l5x9d0rzt4qdq6qp9vcwl6f5sr2szds",
      "",
      "",
      1000000
    );
    if (!proposalData) {
      console.error("Failed to create proposal");
      return;
    }
    console.log("Proposal TX ID:", proposalData?.txId);
    const res = await fetch("/api/saveProposalMetadata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        proposalMetadata: {
          contributors: [walletAddress],
          description: "Test description",
          id: proposalData?.proposalId,
          templateName: "Spend Treasury Funds",
          title: "Test Treasury Withdrawal Proposal",
          txHash: proposalData?.txId,
        },
      }),
    });
    if (!res.ok) {
      console.error("Failed to save proposal metadata");
      return;
    } else {
      console.log("Proposal metadata saved successfully");
    }
  };
  return (
    <button onClick={handleClick}>Create Treasury Withdrawal Proposal</button>
  );
};

export default CreateTreasuryWithdrawalProposalButton;
