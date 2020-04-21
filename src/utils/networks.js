const defaultNetworks = {
  // mainnet
  1: {
    masterCopyAddress: '0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F',
    proxyFactoryAddress: '0x0fB4340432e56c014fa96286de17222822a9281b',
    multiSendAddress: '0xB522a9f781924eD250A11C54105E51840B138AdD',
    fallbackHandlerAddress: '0x40A930851BD2e590Bd5A5C981b436de25742E980',
  },
  // rinkeby
  4: {
    masterCopyAddress: '0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
    multiSendAddress: '0x8D29bE29923b68abfDD21e541b9374737B49cdAD',
    fallbackHandlerAddress: '0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44',
    CreateAndAddModulesAddress: '0xF61A721642B0c0C8b334bA3763BA1326F53798C0'
  },
  // goerli
  5: {
    masterCopyAddress: '0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F',
    proxyFactoryAddress: '0xfC7577774887aAE7bAcdf0Fc8ce041DA0b3200f7',
    multiSendAddress: '0xB522a9f781924eD250A11C54105E51840B138AdD',
    fallbackHandlerAddress: '0x40A930851BD2e590Bd5A5C981b436de25742E980',
  },
  // kovan
  42: {
    masterCopyAddress: '0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F',
    proxyFactoryAddress: '0xfC7577774887aAE7bAcdf0Fc8ce041DA0b3200f7',
    multiSendAddress: '0xB522a9f781924eD250A11C54105E51840B138AdD',
    fallbackHandlerAddress: '0x40A930851BD2e590Bd5A5C981b436de25742E980',
  },
};

module.exports = defaultNetworks;
