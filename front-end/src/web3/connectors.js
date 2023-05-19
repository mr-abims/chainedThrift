import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import {
    MathWallet,
    Metamask,
    SafePal,
    TrustWallet,
    WalletConnect,
} from "../common/svgIcons";
import { RPC_URL } from "./rpc_urls";

export const pollingInterval = 12000;
// export const supportedChains = [80001];
export const supportedChains = [11155111];

export const injected = new InjectedConnector({
    supportedChainIds: [11155111],
});

const walletConnect = new WalletConnectConnector({
    rpc: {
        // 137: RPC_URL[137],
        11155111: RPC_URL[11155111],
        // 1337: RPC_URL[1337],
    },
    qrcode: true,
    pollingInterval: pollingInterval,
});

export const connectorsData = [
    {
        name: "Metamask",
        connector: injected,
        icon: Metamask,
    },
    {
        name: "Trust Wallet",
        connector: injected,
        icon: TrustWallet,
    },
    {
        name: "Wallet Connect",
        connector: walletConnect,
        icon: WalletConnect,
    },
    {
        name: "SafePal",
        connector: injected,
        icon: SafePal,
    },
    {
        name: "MathWallet",
        connector: injected,
        icon: MathWallet,
    },
];
