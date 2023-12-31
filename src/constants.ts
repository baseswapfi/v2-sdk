import { ChainId } from '@baseswapfi/sdk-core';
import JSBI from 'jsbi';

export const V2_FACTORY_ADDRESS = '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB';

export const V2_FACTORY_ADDRESSES: { [chainId: number]: string } = {
  [ChainId.BASE]: V2_FACTORY_ADDRESS,
  [ChainId.BASE_GOERLI]: '0x14db9CFcaE4E7F6971034F0E8e4D9Fc3e54CDafE',
  [ChainId.SCROLL]: '0x74a52eb08d699CD8BE1d42dA4B241d526B8a8285',
};

// export const INIT_CODE_HASH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f';
// PCS version
export const INIT_CODE_HASH = '0xb618a2730fae167f5f8ac7bd659dd8436d571872655bcb6fd11f2158c8a64a3b';

// These may never change but mapping from the start in case
export const INIT_CODE_HASHES: { [chainId in ChainId]?: string } = {
  [ChainId.BASE]: INIT_CODE_HASH,
  [ChainId.BASE_GOERLI]: INIT_CODE_HASH,
  [ChainId.SCROLL]: INIT_CODE_HASH,
};

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000);

// exports for internal consumption
export const ZERO = JSBI.BigInt(0);
export const ONE = JSBI.BigInt(1);
export const FIVE = JSBI.BigInt(5);
export const _997 = JSBI.BigInt(997);
export const _1000 = JSBI.BigInt(1000);
