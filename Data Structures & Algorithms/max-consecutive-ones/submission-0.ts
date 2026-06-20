class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let max = 0, count = 0;
        for(let i = 0; i < nums.length; i++){
            count = nums[i] === 0 ? 0 : ++count;
            max = Math.max(max, count);
        }
        return max;
    }
}
