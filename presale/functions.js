import { ethers } from 'ethers'
import { fetchFromBackend } from '../functions'
import contractAbi from '../connect/contract.abi.json'
import settings from '../settings'

export function getContract(library) {
  const contract = new ethers.Contract(settings.contractAddress, contractAbi, library)

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

export function getSignMessage(account) {
  return fetchFromBackend(
    '/presale/auth_message',
    { address: ethers.utils.getAddress(account) }
  )
}

export function verifySignature(account, signature) {
  return fetchFromBackend(
    '/presale/auth_verify',
    { address: ethers.utils.getAddress(account), signature }
  )
}

export function parseLogs(library, receipt) {
  const contract = getContract(library)

  const logs = receipt.logs.map(x => contract.interface.parseLog(x))

  return logs
}
