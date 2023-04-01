import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.hyperswapp.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.hyperswapp.com/#/pools',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
     {
     label: 'PhnxNetwork',
     icon: 'HomeIcon',
     href: 'https://play.google.com/store/apps/details?id=io.hyperchain.wallet',
    },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PHS Price',
        href: 'https://nomics.com/assets/hyper7-hyper-finance',
      },
      {
        label: 'PHNX Price',
        href: 'https://info.quickswap.exchange/#/token/0xa216bb4d1dD10737e71357587A47Fc5691E39E26',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/polygon/defi/hyperswapp',
      },
    ],
  },
]

export default config
