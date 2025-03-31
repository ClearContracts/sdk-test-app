import ClaritySDK, {
  type AgoraProposal,
  type Stake,
} from "@claritydao/clarity-sdk";

interface Props {
  proposals: AgoraProposal[];
  stakes: Stake[];
}

const VoteOnProposalButton = (props: Props) => {
  const { proposals, stakes } = props;

  const handleClick = async () => {
    const txId = await ClaritySDK.voteOnProposal(
      proposals[proposals.length - 2].txOutRef,
      proposals[proposals.length - 2].proposalId,
      [stakes[1].txOutRef],
      1
    );
    console.log("Vote TX ID:", txId);
  };
  return <button onClick={handleClick}>Vote On Proposal</button>;
};

export default VoteOnProposalButton;
