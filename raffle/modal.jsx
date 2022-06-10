import { useWeb3React } from '@web3-react/core'
import { useEffect, useState, useRef } from 'react'
import { generatePath } from 'react-router-dom'
import { useModal } from 'react-context-modals'
import { ConnectWalletModal } from '../connect/connect-wallet-modal'
import { handleChainChange } from '../functions'
import settings from '../settings'
import { getSignMessage, verifySignature, manualTweetConfirmation } from './functions'
import ReCAPTCHA from "react-google-recaptcha";

const SignStep = ({ setStep }) => {
  const { account, library, chainId } = useWeb3React()
  const { showModal, hideModal } = useModal()

  useEffect(() => {
    if (settings.enableSwitchingNetwork &&chainId && chainId !== 1) {
      handleChainChange()
    }
  }, [chainId])

  useEffect(() => {
    if (!account) {
      showModal(ConnectWalletModal, {
        openModal: JoinRaffleModal
      })
    }
  }, [account, showModal])

  const onChange = async (value) => {
    if (account && value) {
      const acc = String(account)
      const { message } = await getSignMessage(acc, value)

      const signature = await library.getSigner(acc).signMessage(message)
      const { status, code, confirmationKey } = await verifySignature(acc, signature)

      localStorage.setItem('signature', signature)
      localStorage.setItem('confirmationKey', confirmationKey)

      if (code === 'joined') {
        setStep('joined')
      } else if (status === true) {
        setStep('send-tweet')
      } else {
        hideModal(JoinRaffleModal)
      }
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center text-center w-full" style={{
        minWidth: '50vw'
      }}>
        <h2 className={'text-5xl font-kang'}>Join Raffle</h2>
        <div className={'font-sans text-2xl my-8'}>Welcome Ninja!<br/>First we need to verify your wallet. <br/>Please
          sign the login message.</div>

        <div className={'mx-auto'}>
          <ReCAPTCHA
            sitekey="6LdBZzMdAAAAAHGk24LSGaJ9ac0w7q9qNffyczOM"
            onChange={(val) => {onChange(val)}}
          />
        </div>
      </div>
    </>
  )
}

const SendTweetStep = ({ setStep }) => {
  const { account, library } = useWeb3React()
  const { showModal } = useModal()
  const [ens, setENS] = useState()

  useEffect(() => {
    if (!account) {
      showModal(ConnectWalletModal, {
        openModal: JoinRaffleModal
      })
    }

    (async () => {
      if (account) {
        const name = await library.lookupAddress(account)
        setENS(name)
      }
    })()
  }, [account, library, showModal])

  const accountString = ens ? ens : (account ? account.substring(0, 6) : '')
  // ethers.utils.getAddress(account)
  const sendTweetUri = generatePath('/send-tweet/:confirmationKey', { confirmationKey: localStorage.getItem('confirmationKey') })

  return (
    <>
      <div className="flex flex-col justify-center text-center w-full" style={{
        minWidth: '50vw'
      }}>
        <h2 className={'text-5xl font-kang'}>Join Raffle</h2>
        <div className={'font-sans text-2xl mt-8 mb-12'}>Now, you need to send a tweet <span
          className={'font-kang'}>{accountString}</span>
          <br/>
          We are sure you can easily handle this quest Ninja!
        </div>

        <a className={'btn-ninja btn-big'} target={'_blank'} rel="noreferrer"
          href={sendTweetUri}
          onClick={(e) => {
            e.preventDefault()

            setStep('send-tweet-confirmation')
          }}
        >
          <div>Send Tweet</div>
        </a>

        <div className={'mt-12 mb-6 font-sans'}>
          <p>
            You are free to edit the content of the tweet. But don’t
            delete "Key: ninja-{localStorage.getItem('confirmationKey') ?? 'xxxxxx'}"
            and
            <br />
            #ninjasquad hashtag. If you delete your tweet, you're not gonna make it
          </p>
          <br />
          You've already sent the tweet and had trouble?{' '}
          <a href="#alternative-confirmation" className={'font-kang text-xl'} onClick={(e) => {
            e.preventDefault()

            setStep('send-tweet-confirmation-alternative')
          }}>
            try the alternative confirmation method
          </a>.
        </div>
      </div>
    </>
  )
}

