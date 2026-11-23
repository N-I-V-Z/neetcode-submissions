class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        function parsteParenthesesToNumber(str){
            if(str == '(' || str == ')') return 1;
            else if (str == '[' || str == ']') return 2;
            else if (str == '{' || str == '}') return 3;
        }
        var queue = [];
        var opens = ['(', '[', '{'];
        var closes = [')', ']', '}'];
        for(let i = 0; i < s.length; i++){
            if(opens.includes(s[i])){
                queue.push(parsteParenthesesToNumber(s[i]));
            }else if(closes.includes(s[i])){
                if(parsteParenthesesToNumber(s[i]) == queue[queue.length - 1]) {
                    queue.pop();
                }else return false;
            }
        }

        return queue.length == 0;
    }
}
