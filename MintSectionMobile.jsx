import { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useModal } from 'react-context-modals'
import { scroller } from 'react-scroll'
import { ConnectWalletButton } from './connect/connect-wallet-button'
import { ConnectWalletModal } from './connect/connect-wallet-modal'
import { MyNinjasButton } from './connect/my-ninjas-button'

const MintSectionMobilePlaceholder = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1713" style={{ width: '100%' }}>
      <filter id="b">
        <feGaussianBlur stdDeviation="2"/>
      </filter>
      {/*<path fill="#a0a990" d="M0 0h1077v1713H0z"/>*/}
      <g filter="url(#b)" transform="translate(3.3 3.3) scale(6.6914)" fill-opacity=".5">
        <ellipse fill="#1b3818" cx="86" cy="179" rx="69" ry="69"/>
        {/*<ellipse fill="#fffffd" cx="94" cy="45" rx="160" ry="65"/>*/}
        <ellipse cx="85" cy="92" rx="17" ry="27"/>
        <ellipse fill="#640" rx="1" ry="1" transform="matrix(-.74845 -22.7264 24.88064 -.8194 35.2 28.7)"/>
        <ellipse fill="transparent" rx="1" ry="1" transform="matrix(18.3911 17.03034 -91.58209 98.89966 22.7 98.6)"/>
        <ellipse fill="transparent" rx="1" ry="1" transform="matrix(-21.9122 17.9009 -96.0899 -117.62202 149.6 98.8)"/>
        <ellipse fill="#6b4700" cx="134" cy="22" rx="23" ry="14"/>
        <path fill="#b6d967" d="M71.9 248L38 204.5 82.1 170l33.9 43.3z"/>
        <ellipse fill="#12365f" rx="1" ry="1" transform="matrix(-10.7326 18.62954 -48.9923 -28.2248 96 141.7)"/>
        <ellipse fill="#4c482a" cx="47" cy="173" rx="153" ry="25"/>
        <path fill="#887500" d="M18 8h39v41H18z"/>
        <path fill="#314c45" d="M49.7 245.8l8.2-2.1-48.3-38.5L-.6 235z"/>
        <path fill="#004018" d="M70 68h28v40H70z"/>
        <ellipse fill="transparent" rx="1" ry="1" transform="matrix(8.15028 -25.86996 40.3454 12.71074 32.2 78.4)"/>
        <path fill="transparent" d="M37 116h8v25h-8z"/>
        <ellipse fill="transparent" rx="1" ry="1" transform="rotate(148.4 65.5 55.8) scale(54.92726 28.60511)"/>
        <path fill="#a9cc5f" d="M176 209L66 227l110-64z"/>
        <path fill="transparent" d="M136 153l28-17-24-9z"/>
        <path fill="#d8ff88" d="M28 177.6L9.2 192.7-4 176.4l18.6-15.1z"/>
        <path fill="transparent" d="M43 252h118v4H43z"/>
        <path fill="#e6ff97" d="M74 166h13v21H74z"/>
        <ellipse fill="#a5d057" rx="1" ry="1" transform="matrix(68.30597 -2.20568 .29738 9.2093 116.5 245)"/>
        <path fill="#05000a" d="M102 184l34-32-5 49z"/>
        <path fill="#c4a21a" d="M12 7h15v43H12z"/>
        <path fill="#10251d" d="M52.1 39.8l-9.7-26.5-28 31.5L41 29.2z"/>
        <path fill="#1d3120" d="M127 214h29v15h-29z"/>
        <ellipse fill="#315773" rx="1" ry="1" transform="matrix(8.66838 23.30856 -45.34207 16.86256 85 140.5)"/>
        <ellipse fill="transparent" cx="50" rx="86" ry="8"/>
        <path fill="#b8e563" d="M-17.3 211.8l-.4-13 73-2.6.4 13z"/>
        <path fill="#bee37c" d="M106 189l-41 59-1-45z"/>
        <path fill="#111411" d="M39 173l39 12-77 13z"/>
        <path fill="transparent" d="M-16 121l59-4-41 29z"/>
        <ellipse fill="#95a6c7" rx="1" ry="1" transform="rotate(85.7 -105.6 131.4) scale(8.97961 21.5463)"/>
        <path fill="#161d1a" d="M54 196h8v42h-8z"/>
        <ellipse fill="#88897c" rx="1" ry="1" transform="rotate(156.8 12.3 40.3) scale(10.28945 5.2809)"/>
        <path fill="#987e00" d="M115 11h35v23h-35z"/>
        <path fill="#102549" d="M82 224l2 16 59-12z"/>
        <ellipse fill="transparent" cx="86" cy="26" rx="29" ry="40"/>
        <ellipse fill="#97977f" cx="117" cy="52" rx="16" ry="7"/>
        <path fill="#454b32" d="M97.5 216l27.3-73.7 51.2 35.4-22.9-37.2z"/>
        <path fill="transparent" d="M35 79l-41 30-8-98z"/>
        <path fill="#f5f0e8" d="M150.1 167.2l-6.8-3.7 15-31.6-23.4-15.3z"/>
        <path fill="#552419" d="M73 178l-5-25-84 3z"/>
        <path fill="#172f1f" d="M65.2 75.9l41.6 24.5-13.6 10.4-25.8-25.4z"/>
        <path fill="#000f19" d="M54 35L39 13l-20 2z"/>
        <path fill="#74a9c1" d="M53.4 153.8l66.9 2.6 13.4-1.1-93.5-7.4z"/>
        <ellipse fill="#d9c8b3" cx="105" cy="177" rx="13" ry="4"/>
        <path fill="#58a679" d="M78 66h21v12H78z"/>
        <path fill="transparent" d="M106 35h55v14h-55z"/>
        <path fill="#b7e07a" d="M90 209l-10-28 28 11z"/>
        <path fill="transparent" d="M94.2 255.8L13 254l-23.6-10.3L10.1 271z"/>
        <path fill="#273900" d="M16.4 205.7l6.5 7.7-15.3 12.9-6.5-7.7z"/>
        <path fill="#2b291b" d="M11 48h42v2H11z"/>
        <ellipse fill="#7eaabb" rx="1" ry="1" transform="matrix(37.49218 2.92304 -.1522 1.9521 76.3 115)"/>
        <ellipse fill="transparent" rx="1" ry="1" transform="matrix(53.44969 9.79668 -2.09558 11.43325 150.7 100.3)"/>
        <path fill="transparent" d="M44 135.8l-2.6 12-13.4-54 24.4-26.6z"/>
        <path d="M11 8h2v39h-2z"/>
        <path fill="#182616" d="M47.2 246.5L5.7 235.4l1-3.9 41.6 11.1z"/>
        <path fill="#000001" d="M124 209l20-13 6 5z"/>
        <path fill="#a1ce52" d="M17.7 240.1L-16 220.4l34.3 35.9 51.3-8.6z"/>
        <path fill="#e7c543" d="M14 4l-2 41 23-22z"/>
        <path fill="#ffe343" d="M37 9l18 18 2-17z"/>
        <path fill="#7c7e66" d="M145 85l-17-3 13 10z"/>
        <path fill="#1e1600" d="M56 12h2v36h-2z"/>
        <path fill="#73742d" d="M139.7 142.4l-6.7 21.1-7.8-36.9 12-6.4z"/>
        <path fill="#a9cb72" d="M150.3 223.3l-58.7 23.2 33 14.8 22.1-45.4z"/>
        <path fill="#faf3ff" d="M38 249.2l86.1 9-28-6.4L77.6 271z"/>
        <path fill="#0f110d" d="M52 195l-20 1-10-34z"/>
        <path fill="#ffd345" d="M95 109l-27-4 15 8z"/>
        <path fill="#aed372" d="M148.6 173.5l-15.5 21 42.9 12.3-43.8-37.3z"/>
        <path fill="#b5e66f" d="M10 179l14 13-40-2z"/>
        <ellipse fill="transparent" cx="50" cy="58" rx="59" ry="9"/>
        <ellipse fill="#040b0c" cx="76" cy="194" rx="6" ry="7"/>
        <path fill="#ceb646" d="M105 13h44v6h-44z"/>
        <path fill="#1a1320" d="M90 157h45v17H90z"/>
        <path fill="#b6b69b" d="M-16 112.5l38.8 8.3 29.8-3.8L18 97z"/>
        <path fill="#accd6f" d="M118.7 192.2l-3.4 30.2-11.5 6-15.2-7.6z"/>
        <path fill="#112c1d" d="M86 105l-22-9 39-14z"/>
        <path fill="transparent" d="M136 38.5l-13.7 52.8-37.1-31.6 90 7.4z"/>
        <path fill="#00131b" d="M38 38.6l22.4-14L34 44.1l-9.6-8.3z"/>
        <path fill="#fffde3" d="M48.2 173.2l7.4 3-1.8 4.6-7.4-3z"/>
        <path fill="#6f7262" d="M84 34l6-6-13 1z"/>
        <ellipse fill="#eb4612" cx="58" cy="169" rx="14" ry="3"/>
        <path fill="#f8ce33" d="M39.9 43.7l15-14.9-1.5 19.6-40.4-.7z"/>
        <ellipse fill="#191f23" rx="1" ry="1" transform="matrix(-7.63597 36.69818 -.97903 -.20371 43 144)"/>
        <path fill="transparent" d="M36 107l28-13 8 13z"/>
        <path fill="#32353a" d="M10.3 159l18.7 5-23.3-11.6 18-19.5z"/>
        <path fill="transparent" d="M25 127l-30 2 9 23z"/>
        <path d="M98 200.5h6v5h-6z"/>
        <path fill="#1c1e1b" d="M101 181.5L85.3 175l10.1 15.4 45.2-31z"/>
        <path fill="#fef9e3" d="M128 111h4v22h-4z"/>
        <path fill="#b6d977" d="M44 203l-32 10 12-20z"/>
        <path fill="#bfe87d" d="M138 202l-7-21h13z"/>
        <path fill="#121b0e" d="M46.5 244.4l11.6-6.2 8-15-4.1-1.6z"/>
        <path fill="#c9f29c" d="M29 165h7v7h-7z"/>
        <ellipse fill="transparent" cx="41" cy="2" rx="92" ry="5"/>
        <path fill="transparent" d="M176 247l-71 11 33 13z"/>
        <path d="M68.7 73l-.5-.8 13.1-7.3.5.9z"/>
        <path fill="#b4d27b" d="M66 186l-9 39 16-15z"/>
        <path fill="#a9d26c" d="M100 201l-26-44-3 26z"/>
        <path fill="#4e4121" d="M23 150l-1 1.6 22 21-7.2-46.2z"/>
        <path fill="#090a0d" d="M125 177h27v6h-27z"/>
        <path fill="transparent" d="M148.3 151.2l10-21.6-18.5 17.7-6 .7z"/>
        <ellipse fill="#91c3da" cx="115" cy="145" rx="2" ry="13"/>
        <path fill="#25320a" d="M16 211h28v5H16z"/>
        <path fill="#768469" d="M126.9 254.8l-54.4-.8-45.3-34.4 43.5 30.2z"/>
        <path d="M139.5 11.8l-25 1.4v-1l25-1.4z"/>
        <path fill="#7fa7b1" d="M90 164l5-7-20 1z"/>
        <path fill="#000d19" d="M51.8 108l.2-1 50.2 9-.2 1z"/>
        <path fill="transparent" d="M14.4 69.9l-15.9 2L-6.4 32l15.9-2z"/>
        <path fill="#99b1c6" d="M27.2 229.7l23.3 5.8-1.7 6.8-23.3-5.8z"/>
        <ellipse fill="#3e4041" rx="1" ry="1" transform="rotate(111.6 -60.7 124.8) scale(1.97211 23.93975)"/>
        <path fill="#0d0f11" d="M88 112h31v3H88z"/>
        <path fill="#291b02" d="M153 183.5l5.3-4.7 8.7 9.7-5.3 4.7z"/>
        <path fill="#c5c8ba" d="M152 7h9v29h-9z"/>
        <path fill="#fefcfc" d="M98 109l30-33v37z"/>
        <path fill="#0e1616" d="M149.5 228l-1 4-30-8 1-4z"/>
        <path fill="#acdc56" d="M136.2 228.3l39.8 13.8-8.5-54.3-22.4 61.1z"/>
        <path fill="#24a8ff" d="M90 229h7v6h-7z"/>
        <path fill="transparent" d="M52 61l-9 24 29-7z"/>
        <path fill="#18181a" d="M128.3 183.5l7.8 11.1L99 190l-7.2-10.7z"/>
        <path fill="#272e21" d="M6 158.7l10-7.1-18.5 20.3L-16 110z"/>
        <path fill="#eeefdd" d="M176 10l-6-20-43 19z"/>
        <path d="M117 147.2l5-30.6 1 .2-5 30.6zm9-25.2h2v46h-2z"/>
        <ellipse fill="transparent" cx="152" cy="62" rx="16" ry="29"/>
        <path fill="#0f0d11" d="M110 179l14 3 10 26z"/>
        <path fill="#86bad3" d="M90 114h15v4H90z"/>
        <ellipse fill="#e2c441" rx="1" ry="1" transform="matrix(16.29764 .20834 -.02813 2.20082 131.8 30.9)"/>
        <path fill="#a5c56d" d="M81 217.6l81.2-35-53.6 33.6-54-24.7z"/>
        <path fill="#a8cc6b" d="M151.3 197.2l-22.5 21.2 46.7-12.8-29.3-25.2z"/>
        <path fill="#96adbe" d="M58 222l-6 8-28-10z"/>
        <path fill="transparent" d="M109.6 38.8L66.2 74.3l-13.6 35.8L58 32.6z"/>
        <ellipse cx="132" cy="33" rx="15" ry="1"/>
        <path fill="#606920" d="M166.3 147.8l-7.6 22.2-2.7-31.6-14.7 27.3z"/>
        <path fill="#2d3025" d="M54.3 174.2L78 188l-56.6-7.6 20.3 24.5z"/>
        <path fill="#141a10" d="M152.2 6l-1.4 28h-1l1.4-28z"/>
        <path fill="transparent" d="M5 88h68v8H5z"/>
        <path fill="#797a75" d="M97 48h31v3H97z"/>
        <path fill="#87886d" d="M120 106l-13 2 24 3z"/>
        <path fill="transparent" d="M96 45L62-9l77 58z"/>
        <path fill="#414c2c" d="M143 200l-16 16-16-2z"/>
        <path fill="#3e403a" d="M112 57h16v2h-16z"/>
        <ellipse fill="#000d14" rx="1" ry="1" transform="matrix(-32.06266 -2.1296 .06627 -.9978 80.3 148.9)"/>
        <path fill="#0d1c05" d="M-7.3 189.9l-8.7-16.4L12.7 200l-5.3-2z"/>
        <path fill="transparent" d="M28 49.2l51.6 4.9-81.1 27.8-5.3-32.7z"/>
        <path fill="#000002" d="M33.2 20.6l-7.8 1.8-.6-3 7.8-1.8z"/>
        <path fill="#131923" d="M15 7h19v2H15z"/>
        <path fill="#77a8c9" d="M45.7 152.3l2.6-29 4 .4-2.6 29z"/>
        <path fill="#d3d3b3" d="M40.6 126L22 140l-1 21.1-4.7-8z"/>
        <path fill="#6749e0" d="M127.7 230.9l-9.8 2-1.6-7.8 9.8-2z"/>
        <path d="M52 116h28v2H52z"/>
        <path fill="transparent" d="M-13 244l35 12-38 3z"/>
        <path fill="#555450" d="M121.1 9.2l-.4-1L151-5.1l.4 1z"/>
        <path fill="#000005" d="M82 119h30v2H82z"/>
        <path fill="#b1e15b" d="M-16 231l23 18-12-90z"/>
        <path fill="#ffdd45" d="M41 27l-10 9 5 2z"/>
        <ellipse fill="#cedcff" cx="145" cy="222" rx="4" ry="4"/>
        <path fill="#001b07" d="M96.9 103.7l4.9-7.6 3.3 2.2-4.9 7.6z"/>
        <path fill="#090d03" d="M13.2 193.5l45.6 2.6-35.1-7-18.8 11.3z"/>
        <path fill="transparent" d="M5.3 124.3l3.9 33.3-6.2-9.4 36.8-29z"/>
        <path fill="#b0cd70" d="M130 176h20l-5-9z"/>
        <path fill="transparent" d="M143 141l33-8-39-3z"/>
        <ellipse cx="41" cy="49" rx="13" ry="1"/>
        <path fill="#2e1b02" d="M132 136h8v7h-8z"/>
        <path d="M165.5 8.3l-13 .4v-1l13-.4z"/>
        <path fill="#04080b" d="M46.9 218l-23-3.8 28.2 3.4L65.7 228z"/>
        <path fill="#b5d57e" d="M46.8 211.6l-3-9.5 11.4-3.7 3 9.5z"/>
        <path fill="#060c14" d="M121 33h22v2h-22z"/>
        <path fill="#b7d77a" d="M73 253.5l14.1-13.7-14.3-6.2-2.7 7.1z"/>
        <path fill="transparent" d="M43 8.2l21.5-23.8L4.3 11.8l-20.3-7z"/>
        <path fill="#223728" d="M62.8 98.3l25.3 11 11.1-36-12.9 12.1z"/>
        <path d="M48 109h22v2H48z"/>
        <path fill="#60a1c2" d="M37 154h8v5h-8z"/>
        <ellipse rx="1" ry="1" transform="matrix(3.35197 .65156 -.47327 2.43478 153.6 219)"/>
      </g>
    </svg>
  )
}

