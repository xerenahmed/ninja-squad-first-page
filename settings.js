const settings = {
  env: process.env.NODE_ENV,
  backendUrl: process.env.REACT_APP_BACKEND_URL,
  contractNetwork: process.env.REACT_APP_CONTRACT_NETWORK,
  contractEtherscanUrl: process.env.REACT_APP_CONTRACT_ETHERSCAN_URL,
  contractOpenseaUrl: process.env.REACT_APP_CONTRACT_OPENSEA_URL,
  contractOpenseaApi: process.env.REACT_APP_CONTRACT_OPENSEA_API,
  contractRaribleUrl: process.env.REACT_APP_CONTRACT_RARIBLE_URL,
  contractGateway: process.env.REACT_APP_CONTRACT_GATEWAY,
  contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,

  tokenContractAddress: process.env.REACT_APP_TOKEN_CONTRACT_ADDRESS,

  onRaffle: Boolean(Number(process.env.REACT_APP_ON_RAFFLE)),
  onPresale: Boolean(Number(process.env.REACT_APP_ON_PRESALE)),
  onSale: Boolean(Number(process.env.REACT_APP_ON_SALE)),

  enableSwitchingNetwork: Boolean(Number(process.env.REACT_APP_ENABLE_SWITCHING_NETWORK)),
}

if (settings.env === 'development') {
  window.settings = settings
}

export {
  settings as default,
}
