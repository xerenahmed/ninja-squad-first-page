import { useWeb3React } from '@web3-react/core'
import { useModal } from 'react-context-modals'

import { MyNinjasModal } from './my-ninjas-modal'
import { NinjaBaseModal } from './ninja-base-modal'
import { ConnectWalletModal } from './connect-wallet-modal'

export const MyNinjasButton = ({ mobile }) => {
  const { account } = useWeb3React()
  const { showModal } = useModal()

  const Desktop = () => (<>
    {
      account ?
        <>
          <a href="#disconnect" className={'shuriken'} rel="noreferrer"
             onClick={(e) => {
               e.preventDefault()

               showModal(NinjaBaseModal)
             }}
          >
            <text className="cls-3 address-text" x="990" y="610" style={{ fontSize: '84px' }} strokeWidth={'8px'}>ninja</text>
            <text className="cls-2 address-text" x="990" y="610" style={{ fontSize: '84px' }} strokeLinejoin={'round'}
                  strokeWidth={'0px'} stroke={'#1c1c1c'}>ninja</text>

            <text className="cls-3 address-text" x="1040" y="672" style={{ fontSize: '84px' }} strokeWidth={'8px'}>base</text>
            <text className="cls-2 address-text" x="1040" y="672" style={{ fontSize: '84px' }} strokeLinejoin={'round'}
                  strokeWidth={'0px'} stroke={'#1c1c1c'}>base</text>
          </a>
        </>
        :
        <>
          <a href="#connect" className={'shuriken'} rel="noreferrer"
             onClick={(e) => {
               e.preventDefault()

               showModal(ConnectWalletModal, {
                 openModal: NinjaBaseModal
               })
             }}
          >
            <text className="cls-3 address-text" x="990" y="610" style={{ fontSize: '84px' }} strokeWidth={'8px'}>ninja</text>
            <text className="cls-2 address-text" x="990" y="610" style={{ fontSize: '84px' }} strokeLinejoin={'round'}
                  strokeWidth={'0px'} stroke={'#1c1c1c'}>ninja</text>

            <text className="cls-3 address-text" x="1040" y="672" style={{ fontSize: '84px' }} strokeWidth={'8px'}>base</text>
            <text className="cls-2 address-text" x="1040" y="672" style={{ fontSize: '84px' }} strokeLinejoin={'round'}
                  strokeWidth={'0px'} stroke={'#1c1c1c'}>base</text>
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

               showModal(NinjaBaseModal)
             }}
          >
            <text className="cls-3 address-text" x="660" y="820" style={{ fontSize: '124px' }} strokeWidth={'8px'}>ninja</text>
            <text className="cls-2 address-text" x="660" y="820" style={{ fontSize: '124px' }} strokeLinejoin={'round'}
                  strokeWidth={'0px'} stroke={'#1c1c1c'}>ninja</text>

            <text className="cls-3 address-text" x="730" y="910" style={{ fontSize: '124px' }} strokeWidth={'8px'}>base</text>
            <text className="cls-2 address-text" x="730" y="910" style={{ fontSize: '124px' }} strokeLinejoin={'round'}
                  strokeWidth={'0px'} stroke={'#1c1c1c'}>base</text>
          </a>
        </>
        :
        <>
          <style
            dangerouslySetInnerHTML={{ __html: '\n            .cls-1, .cls-2, .cls-3 {\n            font-size: 76px;\n            fill: #1c1c1c;\n            text-anchor: middle;\n            font-family: kang;\n          }\n\n            .cls-1 {\n            filter: url(#filter);\n          }\n\n            .cls-3 {\n            stroke: #dbba41;\n            stroke-linejoin: round;\n            stroke-width: 14px;\n          }\n .cls-3 {transition: .3s all;}    a:hover > .cls-3 { stroke-width: 20px; }   ' }}/>
          <a href="#connect" className={'shuriken'} rel="noreferrer"
             onClick={(e) => {
               e.preventDefault()

               showModal(ConnectWalletModal, {
                 openModal: NinjaBaseModal
               })
             }}
          >
            <text className="cls-3 address-text" x="660" y="820" style={{ fontSize: '124px' }} strokeWidth={'8px'}>ninja</text>
            <text className="cls-2 address-text" x="660" y="820" style={{ fontSize: '124px' }} strokeLinejoin={'round'}
                  strokeWidth={'0px'} stroke={'#1c1c1c'}>ninja</text>

            <text className="cls-3 address-text" x="730" y="910" style={{ fontSize: '124px' }} strokeWidth={'8px'}>base</text>
            <text className="cls-2 address-text" x="730" y="910" style={{ fontSize: '124px' }} strokeLinejoin={'round'}
                  strokeWidth={'0px'} stroke={'#1c1c1c'}>base</text>
          </a>
        </>
    }
  </>)

  return mobile ? <Mobile/> : <Desktop/>
}
