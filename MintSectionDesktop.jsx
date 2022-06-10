import { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useModal } from 'react-context-modals'
import { scroller } from 'react-scroll'
import { ConnectWalletButton } from './connect/connect-wallet-button'
import { MyNinjasButton } from './connect/my-ninjas-button'

export const MintSectionDesktopPlaceholder = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1821 1022"
       style={{ position: 'absolute', width: '100%', maxHeight: '98vh' }}>
    <filter id="b">
      <feGaussianBlur stdDeviation={2}/>
    </filter>

    <g filter="url(#b)" transform="translate(3.6 3.6) scale(7.11328)">
      <ellipse
        fill="#26381d"
        fillOpacity=".5"
        rx={1}
        ry={1}
        transform="matrix(.93596 -27.91124 116.1715 3.89562 131.6 84.6)"
      />
      <ellipse
        fill="transparent"
        fillOpacity=".5"
        rx={1}
        ry={1}
        transform="matrix(18.31601 32.83517 -88.6905 49.47305 32.5 24.3)"
      />
      <path fill="transparent" fillOpacity=".5" d="M192 17l68 85 11-74z"/>
      <ellipse
        fill="#36390f"
        fillOpacity=".5"
        rx={1}
        ry={1}
        transform="matrix(-9.17777 35.23401 -13.06494 -3.40316 183 67)"
      />
      <path fill="transparent" fillOpacity=".5" d="M113 76L77 21l65 18z"/>
      <path fill="#845c00" fillOpacity=".5" d="M109 2h42v35h-42z"/>
      <ellipse
        fill="#659039"
        fillOpacity=".5"
        cx={186}
        cy={118}
        rx={61}
        ry={20}
      />
      <ellipse
        fill="#606f35"
        fillOpacity=".5"
        cx={51}
        cy={97}
        rx={41}
        ry={41}
      />
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M143 28h19v51h-19zm47 114l81 3v-28zm-206.2-1.8L-4.4 117l52.6 26.8L36.4 167zM0-16l32 65-32 61z"
      />
      <path fill="#372d26" fillOpacity=".5" d="M165 62h73v29h-73z"/>
      <path fill="#8d5c00" fillOpacity=".5" d="M252.9 23l-31 1-.8-21 31-1z"/>
      <path fill="transparent" fillOpacity=".5" d="M149-5l59-6-50 89z"/>
      <ellipse fill="transparent" fillOpacity=".5" cx={246} cy={49} rx={26} ry={26}/>
      <path fill="#164365" fillOpacity=".5" d="M99 111l57 2-27-64z"/>
      <path fill="#847207" fillOpacity=".5" d="M109 1h35v36h-35z"/>
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M93.3 130.4l-35 26.5 121.2-6.3-94.8-17.4z"
      />
      <path fill="#330e18" fillOpacity=".5" d="M47 61h39v29H47z"/>
      <path fill="#c1e57c" fillOpacity=".5" d="M204 103l-37 11-2-31z"/>
      <path fill="#b6e173" fillOpacity=".5" d="M0 95h97v11H0z"/>
      <path
        fill="#1d2f46"
        fillOpacity=".5"
        d="M178.2 140l38.7-28.2 2.6 21-61.9-8.1z"
      />
      <path
        fill="#393e34"
        fillOpacity=".5"
        d="M56.8 36L31 59.2l-2.9.7-14.6 31.7z"
      />
      <ellipse
        fill="transparent"
        fillOpacity=".5"
        rx={1}
        ry={1}
        transform="rotate(-123.3 157.5 6.7) scale(12.05496 73.98143)"
      />
      <ellipse
        fill="#9dc94f"
        fillOpacity=".5"
        cx={128}
        cy={127}
        rx={41}
        ry={12}
      />
      <ellipse
        fill="transparent"
        fillOpacity=".5"
        rx={1}
        ry={1}
        transform="rotate(124.8 90.3 79.8) scale(14.87951 8.55949)"
      />
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M29.5 61l37.7-38-36 14.4-47.2 76z"
      />
      <ellipse
        fill="transparent"
        fillOpacity=".5"
        rx={1}
        ry={1}
        transform="matrix(-38.74215 -11.54694 2.8717 -9.6351 23 142)"
      />
      <path
        fill="#a3c25d"
        fillOpacity=".5"
        d="M223.8 88.3l35.8 14.7-62.8 20 8.2-40.5z"
      />
      <path fill="#171910" fillOpacity=".5" d="M216 51l-6 30-41 24z"/>
      <path fill="#bbbb9b" fillOpacity=".5" d="M154 5l35 34 51-12z"/>
      <path
        fill="#073b14"
        fillOpacity=".5"
        d="M139.5 76.4l-15.8-2 2.8-22.8 15.8 2z"
      />
      <ellipse
        fill="#0b2120"
        fillOpacity=".5"
        rx={1}
        ry={1}
        transform="rotate(138.1 64.6 33.9) scale(5.38638 14.63948)"
      />
      <path fill="ivory" fillOpacity=".5" d="M171 74h12v6h-12z"/>
      <path fill="#4e530d" fillOpacity=".5" d="M74 100l19-37-7-27z"/>
      <ellipse fill="transparent" fillOpacity=".5" cx={255} cy={61} rx={12} ry={40}/>
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M226.9-1l-65.3-.6-47.2-2.3L205.2 14z"
      />
      <path fill="#bab89e" fillOpacity=".5" d="M88 22L45-7 6 27z"/>
      <path fill="#606d0d" fillOpacity=".5" d="M69 35h6v37h-6z"/>
      <path fill="#2b2d1c" fillOpacity=".5" d="M181 37l-8 27 36 49z"/>
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M143.8 61.8L155.2-15l18.3 74-29 20.5z"
      />
      <path
        fill="#cefe76"
        fillOpacity=".5"
        d="M86.2 81.4l17 17.2 3.6-11.9-6-5.5z"
      />
      <path fill="#555c27" fillOpacity=".5" d="M238 55l-16 26 13 12z"/>
      <ellipse
        fill="#a0ca5d"
        fillOpacity=".5"
        cx={17}
        cy={106}
        rx={15}
        ry={19}
      />
      <ellipse
        fill="transparent"
        fillOpacity=".5"
        rx={1}
        ry={1}
        transform="matrix(-55.03922 15.60981 -3.7083 -13.07526 8.8 0)"
      />
      <path fill="transparent" fillOpacity=".5" d="M124.5 143l85-3v1l-85 3z"/>
      <path fill="#8eb751" fillOpacity=".5" d="M70 107h39v29H70z"/>
      <path fill="transparent" fillOpacity=".5" d="M109 1L59-16l19 61z"/>
      <path fill="#242f3c" fillOpacity=".5" d="M238 126l-14-14 26-3z"/>
      <path fill="#ffda48" fillOpacity=".5" d="M111 2h11v22h-11z"/>
      <path
        fill="#cfb13f"
        fillOpacity=".5"
        d="M150.3 39.4l-26-4.3 22-12 2.7 3.6z"
      />
      <path fill="#4e6673" fillOpacity=".5" d="M27 114h42v21H27z"/>
      <path fill="#5d5a32" fillOpacity=".5" d="M207 54h15v35h-15z"/>
      <path fill="transparent" fillOpacity=".5" d="M104 46h19v22h-19z"/>
      <ellipse fill="#7c7d66" fillOpacity=".5" cx={104} cy={43} rx={8} ry={4}/>
      <ellipse fill="transparent" fillOpacity=".5" cx={37} cy={67} rx={4} ry={4}/>
      <path
        fill="#111915"
        fillOpacity=".5"
        d="M77.5 108.5L64.2 70.8 39 93l38.5 2.2z"
      />
      <ellipse fill="transparent" fillOpacity=".5" cx={228} cy={45} rx={32} ry={8}/>
      <path fill="#577201" fillOpacity=".5" d="M191 28h7v18h-7z"/>
      <ellipse fill="#989a82" fillOpacity=".5" cx={77} cy={18} rx={11} ry={5}/>
      <path fill="#1d4768" fillOpacity=".5" d="M107 82l48-5 1 37z"/>
      <path fill="#917b14" fillOpacity=".5" d="M228 2h27v22h-27z"/>
      <path fill="transparent" fillOpacity=".5" d="M174 53l9-28-74 22z"/>
      <ellipse fill="transparent" fillOpacity=".5" cy={44} rx={8} ry={60}/>
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M188.3 139.7l62.8-4.4.6 9-62.8 4.4z"
      />
      <path fill="#ffe652" fillOpacity=".5" d="M143 18L133-1l14 6z"/>
      <path fill="transparent" fillOpacity=".5" d="M32 27l35 25 3-26z"/>
      <path fill="#accd6e" fillOpacity=".5" d="M163 137l-92-24 98-1z"/>
      <path fill="#c5de8f" fillOpacity=".5" d="M26 89l23-12-7 14z"/>
      <path
        fill="#051b1e"
        fillOpacity=".5"
        d="M137.4 15l-29.9 21.4 29-27.4-12-1z"
      />
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M81.4 22.4l1.8 37.2-4.4-5.6-5.5-19.7z"
      />
      <path
        fill="#72745e"
        fillOpacity=".5"
        d="M155.3 55.6l-1.5-7.9 6.9-1.3 1.5 7.9z"
      />
      <ellipse
        fill="transparentdff"
        fillOpacity=".5"
        rx={1}
        ry={1}
        transform="matrix(2.63998 -.11328 1.0081 23.49334 93.2 43.3)"
      />
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M103.1 134.7l38.3 23.3 17.5-19.7-137.5 17z"
      />
      <path fillOpacity=".5" d="M218 97l-4-5-9 12z"/>
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M22.2 167.8l-45.9-24.4 15.5-29.2 45.9 24.4z"
      />
      <path
        fill="#99b463"
        fillOpacity=".5"
        d="M219.4 138.1l30.1-18.1-39.5 11.5-49.9 9.3z"
      />
      <path
        fill="#727b83"
        fillOpacity=".5"
        d="M36.1 54.5l17.3-8.9-4 11 7.9-21.4z"
      />
      <path
        fill="#8c9eb7"
        fillOpacity=".5"
        d="M60.7 134.4l-27-7.3 3.6-13.5 27 7.3z"
      />
      <path
        fill="#aed06b"
        fillOpacity=".5"
        d="M187.9 110.9l10.8 27-30.1-23.5L188 90z"
      />
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M221 66l35-19-27-15zm50 34.6l-35.3 32-69.8 16.4 84.7 9z"
      />
      <path
        fill="#777873"
        fillOpacity=".5"
        d="M67.2 9.4L59 19.6 70.5 7.4 31.7-6.9z"
      />
      <path
        fill="#242738"
        fillOpacity=".5"
        d="M192 122l27.4-5.8L222 128l-27.3 5.8z"
      />
      <path fill="#fdfceb" fillOpacity=".5" d="M185 42V17l13-1z"/>
      <path fill="#87877c" fillOpacity=".5" d="M234 32h13v7h-13z"/>
      <path
        fill="#f1f3f1"
        fillOpacity=".5"
        d="M199.4 51.2l-10-9.4L211.5 65l-15.6-.8z"
      />
      <path
        fill="#65655d"
        fillOpacity=".5"
        d="M12.5 36.5l24.7-8 .3 1-24.7 8z"
      />
      <path fill="#838275" fillOpacity=".5" d="M8 51l2 10 11-11z"/>
      <path fill="transparent" fillOpacity=".5" d="M69.3 75.5l2 3.5-2.6 1.5-2-3.5z"/>
      <path
        fill="#b5db74"
        fillOpacity=".5"
        d="M219 98.4l-11-5.3 35.8 1.2-25.9 28.5z"
      />
      <path
        fill="#191811"
        fillOpacity=".5"
        d="M160.7 85.5L177.5 54l-12 13.2-6.3 19z"
      />
      <path fill="transparent" fillOpacity=".5" d="M152 0h104v2H152z"/>
      <path fill="#495308" fillOpacity=".5" d="M95 53h5v24h-5z"/>
      <path fill="transparent" fillOpacity=".5" d="M271 60l-43-31 24 69z"/>
      <path fill="#ffec4a" fillOpacity=".5" d="M223 4h29v3h-29z"/>
      <ellipse
        fill="#0e315e"
        fillOpacity=".5"
        cx={175}
        cy={130}
        rx={9}
        ry={7}
      />
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M156.7 59.2L139 67.8l14.5 5.7 10.7 1.2z"
      />
      <path fill="#4a5b35" fillOpacity=".5" d="M149 117l-9 15-12-1z"/>
      <path
        fill="#3c141b"
        fillOpacity=".5"
        d="M50.6 59.9l-2.3-4.6-5.4 5.5L45.7 77z"
      />
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M13.7 87.7L8 11.6-16 134 6.2 92.6z"
      />
      <path fill="#e8faff" fillOpacity=".5" d="M241 116l-7 4 3-8z"/>
      <path fill="#717161" fillOpacity=".5" d="M219 40l-9-17 16 17z"/>
      {/*<ellipse fill="#000013" fillOpacity=".5" cx={247} cy={2} rx={24} ry={1} />*/}
      <path
        fill="#0e1515"
        fillOpacity=".5"
        d="M33.7 63l8.4 3.8 34.5 32.5-37-37.5z"
      />
      <path fill="#0e0a14" fillOpacity=".5" d="M191 65h13v29h-13z"/>
      <path
        fill="#a0c563"
        fillOpacity=".5"
        d="M27.6 104.8l-1.4 30.8-33.8-28.2L72 118.2z"
      />
      <path fill="transparent" fillOpacity=".5" d="M184.7 79.3l6.1-3.4.5.8-6.1 3.4z"/>
      <path fill="#000900" fillOpacity=".5" d="M57 135l13-8-6-3z"/>
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M109.2-9.6L114-16l-96.7 4.3 91.2 31.2z"
      />
      <path
        fill="#9fbe75"
        fillOpacity=".5"
        d="M69.6 92.4L77 89l11.1-3.4-7.4 9.6z"
      />
      <path fill="#445c20" fillOpacity=".5" d="M42 105l37 3-26 8z"/>
      <path
        fill="#b2d675"
        fillOpacity=".5"
        d="M63.5 108.7l8.8 3.9-4.2-18-49.3 3z"
      />
      <path fill="transparent" fillOpacity=".5" d="M221-16l1 36-35-36z"/>
      <path
        fill="#76775a"
        fillOpacity=".5"
        d="M248.5 97.9l-64.1-64.2L246 84.5l6 17.2z"
      />
      <path fill="#a3c667" fillOpacity=".5" d="M92 123l-9-31-22 53z"/>
      <path fill="#3a4128" fillOpacity=".5" d="M186 109h29v4h-29z"/>
      <path fill="#000c1b" fillOpacity=".5" d="M135 25l-12 1 7 5z"/>
      <path fill="#bfeb7a" fillOpacity=".5" d="M170 100l11-11-23-2z"/>
      <path
        fill="#454438"
        fillOpacity=".5"
        d="M198.3 12.3l.2 1-12.8 2.4-.2-1z"
      />
      <path
        fill="#50583a"
        fillOpacity=".5"
        d="M22.1 96.2l4-21.2 21-28.9L19.5 71z"
      />
      <path fill="#dd3514" fillOpacity=".5" d="M64 70h21v5H64z"/>
      <path
        fill="#aacb6e"
        fillOpacity=".5"
        d="M206.8 107.4l-15 .5-23.5 20.7 17.2-38.1z"
      />
      <path fill="transparent" fillOpacity=".5" d="M181-15.5l78.3 87-2.3 2-78.3-87z"/>
      <ellipse fill="transparent" fillOpacity=".5" cx={114} cy={59} rx={6} ry={17}/>
      <path fill="transparent" fillOpacity=".5" d="M33 58L11 45l43-15z"/>
      {/*<ellipse*/}
      {/*  fill="#00000a"*/}
      {/*  fillOpacity=".5"*/}
      {/*  cx={130}*/}
      {/*  cy={36}*/}
      {/*  rx={17}*/}
      {/*  ry={1}*/}
      {/*/>*/}
      <path
        fill="#2c3d28"
        fillOpacity=".5"
        d="M102.5 98.6L77.5 78l28.3 33.7-17.8-1.2z"
      />
      <path fillOpacity=".5" d="M123 139h20v1h-20z"/>
      <path
        fill="#e6c13c"
        fillOpacity=".5"
        d="M129.8 12l-6.7 9.7-13.6 10.7 3.6-17.6z"
      />
      <path
        fill="#66838c"
        fillOpacity=".5"
        d="M145.5 113.5l4.3-21.2-4.5 12.4-53.9-4.1z"
      />
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M200.9 35.4l-4.6 16.2 13.3-4 61.4 5.8z"
      />
      <path fill="#90af27" fillOpacity=".5" d="M195 38l1 23-20-9z"/>
      <path fill="#010008" fillOpacity=".5" d="M179 94l-9 10 9-3z"/>
      <path fill="#272233" fillOpacity=".5" d="M89 134h17v2H89z"/>
      <path
        fill="#4e4a26"
        fillOpacity=".5"
        d="M147.7 72.6l-11.2 4.9 48.7 5-100.8-4.4z"
      />
      <path fill="#5d6537" fillOpacity=".5" d="M230 84l-25-14 23-7z"/>
      <path
        fill="#a7a78b"
        fillOpacity=".5"
        d="M30.4 40.2l-17.7 3.5-1.1-6 17.7-3.4z"
      />
      <ellipse fill="#84857c" fillOpacity=".5" cx={157} cy={26} rx={4} ry={4}/>
      <path fill="transparent" fillOpacity=".5" d="M75 158l9-23 72 8z"/>
      <path fillOpacity=".5" d="M73 105h4v6h-4z"/>
      <path fill="transparent" fillOpacity=".5" d="M0 124l-16 19h73z"/>
      <path
        fill="#47513c"
        fillOpacity=".5"
        d="M24.7 117.4l6.6-5.6 31.2 17.7-7.7-2z"
      />
      <path fill="#94a286" fillOpacity=".5" d="M112 79l31 4-9-7z"/>
      <path fill="#f9d743" fillOpacity=".5" d="M225 17h29v4h-29z"/>
      <path
        fill="#454f3d"
        fillOpacity=".5"
        d="M-16 101.7l24.8 20.7 1.2 1.2 15.4 8.6z"
      />
      <path fill="#141400" fillOpacity=".5" d="M148 3h2v21h-2z"/>
      <path fill="#bd9f22" fillOpacity=".5" d="M145 0h4v37h-4z"/>
      <path
        fill="#f9f8f9"
        fillOpacity=".5"
        d="M194 15.2l.9.3L184 48.8l-1-.3z"
      />
      <path
        fill="#898b7d"
        fillOpacity=".5"
        d="M187.6 29l-23-13.8L185 30.6l25 6.7z"
      />
      <path fill="transparent" fillOpacity=".5" d="M64 48l10-26-36 37z"/>
      <path
        fill="#676868"
        fillOpacity=".5"
        d="M7.5 27.4l36.8-3.8.2 1-36.8 3.8z"
      />
      <path fill="#22332d" fillOpacity=".5" d="M171 106h-32l15 8z"/>
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M43.3 17.8L-16 135.3l12.4-85.4 28.3 20.9z"
      />
      <path fill="#38432b" fillOpacity=".5" d="M74 119h9v8h-9z"/>
      <path
        fill="#79921d"
        fillOpacity=".5"
        d="M68.7 61.5l-1.3-12 10-1 1.2 12z"
      />
      <ellipse fill="#586824" fillOpacity=".5" cx={86} cy={58} rx={5} ry={21}/>
      <ellipse fill="transparent" fillOpacity=".5" cx={23} rx={20} ry={7}/>
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M236 75.8l12.4 9.4 12 32.7.4-112.2z"
      />
      <path
        fill="#484838"
        fillOpacity=".5"
        d="M104.5 18.8L96 24l-.5-.9L104 18z"
      />
      <ellipse
        fill="#5b9776"
        fillOpacity=".5"
        rx={1}
        ry={1}
        transform="matrix(-.71599 -4.8573 7.5544 -1.11355 131.8 55.7)"
      />
      <path fill="#d5d2c5" fillOpacity=".5" d="M51.7 70.7l4.6-2 2 4.6-4.6 2z"/>
      <path
        fill="#1f362b"
        fillOpacity=".5"
        d="M122.3 72.9l24 .7-12.4-14 11.5 2.1z"
      />
      <path fill="#74746f" fillOpacity=".5" d="M160 10h20v3h-20z"/>
      <ellipse fillOpacity=".5" cx={232} cy={22} rx={9} ry={1}/>
      <path
        fill="#5a6151"
        fillOpacity=".5"
        d="M235.5 129.8l-27.2 7.9 11.4-.4 32.3-19.7z"
      />
      <path
        fill="#785bfa"
        fillOpacity=".5"
        d="M204.3 126.3l8.3-3.4 1.1 2.8-8.3 3.4z"
      />
      <path
        fill="#302c2e"
        fillOpacity=".5"
        d="M173.7 73.4l-2-14.6 17.8-2.2 17.3 20.9z"
      />
      <ellipse
        fill="#34afff"
        fillOpacity=".5"
        cx={176}
        cy={131}
        rx={3}
        ry={3}
      />
      <path fill="#483827" fillOpacity=".5" d="M231 82h15v10h-15z"/>
      <path fill="#fed647" fillOpacity=".5" d="M139 19l-13 6 4 3z"/>
      <path
        fill="#abcd6d"
        fillOpacity=".5"
        d="M188.6 124l38-10.7-57.3.5L159 85.3z"
      />
      <ellipse
        fill="#000f16"
        fillOpacity=".5"
        rx={1}
        ry={1}
        transform="rotate(102.7 59.3 56.8) scale(1 11.70009)"
      />
      <path fill="#4d4a3d" fillOpacity=".5" d="M109 0h2v41h-2z"/>
      <path fill="transparent" fillOpacity=".5" d="M168 10l-47-23 91 8z"/>
      <path fillOpacity=".5" d="M203 62l-6 5 12 1z"/>
      <ellipse
        fill="#9bb76c"
        fillOpacity=".5"
        cx={17}
        cy={102}
        rx={15}
        ry={14}
      />
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M95.4 33.8l22.2 5.8-8.5-5.7-1.3-15.6z"
      />
      <path fill="#49531b" fillOpacity=".5" d="M87 81l22-14 2 10z"/>
      <path fill="#c4ed71" fillOpacity=".5" d="M55 113l18 7 2-7z"/>
      <path
        fill="#5d5f57"
        fillOpacity=".5"
        d="M51.7 27.3l-.1-1 20.7-3.6.1 1z"
      />
      <path fill="#f1ee9a" fillOpacity=".5" d="M59.3 55.9v9l3-1.8-13.1-6.4z"/>
      <path
        fill="#4d4033"
        fillOpacity=".5"
        d="M38.8 85.6l-8.5-26.2-17.4 24.3L51.6 64z"
      />
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M121 37.8l50.2 22.5-23.4 10.8-4.4-32.4z"
      />
      <path
        fill="#bee473"
        fillOpacity=".5"
        d="M207.3 136.6l-1.2-2.8 30.6-12.4 1.2 2.8z"
      />
      <path fill="#4d4e4c" fillOpacity=".5" d="M24 8h16v2H24z"/>
      <path fill="#fcfdd8" fillOpacity=".5" d="M17 16L53 2 40 16z"/>
      <path fill="#1c2a0d" fillOpacity=".5" d="M159 140h28v1h-28z"/>
      <path fill="transparent" fillOpacity=".5" d="M222 78h4v3h-4z"/>
      <path
        fill="#15271d"
        fillOpacity=".5"
        d="M145.3 18.7L124 5.7l13.8 17-6.4 10.7z"
      />
      <path
        fill="transparentdff"
        fillOpacity=".5"
        d="M212.9 32.1l.8 27.6-17.2-24 10.5 3z"
      />
      <path fill="transparent" fillOpacity=".5" d="M254.5 107l2 15.9-1 .1-2-15.9z"/>
      <path fill="#4c5a2e" fillOpacity=".5" d="M233 59h4v37h-4z"/>
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M69 142h187v1H69zM183 29l-12 31-11-45z"
      />
      <path
        fill="#92b851"
        fillOpacity=".5"
        d="M22.6 147l46.7 1.2-46-19.5 47.9 12.1z"
      />
      <path fill="#141e00" fillOpacity=".5" d="M153 83l1-10h1l-1 10z"/>
      <path
        fill="#75776d"
        fillOpacity=".5"
        d="M45.6 24.5l21.1-8-4-5.5 5.9-.3z"
      />
      <path fill="transparent" fillOpacity=".5" d="M103 45l2 24 28-23z"/>
      <path fill="#000005" fillOpacity=".5" d="M79 99l-5 9 2-15z"/>
      <path
        fill="#232320"
        fillOpacity=".5"
        d="M149.5 78.4l41.9 15.3 35-19.5-49.5 7.3z"
      />
      <path
        fill="transparenteff"
        fillOpacity=".5"
        d="M234.4 25.4l14 11.6-23.2 33.8L271 20.6z"
      />
      <path fill="transparent" fillOpacity=".5" d="M150 1h3v76h-3z"/>
      <path fill="#4b4418" fillOpacity=".5" d="M230 14h20v4h-20z"/>
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M201.4 46.3l-3.8 19.6-1-.2 3.8-19.6zM92 51l-5-18 19-10z"
      />
      <ellipse fill="transparent" fillOpacity=".5" cx={217} cy={140} rx={29} ry={3}/>
      <path
        fill="#7d955a"
        fillOpacity=".5"
        d="M173.7 139.4l-45.3 16.8 90.8 1.8-74.2-21.2z"
      />
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M159.3 76.5l12.1-18.7-31.2 22L150.4 64zM40 39l-5-15 41 8z"
      />
      <path fill="#b0d274" fillOpacity=".5" d="M106 114h57v10h-57z"/>
      <path fill="#f3cd40" fillOpacity=".5" d="M147 20l-3 13-17 2z"/>
      <ellipse
        fill="#44472a"
        fillOpacity=".5"
        cx={219}
        cy={72}
        rx={3}
        ry={21}
      />
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M25.5-1.8L-7.5-16l25.8 66.6L-9 54.4z"
      />
      <path fill="#67818f" fillOpacity=".5" d="M144.5 110l-.3 3-46.7-5 .3-3z"/>
      <path
        fill="#304022"
        fillOpacity=".5"
        d="M26.4 127.1l13 5.9-13.2-13 7-8.1z"
      />
      <path fill="#1e2b05" fillOpacity=".5" d="M67 127l4-6-6-4z"/>
      <ellipse fill="#6f735d" fillOpacity=".5" cx={10} cy={57} rx={3} ry={3}/>
      <ellipse fill="transparent" fillOpacity=".5" cx={215} cy={64} rx={2} ry={2}/>
      <path
        fill="#1d2418"
        fillOpacity=".5"
        d="M45.9 96.1l-14.3.2-7.2-9.2 7.7 4.4z"
      />
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M102.5-16l-6.8 33.5-22.2 6.7 6.2 27.5z"
      />
      <path fillOpacity=".5" d="M254 3h1v18h-1z"/>
      <path
        fill="#192332"
        fillOpacity=".5"
        d="M57.3 135.7l-.3 1-30.3-10.4.3-1z"
      />
      <ellipse fill="#5b7d28" fillOpacity=".5" cx={77} cy={139} rx={4} ry={3}/>
      <ellipse fill="#2f261e" fillOpacity=".5" cx={129} cy={1} rx={19} ry={1}/>
      <path
        fill="#0c1714"
        fillOpacity=".5"
        d="M248 115.6l-1 1.7-11-6.9 1-1.7z"
      />
      <path
        fill="#33392c"
        fillOpacity=".5"
        d="M107.2 122l-9.7 8.7-.7-.7 9.7-8.7z"
      />
      <path
        fill="#c4eb7d"
        fillOpacity=".5"
        d="M197.6 95.1l1.7 8.8-4.9 1-1.7-8.8z"
      />
      <path fill="transparent" fillOpacity=".5" d="M71 16l7-5-14 2z"/>
      <path
        fill="#8a8981"
        fillOpacity=".5"
        d="M207.1 13.2l2.6-3.1 13.2 10.7-2.6 3.1z"
      />
      <path fill="#3e4532" fillOpacity=".5" d="M3.7 97.1l22-19 .6.8-22 19z"/>
      <path
        fill="#1a2216"
        fillOpacity=".5"
        d="M92.3 78.8L39.7 91.4l21 3.4 24.1-11.5z"
      />
      <path
        fill="#46582c"
        fillOpacity=".5"
        d="M106 99.2l-22.2 7.4 3-7.4 15.9 5.9z"
      />
      <path fill="#e0c9c6" fillOpacity=".5" d="M43 76h5v5h-5z"/>
      <ellipse fill="transparent" fillOpacity=".5" cx={141} rx={17} ry={1}/>
      <path
        fill="#8eb651"
        fillOpacity=".5"
        d="M259 105.4l-25.4-11.7 17.7 24.8 19.7-63z"
      />
      <path
        fill="#accf70"
        fillOpacity=".5"
        d="M50.4 100.9L17.2 120l5.9-38-20.7 30z"
      />
      <ellipse fill="#16170e" fillOpacity=".5" cx={82} cy={15} rx={5} ry={1}/>
      <path
        fill="transparent"
        fillOpacity=".5"
        d="M120.5 37l17 1.8 17.8 10.4L97 53.5z"
      />
      <path
        fill="#63575a"
        fillOpacity=".5"
        d="M63 49.7l-2.4 13.8 14.6 7.2 10.4 18.6z"
      />
      <path
        stroke="#494a4c"
        strokeOpacity=".5"
        fill="none"
        d="M215.1 137.5q-11.6-4-43 6.7"
        strokeWidth=".5"
      />
      <path fill="#59634a" fillOpacity=".5" d="M28.4 106l-15.7-3 1-5 15.6 3z"/>
      <path
        fill="#add16a"
        fillOpacity=".5"
        d="M187 129.1l-4.3-8.6 22.2 16.4h-15z"
      />
      <path fill="#464646" fillOpacity=".5" d="M15 13h2v8h-2z"/>
      <path fillOpacity=".5" d="M95 89l1 5H83z"/>
    </g>
  </svg>
)

