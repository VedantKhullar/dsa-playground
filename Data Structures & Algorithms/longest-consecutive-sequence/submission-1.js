class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const sortedArray = [...new Set(nums.sort((a, b) => a - b))];

        let maxLen = 1;
        let currentLen = 1;

        let i = 0;
        let j = 1;

        while (j < sortedArray.length) {
            if (sortedArray[j] - sortedArray[i] === 1) {
                currentLen++;
            } else {
                maxLen = Math.max(maxLen, currentLen);
                currentLen = 1;
            }

            i++;
            j++;
        }

        return Math.max(maxLen, currentLen);
    }
}
