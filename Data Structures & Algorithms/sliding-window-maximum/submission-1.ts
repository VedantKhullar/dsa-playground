class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const res = [];
        let i = 0, j = k;

        while (j <= nums.length) {
            res.push(this.maxInArray(nums.slice(i, j)));
            i++;
            j++;
        }

        return res;
    }

    maxInArray(arr: number[]): number {
        return arr.sort((a, b) => a - b)[arr.length - 1];
    }
}
