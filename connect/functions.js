import { ethers } from 'ethers'
import { fetchFromBackend } from '../functions'
import contractAbi from '../connect/contract.abi.json'
import tokenContractAbi from '../connect/token-contract.abi.json'
import settings from '../settings'

export function getContract(library) {
  const contract = new ethers.Contract(settings.contractAddress, contractAbi, library)

  if (settings.env === 'development') {
    window.contract = contract
  }

  return contract
}

export function getTokenContract(library) {
  const contract = new ethers.Contract(settings.tokenContractAddress, tokenContractAbi, library)

  if (settings.env === 'development') {
    window.contract = contract
  }

  return contract
}

export function isPresaleActive(library) {
  const contract = getContract(library)

  return contract.IS_PRESALE_ACTIVE()
}

export function getCurrentMintCount(library, address) {
  const contract = getContract(library)

  return contract.getCurrentMintCount(address)
}

export async function presaleMint(library, address, numberOfTokens, allowance, nonce, proof) {
  const contract = getContract(library)
  const signer = library.getSigner(address)

  const tx = await contract.connect(signer).presaleMint(
    address,
    numberOfTokens,
    allowance,
    nonce,
    proof,
    {
      value: ethers.utils.parseUnits(
        String(88000000 * numberOfTokens),
        'gwei',
      ).toHexString(),
    }
  )

  if (settings.env === 'development') {
    window.lastTx = tx
  }

  return tx
}

export function getSignMessage(account, baseEndpoint) {
  return fetchFromBackend(
    baseEndpoint + '/auth_message',
    { address: ethers.utils.getAddress(account) }
  )
}

export function verifySignature(account, signature, baseEndpoint) {
  const url = new URL(window.location);
  const token = url.searchParams.get("token");

  const parameters = { address: ethers.utils.getAddress(account), signature }

  if (token) {
    parameters.token = token;
  }

  return fetchFromBackend(
    baseEndpoint + '/auth_verify',
    parameters
  )
}

export function parseLogs(library, receipt) {
  const contract = getContract(library)

  const logs = receipt.logs.map(x => contract.interface.parseLog(x))

  return logs
}

export function getBalance (address) {
  return fetchFromBackend('/balance', {
    address: address.toLowerCase(),
  })
}

export function getOnChainBalance (address, library) {
  const contract = getTokenContract(library)

  return contract.balanceOf(address)
}

export function b64_to_utf8( str ) {
  return decodeURIComponent(escape(window.atob( str )));
}