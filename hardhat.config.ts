import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "@nomiclabs/hardhat-etherscan"
import * as dotenv from "dotenv"

import "./tasks/block-number"

dotenv.config()

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL!
const PRIVATE_KEY = process.env.PRIVATE_KEY!
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY!

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
        },
        localhost: {
          url: "http://127.0.0.1:8545/",
          //accounts: Thanks hardhat!
          chainId: 31337,
        }
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    solidity: "0.8.8",
}

export default config