const MintSectionDesktop = (props) => {
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
        style={{
          // height: '100vh',
          padding: '1vw 1vh',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          opacity: isLoaded ? 0 : 1,
          transition: '.3s all'
        }}>
        <MintSectionDesktopPlaceholder/>
      </div>}
      <div className="mint-section">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 1821 1022"
             style={{ position: 'relative', width: '100%', maxHeight: '98vh' }} className={'mx-auto'}>

          <image width={1821} height={1022} href="img/mint-bg.png" onLoad={() => {
            setIsLoaded(true)
          }}/>

          <image width={1529} height={553} x={157} y={259} href="img/ninjas.png" className={'ninjas-animate'}/>

          {/*<a href="#mint" className={'shuriken'} rel="noreferrer"*/}
          {/*   onMouseEnter={() => {handleMouseEnter('mint')}}*/}
          {/*   onMouseLeave={() => {handleMouseLeave('mint')}}*/}
          {/*   onClick={(e) => {*/}
          {/*     e.preventDefault()*/}

          {/*     props.actionClick(showModal)*/}
          {/*   }}*/}
          {/*>*/}
          {/*  <rect x={742} y={557} fill="#fff" opacity={1} width={377} height={216}/>*/}
          {/*</a>*/}
          <a href="https://twitter.com/ninjasquadnft" target={'_blank'} className={'shuriken'} rel="noreferrer"
             onMouseEnter={() => {handleMouseEnter('tw')}}
             onMouseLeave={() => {handleMouseLeave('tw')}}>
            <rect x={1203} y={880} fill="#fff" opacity={0} width={104} height={103}/>
          </a><a href="https://discord.com/invite/ninjasquad" target={'_blank'} className={'shuriken'}
                 rel="noreferrer"
                 onMouseEnter={() => {handleMouseEnter('dc')}}
                 onMouseLeave={() => {handleMouseLeave('dc')}}>
          <rect x={1394} y={846} fill="#fff" opacity={0} width={166} height={100}/>
        </a><a href="https://opensea.io/collection/ninja-squad-official" className={'shuriken'}
               rel="noreferrer"
               target={'_blank'}
               onMouseEnter={() => {handleMouseEnter('os')}}
               onMouseLeave={() => {handleMouseLeave('os')}}>
          <rect x={1627} y={773} fill="#fff" opacity={0} width={118} height={115}/>
        </a>

          <a href="#roadmap" className={'shuriken'} rel="noreferrer"
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
            <rect x={191} y={812} fill="#fff" opacity={0} width={299} height={158}/>
          </a>
          {/*<rect x={775} y={0} width={300} height={300} fill="transparent"*/}
          {/*      onMouseEnter={() => {handleMouseEnter('logo')}}*/}
          {/*      onMouseLeave={() => {handleMouseLeave('logo')}}/>*/}

          {/*<image href="img/mint.png" className={'mint-hover-item'} width={1821} height={1022}*/}
          {/*       style={{ pointerEvents: 'none' }}/>*/}

          {/*<image href="img/wen.png" className={'mint-hover-item'} x={800} y={622} width={237} height={88}*/}
          {/*       style={{*/}
          {/*         pointerEvents: 'none',*/}
          {/*         opacity: isHovered.mint ? 0 : 1,*/}
          {/*         transition: '1.5s all',*/}
          {/*         filter: isHovered.mint ? 'grayscale(100)' : ''*/}
          {/*       }}/>*/}

          {/*<image href="img/mint.png" className={'mint-hover-item'} width={1821} height={1022}*/}
          {/*       style={{*/}
          {/*         pointerEvents: 'none',*/}
          {/*         opacity: isHovered.mint ? 0 : 1,*/}
          {/*         transition: '.3s all',*/}
          {/*         filter: isHovered.mint ? 'grayscale(100)' : '',*/}
          {/*         transformOrigin: 'center'*/}
          {/*       }}/>*/}

          <ConnectWalletButton handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} mobile={false} />
          <MyNinjasButton mobile={false} />

        </svg>
      </div>

      <div style={{
        // height: '100vh',
        padding: '1vw 1vh',
        // display: 'flex',
        width: '100%',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none'
      }}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 1821 1022"
             style={{ position: 'relative', width: '100%', maxHeight: '98vh' }} className={'mx-auto'}>
          {/*<image href="img/mint-hover.png" className={'mint-hover-item'}*/}
          {/*       style={{ opacity: isHovered.mint ? 1 : 0 }} width={1821} height={1022}/>*/}
          {/* <image href="img/soon.png" className={'mint-hover-item'}
                 style={{
                   opacity: isHovered.mint ? 1 : 0, transition: '.3s all',
                   transform: 'rotate(-7deg) scale(0.44328)',
                   transformOrigin: 'center'
                  }} width={523} height={500}
                 x={620} y={584}/> */}
          <image href="img/roadmap-hover.png" className={'mint-hover-item'}
                 style={{ opacity: isHovered.roadmap ? 1 : 0 }} width={1821} height={1022}/>
          <image href="img/wallet-hover.png" className={'mint-hover-item'}
                 style={{ opacity: isHovered.wallet ? (account ? 0 : 1) : 0 }} width={1821} height={1022}/>
          <image href="img/tw-hover.png" className={'mint-hover-item'}
                 style={{ opacity: isHovered.tw ? 1 : 0 }} width={1821} height={1022}/>
          <image href="img/dc-hover.png" className={'mint-hover-item'}
                 style={{ opacity: isHovered.dc ? 1 : 0 }} width={1821} height={1022}/>
          <image href="img/os-hover.png" className={'mint-hover-item'}
                 style={{ opacity: isHovered.os ? 1 : 0 }} width={1821} height={1022}/>
          {/*<image href="img/logo-hover.png" className={'mint-hover-item'}*/}
          {/*       style={{ opacity: isHovered.logo ? 1 : 0 }} width={1821} height={1022}/>*/}

        </svg>

      </div>
    </>
  )
}

export default MintSectionDesktop
