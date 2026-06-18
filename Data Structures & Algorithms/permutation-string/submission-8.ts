class Solution {
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - 97]++;
            count2[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;

        for (let i = 0; i < 26; i++) {
            if (count1[i] === count2[i]) matches++;
        }

        let i = 0;

        for (let j = s1.length; j < s2.length; j++) {
            if (matches === 26) return true;

            const inIdx = s2.charCodeAt(j) - 97;
            const outIdx = s2.charCodeAt(i) - 97;

            // ---- handle incoming char ----
            if (count2[inIdx] === count1[inIdx]) matches--; // was equal, will break
            count2[inIdx]++;
            if (count2[inIdx] === count1[inIdx]) matches++; // becomes equal

            // ---- handle outgoing char ----
            if (count2[outIdx] === count1[outIdx]) matches--; // was equal, will break
            count2[outIdx]--;
            if (count2[outIdx] === count1[outIdx]) matches++; // becomes equal

            i++;
        }

        return matches === 26;
    }
}