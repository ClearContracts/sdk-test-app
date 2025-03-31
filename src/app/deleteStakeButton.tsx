import ClaritySDK, { type Stake } from "@claritydao/clarity-sdk";

interface Props {
  stakes: Stake[];
}

const DeleteStakeButton = (props: Props) => {
  const { stakes } = props;

  const handleClick = async () => {
    const txId = await ClaritySDK.deleteStake(
      stakes[stakes.length - 1].txOutRef
    );
    console.log("Delete stake TX ID:", txId);
  };
  return <button onClick={handleClick}>Delete Stake</button>;
};

export default DeleteStakeButton;
