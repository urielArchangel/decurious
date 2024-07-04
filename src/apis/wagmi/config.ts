import { getDefaultConfig } from "connectkit";
import { base } from "viem/chains";
import { createConfig, http } from "wagmi";
import { coinbaseWallet, injected, metaMask, safe } from "wagmi/connectors";



const projectID = "526dc409e476e8eea852880cb61873ae"
export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [base],
    connectors:[
      injected(),
      coinbaseWallet(),
      metaMask()
    ],
    transports: {
      // RPC URL for each chain
      [base.id]: http(),
    },

    // Required API Keys
    walletConnectProjectId: projectID!,

    // Required App Info
    appName: "Decurious",

    // Optional App Info
    appDescription: "useless",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);
