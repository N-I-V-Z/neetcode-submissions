class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let a = 0;
        let b = 1;

        while (true){
            if(nums[a] + nums[b] == target) return [a,b];
             b++
             if (b == nums.length){
                a++;
                b = a + 1;
             }
        }
    }
}
