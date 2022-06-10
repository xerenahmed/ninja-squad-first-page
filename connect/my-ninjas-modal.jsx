import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
// import settings from '../settings'

const contractAddress = '0x8C186802b1992f7650Ac865d4CA94D55fF3C0d17' // settings.contractAddress
const contractOpenseaUrl = 'https://opensea.io' // settings.contractOpenseaUrl
const contractOpenseaApi = 'https://api.opensea.io/api/v1' // settings.contractOpenseaApi

function generateOpenseaAssetsUrl(account) {
  const parameters = {
    owner: account,
    asset_contract_address: contractAddress,
    order_direction: 'desc',
    offset: 0,
    limit: 50,
    collection: 'ninja-squad-official'
  }

  const queryString = Object.entries(parameters)
    .map(([key, value]) => (`${key}=${encodeURIComponent(value)}`))
    .join('&');

  return `${contractOpenseaApi}/assets?${queryString}`
}

async function fetchOpenseaAssets(account) {
  const url = generateOpenseaAssetsUrl(account)

  const response = await fetch(url)
  const data = await response.json()

  return data.assets;
}

export function MyNinjasModal () {
  const { account } = useWeb3React()
  const [assets, setAssets] = useState(undefined)

  useEffect(() => {
    async function fetchData() {
      const fetchedAssets = await fetchOpenseaAssets(account)

      setAssets(fetchedAssets)
    }

    fetchData()
  }, [account])

  function AssetsView() {
    const assetBaseUrl = `${contractOpenseaUrl}/assets/${contractAddress}`

    return (
      <div className="grid grid-cols-3 gap-4">
        {assets.map(asset => (
          <div key={asset.id} className="col-span-1 px-4 my-ninja-item">
            <div className="flex flex-col items-center">
              <a href={`${assetBaseUrl}/${asset.token_id}`} target="_blank" rel="noopener noreferrer">
                <img src={`https://lc2rtjgzig.execute-api.eu-west-1.amazonaws.com/prod/image/${asset.token_id}`} alt={asset.name} className="w-64 h-64"/>
                <div className="font-kang text-3xl py-6">{asset.name}</div>
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col justify-center text-center pt-5">
        <h2 className={'text-5xl font-kang color-primary'}>My Ninjas</h2>
      </div>

      <div className={'flex flex-col justify-center text-center mt-12'}>
        {!assets && (
          <div>Loading...</div>
        )}
        {assets && (
          <AssetsView />
        )}
      </div>
    </>
  )
}
