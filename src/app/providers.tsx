"use client";

import { PassProvider, connectorsForWallets, createClient } from "0xpass";
import {coinbaseWallet, metaMaskWallet, emailMagicWallet } from "0xpass/wallets";
import { useEffect, useState } from "react";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import {
  arbitrum,
  mainnet,
  optimism,
  polygon,
  polygonMumbai,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "xxxxxx";
const apiKey = process.env.NEXT_PUBLIC_API_KEY || "xxxxxx";
const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID ?? "xxxxxx";

const { chains, publicClient } = configureChains(
  [polygonMumbai, mainnet, polygon, optimism, arbitrum],
  [alchemyProvider({ apiKey: alchemyId }), publicProvider()]
);

const magicApiKey = "xxxxxx";
const passClient = createClient({ apiKey, chains });
const connectors = connectorsForWallets([
  {
    groupName: "Email",
    wallets: [
      // emailMagicWallet({ apiKey: magicApiKey, chains, shimDisconnect: true }),
    ],
  },
  {
    groupName: "Wallets",
    wallets: [
      metaMaskWallet({ projectId, chains }),
      coinbaseWallet({ appName: "0xPass", chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: connectors,
  publicClient,
});

export function Providers({ children }: { children: JSX.Element }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <WagmiConfig config={wagmiConfig}>
      <PassProvider client={passClient}>{children}</PassProvider>
    </WagmiConfig>
  );
}
