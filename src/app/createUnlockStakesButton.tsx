import ClaritySDK, {
  type AgoraProposal,
  type Stake,
} from "@claritydao/clarity-sdk";

interface Props {
  stakes: Stake[];
  proposals: AgoraProposal[];
}

const UnlockStakesButton = (props: Props) => {
  const { stakes, proposals } = props;

  const handleClick = async () => {
    const txId = await ClaritySDK.unlockStakes(
      [stakes[stakes.length - 2].txOutRef, stakes[stakes.length - 3].txOutRef],
      proposals[proposals.length - 2].txOutRef
    );
    console.log("Unlock stakes TX ID:", txId);
  };
  return <button onClick={handleClick}>Unlock Stakes</button>;
};

export default UnlockStakesButton;
