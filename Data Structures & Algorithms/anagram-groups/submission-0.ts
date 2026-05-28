class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map : Map<string, Array<string>> = new Map();
        for(let i = 0; i < strs.length; i++){
            if(map.get(this.sortString(strs[i]))){
                map.set(this.sortString(strs[i]), [...map.get(this.sortString(strs[i])), strs[i]])
            } else {
                map.set(this.sortString(strs[i]), [strs[i]])
            }
        }
        if(map.size){
            const anagramArray = [];
            for(let value of map.values()){
                anagramArray.push(value);
            }
            return anagramArray;
        }
        return [[""]];
    }

    sortString(str: string): string {
        return str.split('').sort().join('');
    }

    isAnagrams(str1, str2): boolean {
        if(str1.length !== str2.length) return false;
        const arr1 = new Array(26).fill(0);
        const arr2 = new Array(26).fill(0);

        for(let i = 0; i < str1.length; i++){
            arr1[str1[i].charCodeAt(0) - 97]++;
            arr2[str2[i].charCodeAt(0) - 97]++;
        }

        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]) return false
        }

        return true;
    }
}
