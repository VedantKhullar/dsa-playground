class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) return false;
        
        let map1 = new Map();
        let map2 = new Map();
        for(let i = 0; i < s.length; i++){
            if(map1.get(s[i])){
                map1.set(s[i], map1.get(s[i]) + 1);
            } else {
                map1.set(s[i], 1);
            }
            
            if(map2.get(t[i])){
                map2.set(t[i], map2.get(t[i]) + 1);
            } else {
                map2.set(t[i], 1);
            }
        }

        if(map1.size !== map2.size){
            return false;
        }

        for(let key of map1.keys()){
            if(map1.get(key) != map2.get(key)){
                return false
            }
        }

        return true;
    }
}
