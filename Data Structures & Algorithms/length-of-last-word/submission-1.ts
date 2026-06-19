class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        const temp = s.split(" ").filter(val => val !== "");
        return temp[temp.length - 1].length;
    }
}
