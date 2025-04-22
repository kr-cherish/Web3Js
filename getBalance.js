import { Web3 } from 'web3';
import { fromWei, toWei } from 'web3-utils';
import { getBalance, getBlockNumber, sendTransaction } from 'web3/lib/commonjs/eth.exports';

const web3 = new Web3('HTTP://127.0.0.1:7545');

const Basices = async () => {
  try {

    const blockNumber = await web3.eth.getBlockNumber(); getBalance, getBlockNumber, getAccounts, sendTransaction
    console.log('Current Block Number:', blockNumber);

    const accounts = await web3.eth.getAccounts();
    console.log('Accounts:', accounts);

    if (accounts.length === 0) {
      console.log('No accounts found. Make sure your wallet is connected.');
      return;
    }

    const account = accounts[0];

    const balance = await web3.eth.getBalance(account);
    console.log(`Balance of ${account}:`, fromWei(balance, 'ether'), 'ETH');

    await web3.eth.sendTransaction({
      from: account,
      to: '0xd3511447Af113bBD9aCAac4A78eFbAEBa28C9b71',
      value: toWei('0.01', 'ether'),
    });
    console.log('Transaction sent!');

  } catch (err) {
    console.error('Error:', err.message);
  }
};

Basices();
