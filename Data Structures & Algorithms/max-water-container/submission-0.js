class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1, max = 0, curr = 0;

        while( i < j ){
            curr = (j - i) * Math.min(heights[i], heights[j]);
            if(max < curr) max = curr;

            if(heights[i] > heights[j]) j--;
            else i++
        }

        return max;
    }
}
