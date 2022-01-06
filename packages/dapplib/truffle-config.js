require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stone crawl ranch come gesture person army gasp'; 
let testAccounts = [
"0xd3a3826293e876f699d815baa25a8bc6d1cbbb55d1352943a92f6867e3746602",
"0x06e448233a340a3e8e75b2cf4d79d0edd1079e9b0141afd10ec8973c48a317ab",
"0x4ea39be85bb6bc423985b8080c7e159a7641a730f53d987a47fe80677710f910",
"0x90a76774dbe258d8bad010c3ba63760d1717f4b9f598caa57fbdbc5299c8b2cd",
"0x9d14661daa45b489f6d02a84a5d45fc711fd9f1af8ab00eaf2f9925f614600ce",
"0x8ebf1ca5574213adaff14f0e0b5877d75278ccfbb75887db58e7d336568806df",
"0x95df1dd415ac0d0a58dba70b62b416f124dda4c24c5158e73e16a6d9b1607615",
"0x307140bcd84369b2490b96e18624905fcd19bd04d0fd353923833319da2e15bc",
"0xbb777d0ba83c68f47a82b87a25c9456407cf4688a4236673f9af73b03ffd8c47",
"0xac7b0a24f6b6f8552de39f9354a3eee0553e55456e80d664a03790e29131c22b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

