import React, { Fragment, useEffect, useState } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { formatEther } from '@ethersproject/units'
import { handleChainChange } from '../functions'
import settings from '../settings'
import { useInactiveListener } from './hooks'

import {
  injected,
  walletconnect,
  walletlink,
  ledger,
  // trezor
} from './connectors'
import { useModal } from 'react-context-modals'
import detectEthereumProvider from '@metamask/detect-provider'
// import { Spinner } from '../components/Spinner'

const ConnectorNames = {
  Injected: 'MetaMask',
  Network: 'Network',
  WalletConnect: 'WalletConnect',
  WalletLink: 'WalletLink',
  Ledger: 'Ledger',
  Trezor: 'Trezor'
}

const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.WalletLink]: walletlink,
  [ConnectorNames.Ledger]: ledger,
  // [ConnectorNames.Trezor]: trezor
}

function getErrorMessage (error) {
  if (error instanceof NoEthereumProviderError) {
    return <>No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile. <br/> Or use other options.</>
  } else if (error instanceof UnsupportedChainIdError) {
    return 'You\'re connected to an unsupported network.'
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    console.error(error)
    return 'An unknown error occurred. Please try again after a while or contact with us.'
  }
}

// function ChainId () {
//   const { chainId } = useWeb3React()

//   return (
//     <>
//       <span>Chain Id</span>
//       <span role="img" aria-label="chain">
//         ⛓
//       </span>
//       <span>{chainId ?? ''}</span>
//     </>
//   )
// }

// function Account () {
//   const { account } = useWeb3React()

//   return (
//     <>
//       <span>Account</span>
//       <span role="img" aria-label="robot">
//         🤖
//       </span>
//       <span>
//         {account === null
//           ? '-'
//           : account
//             ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
//             : ''}
//       </span>
//     </>
//   )
// }

export function Balance () {
  const { account, library, chainId } = useWeb3React()

  const [balance, setBalance] = React.useState()
  React.useEffect(() => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance) => {
          if (!stale) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => {
        stale = true
        setBalance(undefined)
      }
    }
  }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  const balanceArray = balance === null ? '' : balance ? `${formatEther(balance)}`.split('.') : ''

  return balanceArray.length > 0 ? `${balanceArray[0]}.${balanceArray[1].substring(0, 3)} ETH` : ''
}

function Header () {
  // const { active, error } = useWeb3React()

  return (
    <>
      <div className="flex flex-col justify-center text-center pt-5">
        <h2 className={'text-4xl font-kang color-primary'}>Connect Wallet</h2>
      </div>
      {/*<h1 style={{ margin: '1rem', textAlign: 'right' }}>{active ? '🟢' : error ? '🔴' : '🟠'}</h1>*/}
      {/*<h3*/}
      {/*  style={{*/}
      {/*    display: 'grid',*/}
      {/*    gridGap: '1rem',*/}
      {/*    gridTemplateColumns: '1fr min-content 1fr',*/}
      {/*    maxWidth: '20rem',*/}
      {/*    lineHeight: '2rem',*/}
      {/*    margin: 'auto'*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <ChainId/>*/}
      {/*  <BlockNumber/>*/}
      {/*  <Account/>*/}
      {/*  <Balance/>*/}
      {/*</h3>*/}
    </>
  )
}

