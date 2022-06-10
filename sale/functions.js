import { ethers } from 'ethers'
import contractAbi from '../connect/contract.abi.json'
import settings from '../settings'

export function getContract(library) {
  const contract = new ethers.Contract(settings.contractAddress, contractAbi, library)

  if (settings.env === 'development') {
    window.contract = contract
  }

  return contract
}

export function isSaleActive(library) {
  const contract = getContract(library)

  return contract.IS_SALE_ACTIVE()
}

export async function isSoldout(library) {
  const contract = getContract(library)
  const supply = await contract.totalSupply()

  return supply === 8888
}

export function getCurrentMintCount(library, address) {
  const contract = getContract(library)

  return contract.getCurrentMintCount(address)
}

export async function saleMint(library, address, numberOfTokens) {
  const contract = getContract(library)
  const signer = library.getSigner(address)

  const tx = await contract.connect(signer).publicSaleMint(
    numberOfTokens,
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

export function parseLogs(library, receipt) {
  const contract = getContract(library)

  const logs = receipt.logs.map(x => contract.interface.parseLog(x))

  return logs
}
