import { ethers } from 'ethers'
import { fetchFromBackend } from '../functions'

export function getSignMessage(account, recaptcha) {
  return fetchFromBackend(
    '/raffle/auth_message',
    { address: ethers.utils.getAddress(account), recaptcha }
  )
}

export function verifySignature(account, signature) {
  return fetchFromBackend(
    '/raffle/auth_verify',
    { address: ethers.utils.getAddress(account), signature }
  )
}

export function manualTweetConfirmation(account, signature, tweetUri) {
  return fetchFromBackend(
    '/raffle/check_tweet',
    { address: ethers.utils.getAddress(account), signature, tweetUri }
  )
}

export async function signIn () {
  // Cüzdan erişimi isteyelim
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

  // Daha kolay işlem yapabilmek için ethers kütüphanesine Web3 Provider olarak MetaMask'in sunduğu Ethereum Provider'ını veriyoruz
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  // Signerı hesap olarak düşünebilirsiniz. Ethereum ağında veya dışında hesabınızla yaptığınız her işlemde bir veri imzalanır.
  const signer = provider.getSigner()

  // Sunucuya hesap adresini göndererek imzalanması gereken mesajı alalım.
  const { message } = await fetchFromBackend(
    '/raffle/auth_message',
    { address: ethers.utils.getAddress(accounts[0]) }
  )

  // Signer'dan imzalamasını isteyelim.
  const signature = await signer.signMessage(message)


  // Imzayı sunucuya gönderelim
  const { status } = await fetchFromBackend(
    '/raffle/auth_verify',
    { address: ethers.utils.getAddress(accounts[0]), signature }
  )

  let authMessage;

  if (status) authMessage = `Auth successful! Welcome <pre>${accounts[0]}</pre>`
  else authMessage = `Auth failed. Please try again later or contact with us.`

  document.querySelector('body').innerHTML = authMessage
}
