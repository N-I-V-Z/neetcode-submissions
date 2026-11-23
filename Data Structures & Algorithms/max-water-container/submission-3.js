class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var sw = 0;

        var f = 0;
        var s = heights.length - 1;

        while(f < s){
            let d = s - f;
            sw = Math.max(sw, Math.min(heights[f], heights[s]) * d);

            if (heights[f] < heights[s]) f++;
            else s--;
        }

        return sw;
    }
}
