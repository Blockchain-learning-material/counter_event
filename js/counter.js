typeof web3 !== 'undefined'
  ? (web3 = new Web3(web3.currentProvider))
  : (web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')));

if (web3.isConnected()) {
  console.log('connected');
} else {
  console.log('not connected');
  exit;
}

const contractAddress = '0x9691383f0649850a3404662c947528853ce359c3';
const contract = web3.eth.contract(abi).at(contractAddress);

const account = web3.eth.accounts[0];

function event() {
  contract
    .CounterEvent({ fromBlock: 0, toBlock: 'latest' })
    .watch((err, res) => {
      if (!err) {
        const count = res.args._count.toNumber();
        document.getElementById('count').innerText = count;
      } else {
        console.error(err);
      }
    });
}

function decrement() {
  contract.decrement({ from: account }, (err, result) => {
    if (err) alert('decrement error!');
  });
}

function increment() {
  contract.increment({ from: account }, (err, result) => {
    if (err) alert('increment error!');
  });
}

window.onload = function() {
  event();
};
