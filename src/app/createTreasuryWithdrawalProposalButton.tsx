import ClaritySDK, { type Stake } from "clarity-sdk";

interface Props {
  stakes: Stake[];
}

const CreateTreasuryWithdrawalProposalButton = (props: Props) => {
  const { stakes } = props;

  const handleClick = async () => {
    const txId = await ClaritySDK.createTreasuryWithdrawalProposal(
      stakes[0].txOutRef,
      "addr_test1qqwvhaj2hc9rjh2ame6vgmn8ngrgcku54zk9l3svvwcy06h83aj4rvjhtf2kzc5fwy3l5x9d0rzt4qdq6qp9vcwl6f5sr2szds",
      "",
      "",
      1000000,
      "Test",
      "Test Description"
    );
    console.log("Proposal TX ID:", txId);
  };
  return (
    <button onClick={handleClick}>Create Treasury Withdrawal Proposal</button>
  );
};

export default CreateTreasuryWithdrawalProposalButton;
