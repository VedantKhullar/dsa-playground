class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    const count = new Array(26).fill(0);

    for (let right = 0; right < s.length; right++) {
        const idx = s.charCodeAt(right) - 65; // 'A' = 65

        count[idx]++;
        maxFreq = Math.max(maxFreq, count[idx]);

        while ((right - left + 1) - maxFreq > k) {
            count[s.charCodeAt(left) - 65]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
    }
}
