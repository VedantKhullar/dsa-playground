class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s: string): number {
        let i = 0, j = 1, sum = 0;
        while(j < s.length){
            sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(j));
            i++;
            j++;
        }
        return sum;
    }
}
