import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { getBalance, getOnChainBalance, getSignMessage, getTokenContract, verifySignature } from './functions'
import { formatEther, parseEther } from 'ethers/lib/utils'
import { fetchFromBackend } from '../functions'

import settings from '../settings'

export function WithdrawTokensModal () {
  const { account, library } = useWeb3React()
  const [assets, setAssets] = useState(undefined)
  const [balance, setBalance] = useState(undefined)
  const [onChainBalance, setOnChainBalance] = useState(undefined)
  const [loading, setLoading] = useState()
  const [jwt, setJWT] = useState()
  const [error, setError] = useState()
  const [available, setAvailable] = useState()
  const [tx, setTx] = useState()
  const [success, setSuccess] = useState()
  const [message, setMessage] = useState()

  const [isRead, setIsRead] = useState()

  async function fetchData () {
    if (account) {
      const _balance = await getBalance(account)
      setBalance(_balance)

      const _onChainBalance = await getOnChainBalance(account, library)
      setOnChainBalance(_onChainBalance)
    }
  }

  useEffect(() => {
    fetchData()
  }, [account])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchAvailable = async () => {
    if (loading) {
      return
    }

    setLoading(true)

    let baseEndpoint = '/auth'

    const { message } = await getSignMessage(account, baseEndpoint)

    const signature = await library.getSigner(account).signMessage(message)

    const response = await verifySignature(account, signature, baseEndpoint)

    if (response.status) {
      setJWT(response.token)

      const availableAmountResponse = await fetchFromBackend('/withdraw/available', {
        token: localStorage.getItem('jwt'),
        address: account.toLowerCase()
      })

      console.log(availableAmountResponse)

      if (availableAmountResponse.status) {
        setAvailable(availableAmountResponse.amount)
        setLoading(false)
      } else {
        setAvailable(false)
        setError(availableAmountResponse.code)
      }

    }
  }

  const handleWithdraw = async () => {
    if (loading || !jwt || error) {
      return
    }

    setLoading(true)

    const initializeResponse = await fetchFromBackend('/withdraw/init', {
      token: jwt,
      address: account.toLowerCase()
    })

    console.log(initializeResponse)

    if (initializeResponse.status) {
      // Send transaction with MetaMask

      const {amount, nonce, deadline, v, r, s} = initializeResponse

      const tokenContract = await getTokenContract(library)

      const signer = library.getSigner()

      try {
        const tx = await tokenContract.connect(signer).functions.mintWithSignature(
          account.toLowerCase(),
          parseEther(String(amount)),
          nonce,
          deadline,
          v,
          r,
          s
        )

        setTx(tx)

        const receipt = await tx.wait()

        console.log(receipt)

        setLoading(false)
        setSuccess(true)
      } catch (e) {
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
  }

  return (
    <div className={'tokens-modal'}>
      <div className="w-full px-0">
        <div className="flex flex-col justify-center text-center pt-5 pb-8">
          <h2 className={'text-3xl sm:text-4xl font-kang color-primary'}>Your Balance in Ninja Ecosystem</h2>
        </div>
        {!balance && (
          <div className={'text-3xl font-kang'}>Loading...</div>
        )}

        {
          balance && <>
            <div className={'w-full'}>
              <table className={'tokens text-1xl sm:text-2xl font-kang w-full'} style={{
                maxWidth: '600px',
                margin: 'auto'
              }}>
                <tr>
                  <td className={'text-left mr-0 pr-0'}>From Airdrop</td>
                  <td>{balance.balance_airdrop} <small className={'font-rblack mb-2'}>$</small>NST</td>
                </tr>
                <tr>
                  <td className={'text-left mr-0 pr-0'}>From Yield</td>
                  <td>{balance.balance_yielded} <small className={'font-rblack mb-2'}>$</small>NST</td>
                </tr>
                <tr>
                  <td className={'p-4'}></td>
                </tr>
                <tr>
                  <td className={'text-left mr-0 pr-0'}>Total</td>
                  <td>{balance.balance_total} <small className={'font-rblack mb-2'}>$</small>NST
                  </td>
                </tr>
              </table>
            </div>

            <div className="mt-6 w-full md:px-32">
              <div className="flex flex-col shadow-lg p-4 bg-gray-300" style={{
                borderRadius: '1rem'
              }}>
                <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white font-bold w-full">
                  Before withdraw
                </h5>
                <div className={'text-center mb-4 text-gray-700 font-sans text-small px-4 pt-4'}>
                  <i><b>Please read carefully.</b> <br/></i>
                  <br/>
                  The balance you see above is your $NST balance in the Ninja Ecosystem.
                  You don't need to withdraw to use your balance in Ninja Ecosystem.
                  Once you withdraw, your balance will be transferred over to your wallet/MetaMask. <br/>
                  <br/>
                  $NST can be used for any utility that the Ninja Squad offers now and in the future.
                  You will not need to pay for gas when you use your $NST for Ninja Squad utilities.
                  <br/> <br/>
                  If you withdraw and later decide to purchase a Ninja Squad offer that requires $NST payments, you will need to deposit $NST back into the Ninja Ecosystem and this will require paying gas.
                  <br/> <br/>
                  Currently, deposits of on-chain $NST tokens not supported. We will implement this soon. <br/>

                  <hr style={{ borderColor: '#666' }} className={'mx-32 my-6'}/>

                  In February, you can withdraw 100 $NST tokens maximum. This limit will be increased in future. <br/>
                  <a href="https://medium.com/@hininja/launching-ninja-squad-utility-token-nst-8e1f36ba0f40"
                     target={'_blank'} className={'ninja-link'}>You can learn more in our blog post about $NST</a>

                  <br/> <br/>

                  After clicking the withdraw button, you will have three hours to approve the transaction & complete the blockchain confirmation of your transaction. <br/>
                  Please be sure you have enough Ethereum to pay your gas in your wallet. <br/>
                  <b className={'text-underline'}>IF THREE HOUR PASSES AND YOUR TRANSACTION ISN'T CONFIRMED IN THE ETHEREUM BLOCKCHAIN, THE AMOUNT YOU REQUEST TO WITHDRAW WILL BE BURNED</b> <br/>
                  We suggest you to select "Fast" option when you are sending the transfer to your Metamask.

                </div>

                {/*<small className={'mt-2 text-gray-500 font-bold '}>Cancel any time</small>*/}
              </div>


              {
                !isRead &&
                <div className="btn-ninja-simple mt-8" onClick={() => {
                  setIsRead(true)
                  fetchAvailable()
                }}>
                  <div>I confirm that I have read and understood the above</div>
                </div>
              }

              {
                isRead && !loading &&
                <div className="btn-ninja-simple mt-8" onClick={() => {
                  handleWithdraw()
                }}>
                  {
                    available && <div>Withdraw {formatEther(parseEther(String(available)))} <small className={'font-rblack mb-2'}>$</small>NST</div>
                  }
                  {
                    error && <>{error}</>
                  }
                </div>
              }

              {
                isRead && loading && <div className="btn-ninja-simple mt-8">
                  Loading... {
                      available && <>Withdraw {formatEther(parseEther(String(available)))} <small className={'font-rblack mb-2'}>$</small>NST</>
                  }
                </div>
              }

              {
                isRead && loading && tx && <div className="btn-ninja-simple mt-8">
                  <div>
                    <a href={`https://etherscan.io/tx/${tx.hash}`} target={'_blank'}>
                      Transaction is sent, waiting for confirmation...
                    </a>
                  </div>
                </div>
              }

              {
                isRead && tx && success && <>
                  <div className="btn-ninja-simple mt-8">
                    <div>
                      <a href={`https://etherscan.io/tx/${tx.hash}`} target={'_blank'}>
                        Withdraw successful
                      </a>
                    </div>
                  </div> <br/>
                  <div className="btn-ninja-simple mt-8" onClick={() => {
                    library.provider.sendAsync({
                      method: 'metamask_watchAsset',
                      params: {
                        "type": "ERC20",
                        "options": {
                          "address": settings.tokenContractAddress,
                          "symbol": 'NST',
                          "decimals": 18,
                          "image": 'https://s2.coinmarketcap.com/static/img/coins/200x200/16807.png',
                        },
                      },
                      id: Math.round(Math.random() * 99999999),
                    })
                  }}>
                    <div>
                      Add <small className={'font-rblack mb-2'}>$</small>NST to MetaMask
                    </div>
                  </div>
                </>
              }

              <br/>
              {
                message && <span style={{color: message[0]}}>{message[1]}</span>
              }
            </div>
          </>
        }
      </div>
    </div>
  )
}
