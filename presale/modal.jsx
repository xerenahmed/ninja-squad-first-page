import { useWeb3React } from '@web3-react/core'
import { useEffect, useState, useRef } from 'react'
import { useModal } from 'react-context-modals'
import { ConnectWalletModal } from '../connect/connect-wallet-modal'
import { handleChainChange } from '../functions'
import settings from '../settings'
import { isPresaleActive, getCurrentMintCount, presaleMint, getSignMessage, verifySignature, parseLogs } from './functions'

const CheckStep = ({ setStep }) => {
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
        openModal: PresaleModal
      })

      return
    }

    async function checkPresale() {
      const result = await isPresaleActive(library)

      setStep(result ? 'sign' : 'not-started')
    }

    checkPresale()
  }, [account, library, setStep, showModal])

  return (
    <>
      <div className="flex flex-col justify-center text-center w-full" style={{
        minWidth: '50vw'
      }}>
        <h2 className={'text-5xl font-kang'}>Presale</h2>
        <div className={'font-sans text-2xl my-8'}>Welcome Ninja!<br/>First we're checking whether presale is active<br/>Please
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
        <h2 className={'text-5xl font-kang'}>Presale</h2>
        <div className={'font-sans text-2xl my-8'}>Welcome Ninja!<br/>Presale has not started yet.</div>
      </div>
    </>
  )
}

const SignStep = ({ setStep, setSignState }) => {
  const { account, library } = useWeb3React()
  const { showModal } = useModal()

  useEffect(() => {
    if (!account) {
      showModal(ConnectWalletModal, {
        openModal: PresaleModal
      })

      return
    }

    async function sign() {
      const acc = String(account)
      const { message } = await getSignMessage(acc)
      const signature = await library.getSigner(acc).signMessage(message)

      try {
        const { status, nonce, proof, allowance } = await verifySignature(acc, signature)

        if (status !== 'ok') {
          throw new Error(`Invalid signature - ${status}`)
        }

        setSignState({
          signature,
          nonce,
          proof,
          allowance,
        })
        setStep('mint')
      }
      catch (e) {
        console.error(e)
      }
    }

    sign()
  }, [account, library, showModal, setSignState, setStep])

  return (
    <>
      <div className="flex flex-col justify-center text-center w-full" style={{
        minWidth: '50vw'
      }}>
        <h2 className={'text-5xl font-kang'}>Presale</h2>
        <div className={'font-sans text-2xl my-8'}>Welcome Ninja!<br/>First we need to verify your wallet. <br/>Please
          sign the login message.</div>
      </div>
    </>
  )
}

const MintStep = ({ setStep, signState, setMintState }) => {
  const { account, library } = useWeb3React()
  const { showModal } = useModal()

  const [balance, setBalance] = useState(undefined)
  const [message, setMessage] = useState()
  const numberOfTokensRef = useRef(null)

  async function mint() {
    const acc = String(account)
    const { nonce, proof, allowance } = signState

    const numberOfTokens = Number(numberOfTokensRef.current.value)

    setMessage(undefined)

    try {
      const tx = await presaleMint(library, acc, numberOfTokens, allowance, nonce, proof)

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
        openModal: PresaleModal
      })

      return
    }

    async function getBalance() {
      const acc = String(account)
      const { allowance } = signState

      const used = await getCurrentMintCount(library, acc)

      setBalance({
        allowance: allowance,
        used: used,
        remaining: allowance - used,
      })
    }

    getBalance()
  }, [account, library, showModal, signState])

  function Picker(props) {
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
        Available: {props.balance.remaining} / {props.balance.allowance}
        <br />
        <br />
        Number of Tokens: <select ref={numberOfTokensRef}>
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
        <h2 className={'text-5xl font-kang'}>Presale</h2>
        <div className={'font-sans text-2xl my-8'}>
          Welcome Ninja!
          <br/>
          <Picker balance={balance} />
        </div>
      </div>
    </>
  )
}

const FinalStep = ({ setStep, signState, mintState }) => {
  const { account, library } = useWeb3React()
  const { showModal } = useModal()

  const [ mintedTokens, setMintedTokens ] = useState()

  useEffect(() => {
    if (!account) {
      showModal(ConnectWalletModal, {
        openModal: PresaleModal
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
      `${settings.contractOpenseaUrl}/assets/${settings.contractAddress}/${tokenId}`,
      `${settings.contractRaribleUrl}/token/${settings.contractAddress}:${tokenId}`
    ]
  )

  return (
    <>
      <div className="flex flex-col justify-center text-center w-full" style={{
        minWidth: '50vw'
      }}>
        <h2 className={'text-5xl font-kang'}>Presale</h2>
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
            <div key={tokenId}>
              Successfully minted {tokenId}
              {' '}
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

export default function PresaleModal () {
  const [step, setStep] = useState('check')
  const [signState, setSignState] = useState(undefined)
  const [mintState, setMintState] = useState(undefined)

  const steps = [
    ['check', <CheckStep setStep={setStep}/>],
    ['not-started', <NotStartedStep/>],
    ['sign', <SignStep setStep={setStep} setSignState={setSignState}/>],
    ['mint', <MintStep setStep={setStep} signState={signState} setMintState={setMintState}/>],
    ['final', <FinalStep setStep={setStep} signState={signState} mintState={mintState}/>],
  ]

  return steps.find(s => s[0] === step)[1]
}
