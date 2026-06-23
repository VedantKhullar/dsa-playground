class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        nums.sort();
        const half = Math.ceil(nums.length / 2);
        let count = 1;
        let prev = nums[0];
        for(let i = 1; i < nums.length; i++){
            if(count === half) return prev;
            if(prev === nums[i]) {
                count++;
            } else {
                count = 1;
                prev = nums[i];
            }
        }
        return count === half ? prev : nums[0];
    }
}
