import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { getBalance, getOnChainBalance } from './functions'
import { formatEther, parseEther } from 'ethers/lib/utils'

// import settings from '../settings'

export function TokenModal () {
  const { account, library } = useWeb3React()
  const [assets, setAssets] = useState(undefined)
  const [balance, setBalance] = useState(undefined)
  const [onChainBalance, setOnChainBalance] = useState(undefined)

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

  return (
    <div className={'tokens-modal'}>
      <div className="w-full px-0 sm:px-32">
      <div className="flex flex-col justify-center text-center pt-5 pb-8">
        <h2 className={'text-4xl sm:text-5xl font-kang color-primary'}>Your Balance</h2>
      </div>
      {!balance && (
        <div className={'text-3xl font-kang'}>Loading...</div>
      )}

      {
        balance && <>
          <table className={'tokens text-2xl sm:text-3xl font-kang w-full'}>
            <tr>
              <td className={'text-left mr-0 pr-0'}>Airdrop</td>
              <td>{balance.balance_airdrop} <small className={'font-rblack mb-2'}>$</small>NST</td>
            </tr>
            <tr>
              <td className={'text-left mr-0 pr-0'}>Yield</td>
              <td>{balance.balance_yielded} <small className={'font-rblack mb-2'}>$</small>NST</td>
            </tr>
            {
              onChainBalance && <tr>
                <td className={'text-left mr-0 pr-0'}>On-chain</td>
                <td>{formatEther(onChainBalance.sub(onChainBalance.mod(1e14)))} <small className={'font-rblack mb-2'}>$</small>NST</td>
              </tr>
            }
            <tr>
              <td className={'p-4'}></td>
            </tr>
            <tr>
              <td className={'text-left mr-0 pr-0'}>Total</td>
              <td>{onChainBalance ? formatEther(parseEther(balance.balance_total).add(onChainBalance.sub(onChainBalance.mod(1e14)))) : balance.balance_total} <small className={'font-rblack mb-2'}>$</small>NST
              </td>
            </tr>
          </table>
          <div className={'my-12 font-kang w-full flex'}>
            {/*<div className="flex flex-row w-full justify-center">*/}
            {/*  <div className="btn-ninja-simple px-16">*/}
            {/*    <div>Withdraw Tokens</div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </>
      }
      </div>

      <div className={'flex flex-col justify-center text-center mt-12 text-2xl sm:text-3xl font-kang'}>
        {!balance && (
          <div className={'text-3xl'}>Loading...</div>
        )}

        {
          balance && <>
            <div className="flex flex-col sm:flex-row">
              <div className={'w-full px-0 sm:px-4'}>
                <div className="flex flex-col justify-center text-center pt-5 pb-12">
                  <h2 className={'text-3xl sm:text-4xl font-kang color-primary'}>Your Airdrop</h2>
                </div>

                <table className={'tokens w-full'}>
                  <tr>
                    <td className={'text-left mr-0 pr-0'}>{balance.count_deep_alpha_initial} x Deep Alpha</td>
                    <td>{balance.count_deep_alpha_initial * 250} <small className={'font-rblack mb-2'}>$</small>NST</td>
                  </tr>
                  <tr>
                    <td className={'text-left mr-0 pr-0'}>{balance.count_spectator_initial} x Spectator</td>
                    <td>{balance.count_spectator_initial * 50} <small className={'font-rblack mb-2'}>$</small>NST</td>
                  </tr>
                  <tr>
                    <td className={'text-left mr-0 pr-0'}>{balance.count_wagmi_initial} x WAGMI</td>
                    <td>{balance.count_wagmi_initial * 42} <small className={'font-rblack mb-2'}>$</small>NST</td>
                  </tr>
                  <tr>
                    <td className={'text-left mr-0 pr-0'}>{balance.count_santa_initial} x Santa</td>
                    <td>{balance.count_santa_initial * 22} <small className={'font-rblack mb-2'}>$</small>NST</td>
                  </tr>
                  <tr>
                    <td className={'text-left mr-0 pr-0 flex'}>
                      <div className={'mr-2'}>{balance.count_not_listed_initial} x</div>
                      <span>Not on sale or <br/> listed over 1 ETH</span></td>
                    <td>{balance.count_not_listed_initial * 15} <small className={'font-rblack mb-2'}>$</small>NST</td>
                  </tr>
                  <tr>
                    <td className={'text-left mr-0 pr-0 flex'}>
                      <div className={'mr-2'}>{balance.count_did_not_list_025_initial} x</div>
                      <span>Not listed lower <br/> than 0.25</span></td>
                    <td>{balance.count_did_not_list_025_initial * 10} <small className={'font-rblack mb-2'}>$</small>NST
                    </td>
                  </tr>
                  <tr>
                    <td className={'p-4'}></td>
                  </tr>
                  <tr>
                    <td className={'text-left mr-0 pr-0'}>Total</td>
                    <td>{balance.balance_airdrop} <small className={'font-rblack mb-2'}>$</small>NST</td>
                  </tr>
                </table>
              </div>
              <div className={'w-full px-0 sm:px-4'}>
                <div className="flex flex-col justify-center text-center pt-12 sm:pt-5 w-full pb-12">
                  <h2 className={'text-3xl sm:text-4xl font-kang color-primary'}>Your Daily Yield</h2>
                </div>

                <table className={'tokens  w-full'}>
                  <tr>
                    <td className={'text-left mr-0 pr-0'}>{balance.count_deep_alpha} x Deep Alpha</td>
                    <td>{balance.count_deep_alpha * 3} <small className={'font-rblack mb-2'}>$</small>NST</td>
                  </tr>
                  <tr>
                    <td className={'text-left mr-0 pr-0'}>{balance.count_spectator} x Spectator</td>
                    <td>{balance.count_spectator * 2} <small className={'font-rblack mb-2'}>$</small>NST</td>
                  </tr>
                  <tr>
                    <td className={'text-left mr-0 pr-0'}>{balance.count_wagmi} x WAGMI</td>
                    <td>{balance.count_wagmi * 2} <small className={'font-rblack mb-2'}>$</small>NST</td>
                  </tr>
                  <tr>
                    <td className={'text-left mr-0 pr-0'}>{balance.count_alpha} x NINJA</td>
                    <td>{balance.count_alpha * 1} <small className={'font-rblack mb-2'}>$</small>NST</td>
                  </tr>
                  <tr>
                    <td className={'p-4'}>

                    </td>
                  </tr>
                  <tr>
                    <td className={'text-left mr-0 pr-0'}>Total</td>
                    <td>{balance.count_deep_alpha * 3 + balance.count_spectator * 2 + balance.count_wagmi * 2 + balance.count_alpha * 1}
                      <small className={'font-rblack mb-2'}>$</small>NST
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}
