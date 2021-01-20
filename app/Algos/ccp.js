const performance = require('perf_hooks').performance;

function minCoinChange(amount, coins) {
  let start_time = performance.now();

  const minCoins = new Array(amount + 1).fill(Infinity); 
  minCoins[0] = 0;
  for(let coin of coins) {
    for(let i = 0; i <= amount; i += 1) {
      if((i - coin) >= 0) minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
    }
  }
  let result = minCoins[amount] !== Infinity ? minCoins[amount] : -1;
  let end_time = performance.now();
  let timeDiff = end_time - start_time;
  timeDiff /= 1000;
  this.time = timeDiff;
  return {
    result: result,
    time: timeDiff
  }
}

module.exports = {minCoinChange}