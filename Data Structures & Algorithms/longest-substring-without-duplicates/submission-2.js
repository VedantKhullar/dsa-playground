class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length == 0) return 0;
        let maxLength = 1;

        for(let i = 0; i < s.length; i++){
            let ls = s[i];
            for(let j = i + 1; j < s.length; j++){
                if(!ls.includes(s[j]) && s[i] != s[j]){
                    ls += s[j];
                } else {
                    break;
                }
            }
            maxLength = Math.max(maxLength, ls.length);
        }

        return maxLength;
    }
}
