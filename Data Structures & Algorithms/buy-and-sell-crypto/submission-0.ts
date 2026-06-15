class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0;

        for(let i = 0; i < prices.length; i++){
            for(let j = i + 1; j < prices.length; j++){
                if(profit < prices[j] - prices[i]){
                    profit = prices[j] - prices[i];
                }
            }
        }
        return profit;
    }
}
