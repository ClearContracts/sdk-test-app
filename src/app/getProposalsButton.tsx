import ClaritySDK, { type AgoraProposal } from "@claritydao/clarity-sdk";

interface Props {
  // @ts-ignore
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
