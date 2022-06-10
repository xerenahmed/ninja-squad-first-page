import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { LedgerConnector } from '@web3-react/ledger-connector'
// import { TrezorConnector } from '@web3-react/trezor-connector'
import settings from '../settings'

const POLLING_INTERVAL = 12000

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] })

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: settings.contractGateway },
  qrcode: true
})

export const walletlink = new WalletLinkConnector({
  url: settings.contractGateway,
  appName: 'Ninja Squad NFT',
  supportedChainIds: [1, 3, 4, 5, 42, 10, 137, 69, 420, 80001]
})

export const ledger = new LedgerConnector({ chainId: 1, url: settings.contractGateway, pollingInterval: POLLING_INTERVAL })

// export const trezor = new TrezorConnector({
//   chainId: 1,
//   url: settings.contractGateway,
//   pollingInterval: POLLING_INTERVAL,
//   manifestEmail: 'dummy@abc.xyz',
//   manifestAppUrl: 'http://localhost:1234'
// })
