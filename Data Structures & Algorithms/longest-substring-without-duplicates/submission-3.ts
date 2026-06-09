class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let set = new Set();
        let i = 0, j = 0, maxCount = 0;

        while(j < s.length){
            if(!set.has(s[j])){
                set.add(s[j]);
                maxCount = Math.max(maxCount, j - i + 1);
                j++;
            } else {
                set.delete(s[i]);
                i++;
            }
        }

        return maxCount;
    }
}
