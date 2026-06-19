class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        let i = s.length - 1, len = 0;

        while(s[i] === " ") i--;
        
        while(i >=0 && s[i] !== " ") {
            i--;
            len++;
        }

        return len;
    }
}
