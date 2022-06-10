import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import './App.css'

import { Element } from 'react-scroll'
import { Web3ReactProvider } from '@web3-react/core'

import { ModalProvider } from 'react-context-modals'
import './Modal.css'

import { getLibrary } from './functions'
import settings from './settings'

import Responsive from './responsive'
import MintSectionDesktop from './MintSectionDesktop'
import MintSectionMobile from './MintSectionMobile'
import WhitepaperDesktop from './landing/whitepaper-desktop'
import WhitepaperMobile from './landing/whitepaper-mobile'
import CountdownDesktop from './landing/countdown-desktop'
import CountdownMobile from './landing/countdown-mobile'
import NinjaSlider from './landing/ninja-slider'

import JoinRaffleModal from './raffle/modal'
import PresaleModal from './presale/modal'
import SaleModal from './sale/modal'
import { ConnectWalletApp } from './connect/app'

const RoadmapDesktop = lazy(() => import('./landing/roadmap-desktop'))
const RoadmapMobile = lazy(() => import('./landing/roadmap-mobile'))
const Soldout = lazy(() => import('./landing/soldout'))
const FAQ = lazy(() => import('./landing/faq'))
const NinjaTeam = lazy(() => import('./landing/ninja-team'))
const NinjaTraders = lazy(() => import('./landing/ninja-traders'))

// const JoinRaffleModal = lazy(() => import('./raffle/modal'))
// const PresaleModal = lazy(() => import('./presale/modal'))
// const SaleModal = lazy(() => import('./sale/modal'))

dayjs.extend(utc)

const launchDay = dayjs.utc('2021-11-20T20:00:00Z')

const SuspenseLoader = (props) => (
  <Suspense fallback={<div></div>}>
    {props.element}
  </Suspense>
)

function Web3App () {
  const handleActionClick = (showModal) => {
    if (settings.onRaffle) {
      showModal(JoinRaffleModal)
    } else if (settings.onPresale) {
      showModal(PresaleModal)
    } else if (settings.onSale) {
      showModal(SaleModal)
    }
  }

  return (
    <div>
      <Responsive desktop={<MintSectionDesktop actionClick={handleActionClick}/>}
                  mobile={<MintSectionMobile actionClick={handleActionClick}/>}/>
      {/*<Responsive desktop={<CountdownDesktop date={launchDay}/>} mobile={<CountdownMobile date={launchDay}/>}/>*/}
      <Responsive desktop={<WhitepaperDesktop/>} mobile={<WhitepaperMobile/>}/>

      <div className="App">
        <NinjaSlider/>
        <Element name={'roadmap'}>
          <div>
            <Responsive
              desktop={<SuspenseLoader element={<RoadmapDesktop/>}/>}
              mobile={<SuspenseLoader element={<RoadmapMobile/>}/>}/>
          </div>
        </Element>
        <SuspenseLoader element={<Soldout/>}/>
        <SuspenseLoader element={<FAQ/>}/>
        <div>
          <SuspenseLoader element={<NinjaTeam/>}/>
          <SuspenseLoader element={<NinjaTraders/>}/>
        </div>
      </div>
    </div>
  )
}

function SendTweetApp () {
  // const navigate = useNavigate()
  const { confirmationKey } = useParams()

  useEffect(() => {
    const text = `I'm joining the @ninjasquadnft Raffle! 🥷
Key: ninja-${confirmationKey}

#ninjasquad #nft

https://ninjasquadnft.io`

    const finalAddress = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`

    window.location.href = finalAddress
  }, [confirmationKey])

  return (
    <div></div>
  )
}

function App () {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ModalProvider animated>
        <BrowserRouter>
          <Routes>
            <Route path="/send-tweet/:confirmationKey" element={<SendTweetApp/>}/>
            <Route path="/connect-wallet" element={<ConnectWalletApp/>}/>
            <Route path="*" element={<Web3App/>}/>
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </Web3ReactProvider>
  )
}

export default App
