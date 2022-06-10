import { useWeb3React } from '@web3-react/core'
import { fetchFromBackend } from '../functions'
import { useEffect, useState } from 'react'
import { parseEther } from 'ethers/lib/utils'

export const OfferItem = ({ item, activeOffers, balance, refresh }) => {
  const { account, library } = useWeb3React()
  const [loading, setLoading] = useState()
  const [active, setActive] = useState()
  const [notEnoughBalance, setNotEnoughBalance] = useState()
  const [message, setMessage] = useState()

  useEffect(() => {
    const offer = activeOffers.find(o => o.item_id === item.itemId)
    if (offer) {
      if (offer.status === 'ACTIVE') {
        setActive(true)
      }
    }

    if (!parseEther(balance.balance_yielded).gte(parseEther(item.cost))) {
      setNotEnoughBalance(true)
    }
  }, [])

  const handleSubscribe = async (itemId) => {
    if (loading || active || notEnoughBalance) {
      return
    }

    setLoading(true)

    const response = await fetchFromBackend('/offers/use', {
      itemId,
      token: localStorage.getItem('jwt'),
      address: account.toLowerCase()
    })

    console.log(response)

    if (response.status) {
      const signature = await library.getSigner(account).signMessage(response.message)

      console.log(signature)

      const confirmResponse = await fetchFromBackend('/offers/confirm', {
        purchase: response.purchase,
        token: localStorage.getItem('jwt'),
        signature: signature,
        address: account.toLowerCase()
      })

      setLoading(false)

      if (confirmResponse.status) {
        setMessage('Congratulations!')
        setActive(true)

        refresh()
      }
    }
  }

  const OfferButtonText = () => {
    if (message) return message

    if (loading) return 'Loading'

    if (active) {
      return (
        <div>
          {item.type === 'SUBSCRIPTION' ? 'Active' : 'Used'}
        </div>
      )
    }

    if (notEnoughBalance) {
      return <div>Not enough balance – {item.purchaseCostText}</div>
    }

    return <div>{item.purchaseButtonText}</div>
  }

  const OfferButton = () => {
    return (
      <div className="btn-ninja-simple mt-2 w-full" onClick={() => {
        handleSubscribe(item.itemId)
      }}>
        <OfferButtonText/>
      </div>
    )
  }

  return (
    <div className="flex flex-col shadow-lg p-4 bg-gray-300" style={{
      borderRadius: '1rem'
    }}>
      <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white font-bold w-full">
        {item.title}
      </h5>
      <div className={'text-center mb-4 text-gray-700 font-sans text-small px-4 pt-4'}>
        {active ? item.purchasedDescription : item.description}
      </div>
      <OfferButton/>
      {/*<small className={'mt-2 text-gray-500 font-bold '}>Cancel any time</small>*/}
    </div>
  )
}