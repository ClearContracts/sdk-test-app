import ClaritySDK, { type Stake } from "@claritydao/clarity-sdk";

interface Props {
  stakes: Stake[];
  walletAddress: string;
}

const CreateUpdateGovernanceParametersProposalButton = (props: Props) => {
  const { stakes, walletAddress } = props;

  const handleClick = async () => {
    const proposalData =
      await ClaritySDK.createUpdateGovernanceParametersProposal(
        stakes[3].txOutRef,
        { execute: 1, create: 1, toVoting: 1, vote: 1, cosign: 1 },
        {
          draftTime: 1800000,
          votingTime: 1800001, // NOTE: Voting time must be greater than minStakeVotingTime
          lockingTime: 1800000,
          executingTime: 1800000,
          minStakeVotingTime: 1800000,
          votingTimeRangeMaxWidth: 1,
        },
        1,
        1
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
  return (
    <button onClick={handleClick}>
      Create Update Governance Parameters Proposal
    </button>
  );
};

export default CreateUpdateGovernanceParametersProposalButton;
