import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'HSW-MATIC LP',
    decimal: 18,
    lpAddresses: {
      137: '0x4effe54512b301ca04b47f2606a614e1f1fb395f',
    },
    tokenSymbol: 'OWL',
    tokenAddresses: {
      137: '0xa216bb4d1dD10737e71357587A47Fc5691E39E26',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.wmatic,
  },
    {
    pid: 4,
    risk: 5,
    lpSymbol: 'HYPER-MATIC APELP',
    decimal: 18,
    lpAddresses: {
      137: '0x02AD839C047ece75C341D84455678388e501d080',
    },
    tokenSymbol: 'HYPER',
    tokenAddresses: {
      137: '0xd19A6Fe48395a7BE37dDC16508dD180D59867012',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.wmatic,
  },

  // {
  //   pid: 1,
  //   risk: 5,
  //   lpSymbol: 'EGG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
  //   },
  //   tokenSymbol: 'EGG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 2,
  //   risk: 3,
  //   lpSymbol: 'USDC-USDT LP',
  //   lpAddresses: {
  //     137: '0x2cF7252e74036d1Da831d11089D326296e64a728'
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 12,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'EGG',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
  //   },
  //   tokenSymbol: 'EGG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 1,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'HSW',
    decimal: 18,
    lpAddresses: {
      137: '0x4effe54512b301ca04b47f2606a614e1f1fb395f'
    },
    tokenSymbol: 'OWL',
    tokenAddresses: {
      137: '0xa216bb4d1dD10737e71357587A47Fc5691E39E26'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.wmatic,
  },

  {
    pid: 2,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WMATIC',
    decimal: 18,
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  
    {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'HYPER',
    decimal: 9,
    lpAddresses: {
      137: '0x02AD839C047ece75C341D84455678388e501d080'
    },
    tokenSymbol: 'HYPER',
    tokenAddresses: {
      137: '0xd19A6Fe48395a7BE37dDC16508dD180D59867012'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.wmatic,
  },
{
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    decimal: 6,
    lpAddresses: {
      137: '0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d'
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.wmatic,
  },
]

export default farms