const MintSectionMobile = (props) => {
  const [isHovered, setIsHovered] = useState({
    // 'tokenLaunch': false
  })

  const [isLoaded, setIsLoaded] = useState(false)
  const { showModal } = useModal()
  const { account } = useWeb3React()

  const handleMouseEnter = (item) => {
    setIsHovered({
      ...isHovered,
      [item]: true
    })
  }

  const handleMouseLeave = (item) => {
    setIsHovered({
      ...isHovered,
      [item]: false
    })
  }

  return (
    <>
      {<div
        className={'mint-section-mobile'}
        style={{
          // height: '100vh',
          // padding: '1vw 1vh',
          // display: 'flex',
          width: '100%',
          // justifyContent: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          opacity: isLoaded ? 0 : 1,
          transition: '.3s all',
          zIndex: -1
        }}>
        <MintSectionMobilePlaceholder/>
      </div>}
      <div className="mint-section-mobile">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 1080 1713">

          <image width={1080} height={1713} href="img/mobile-mint.png" onLoad={() => {
            setIsLoaded(true)
          }}></image>

          <ConnectWalletButton handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} mobile={true} />
          <MyNinjasButton mobile={true} />

          <image width={1185} height={640} x={-52} y={840} href="img/ninjas-mobile.png"
                 className={'ninjas-animate'} style={{
                   pointerEvents: 'none'
          }}/>

          <a href="#roadmap" rel="noreferrer"
             onClick={(e) => {
               e.preventDefault()

               scroller.scrollTo('roadmap', {
                 duration: 800,
                 delay: 0,
                 smooth: true,
               })
             }}
             onMouseEnter={() => {handleMouseEnter('roadmap')}}
             onMouseLeave={() => {handleMouseLeave('roadmap')}}>
            <rect x={31} y={1429} fill="#fff" opacity={0} width={382} height={200}></rect>
          </a><a href="https://opensea.io/collection/ninja-squad-official" rel="noreferrer"
                 onMouseEnter={() => {handleMouseEnter('os')}}
                 onMouseLeave={() => {handleMouseLeave('os')}}>
          <rect x={911} y={1431} fill="#fff" opacity={0} width={134} height={100}></rect>

        </a><a href="https://twitter.com/ninjasquadnft"
               target={'_blank'} rel="noreferrer"
               onMouseEnter={() => {handleMouseEnter('tw')}}
               onMouseLeave={() => {handleMouseLeave('tw')}}>
          <rect x={566} y={1487} fill="#fff" opacity={0} width={126} height={130}></rect>

        </a><a href="https://discord.com/invite/ninjasquad" target={'_blank'} rel="noreferrer"
               onMouseEnter={() => {handleMouseEnter('dc')}}
               onMouseLeave={() => {handleMouseLeave('dc')}}>
          <rect x={712} y={1474} fill="#fff" opacity={0} width={183} height={100}></rect>

        </a><a href="#logo" rel="noreferrer">
          <rect x={77} y={44} fill="#fff" opacity={0} width={316} height={294}></rect>

        </a>

          {/*<image href="img/mobile_mint_btn.png" className={'mint-hover-item-mobile'} width={1080} height={1713}*/}
          {/*       style={{ pointerEvents: 'none' }}/>*/}
          {/*<image href="img/wen.png" className={'mint-hover-item'} x={372} y={822} width={365} height={148}*/}
          {/*       style={{*/}
          {/*         pointerEvents: 'none',*/}
          {/*         opacity: isHovered.mint ? 0 : 1,*/}
          {/*         transition: '1.5s all',*/}
          {/*         filter: isHovered.mint ? 'grayscale(100)' : ''*/}
          {/*       }}/>*/}


          {/* <image href="img/wen.png" className={'mint-hover-item'} x={372} y={822} width={365} height={148}
                 style={{
                   pointerEvents: 'none',
                   opacity: isHovered.mint ? 0 : 1,
                   transition: '.3s all',
                   filter: isHovered.mint ? 'grayscale(100)' : ''
                 }}/> */}


          {/*<rect x={295} y={712} fill="transparent" width={561} height={347} onClick={(e) => {*/}
          {/*  e.preventDefault()*/}
          {/*  */}
          {/*  props.actionClick(showModal)*/}
          {/*}}*/}
          {/*      onMouseEnter={() => {*/}
          {/*        handleMouseEnter('mint')*/}
          {/*        setTimeout(() => props.actionClick(showModal), 100)*/}
          {/*      }}*/}
          {/*      onMouseLeave={() => {handleMouseLeave('mint')}}>*/}
          {/*</rect>*/}


          {
            !account && <a href="#connect" className={'shuriken'} rel="noreferrer"
                          onClick={(e) => {
                            e.preventDefault()
                            showModal(ConnectWalletModal)
                          }}
            >
              <rect x={600} y={0} width={500} height={400} fill={'transparent'}/>
            </a>
          }
        </svg>

        <div style={{
          // height: '100%',
          padding: '2rem 0',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          position: 'absolute',
          zIndex: 99,
          top: 0,
          left: 0,
          pointerEvents: 'none'
        }}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 1080 1713" style={{ width: '100%', height: '100%' }}>
            {/*<image href="img/mobile_mint_btn_hover.png" className={'mint-hover-item-mobile'}*/}
            {/*       style={{ opacity: isHovered.mint ? 1 : 0 }} width={1080} height={1713}/>*/}

            {/* <image href="img/soon.png" className={'mint-hover-item-mobile'}
                   style={{
                     opacity: isHovered.mint ? 1 : 0,
                     transition: '.3s all',
                     transform: 'rotate(-7deg) scale(0.44328)',
                     transformOrigin: 'center'
                   }}
                   width={725} height={648}
                   x={172}
                   y={584}/> */}

            <image href="img/mobile_roadmap_btn.png" className={'mint-hover-item-mobile'}
                   style={{ opacity: isHovered.roadmap ? 1 : 0 }} width={1080} height={1713}/>

            {/*<image href="img/mobile_wallet_btn.png" className={'mint-hover-item-mobile'}*/}
            {/*       style={{ opacity: isHovered.wallet ? 1 : 0 }} width={1080} height={1713}/>*/}

            <image href="img/mobile_tw_btn.png" className={'mint-hover-item-mobile'}
                   style={{ opacity: isHovered.tw ? 1 : 0 }} width={1080} height={1713}/>
            <image href="img/mobile_dc_btn.png" className={'mint-hover-item-mobile'}
                   style={{ opacity: isHovered.dc ? 1 : 0 }} width={1080} height={1713}/>
            <image href="img/mobile_os_btn.png" className={'mint-hover-item-mobile'}
                   style={{ opacity: isHovered.os ? 1 : 0 }} width={1080} height={1713}/>
          </svg>
        </div>
      </div>
    </>
  )

}

export default MintSectionMobile
