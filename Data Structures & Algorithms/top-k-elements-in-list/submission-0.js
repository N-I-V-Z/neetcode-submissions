class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var map = new Map();

        for (let num of nums){
            if (!map.has(num)){
                map.set(num, 1);
            }else{
                var count = map.get(num);
                map.set(num, count + 1);
            }
        }

        var result = [];
        for(let i = 0; i < k; i++){
            var max = 0;
            var keyMax = 0;
            for(let key of map.keys()){
                var value = map.get(key);
                if(max < value) {
                    max = value;
                    keyMax = key;
                }
            }
            map.delete(keyMax);
            result.push(keyMax);
       }


       return result;
    }
}
