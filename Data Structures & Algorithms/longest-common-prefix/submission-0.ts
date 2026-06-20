class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {

    let getCommonPrefix = (first: string, second: string) => {
        const minLength = first.length < second.length ? first.length : second.length;
        let index = 0;
        let result = "";

        while (index < minLength) {
            if (first[index] !== second[index]) break;
            result += first[index];
            index++;
        }

        return result;
    }

    let currentPrefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        const pairPrefix = getCommonPrefix(strs[i - 1], strs[i]);
        currentPrefix = currentPrefix.length < pairPrefix.length ? currentPrefix : pairPrefix;
    }

    return currentPrefix;
}
}
