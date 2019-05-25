export enum SearchType {
  Ether,
  Address
}

export interface Network {
  name: string;
  color: string;
}

export const NETWORK_MAINNET: Network = {
  name: 'Mainnet',
  color: '#007896'
};

export const NETWORK_TESTNET: Network = {
  name: 'Testnet',
  color: '#adc101'
};

export const NETWORK_UNKNOWN: Network = {
  name: 'Unknown',
  color: '#b37aff'
};

export const SMALL_DISPLAYS = 'screen and (max-width: 550px)';
export const EXTRA_SMALL_DISPLAYS = 'screen and (max-width: 275px)';