const SendTweetConfirmationStep = ({ setStep }) => {
  const { account, library } = useWeb3React()
  const { showModal } = useModal()
  const [ens, setENS] = useState()

  // const [isTakingLonger, setIsTakingLonger] = useState(false)

  useEffect(() => {
    if (!account) {
      showModal(ConnectWalletModal, {
        openModal: JoinRaffleModal
      })
    }

    (async () => {
      if (account) {
        const name = await library.lookupAddress(account)
        setENS(name)
      }
    })()
  }, [account, library, showModal])

  // useEffect(() => {
  //   if (!isTakingLonger) {
  //     const takingLongerTimer = setTimeout(() => {
  //       setIsTakingLonger(true)
  //     }, 5000)

  //     return () => clearTimeout(takingLongerTimer)
  //   }
  // }, [isTakingLonger])

  useEffect(() => {
    const interval = setInterval(async () => {
      const signature = localStorage.getItem('signature')

      const response = await verifySignature(account, signature)

      if (response.code === 'joined') {
        clearInterval(interval)
        setStep('joined')
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [account, setStep])

  const accountString = ens ? ens : (account ? account.substring(0, 6) : '')

  return (
    <>
      <div className="flex flex-col justify-center text-center w-full" style={{
        minWidth: '50vw'
      }}>
        <h2 className={'text-5xl font-kang'}>Join Raffle</h2>
        <div className={'font-sans text-2xl mt-8 mb-12'}>Now, you need to send a tweet <span
          className={'font-kang'}>{accountString}</span>
          <br/>
          We are sure you can easily handle this quest Ninja!
        </div>

        <a href="#confirm" className={'btn-ninja btn-big'} onClick={(e) => { e.preventDefault() }}>
          <div>Confirming...</div>
        </a>

        <div className={'mt-12 mb-6 font-sans'}>
          <p>
            You are free to edit the content of the tweet. But don’t
            <br />
            delete
            "Key: ninja-{localStorage.getItem('confirmationKey') ?? 'xxxxxx'}"
            and #ninjasquad hashtag.
          </p>
          <br />
          {/* {
            !isTakingLonger && <>
              Please wait, this process can take up to 15 seconds. <br/>
            </>
          } */}
          Having trouble? <a href="#alternative-confirmation" className={'font-kang text-xl'} onClick={(e) => {
            e.preventDefault()

            setStep('send-tweet-confirmation-alternative')
          }}>
            try an alternative confirmation method
          </a>. <br/>
          If you still having issues please refresh the page and try again after a while.<br />
          In case of your problem persists, please feel free to{' '}
          <a href="https://discord.com/invite/ninjasquad" target={'_blank'} rel="noreferrer" className={'font-kang text-xl'}>
            contact us
          </a>.
          <br />
        </div>
      </div>
    </>
  )
}


const SendTweetConfirmationStepAlternative = ({ setStep }) => {
  const { account, library } = useWeb3React()
  const { showModal } = useModal()
  const [ens, setENS] = useState()
  const [message, setMessage] = useState()
  const inputUrlRef = useRef(null)

  useEffect(() => {
    if (!account) {
      showModal(ConnectWalletModal, {
        openModal: JoinRaffleModal
      })
    }

    (async () => {
      if (account) {
        const name = await library.lookupAddress(account)
        setENS(name)
      }
    })()
  }, [account, library, showModal])

  async function checkTweet () {
    const tweetCheck = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/status\/([0-9_]+)/
    const tweetUri = inputUrlRef.current.value

    if (!tweetCheck.test(tweetUri)) {
      setMessage(['red', 'please check your input!'])

      return
    }

    setMessage(['black', 'please wait while checking your tweet in background...'])

    const acc = String(account)
    const res = await manualTweetConfirmation(acc, '', tweetUri)

    if (res.status === 'invalid_confirmation_key') {
      setMessage(['red', 'invalid confirmation key!'])
    } else if (res.status === 'no_tweet_data' || res.status === 'unknown_error') {
      setMessage(['red', 'unable to fetch tweet!'])
    } else if (res.status === 'joined') {
      setStep('joined')
    } else {
      setMessage(['red', 'unknown error!'])
    }
  }

  const accountString = ens ? ens : (account ? account.substring(0, 6) : '')

  return (
    <>
      <div className="flex flex-col justify-center text-center w-full" style={{
        minWidth: '50vw'
      }}>
        <h2 className={'text-5xl font-kang'}>Join Raffle</h2>

        <div className={'font-sans text-2xl mt-8 mb-2'}>Now, you need to send a tweet <span
          className={'font-kang'}>{accountString}</span>
          <br />
          <br />
          Then paste your tweet's URL below:
        </div>

        <input ref={inputUrlRef} type="url" placeholder="https://twitter.com/ninjasquadnft/status/1460699256008892417" pattern="https://twitter.com/.*" style={{ width: '90%', padding: '6px 12px' }} required />
        <br />
        {message && (
          <div style={{ color: message[0] }}>{message[1]}</div>
        )}
        <a
          href="#check-tweet"
          className={'btn-ninja btn-big'}
          onClick={(e) => {
            e.preventDefault()

            if (!message || message[0] !== 'black') {
              checkTweet()
            }
          }}
        >
          <div>Check Tweet</div>
        </a>

        <div className={'mt-12 mb-6 font-sans'}>
          <a href="#confirmation" className={'font-kang text-xl'} onClick={(e) => {
            e.preventDefault()

            setStep('send-tweet-confirmation')
          }}>
            go back to the normal confirmation method
          </a>
        </div>
      </div>
    </>
  )
}


const JoinedStep = ({ setStep }) => {
  const { account } = useWeb3React()
  const { showModal } = useModal()

  useEffect(() => {
    if (!account) {
      showModal(ConnectWalletModal, {
        openModal: JoinRaffleModal
      })
    }
  }, [account, showModal])

  return (
    <>
      <div className="flex flex-col justify-center text-center w-full" style={{
        minWidth: '50vw'
      }}>
        <h2 className={'text-5xl font-kang'}>Joined!</h2>
        <img src="/img/ninjaKonfetti.gif" alt="" width={250} className={'mx-auto'}/>
        <div className={'font-sans text-2xl mt-8 mb-8'}>You successfully joined the raffle ninja! <br/>
          <br/>
          Now, it's time to...</div>

        <div className={'mt-0 mb-6 flex-col flex text-3xl'}>
          <a href="https://discord.com/invite/ninjasquad" target="_blank" rel="noreferrer" className={'font-kang'}>
            Join the community in Discord
          </a>

          <a href="https://twitter.com/ninjasquadnft" target="_blank" rel="noreferrer" className={'font-kang mt-6'}>
            Get the updates in Twitter
          </a>

          {
            navigator.share && <a href="#share" className={'font-kang mt-6'} onClick={(e) => {
              e.preventDefault()

              navigator.share({
                title: 'Ninja Squad NFT - Ninja Trader\'s NFT Collection',
                text: 'Have you seen the Ninja Squad NFT Raffle? I\'ve joined it already. You definitely check out it.',
                url: 'https://ninjasquadnft.io'
              })
                .then(() => console.log('Share was successful.'))
                .catch((error) => console.log('Sharing failed', error))
            }
            }>
              Share with friends
            </a>
          }
        </div>
      </div>
    </>
  )
}

export default function JoinRaffleModal () {
  const [step, setStep] = useState('sign')

  const steps = [
    ['sign', <SignStep setStep={setStep}/>],
    ['send-tweet', <SendTweetStep setStep={setStep}/>],
    ['send-tweet-confirmation', <SendTweetConfirmationStep setStep={setStep}/>],
    ['send-tweet-confirmation-alternative', <SendTweetConfirmationStepAlternative setStep={setStep}/>],
    ['joined', <JoinedStep setStep={setStep}/>]
  ]

  return steps.find(s => s[0] === step)[1]
}
