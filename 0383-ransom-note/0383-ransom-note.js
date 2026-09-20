/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    mMap = new Map();

    for(let c of magazine){
        mMap.set(c, (mMap.get(c) || 0) + 1);
    }

    for(let c of ransomNote){
        if(!mMap.has(c) || (mMap.get(c) <= 0)){
            return false;
        }

        mMap.set(c, (mMap.get(c) || 0) - 1);
    }

    return true;
};