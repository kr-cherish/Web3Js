import Web3 from 'web3';

const web3 = new Web3('HTTP://127.0.0.1:7545');
// console.log("🚀 ~ web3:", web3)


const basices = async () => {
    try{
        //getAll accounts
        const allAccount = await web3.eth.getAccounts();
        console.log("🚀 ~ allAccount:", allAccount)

        //transfer ether
        const privateKey = "0xbaa7e6d204a80bb8fcf6355399c28846a812704f60392f2b9e348349907c26d5";
        const sender = allAccount[0];
        const reciver  = allAccount[1];

        // const tx = await web3.eth.sendTransaction({
        //     from : sender,
        //     to : reciver,
        //     value : web3.utils.toWei("1", "ether")
        // })
        // console.log("Transaction Successfully..... ");
        // console.log("Transfer",tx);

        const nonce = await web3.eth.getTransactionCount(sender, 'latest');
        console.log("🚀 ~ basices ~ nonce:", nonce)

        const txObject = {
            from: sender,
            to: receiver,
            value: web3.utils.toWei('0.001', 'ether'),
            gas: 21000, 
            nonce: nonce 
        };
        console.log("🚀 ~ basices ~ txObject:", txObject)

        const signedTx = await web3.eth.accounts.signTransaction(txObject, privateKey);
        console.log("🚀 ~ Transaction is signed:", signedTx);

        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log("🚀 ~ Transaction receipt:", receipt);

    }catch(error){
        console.log("Error : ",error.wallet);
    }
}

basices()

// const contractAddress = "0xe849FD946B51308c1FedDd17745F2aa093f1785F"