/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {

    this.cacheMap = new Map();
    this.size = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cacheMap.has(key)){
        return -1;
    }

    let val = this.cacheMap.get(key);

    this.cacheMap.delete(key);
    this.cacheMap.set(key, val);
    return this.cacheMap.get(key);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    if(!this.cacheMap.has(key)){
        if(this.cacheMap.size + 1 > this.size){
            var lru = this.cacheMap.keys().next().value;
            this.cacheMap.delete(lru);

            this.cacheMap.set(key, value);
        }
        else{
            this.cacheMap.set(key, value);
        }
    }else{
        this.cacheMap.delete(key);
        this.cacheMap.set(key, value);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */