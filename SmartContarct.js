import Web3 from 'web3';
import { abi } from './abi.js'
import { sendSignedTransaction, sendTransaction } from 'web3/lib/commonjs/eth.exports.js';

const web3 = new Web3('https://sepolia.infura.io/v3/28fb2e2164f84326a095450b31776043');
const contractAddress = "0xe849FD946B51308c1FedDd17745F2aa093f1785F";
const privateKey = "4d1ea932bdca9e72d4400218e7970acd6123039bb106ddf52583ce4ab1ae9295"
web3.eth.wallet.add(web3.eth.accounts.privateKeyToAccount(Buffer.from(privateKey, "hex")));

const SContract = new web3.eth.Contract(abi, contractAddress);

const interactWithContract = async () => {
    try {
        const name = await SContract.methods.name().call();
        console.log("🚀 ~ interactWithContract ~ message:", name)
        
        // const totalSupply = await SContract.methods.totalSupply().call();
        // console.log("🚀 ~ interactWithContract ~ totalSupply:", totalSupply)

        // const symbols = await SContract.methods.symbol().call();
        // console.log("🚀 ~ interactWithContract ~ symbols:", symbols)

        // const decimals = await SContract.methods.decimals().call();
        // console.log("🚀 ~ interactWithContract ~ decimals:", decimals)

        // const approved = await SContract.methods.approve('0xbacD42136E696110521fB6ACE75b716a83dfaB20',web3.utils.toWei('1', 'ether')).send({from:"0xB9Eb9ff8442754AA511C04062da40Db5DdC39a3d"});
        // console.log("🚀 ~ interactWithContract ~ approved:", approved)

        // const allowancee = await SContract.methods.allowance(
        //     "0xB9Eb9ff8442754AA511C04062da40Db5DdC39a3d","0xbacD42136E696110521fB6ACE75b716a83dfaB20"
        // ).call();
        // console.log("🚀 ~ interactWithContract ~ allowancee:", web3.utils.fromWei(allowancee, 'ether'))

        // const sender = "0xB9Eb9ff8442754AA511C04062da40Db5DdC39a3d";
        // const receiver = "0x46C91b52f13faeDD0946d03a3dAF6C6384333CEB";
        // const amount = web3.utils.toWei('0.0001', 'ether');

        // const txObject = {
        //     from: sender,
        //     to: receiver,
        //     value: amount,
        //     gas: 21000, 
        //     gasPrice: await web3.eth.getGasPrice(),
        // };

        // const signedTx = await web3.eth.accounts.signTransaction(txObject, privateKey);
        // const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        // console.log("✅ Transaction Receipt:", receipt);

        // const e =SContract.events.Transfer({
        //     fromBlock: 'latest',
        // })
        // console.log(e);
        // e.on('data', (event) => {
        //         const { from, to, value } = event.returnValues;
        //         console.log('📢 New Transfer Event Detected!');
        //         console.log('From:', from);
        //         console.log('To:', to);
        //         console.log('Amount:', web3.utils.fromWei(value, 'ether'), 'Tokens');
        //     }).on('error', console.error);

        //send transaction
        // const tx = {
        //     from : sender,
        //     to : recider,
        //     value : amout
        // }
        // const sendTransaction = await web3.eth.sendTransaction(tx); 
        // console.log("🚀 ~ interactWithContract ~ sendTransaction:", sendTransaction)


        //estimate gas
        // const estimateGas = await SContract.methods.transfer(recider,amout).estimateGas({from:sender})
        // console.log("🚀 ~ interactWithContract ~ estimateGas:", estimateGas)


        // const sendDecimal =  await web3.eth.getBalance(sender);
        // console.log("🚀 ~ interactWithContract ~ sendDecimal:", sendDecimal)

        // const balance = await SContract.methods.balanceOf('0xB9Eb9ff8442754AA511C04062da40Db5DdC39a3d').call();
        // console.log("🚀 ~ balance:", balance);

    } catch (error) {
        console.log("Error:", error);
    }
};
// interactWithContract();

async function subscribe() {

	// subscribe to the smart contract event
	const subscription = SContract.events.EventName();

	// new value every time the event is emitted
	subscription.on('data', console.log);
}

// function to unsubscribe from a subscription
async function unsubscribe(subscription) {
	await subscription.unsubscribe();
}
subscribe();
// unsubscribe(subscription);