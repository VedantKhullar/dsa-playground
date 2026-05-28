class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();
        for(let num of nums){
            if(map.get(num)){
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        }

        console.log(map)

        const arr = [];
        while(k > 0){
            console.log(map)
            let maxValue = -1;
            let maxKey = 0;
            for(let [key,value] of map.entries()){
                if(value > maxValue){
                    maxValue = value;
                    maxKey = key;
                }
            }
            console.log(maxKey)
            map.set(maxKey, -1);
            arr.push(maxKey);
            k--;
        }

        return arr;
    }
}
