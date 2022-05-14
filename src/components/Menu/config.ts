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
     label: 'HyperWallet',
     icon: 'HomeIcon',
     href: 'https://play.google.com/store/apps/details?id=io.hyperchain.wallet',
    },
    {
    label: 'HYPER',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy HYPER',
        href: 'https://apeswap.finance/swap?outputCurrency=0xd19A6Fe48395a7BE37dDC16508dD180D59867012',
      },
      {
        label: 'Liquidity HYPER',
        href: 'https://apeswap.finance/add/ETH/0xd19A6Fe48395a7BE37dDC16508dD180D59867012',
       },
    ],
  },
    {
    label: 'HowtoBuy Hyper',
    icon: 'TradeIcon',
    href: 'https://hyperswapp.gitbook.io/hyperswapp/how-to-buy-usdhyper',
  },
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
        href: 'https://dappradar.com/polygon/defi/hyperswapp',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://hyperswapp.gitbook.io/hyperswapp/',
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
