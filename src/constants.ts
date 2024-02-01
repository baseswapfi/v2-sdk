import { ChainId } from '@baseswapfi/sdk-core';
import JSBI from 'jsbi';

export const V2_FACTORY_ADDRESS = '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB';

export const V2_FACTORY_ADDRESSES: { [chainId: number]: string } = {
  [ChainId.BASE]: V2_FACTORY_ADDRESS,
  [ChainId.BASE_GOERLI]: '0x14db9CFcaE4E7F6971034F0E8e4D9Fc3e54CDafE',
  [ChainId.SCROLL]: '0x74a52eb08d699CD8BE1d42dA4B241d526B8a8285',
  [ChainId.MODE]: '0xfb926356baf861c93c3557d7327dbe8734a71891',
  [ChainId.MODE_TESTNET]: '0xa26655bab784c9bd9daadaaff2a05a93484bf9c7',
};

// PCS version
export const INIT_CODE_HASH = '0xb618a2730fae167f5f8ac7bd659dd8436d571872655bcb6fd11f2158c8a64a3b';
export const INIT_CODE_HASH_MODE = '0x337ec3ca78ed47c450332dd308033d9900832b31b7539f3befcbc556bff3a4a8';

export const INIT_CODE_HASHES: { [chainId: number]: string } = {
  [ChainId.BASE]: INIT_CODE_HASH,
  [ChainId.BASE_GOERLI]: INIT_CODE_HASH,
  [ChainId.SCROLL]: INIT_CODE_HASH,
  [ChainId.MODE]: INIT_CODE_HASH_MODE,
  [ChainId.MODE_TESTNET]: INIT_CODE_HASH_MODE,
};

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000);

// exports for internal consumption
export const ZERO = JSBI.BigInt(0);
export const ONE = JSBI.BigInt(1);
export const FIVE = JSBI.BigInt(5);
export const _997 = JSBI.BigInt(997);
export const _1000 = JSBI.BigInt(1000);

export const CHAIN_LP_TOKEN_INFO: {
  [chainId: number]: { name: string; symbol: string };
} = {
  [ChainId.BASE]: {
    name: `Baseswap LP's`,
    symbol: 'BSWAP-LP',
  },
  [ChainId.MODE]: {
    name: `SwapMode LPs`,
    symbol: 'SMD-LP',
  },
  [ChainId.MODE_TESTNET]: {
    name: `SwapMode LPs`,
    symbol: 'SMD-LP',
  },
};
