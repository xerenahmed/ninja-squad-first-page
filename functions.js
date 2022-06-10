import { Web3Provider } from '@ethersproject/providers'
import settings from './settings'

export async function handleChainChange () {
  await window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0x1' }], // chainId must be in hexadecimal numbers
  })

  window.location.reload()
}

export async function fetchFromBackend (endpoint, parameters) {
  const response = await fetch(`${settings.backendUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(parameters)
  })

  return response.json()
}

export function getLibrary (provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}
