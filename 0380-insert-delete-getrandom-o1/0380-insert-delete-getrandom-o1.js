
var RandomizedSet = function() {
    this.arr = [];
    this.size = 0;

    this.hash = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {

    if(this.hash.has(val)){
        return false;
    }
    
    this.arr.push(val);
    this.hash.set(val, this.size);
    this.size++;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    
    if(this.size == 0){
        return false;
    }

    if(this.hash.has(val)){
        idx = this.hash.get(val);
        lastVal = this.arr[this.size-1];
        this.arr[idx] = lastVal;
        this.arr.pop();
        this.size--;
        this.hash.set(lastVal, idx);
        this.hash.delete(val);
        return true;
    }

    return false;;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() * this.size)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */