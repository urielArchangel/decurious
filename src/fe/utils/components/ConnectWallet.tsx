'use client'
import { ConnectKitButton } from "connectkit";

export const ConnectWalletButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
        return (
<button  className='bg-[var(--wallet-blue)] text-white rounded-lg h-14 w-full cursor-pointer text-xl max-w-[250px] mx-auto block ' onClick={show}> 
            {isConnected ? address : " Sign in with wallet"}
           </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};