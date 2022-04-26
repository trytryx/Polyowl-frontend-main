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
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0xc7553307eD737dcE132aE7915E6496864617B261',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/pool',
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
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap',
        href: 'https://info.quickswap.exchange/token/0xc7553307eD737dcE132aE7915E6496864617B261',
      },
      {
        label: 'Vfat Tools',
        href: 'https://vfat.tools/polygon/polyowl/',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/polygon/defi/polyowl-finance',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/PolyOwlFinance',
      },
      {
        label: 'Docs',
        href: 'https://polyowlfinance.gitbook.io/polyowl/',
      },
    ],
  },
{
    label: 'Hyper Apps',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Hyper Network',
        href: 'https://play.google.com/store/apps/details?id=com.cryptoinc.hypertoken',
      },
      {
        label: 'Hyper Faucet LTC',
        href: 'https://play.google.com/store/apps/details?id=com.cryptoinc.hyperfaucetltc',
      },
    ],
  },
]

export default config
