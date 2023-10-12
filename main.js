var ethers = require('ethers');  
var crypto = require('crypto');

function main(numWallets){

    while(numWallets-- > 0){
        var id = crypto.randomBytes(32).toString('hex');

        var privateKey = "0x"+id;
        var wallet = new ethers.Wallet(privateKey);
        console.log("Private Key:", privateKey, "Address:", wallet.address);
    }

}


if (process.argv.length === 2) {
    console.error('Error: Provide number of wallets to be created!');
    process.exit(1);
} else {
    main(Number(process.argv[2]));
}
