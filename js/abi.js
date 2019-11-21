const abi = [
  {
    constant: false,
    inputs: [],
    name: 'decrement',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'increment',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: '_count',
        type: 'int8',
      },
    ],
    name: 'CounterEvent',
    type: 'event',
  },
  {
    constant: true,
    inputs: [],
    name: 'getCount',
    outputs: [
      {
        name: '',
        type: 'int8',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];
