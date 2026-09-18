/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length != t.length){
        return false;
    }

    var countT = new Map();
    var countS = new Map();


    for(var i = 0; i < s.length; i++){
        countT.set(t[i], (countT.get(t[i]) || 0) + 1);
        countS.set(s[i], (countS.get(s[i]) || 0) + 1);
    }

    for(const [letter, count] of countT){
        if(!countS.get(letter) || count !== countS.get(letter)){
            return false;
        }
    }

    return true;

};