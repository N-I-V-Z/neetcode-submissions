class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        var queue = [];
        var f = null;
        var s = null;
        for (var token of tokens) {
            switch (token) {
                case '+':
                    s = queue.pop();
                    f = queue.pop();
                    queue.push(f + s);
                    break;
                case '-':
                    s = queue.pop();
                    f = queue.pop();
                    queue.push(f - s);
                    break;
                case '*':
                    s = queue.pop();
                    f = queue.pop();
                    queue.push(f * s);
                    break;
                case '/':
                    s = queue.pop();
                    f = queue.pop();
                    queue.push(Math.trunc(f / s));
                    break;
                default:
                    queue.push(Number(token));
                    break;
            }

        }

        return queue[0];
    }
}
