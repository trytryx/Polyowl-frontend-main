import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'OWL-MATIC LP',
    decimal: 18,
    lpAddresses: {
      137: '0xb8f9c8135710571868f3c182ba90c1cda1fe6bab',
    },
    tokenSymbol: 'HSW',
    tokenAddresses: {
      137: '0x3105A8707c8E81BfA3eacB788373e58C227b5929',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
]

export default farms
