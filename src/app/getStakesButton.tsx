import ClaritySDK from "@claritydao/clarity-sdk";

interface Props {
  // @ts-ignore
  setStakes: any;
}

const GetStakesButton = (props: Props) => {
  const { setStakes } = props;

  const handleOnClick = async () => {
    const stakes = await ClaritySDK.getStakes();
    setStakes(stakes);
    console.log("Stakes", stakes);
  };

  return <button onClick={handleOnClick}>Get Stakes</button>;
};

export default GetStakesButton;
