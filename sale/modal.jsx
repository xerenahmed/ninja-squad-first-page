import { useWeb3React } from '@web3-react/core'
import { useEffect, useState, useRef } from 'react'
import { useModal } from 'react-context-modals'
import { ConnectWalletModal } from '../connect/connect-wallet-modal'
import { handleChainChange } from '../functions'
import settings from '../settings'
import { isSaleActive, isSoldout, saleMint, parseLogs } from './functions'
import { getCurrentMintCount } from '../presale/functions'
import PresaleModal from '../presale/modal'

const CheckStep = ({ setStep, step }) => {
  const { account, library, chainId } = useWeb3React()
  const { showModal } = useModal()

  useEffect(() => {
    if (settings.enableSwitchingNetwork && chainId && chainId !== 1) {
      handleChainChange()
    }
  }, [chainId])

  useEffect(() => {
    if (!account) {
      showModal(ConnectWalletModal, {
        openModal: SaleModal
      })

      return
    }

    async function checkSale() {
      const result = await isSaleActive(library)

      setStep(result ? 'mint' : 'not-started')
    }

    async function checkSoldout() {
      const result = await isSoldout(library)

      if (result){
        setStep('soldout')

        setInterval(() => {
          if (step !== 'soldout') {
            setStep('soldout')
          }
        }, 100)
      }
    }

    checkSale()
    checkSoldout()

    setInterval(() => {
      checkSoldout()
    }, 1000)
  }, [account, library, setStep, showModal])

  return (
    <>
      <div className="flex flex-col justify-center text-center w-full" style={{
        minWidth: '50vw'
      }}>
        <h2 className={'text-5xl font-kang'}>Sale</h2>
        <div className={'font-sans text-2xl my-8'}>Welcome Ninja!<br/>First we're checking whether sale is active<br/>Please
          wait.</div>
      </div>
    </>
  )
}

const NotStartedStep = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-center w-full" style={{
        minWidth: '50vw'
      }}>
        <h2 className={'text-5xl font-kang'}>Sale</h2>
        <div className={'font-sans text-2xl my-8'}>Welcome Ninja!<br/>Sale has not started yet.</div>
      </div>
    </>
  )
}

const SoldoutStep = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-center w-full" style={{
        minWidth: '50vw'
      }}>
        <h2 className={'text-5xl font-kang'}>Soldout!</h2>
        <div className={'font-sans text-2xl my-8'}>8,888 Ninjas already minted. But you can still buy on OpenSea. !poof</div>
        <a href="https://opensea.io/collection/ninja-squad-official" target={'_blank'} className={'font-kang btn-ninja text-4xl'}>Buy on OpenSea</a>
      </div>
    </>
  )
}

