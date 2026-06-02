class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let result = [];
        let i = 0, j = nums.length - 1, pre = 1, post = 1;
        while (i < nums.length){
            result.push(pre);
            pre *= nums[i]
            i++;
        }

        while(j >= 0){
            result[j] *= post
            post *= nums[j]
            j--;
        }
        return result;
    }
}
