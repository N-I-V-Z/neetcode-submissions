class MinStack {
    constructor() {
        this.stack = new Array();
        this.minNum = null
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.minNum = this.minNum === null ? val : Math.min(this.minNum, val);
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.pop() == this.minNum) {
            this.minNum = this.stack.length > 0 ? Math.min(...this.stack) : null;
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minNum;
    }
}
