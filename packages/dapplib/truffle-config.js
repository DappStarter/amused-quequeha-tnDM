require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift reward stereo purchase install clip blue genre'; 
let testAccounts = [
"0x759721c57428ddd3ca6ede133a93799249bda947eb5edb969c05d92c1cc5ca8e",
"0x10ac6669e8d700f6a70e3b445a8c32c753bdae90c1cda66b475feb2db60a4bb6",
"0xa3e93ed45966e57916dbc20d1c04f9356ead827538b2278d852869272cdc6653",
"0x8e571f20d31db0754fc37d09f66b755143060feee68fb338e13d5040ec6bf9d7",
"0xe836f6bc1e74d3b2223415f9e08e196440e36944db5a6ec3b42121f47540c2ce",
"0x27b975a7ebb2889c6a901da51c7a4d1fbd9884fd815ee2359ca7c2404aa776eb",
"0x2391acdc6650663add6e9f65dc7db1fa83b9d9d571d98c786c500a2701251561",
"0x92775bf39a889c962d257b38bc4cddcadc763e7c260e8ff6415f537d78cded2b",
"0xf69df692354db5e790ff5dce5fef4698b1650720bc3c92dabf670c18c72c7551",
"0xa2e2162730eb752457caec9b362011bfe2abe373d5c515ce2dcf92f5a7537386"
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

