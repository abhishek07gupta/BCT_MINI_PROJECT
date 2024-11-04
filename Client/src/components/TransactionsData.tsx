import { Typography } from "@material-tailwind/react";
import { TransactionContext } from "../context/TransactionContext.tsx";
import { useContext } from "react";

export const TransactionsData = () => {
  const { transactionCount, transactions } = useContext(TransactionContext);

  console.log(transactions);

  return (
    <>
      <div className="md:flex flex-col p-5 text-center justify-center items-center h-screen bg-gradient-to-b from-[#b44948]">
        <div className="flex flex-col md:justify-center md:items-center ">
          <Typography className="text-white text-5xl">
            Total Transactions through the contract: {transactionCount}
          </Typography>
        </div>
        {/* <div className="flex flex-col md:justify-center md:items-center p-10">
          {transactions.map((transaction) => {
            return (
              <div className="flex flex-row md:justify-center md:items-center ">
                <Typography className="text-white text-5xl">
                  {transaction.keyword}
                </Typography>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
};
