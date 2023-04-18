# Hardhat Simple Storage

## Setup

```Bash
yarn add --dev hardhat
yarn hardhat
```

```Bash
Welcome to Hardhat v2.14.0

✔ What do you want to do? · Create a TypeScript project
✔ Hardhat project root: · /home/gnogueira/blockchain/hardhat-simple-storage-fcc
✔ Do you want to add a .gitignore? (Y/n) · y
✔ Do you want to install this sample project's dependencies with yarn? (Y/n) · y
```

- Change `hardhat.config.ts` solidity compiler version

```bash
yarn add --dev prettier prettier-plugin-solidity
```

```bash
yarn add --dev dotenv
```

```bash
yarn add --dev @nomiclabs/hardhat-etherscan
```

## Para verificar o preço em Gas de cada função do teste

```bash
  yarn add --dev hardhat-gas-reporter
  yarn hardhat test
```

## Para verificar a Cobertura de Testes

```bash
  yarn add --dev solidity-coverage
  yarn hardhat coverage
```