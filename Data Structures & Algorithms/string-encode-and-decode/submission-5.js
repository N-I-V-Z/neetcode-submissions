class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length == 0) return 'Nhanff';
        for(let i = 0; i < strs.length; i++){
            if (strs[i] == '') strs[i] = 'Nhanf';
        }
        return strs.join('Nhàn');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str == 'Nhanff') return [];
        var ressult = str.split('Nhàn');
        for(let i = 0; i < ressult.length; i++){
            if (ressult[i] == 'Nhanf') ressult[i] = '';
        }        
        return ressult;
    }
}
