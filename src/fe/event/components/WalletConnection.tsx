"use client";
import { ModelType } from "@/decarations";
import { useEffect, useRef, useState } from "react";
import Web3 from "web3";
import { inputBoxStyle } from "../../utils/styling/TailwindTemplate";
import {isAddress} from 'web3-validator'

const WalletConnect = ({
  onConnect,
  data,
}: {
  onConnect: any;
  data: ModelType;
}) => {
  const walletRef = useRef<HTMLInputElement>(null)
  const [noWallet,setNoWallet]=useState(false)
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  useEffect(() => {
    // ensure that there is an injected the Ethereum provider
    if (window.ethereum) {
      // use the injected Ethereum provider to initialize Web3.js
      setWeb3(new Web3(window.ethereum));
    }
  }, []);
  const change=()=>{
    setNoWallet(!noWallet)
  }

  async function connectWallet() {
    if (web3 === null) {
      return;
    }

    // request accounts from MetaMask
    await window.ethereum.request({ method: "eth_requestAccounts" });
    document.getElementById("requestAccounts")?.remove();

    // get list of accounts
    const allAccounts = await web3.eth.getAccounts();

    // get the first account and populate placeholder
    setAccount(allAccounts[0]);

    await onConnect(account)
  }

  const submitWallet =async ()=>{
    if(!walletRef||!walletRef.current)return
    if(!isAddress(walletRef.current.value)) {alert("invald wallet address");return}
    setAccount(walletRef.current.value)
   await  onConnect(walletRef.current.value)

  }

  if(noWallet){
    return(
      <section className="w-full max-w-[550px] mx-auto text-center">
      <h1 className="text-5xl font-bold my-4">{data.name}</h1>
      <p>{data.welcome_message}</p>
      <section className="bg-black w-full rounded-xl shadow-hd py-6 mt-20 sm:mt-40">
      <input type="text" placeholder="enter your base wallet address" ref={walletRef} className={inputBoxStyle+' border-[var(--de-color)] bg-transparent max-w-[300px] mx-auto block text-white'}  />
      <button className="bg-[var(--wallet-blue)] h-10 px-6 rounded-lg text-white" onClick={submitWallet}>submit</button>
        <p className="underline text-center text-grad py-4 cursor-pointer" onClick={change}>
          connect your wallet?
        </p>
      </section>
      </section>    
      )

  }

  return (
    <div>
      {account ? (
        <p>Connected as {account}</p>
      ) : (
        <section className="w-full max-w-[550px] mx-auto text-center">
          <h1 className="text-5xl font-bold my-4">{data.name}</h1>
          <p>{data.welcome_message}</p>
          <section className="bg-black w-full rounded-xl shadow-hd py-6 mt-20 sm:mt-40">
            <button
              onClick={connectWallet}
              className="block bg-[var(--wallet-blue)] text-white my-4 max-w-[250px] mx-auto py-2 rounded-lg w-full"
            >
              Connect wallet
            </button>
            <p className="underline text-center text-grad py-4 cursor-pointer" onClick={change}>
              Can&apos;t connect wallet?
            </p>
          </section>
        </section>
      )}
    </div>
  );
};

export default WalletConnect;