const MintStep = ({ setStep, setMintState }) => {
  const { account, library } = useWeb3React()
  const { showModal } = useModal()

  const [balance, setBalance] = useState(undefined)
  const [message, setMessage] = useState()
  const numberOfTokensRef = useRef(null)

  async function mint() {
    const acc = String(account)

    const numberOfTokens = Number(numberOfTokensRef.current.value)

    setMessage(undefined)

    try {
      const tx = await saleMint(library, acc, numberOfTokens)

      setMintState({
        tx
      })
      setStep('final')
    }
    catch (e) {
      // e.code === 4001 - User denied transaction signature.
      console.error(e)

      if (e.code === 4001) {
        if (message !== undefined) {
          setMessage(undefined)
        }
      } else if (e.code === 'INSUFFICIENT_FUNDS') {
        setMessage(['red', 'insufficient funds for transaction cost']) //  (gas * price + value)
      } else {
        const errorDetailIndex = e.message.indexOf(' (error=')
        if (errorDetailIndex !== -1) {
          setMessage(['red', e.message.substring(0, errorDetailIndex)])
        } else {
          setMessage(['red', e.message])
        }
      }
    }
  }

  useEffect(() => {
    if (!account) {
      showModal(ConnectWalletModal, {
        openModal: SaleModal
      })

      return
    }
  }, [account, showModal])

  useEffect(() => {
    async function getBalance() {
      const acc = String(account)

      const used = await getCurrentMintCount(library, acc)

      setBalance({
        used: used,
        remaining: Math.min(20 - used, 10),
      })
    }

    getBalance()
  }, [account, library])

  function Picker(props) {
    const maxNumberOfTokens = 10

    if (!props.balance) {
      return null
    }

    if (props.balance.remaining < 1) {
      return (
        <div className={'font-sans text-2xl my-8'}>You've already used all your tokens.</div>
      )
    }

    return (
      <>
        Pick number of tokens to mint:
        <br />
        <br />
        Number of Tokens:
        <select ref={numberOfTokensRef}>
          {new Array(props.balance.remaining).fill(1).map((_, i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </select>
        <br />
        <br />
        {message && (
          <>
            <div style={{ color: message[0] }}>{message[1]}</div>
            <br />
            <br />
          </>
        )}
        <button className={'btn-ninja btn-big'} onClick={() => mint()}>
          Mint
        </button>
      </>
    )
  }

  return (
    <>
      <div className="flex flex-col justify-center text-center w-full" style={{
        minWidth: '50vw'
      }}>
        <h2 className={'text-5xl font-kang'}>Sale</h2>
        <div className={'font-sans text-2xl my-8'}>
          Welcome Ninja!
          <br/>
          <Picker balance={balance} />
        </div>
      </div>
    </>
  )
}

const FinalStep = ({ setStep, mintState }) => {
  const { account, library } = useWeb3React()
  const { showModal } = useModal()

  const [ mintedTokens, setMintedTokens ] = useState()

  useEffect(() => {
    if (!account) {
      showModal(ConnectWalletModal, {
        openModal: SaleModal
      })

      return
    }

    async function getLogs() {
      const { tx } = mintState

      const receipt = await tx.wait()

      if (settings.env === 'development') {
        window.lastReceipt = receipt
      }

      const receiptLogs = parseLogs(library, receipt)

      if (settings.env === 'development') {
        window.lastReceiptLogs = receiptLogs
      }

      const tokenIds = receiptLogs
        // .filter(log => log.event === 'Transfer')
        .map(receiptLog => receiptLog.args[2].toString())

      setMintedTokens(tokenIds)
    }

    getLogs()
  }, [account, library, showModal, mintState])

  const txHash = mintState.tx.hash
  const txUrl = `${settings.contractEtherscanUrl}/tx/${txHash}`

  const tokenUrls = mintedTokens && mintedTokens.map(
    tokenId => [
      tokenId,
      `${settings.contractOpenseaUrl}/assets/${settings.contractAddress}/${tokenId}/?force_update=true`,
      `${settings.contractRaribleUrl}/token/${settings.contractAddress}:${tokenId}`
    ]
  )

  return (
    <>
      <div className="flex flex-col justify-center text-center w-full" style={{
        minWidth: '50vw'
      }}>
        <h2 className={'text-5xl font-kang'}>Sale</h2>
        <div className={'font-sans text-2xl my-8'}>
          {tokenUrls && <>
            Congratz Ninja!
            <img src="/img/ninjaKonfetti.gif" alt="" width={300} className={'mx-auto'}/>
          </>}
          <br/>
          <br />
          <div>
            <a href={txUrl} target={'_blank'} rel="noreferrer">View transaction {txHash.substring(0, 8)}... on Etherscan</a>
          </div>
          <br />
          {(tokenUrls ?? []).map(([tokenId, openseaUrl, raribleUrl]) => (
            <div key={tokenId} className="flex justify-evenly items-center">
              <span>Successfully minted {tokenId}</span>
              <a href={openseaUrl} target={'_blank'} rel="noreferrer" className={'btn-ninja'}>OpenSea</a>
              <a href={raribleUrl} target={'_blank'} rel="noreferrer" className={'btn-ninja'}>Rarible</a>
            </div>
          ))}
          {!tokenUrls && <div>Waiting for transaction to be completed...</div>}
        </div>
      </div>
    </>
  )
}

export default function SaleModal () {
  const [step, setStep] = useState('soldout')
  const [mintState, setMintState] = useState(undefined)

  const steps = [
    ['check', <CheckStep step={step} setStep={setStep}/>],
    ['not-started', <NotStartedStep/>],
    ['soldout', <SoldoutStep/>],
    ['mint', <MintStep setStep={setStep} setMintState={setMintState}/>],
    ['final', <FinalStep setStep={setStep} mintState={mintState}/>],
  ]

  return steps.find(s => s[0] === step)[1]
}
