class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        if(arr.length < 1) return arr
        const res = [-1];
        let i = arr.length - 2;
        let max = arr[arr.length - 1];
        while(i >= 0){
            max = Math.max(max, arr[i + 1]);
            res.push(max);
            i--;
        }

        return res.reverse();
    }
}
