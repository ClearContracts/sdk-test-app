import ClaritySDK, { type AgoraProposal, type Stake } from "clarity-sdk";

interface Props {
  proposals: AgoraProposal[];
}

const RetractVoteButton = (props: Props) => {
  const { proposals } = props;

  const handleClick = async () => {
    const txId = await ClaritySDK.retractVote(
      proposals[proposals.length - 2].txOutRef,
      proposals[proposals.length - 2].proposalId,
      1
    );
    console.log("Retract Vote TX ID", txId);
  };
  return <button onClick={handleClick}>Retract Vote Button</button>;
};

export default RetractVoteButton;
