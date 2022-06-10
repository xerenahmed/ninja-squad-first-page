import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { MyNinjasModal } from './my-ninjas-modal'
import { TokenModal } from './base-modal'
import RedeemCourseModal from './redeem-course-modal'
import { WithdrawTokensModal } from './withdraw-tokens-modal'

export function NinjaBaseModal () {
  const { account } = useWeb3React()
  const [activeTab, setActiveTab] = useState('token');

  const tabs = [
    {
      key: 'token',
      buttonText: 'Token',
      component: <TokenModal/>
    },
    {
      key: 'my-ninjas',
      buttonText: 'My Ninjas',
      component: <MyNinjasModal/>
    },
    {
      key: 'withdraw-tokens',
      buttonText: 'Withdraw Tokens',
      component: <WithdrawTokensModal/>
    },
    // {
    //   key: 'redeem-course',
    //   buttonText: 'Redeem Course',
    //   component: <RedeemCourseModal/>
    // }
  ]

  return (
    <>
      <div className="flex sm:flex-row flex-col justify-center text-center pt-5 w-100">
        {tabs.map(tab => (
          <div className={'m-2 mx-4 text-5xl font-kang color-primary btn-ninja-simple ' + (tab.key === activeTab && 'btn-active')} onClick={() => {
            setActiveTab(tab.key)
          }}>
            <div>
              {tab.buttonText}
            </div>
          </div>
        ))}
      </div>

      <div className={'flex flex-col justify-center text-center mt-12'}>
        {
          tabs.find(tab => tab.key === activeTab).component
        }
      </div>
    </>
  )
}