export function ConnectWalletModal (props) {
  const context = useWeb3React()
  const { connector, chainId, activate, error } = context
  const { showModal, hideModal } = useModal()

  const [isMetamaskAvailable, setIsMetamaskAvailable] = useState(false)

  const [, setMetamaskMessage] = useState('')

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState()

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  // const triedEager = useEagerConnect()

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)

      if (props.openModal) {
        showModal(props.openModal)
      } else {
        hideModal(ConnectWalletModal)
      }
    }
  }, [activatingConnector, connector, props.openModal, showModal, hideModal])

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  // useInactiveListener(!triedEager || !!activatingConnector)
  useInactiveListener(!!activatingConnector)

  useEffect(() => {
    if (settings.enableSwitchingNetwork && chainId && chainId !== 1) {
      handleChainChange()
    }
  }, [chainId])

  useEffect(() => {
    (async () => {
      const provider = await detectEthereumProvider()

      if (provider) {
        setIsMetamaskAvailable(true)
      } else {
        setIsMetamaskAvailable(false)
      }
    })()

  }, [])


  return (
    <>
      <Header/>
      {/*<hr style={{ margin: '2rem' }}/>*/}
      <div className={'flex flex-col justify-center text-center mt-12'}>
        {Object.keys(connectorsByName).map(name => {
          const currentConnector = connectorsByName[name]
          // const activating = currentConnector === activatingConnector
          // const connected = currentConnector === connector

          if (name === 'MetaMask' && isMetamaskAvailable === false) {
            return (
              <Fragment key={name}>
                <button
                  className={'btn-ninja mb-4'}
                  key={name}
                  // disabled={true}
                  onClick={() => {
                    setMetamaskMessage(true)
                    setActivatingConnector(currentConnector)
                    activate(connectorsByName[name])
                  }}>
                  <div>MetaMask Not Found</div>
                </button>
                <div className={'pb-4'}>
                  No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile. <br/> <br/>Our use the following options:
                </div>
              </Fragment>
            )
          } else {
            return (
              <button
                key={name}
                className={'btn-ninja mb-4'}
                onClick={() => {
                  setActivatingConnector(currentConnector)
                  activate(connectorsByName[name])
                }}
              >
                <div>{name}</div>
              </button>
            )
          }
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className={'text-center'}>
        {/*{(active || error) && (*/}
        {/*  <button*/}
        {/*    style={{*/}
        {/*      height: '3rem',*/}
        {/*      marginTop: '2rem',*/}
        {/*      borderRadius: '1rem',*/}
        {/*      borderColor: 'red',*/}
        {/*      cursor: 'pointer'*/}
        {/*    }}*/}
        {/*    onClick={() => {*/}
        {/*      deactivate()*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    Deactivate*/}
        {/*  </button>*/}
        {/*)}*/}

        {!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>{
          getErrorMessage(error)
        }</h4>}
      </div>

      <div className={'flex flex-col justify-center text-center mt-8 font-kang text-lg'}>
        New to Ethereum? <br/>
        <a
          href="https://help.foundation.app/en/articles/4731452-a-complete-guide-to-getting-eth-and-a-wallet-with-metamask"
          target={'_blank'} rel="noopener noreferrer nofollow">Learn more about wallets</a>

        <>
          {/*{!!(library && account) && (*/}
          {/*  <button*/}
          {/*    style={{*/}
          {/*      height: '3rem',*/}
          {/*      borderRadius: '1rem',*/}
          {/*      cursor: 'pointer'*/}
          {/*    }}*/}
          {/*    onClick={() => {*/}
          {/*      library*/}
          {/*        .getSigner(account)*/}
          {/*        .signMessage('👋')*/}
          {/*        .then((signature) => {*/}
          {/*          window.alert(`Success!\n\n${signature}`)*/}
          {/*        })*/}
          {/*        .catch((error) => {*/}
          {/*          window.alert('Failure!' + (error && error.message ? `\n\n${error.message}` : ''))*/}
          {/*        })*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Sign Message*/}
          {/*  </button>*/}
          {/*)}*/}
          {/*{connector === connectorsByName[ConnectorNames.WalletConnect] && (*/}
          {/*  <button*/}
          {/*    style={{*/}
          {/*      height: '3rem',*/}
          {/*      borderRadius: '1rem',*/}
          {/*      cursor: 'pointer'*/}
          {/*    }}*/}
          {/*    onClick={() => {*/}
          {/*      connector.close()*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Kill WalletConnect Session*/}
          {/*  </button>*/}
          {/*)}*/}
          {/*{connector === connectorsByName[ConnectorNames.WalletLink] && (*/}
          {/*  <button*/}
          {/*    style={{*/}
          {/*      height: '3rem',*/}
          {/*      borderRadius: '1rem',*/}
          {/*      cursor: 'pointer'*/}
          {/*    }}*/}
          {/*    onClick={() => {*/}
          {/*      connector.close()*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Kill WalletLink Session*/}
          {/*  </button>*/}
          {/*)}*/}
        </>
      </div>
    </>
  )
}
