import ClaritySDK, { type Stake } from "@claritydao/clarity-sdk";

interface Props {
  stakes: Stake[];
}

const CreateNoEffectProposalButton = (props: Props) => {
  const { stakes } = props;

  const handleClick = async () => {
    const txId = await ClaritySDK.createNoEffectProposal(
      stakes[0].txOutRef,
      "Test no effect proposal",
      "test description"
    );
    console.log("Proposal TX ID:", txId);
  };
  return <button onClick={handleClick}>Create No Effect Proposal</button>;
};

export default CreateNoEffectProposalButton;
