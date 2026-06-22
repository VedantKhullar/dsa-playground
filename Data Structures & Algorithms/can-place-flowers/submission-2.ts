class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed: number[], n: number): boolean {
        let i = 0;
        if(n > flowerbed.length || (flowerbed.length === 1 && flowerbed[0] === 1 && n !== 0)) return false;
        if(n === 1 && flowerbed[0] === 0 && flowerbed.length === 1 || n === 0) return true;
        while (i < flowerbed.length && n !== 0) {
            if (
            (i === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0 )|| 
            (flowerbed[i] === 0 && flowerbed[i + 1] === 0 && flowerbed[i - 1] == 0) ||
            (i === flowerbed.length - 1 && flowerbed[i-1] === 0 && flowerbed[i] === 0)
            ) {
                flowerbed[i] = 1;
                n--;
            }
            i++;
        }

        return n === 0;
    }
}
