import ClaritySDK from "@claritydao/clarity-sdk";

interface Props {
  setProposals: any;
}

const GetProposalsButton = (props: Props) => {
  const { setProposals } = props;

  const handleOnClick = async () => {
    const proposals = await ClaritySDK.getProposals();
    setProposals(proposals);
    console.log("Proposals:", proposals);
  };

  return <button onClick={handleOnClick}>Get Proposals</button>;
};

export default GetProposalsButton;
