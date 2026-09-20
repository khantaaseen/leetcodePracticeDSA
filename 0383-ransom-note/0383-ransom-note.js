/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    console.log(ransomNote.length);
    console.log(magazine.length);

    mMap = new Map();

    for(let i = 0; i < magazine.length; i++){
        mMap.set(magazine[i], (mMap.get(magazine[i]) || 0) + 1);
    }

    console.log("Magazine:", [...mMap]); 

    for(let c of ransomNote){
        if(!mMap.has(c) || (mMap.get(c) <= 0)){
            console.log('failing', c, mMap.get(c) || 0);
            return false;
        }

        mMap.set(c, (mMap.get(c) || 0) - 1);
    }

    return true;
};