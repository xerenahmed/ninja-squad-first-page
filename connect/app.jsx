import { useEffect, useState } from 'react'
import { useModal } from 'react-context-modals'
import { ConnectWalletModal } from './connect-wallet-modal'
import { useWeb3React } from '@web3-react/core'
import settings from '../settings'
import { fetchFromBackend, handleChainChange } from '../functions'
import { getSignMessage, verifySignature, b64_to_utf8 } from './functions'
import ReCAPTCHA from 'react-google-recaptcha'
import JoinRaffleModal from '../raffle/modal'
import { ethers } from 'ethers'
import { Offers } from './offers'
import { OfferItem } from './offer-item'

const ACTIONS = {
  DISCORD_ROLE: 'discord-role',
  SUBSCRIBE_TOOLS: 'subscribe-tools',
}


const SignStep = ({action}) => {
  const { account, library, chainId } = useWeb3React()
  const { showModal, hideModal } = useModal()
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState('sign')
  const [data, setData] = useState()

  const [ens, setENS] = useState()

  useEffect(() => {
    (async () => {
      if (account) {
        const name = await library.lookupAddress(account)
        setENS(name)
      }
    })()
  }, [account, library])

  useEffect(() => {
    if (settings.enableSwitchingNetwork && chainId && chainId !== 1) {
      // handleChainChange()
    }
  }, [chainId])

  useEffect(() => {
    (async () => {
      if (account && step !== 'success') {
        const acc = String(account)
        setLoading(true)

        let baseEndpoint = '/discord'

        if (action === ACTIONS.SUBSCRIBE_TOOLS) baseEndpoint = '/tools'

        const { message } = await getSignMessage(acc, baseEndpoint)

        const signature = await library.getSigner(acc).signMessage(message)

        const response = await verifySignature(acc, signature, baseEndpoint)

        if (response.status === 'ok') {
          setLoading(false)

          localStorage.setItem('jwt', response.token)

          setStep('success')
          setData(response.data)
        }
      }
    })()
  }, [])

  const refresh = async () => {
    const response = await fetchFromBackend('/offers/fetch', {
      token: localStorage.getItem('jwt'),
      address: account.toLowerCase()
    })

    if (response.status) {
      setData(response.data)
    }
  }

  const accountString = ens ? ens : (account ? account.substring(0, 6) + '...' + account.substring(38) : '')

  if (action === ACTIONS.DISCORD_ROLE) {
    return (
      <>
        <div className="flex flex-col justify-center text-center w-full" style={{
          // minWidth: '50vw'
        }}>
          {loading && <div className="font-kang text-3xl text-center mt-8">Loading...</div>}
          {step === 'sign' && <div className="text-3xl font-kang mt-8">Please sign message</div>}
          {step === 'success' && <div className="text-3xl font-kang mt-8">Success! Now you can close this page. Assigning the roles can take up to two minutes. <br/></div>}
        </div>
      </>
    )
  }

  if (action === ACTIONS.SUBSCRIBE_TOOLS) {
    return (
      <>
        <div className="flex flex-col justify-center text-center w-full" style={{
          minWidth: '50vw'
        }}>
          {loading && <div className="font-kang text-3xl text-center mt-8">Loading...</div>}
          {step === 'sign' && <div className="text-3xl font-kang mt-8">Please sign message</div>}
          {step === 'success' && data && <>
            <div className={'flex flex-col justify-center align-center'}>
              <div className={'flex justify-center'}>
                <div className={'text-3xl font-kang'}>
                  Welcome {accountString}
                </div>
              </div>
              <div className="my-4 font-kang text-xl">
                Balance: {data.balance.balance_total} <small className={'font-rblack mb-2'}>$</small>NST
              </div>
              <div className="my-4"></div>
              <div className="font-kang text-3xl mb-4">Offers</div>
              {
                Offers.map((offer, i) => {
                  return (
                    <>
                      {i > 0 && <div className="mt-8"></div>}
                      <OfferItem item={offer} activeOffers={data.activeOffers} balance={data.balance} refresh={refresh} />
                    </>
                  )
                })
              }
            </div>
          </>}
        </div>
      </>
    )
  }
}

export const ConnectWalletApp = () => {
  const { showModal } = useModal()
  const { account } = useWeb3React()

  const [action, setAction] = useState(ACTIONS.DISCORD_ROLE)

  useEffect(() => {
    const url = new URL(window.location);
    const token = url.searchParams.get("token");

    if (token) {
      const base64 = token.split('.')[1]
      const data = JSON.parse(b64_to_utf8(base64))

      console.log(data)

      if (data.action && data.action === ACTIONS.SUBSCRIBE_TOOLS) {
        setAction(ACTIONS.SUBSCRIBE_TOOLS)
      }
    }
  }, [])

  useEffect(() => {
    if (account) {

    } else {
      // showModal(ConnectWalletModal)
    }
  }, [account])

  return (
    <>
      <div className="w-screen md:w-1/2 h-screen flex justify-center items-center mx-auto">
        <div className={'modal-like'}>
          {
            account ?
              <>
                {action === ACTIONS.DISCORD_ROLE && <h3 className={'text-3xl font-kang'}>Connected to {account.substring(0, 8)}...{account.substring(account.length - 4)}</h3>}
                <SignStep action={action}/>
              </>
              : <ConnectWalletModal/>
          }
        </div>
      </div>
    </>
  )
}