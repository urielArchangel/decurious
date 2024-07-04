'use client'
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/src/apis/wagmi/config";
import { ConnectKitProvider } from "connectkit";
import React from "react";

const queryConfig = new QueryClient();

function Web3ProviderContext({children}:{children:React.ReactNode}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryConfig}>
        <ConnectKitProvider>
            {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default Web3ProviderContext;
