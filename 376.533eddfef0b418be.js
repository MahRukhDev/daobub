"use strict";(self.webpackChunk_1inch=self.webpackChunk_1inch||[]).push([[376],{80376:n=>{n.exports=JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_token0","type":"address"},{"internalType":"contract IERC20","name":"_token1","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"token0Amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"token1Amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"share","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":false,"internalType":"int256","name":"token0Amount","type":"int256"},{"indexed":false,"internalType":"int256","name":"token1Amount","type":"int256"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"token0Amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"token1Amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"share","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"token0Amount","type":"uint256"},{"internalType":"uint256","name":"token1Amount","type":"uint256"},{"internalType":"uint256","name":"minShare","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"share","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"token0Amount","type":"uint256"},{"internalType":"uint256","name":"token1Amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"minShare","type":"uint256"}],"name":"depositFor","outputs":[{"internalType":"uint256","name":"share","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"tokenFrom","type":"address"},{"internalType":"contract IERC20","name":"tokenTo","type":"address"},{"internalType":"uint256","name":"inputAmount","type":"uint256"}],"name":"getReturn","outputs":[{"internalType":"uint256","name":"outputAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inputAmount","type":"uint256"},{"internalType":"uint256","name":"minReturnAmount","type":"uint256"}],"name":"swap0To1","outputs":[{"internalType":"uint256","name":"outputAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"inputAmount","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"minReturnAmount","type":"uint256"}],"name":"swap0To1For","outputs":[{"internalType":"uint256","name":"outputAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"inputAmount","type":"uint256"},{"internalType":"uint256","name":"minReturnAmount","type":"uint256"}],"name":"swap1To0","outputs":[{"internalType":"uint256","name":"outputAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"inputAmount","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"minReturnAmount","type":"uint256"}],"name":"swap1To0For","outputs":[{"internalType":"uint256","name":"outputAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minToken0Amount","type":"uint256"},{"internalType":"uint256","name":"minToken1Amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"token0Amount","type":"uint256"},{"internalType":"uint256","name":"token1Amount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"minToken0Amount","type":"uint256"},{"internalType":"uint256","name":"minToken1Amount","type":"uint256"}],"name":"withdrawFor","outputs":[{"internalType":"uint256","name":"token0Amount","type":"uint256"},{"internalType":"uint256","name":"token1Amount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"token0Share","type":"uint256"},{"internalType":"uint256","name":"minToken0Amount","type":"uint256"},{"internalType":"uint256","name":"minToken1Amount","type":"uint256"}],"name":"withdrawForWithRatio","outputs":[{"internalType":"uint256","name":"token0Amount","type":"uint256"},{"internalType":"uint256","name":"token1Amount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"token0Share","type":"uint256"},{"internalType":"uint256","name":"minToken0Amount","type":"uint256"},{"internalType":"uint256","name":"minToken1Amount","type":"uint256"}],"name":"withdrawWithRatio","outputs":[{"internalType":"uint256","name":"token0Amount","type":"uint256"},{"internalType":"uint256","name":"token1Amount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]')}}]);