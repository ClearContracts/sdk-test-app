import ClaritySDK from "@claritydao/clarity-sdk";

const CreateStakeButton = () => {
  const handleClick = async () => {
    const txId = await ClaritySDK.createStake(10000000);
    console.log("Create stake TX ID:", txId);
  };
  return <button onClick={handleClick}>Create Stake</button>;
};

export default CreateStakeButton;
