import { Card, Typography } from "@material-tailwind/react";
import { CryptoForm } from "./CryptoForm";

export const StyleMatrix = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Card className="w-24 h-10 flex items-center justify-center bg-transparent shadow-none border-solid border rounded-none rounded-tl-md">
          <Typography color="white" className=" flex justify-center items-center text-sm font-bold">
            Reliable
          </Typography>
        </Card>
        <Card className="w-24 h-10 flex items-center justify-center bg-transparent shadow-none border-solid border rounded-none">
          <Typography color="white" className="flex justify-center text-sm font-bold">
            Secure
          </Typography>
        </Card>
        <Card className="w-24 h-10 flex items-center justify-center bg-transparent shadow-none border-solid border rounded-none rounded-tr-md">
          <Typography color="white" className="flex justify-center text-sm font-bold">
            Etherium
          </Typography>
        </Card>
      </div>
      <div className="flex justify-center items-center">
        <Card className="w-24 h-10 flex items-center justify-center bg-transparent shadow-none border-solid border rounded-none rounded-bl-md">
          <Typography color="white" className="flex justify-center text-sm font-bold">
            Web 3.0
          </Typography>
        </Card>
        <Card className="w-24 h-10 flex items-center justify-center bg-transparent shadow-none border-solid border rounded-none ">
          <Typography color="white" className="flex justify-center text-sm font-bold">
            Low Fees
          </Typography>
        </Card>
        <Card className="w-24 h-10 flex items-center justify-center bg-transparent shadow-none border-solid border rounded-none rounded-br-md">
          <Typography color="white" className="flex justify-center text-sm font-bold">
            BlockChain
          </Typography>
        </Card>
      </div>
    </>
  );
};

export const Landing = () => {
  return (
    <>
      <div className="md:flex bg-gradient-to-t from-[#b44948]">
        <div className="w-full md:justify-center md:items-center md:h-[90vh] text-center justify-center items-center flex flex-col h-96 ">
          <Typography className=" text-white text-7xl ">
            Welcome to my Web<a className="text-white">3</a>{" "}
            <p className=" text-white">Application</p>
          </Typography>
           <Typography className=" text-white text-xl p-5">
            Using this application you can transfer cryptocurrency between
            accounts
          </Typography>
          <StyleMatrix />
        </div>
        <div className="md:flex-col flex md:col-1 w-full justify-center items-center md:h-[90vh]">
          <CryptoForm />
        </div>
      </div>
    </>
  );
};
