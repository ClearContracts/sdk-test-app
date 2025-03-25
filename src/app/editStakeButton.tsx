import ClaritySDK, { type Stake } from "clarity-sdk";

interface Props {
  stakes: Stake[];
}

const EditStakeButton = (props: Props) => {
  const { stakes } = props;

  const handleClick = async () => {
    const txId = await ClaritySDK.editStake(
      stakes[stakes.length - 1].txOutRef,
      -3000000
    );
    console.log("Edit stake TX ID:", txId);
  };
  return <button onClick={handleClick}>Edit Stake</button>;
};

export default EditStakeButton;
