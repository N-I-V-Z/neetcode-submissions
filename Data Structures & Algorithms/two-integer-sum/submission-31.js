class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var a = 0;
        var b = 1;

        while (true){
            if (nums[a] + nums[b] == target) return [a, b];

            b++;

            if (b == nums.length){
                a++;
                b = a + 1;
            }
        }
    }
}
