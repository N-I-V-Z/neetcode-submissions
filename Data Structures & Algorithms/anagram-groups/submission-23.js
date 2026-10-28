class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var map = new Map();

        var strSorted = [];

        for(let str of strs){
            strSorted.push(str.split('').sort().join(''));
        }

        for(let i = 0; i < strs.length; i++){
            if(!map.has(strSorted[i])){
                map.set(strSorted[i], []);
            }

            var arr = map.get(strSorted[i]);
            arr.push(strs[i]);
            map.set(strSorted[i], arr);
        }

        var result = [];
        for(let key of map.keys()){
            result.push(map.get(key));
        }

        return result;
    }
}