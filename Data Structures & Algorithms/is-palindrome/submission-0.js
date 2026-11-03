class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        var validChar = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','1','2','3','4','5','6','7','8','9','0'];
        s = s.replaceAll(' ', '').toLowerCase();

        var left = 0;
        var right = s.length - 1;

        while(left < right){
            if(!validChar.includes(s[left])){
                left++;
                continue;
            }

            if(!validChar.includes(s[right])){
                right--;
                continue;
            }

            if(s[left] != s[right]) return false;

            left++;
            right--;
        }

        return true;
    }
}
