/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let n = nums.length;
    let count = new Map();
    let freqs = new Array(n + 1).fill(null);

    for(let i of nums){
        count.set(i, (count.get(i) || 0 ) + 1)
    }

    for(const [key, c] of count){
        if(freqs[c] !== null){
            freqs[c].push(key);
        }else{
            freqs[c] = [key];
        }
    }
    
    let res = [];

    for(let i = n; i >= 1; i--){
        if(freqs[i] !== null){
            res.push(...freqs[i]);
        }

        if(res.length >= k){
            res = res.slice(0, k);
            break;
        }
    }
    

    return res;
};