class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        var map = new Map()

        for (let charS of s){
            if(map.has(charS)){
                let count = map.get(charS);
                map.set(charS, count + 1);
            }else map.set(charS, 1);
        }

        for (let charT of t){
            if (map.has(charT)){
                let count = map.get(charT);
                if (count > 1) map.set(charT, count - 1);
                else map.delete(charT);
            }else return false;
        }

        return true;
    }
}
