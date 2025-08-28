interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setStakes: any;
}

/**
 * Sends a request to the Clarity Sync server to retrieve all stakes for a specific used address for a specific DAO.
 * This is an example of how to use the Clarity SDK to retrieve stakes from the Clarity Sync server from a backend
 * environment. It is up to you how to acquire the wallet's used Bech32 addresses.
 * @param setStakes - Function to set the stakes
 * @returns Array of stakes
 */
const GetStakesBackendButton = (props: Props) => {
  const { setStakes } = props;

  const handleOnClick = async () => {
    // Note that it is up to you how to acquire the
    // wallet's used Bech32 addresses.
    const arrayOfAddresses = [
      "e59210e73658506638e642a83f4e0671e73b9bcfdda25123c333d5c8",
      "7872b5748f6a476235c2cb7e635daf869fa65d690943d02a225f932b",
      "34e63645b8ccb7ebcdc4855a0bbcc7acbefed8b3d11f6b325d08c0cb",
      "2952e33728c2fccbef6b717034e7184fdee1c2210b594b80da5f185d",
      "e59210e73658506638e642a83f4e0671e73b9bcfdda25123c333d5c8",
      "7872b5748f6a476235c2cb7e635daf869fa65d690943d02a225f932b",
      "34e63645b8ccb7ebcdc4855a0bbcc7acbefed8b3d11f6b325d08c0cb",
      "2952e33728c2fccbef6b717034e7184fdee1c2210b594b80da5f185d",
    ];
    const res = await fetch(
      "/api/getStakes?usedAddresses=" + arrayOfAddresses.join(",")
    );
    const data = await res.json();
    setStakes(data);
    console.log("Stakes", data);
  };

  return <button onClick={handleOnClick}>Get Stakes Backend</button>;
};

export default GetStakesBackendButton;
