import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useModal } from 'react-context-modals'

import { Balance, ConnectWalletModal } from './connect-wallet-modal'

export const ConnectWalletButton = ({ handleMouseEnter, handleMouseLeave, mobile }) => {
  const { account, library, deactivate, connector } = useWeb3React()
  const { showModal } = useModal()
  const [ens, setENS] = useState()

  const handleWalletConnect = () => {
    showModal(ConnectWalletModal)
  }

  useEffect(() => {
    (async () => {
      if (account) {
        const name = await library.lookupAddress(account)
        setENS(name)
      }
    })()
  }, [account, library])

  const accountString = ens ? ens : (account ? account.substring(0, 6) + '...' + account.substring(38) : '')
  const balance = Balance()

  const Desktop = () => (<>
    {
      account ?
        <>
          <a href="#disconnect" className={'shuriken'} rel="noreferrer"
             onClick={(e) => {
               e.preventDefault()

               deactivate()
               try {
                 connector.close()
               } catch (e) {
                 console.error(e)
               }
             }}
          >
            <text className="cls-3 address-text" x="1800" y="20" strokeWidth={'8px'}>{accountString}</text>
            <text className="cls-2 address-text" x="1800" y="20" strokeLinejoin={'round'} strokeWidth={'0px'}
                  stroke={'#1c1c1c'}>{accountString}</text>
            <text className="cls-2 address-text" x="1800" y="74" strokeLinejoin={'round'} strokeWidth={'0px'}
                  style={{ fontSize: '28px' }}
                  stroke={'#1c1c1c'}>{balance}</text>
          </a>
        </>
        :
        <>
          <a href="#connect" className={'shuriken'} rel="noreferrer"
             onMouseEnter={() => {handleMouseEnter('wallet')}}
             onMouseLeave={() => {handleMouseLeave('wallet')}}
             onClick={(e) => {
               e.preventDefault()

               handleWalletConnect()
               handleMouseLeave('wallet')
             }}
          >
            <image x={1578} y={12} width={241} height={158} href={'/img/connect-wallet.png'}/>
            <rect x={1580} y={11} fill="#fff" opacity={0} width={241} height={160}/>
          </a>
        </>
    }
  </>)

  const Mobile = () => (<>
    {
      account ?
        <>
          <style
            dangerouslySetInnerHTML={{ __html: '\n            .cls-1, .cls-2, .cls-3 {\n            font-size: 76px;\n            fill: #1c1c1c;\n            text-anchor: middle;\n            font-family: kang;\n          }\n\n            .cls-1 {\n            filter: url(#filter);\n          }\n\n            .cls-3 {\n            stroke: #dbba41;\n            stroke-linejoin: round;\n            stroke-width: 14px;\n          }\n .cls-3 {transition: .3s all;}    a:hover > .cls-3 { stroke-width: 20px; }   ' }}/>
          <a href="#disconnect" className={'shuriken'} rel="noreferrer"
             onClick={(e) => {
               e.preventDefault()

               deactivate()
               try {
                 connector.close()
               } catch (e) {
                 console.error(e)
               }
             }}
          >
            <text className="cls-3 address-text" x="1060" y="73" strokeWidth={'8px'}>{accountString}</text>
            <text className="cls-2 address-text" x="1060" y="73" strokeLinejoin={'round'} strokeWidth={'0px'}
                  stroke={'#1c1c1c'}>{accountString}</text>
            <text className="cls-2 address-text" x="1060" y="153" strokeLinejoin={'round'} strokeWidth={'0px'}
                  style={{ fontSize: '48px' }}
                  stroke={'#1c1c1c'}>{balance}</text>
          </a>
        </>
        :
        <>
          <a href="#connect" className={'shuriken'} rel="noreferrer"
            onMouseEnter={() => {handleMouseEnter('wallet')}}
            onMouseLeave={() => {handleMouseLeave('wallet')}}
            onClick={(e) => {
              e.preventDefault()

              showModal(ConnectWalletModal)
              handleMouseLeave('wallet')
            }}
          >
            <image x={776} y={73} width={241} height={158} href={'/img/connect-wallet.png'} onClick={() => {
              showModal(ConnectWalletModal)
            }
            }/>
          </a>
          <a href="#connect" className={'shuriken'} rel="noreferrer"
            onMouseEnter={() => {handleMouseEnter('wallet')}}
            onMouseLeave={() => {handleMouseLeave('wallet')}}
            onClick={(e) => {
              e.preventDefault()

              showModal(ConnectWalletModal)
              handleMouseLeave('wallet')
            }}
          >
            <rect x={600} y={0} width={500} height={400} fill={'transparent'}/>
          </a>
        </>
    }
  </>)

  return mobile ? <Mobile/> : <Desktop/>
}
