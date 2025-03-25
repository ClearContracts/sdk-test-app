import ClaritySDK, { type Stake } from "clarity-sdk";

interface Props {
  stakes: Stake[];
}

const CreateUpdateGovernanceParametersProposalButton = (props: Props) => {
  const { stakes } = props;

  const handleClick = async () => {
    const txId = await ClaritySDK.createUpdateGovernanceParametersProposal(
      stakes[0].txOutRef,
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
      1,
      "Test update governance parameter proposal",
      "test description"
    );
    console.log("Update governance parameter proposal TX ID:", txId);
  };
  return (
    <button onClick={handleClick}>
      Create Update Governance Parameters Proposal
    </button>
  );
};

export default CreateUpdateGovernanceParametersProposalButton;
