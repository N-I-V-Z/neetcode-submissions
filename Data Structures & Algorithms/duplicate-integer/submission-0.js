class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var set = new Set();
        for(let num of nums){
            if(set.has(num)) return true;

            set.add(num);
        }

        return false;
    }
}
