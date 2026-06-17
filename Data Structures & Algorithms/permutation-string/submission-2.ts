class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        s1 = s1.split("").sort().join("");
        

        for(let i = 0; i < s2.length; i++){
            const sortedSubtring = s2.slice(i, i + s1.length).split("").sort().join("");
            if(sortedSubtring == s1) return true;
            if(sortedSubtring.length < s1.length) break;
        }
        return false;
    }
}
