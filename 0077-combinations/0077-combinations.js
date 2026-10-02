/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    
    let res = [];

    if(n == 1){
        return [[1]];
    }

    let combinations = [];

    function dfs(start, combinations){
        if(combinations.length == k){
            res.push([...combinations]);
            return;
        }

        for(let i = start; i < n + 1; i++){
            combinations.push(i);
            dfs(i + 1, combinations);
            combinations.pop();
        }
    }

    dfs(1, []);

    return res;
};