/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    let res = [];

    var buildStr = function(open, close, str){
        if((open == close) && (open + close == n * 2)){
            res.push(str);
            return;
        }

        if(open < n){
            buildStr(open + 1, close, str + "(");
        }

        if(close < open){
            buildStr(open, close + 1, str + ")");
        }
    }

    buildStr(0, 0, "");
    return res;

};