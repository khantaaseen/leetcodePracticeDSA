/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = new Map();
    let res = 0;

    let l = 0;

    for(let r = 0; r < s.length; r++){
        map.set(s[r], (map.get(s[r]) || 0) + 1);

        while((r - l + 1) - Math.max(...map.values()) > k){
            map.set(s[l], (map.get(s[l]) || 0) - 1);
            l++;
        }

        res = Math.max(res, (r - l + 1));
    }

    return res;
};