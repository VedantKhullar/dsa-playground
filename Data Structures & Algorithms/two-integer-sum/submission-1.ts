class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let map = new Map();
        for(let i = 0; i < nums.length; i++){
            if(map.get(target - nums[i])){
                return [map.get(target - nums[i]) - 1, i]
            } else {
                map.set(nums[i], i + 1);
            }
        }

        return [0,0]
    }
}
