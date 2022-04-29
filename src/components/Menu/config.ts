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
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Hyper Price',
        href: 'https://nomics.com/assets/hyper7-hyper-finance',
      },
      {
        label: 'HSW Price',
        href: 'https://info.quickswap.exchange/#/token/0xc82dc76966d59d112ba56cb81799151cefa0edb2',
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
