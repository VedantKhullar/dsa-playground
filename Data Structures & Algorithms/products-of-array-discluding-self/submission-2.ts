class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let product = 1;
        let zeroIndices = [];
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 0){
               zeroIndices.push(i); 
               continue;
            }
            product *= nums[i];
        }

        let productArray = [];
        if(!zeroIndices.length) {
            for(let i = 0; i < nums.length; i++) {
                productArray.push(product/ nums[i]);
            }
        } else if (zeroIndices.length === 1) {
            for(let i = 0; i < nums.length; i++) {
                if(zeroIndices.includes(i)){
                    productArray.push(product);
                } else {
                    productArray.push(0)
                }
            }
        } else {
            for(let i = 0; i < nums.length; i++) {
                productArray.push(0);
            }
        }

        return productArray;
    }
}
