class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0;
        let i = 0;
        let lowestTillNow = prices[0];

        while(i < prices.length){
            if(lowestTillNow > prices[i]) {
                lowestTillNow = prices[i];
            } else if(prices[i] - lowestTillNow > profit) {
                profit = prices[i] - lowestTillNow;
            }
            i++;
        }
        
        return profit;
    }
}
