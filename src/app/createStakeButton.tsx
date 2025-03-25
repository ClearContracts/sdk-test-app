import ClaritySDK, { type Stake } from "clarity-sdk";

const CreateStakeButton = () => {
  const handleClick = async () => {
    const txId = await ClaritySDK.createStake(3000000);
    console.log("Create stake TX ID:", txId);
  };
  return <button onClick={handleClick}>Create Stake</button>;
};

export default CreateStakeButton;
