import ClaritySDK, { type Stake } from "@claritydao/clarity-sdk";

interface Props {
  stakes: Stake[];
  walletAddress: string;
}

const CreateNoEffectProposalButton = (props: Props) => {
  const { stakes, walletAddress } = props;

  const handleClick = async () => {
    const proposalData = await ClaritySDK.createNoEffectProposal(
      stakes[2].txOutRef
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
          templateName: "No Effect",
          title: "Test No Effect Proposal",
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
  return <button onClick={handleClick}>Create No Effect Proposal</button>;
};

export default CreateNoEffectProposalButton;
