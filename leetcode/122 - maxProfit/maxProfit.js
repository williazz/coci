/**
 * Say you have an array prices for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
 * @param {Number[]} prices
 * @returns {Number} profit
 */

/*

  Strategy:
   - Just buy and sell on every day if there is a profit
   - one pass, no ds
 */

function maxProfit(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1];
    if (diff > 0) profit += diff;
  }
  return profit;
}

module.exports = maxProfit;
