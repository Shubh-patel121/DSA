/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a
different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.

Note: stock should be buy then only it can be sold ;
*/

const getMaxProfitFromStocks = (prices) => {
  let buy = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
      console.log("I bought:", buy);
    } else if (prices[i] - buy > maxProfit) {
      maxProfit = prices[i] - buy;
      console.log("I sold:", maxProfit);
    }
  }

  return maxProfit;
};

const stockRatesPerDay = [5, 7, 25, 3, 4, 50, 100, 1, 2, 3, 4, 150, 0];
console.log("max profit:", getMaxProfitFromStocks(stockRatesPerDay));
