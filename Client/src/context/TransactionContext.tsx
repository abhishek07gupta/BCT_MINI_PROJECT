import { ethers } from "ethers";
import React, { useEffect } from "react";
import { contractABI, contractAddress } from "../utils/constants";
declare global {
  interface Window {
    ethereum: any;
  }
}

export const TransactionContext = React.createContext({});

const { ethereum } = window;

const getEthereumContract = async () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  console.log(transactionContract);
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = React.useState("");
  const [transactionCount, setTransactionCount] = React.useState(14);
  const [loading, setLoading] = React.useState(false);
  const [transactions, setTransactions] = React.useState([]);

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return false;
    } else {
      try {
        const accounts = await ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } catch (error) {
        console.log("No authorized account found");
      }
    }
  };
  const getTransactionCount = async () => {
    const trasactionContract = await getEthereumContract();
    const transactionCount = await trasactionContract.getTransactionCount();
    setTransactionCount(transactionCount.toNumber());
  };

  const getAllTransactions = async () => {
    const trasactionContract = await getEthereumContract();
    const allTransactions = await trasactionContract.getAllTransactions();
    setTransactions(allTransactions);
    console.log(allTransactions);
  }

  useEffect(() => {
    checkIfWalletIsConnected();
    // getTransactionCount();
    getAllTransactions();
  }, []);





  const connectWallet = async () => {
    try {
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      alert("Error connecting to MetaMask");
    }
  };

  const sendTransaction = async (
    to: string,
    amount: number,
    keyword: string,
    message: string
  ) => {
    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }
    try {
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const trasactionContract = await getEthereumContract();

      const parsedAmount = ethers.utils.parseEther(amount.toString());

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            to: to,
            from: currentAccount,
            gas: "0x76c0", // 30400 GWEI
            value: parsedAmount._hex,
            // data: trasactionContract.interface.encodeFunctionData("transfer", [
            //   keyword,
            //   message,
            // ]),
          },
        ],
      });

      const trasactionHash = await trasactionContract.addToBlockChain(
        to,
        parsedAmount.toNumber(),
        keyword,
        message
      );
      setLoading(true);
      console.log("loading:",trasactionHash.hash);
      await trasactionHash.wait();


      const transactionCount = await trasactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
    } catch (error) {
      console.log(error);
      // alert("Error connecting to MetaMask");                                                                                                                                         
    }
    getTransactionCount();
  };
  console.log(transactionCount);

  return (                                                                                                    
    <TransactionContext.Provider
      value={{ connectWallet, currentAccount, sendTransaction, transactionCount, transactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
