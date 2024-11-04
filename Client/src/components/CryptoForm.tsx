import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Input,
  Spinner,
} from "@material-tailwind/react";
import { TransactionContext } from "../context/TransactionContext.tsx";
import { useContext } from "react";

export const CryptoForm = () => {
  const [address, setAddress] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [keyword, setKeyword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { currentAccount, sendTransaction } =
    useContext(TransactionContext);

  const checkWallet = async () => {
    console.log(currentAccount);
    if (!currentAccount) {
      setLoading(true);
    } else if (currentAccount !== "") {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkWallet();
  }, [currentAccount]);

  const handleTransfer = () => {
    sendTransaction(address, amount, keyword, message);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <Card className="w-96 h-96 bg-gradient-to-b from-[#b44948] to-gray-900 md:m-0 m-3 mt-10">
        <CardHeader className="bg-[#b44948] flex items-center justify-center h-20">
          <Typography color="white" variant="h4">
            Crypto Transfer
          </Typography>
        </CardHeader>
        <CardBody>
          <div className="flex justify-center items-center w-full">
            <form className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-2">
                <Input
                  color="white"
                  className="p-2"
                  type="text"
                  label="Receiver Address"
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  color="white"
                  className="p-2"
                  type="number"
                  label="Amount"
                  value={amount}
                  onChange={handleAmountChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  color="white"
                  className="p-2"
                  type="text"
                  label="KeyWord GIF"
                  value={keyword}
                  onChange={handleKeywordChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                {/* <label className="text-white">Sender Address</label> */}
                <Input
                  color="white"
                  className="p-2"
                  type="text"
                  label="Message"
                  value={message}
                  onChange={handleMessageChange}
                />
              </div>
              <hr className="border-white" />
              <div className="flex justify-center items-center">
                {loading ? (
                  <>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <Spinner />
                      <Typography
                        color="white"
                        className="flex justify-center text-xs font-bold"
                      >
                        Waiting For the Wallet to Connect
                      </Typography>
                    </div>
                  </>
                ) : (
                  <Button
                    fullWidth
                    size="sm"
                    className=" bg-transparent text-white border"
                    onClick={handleTransfer}
                  >
                    Transfer
                  </Button>
                )}
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
