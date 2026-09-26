class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;

        this.prev = null;
        this.next = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {

    this.cacheMap = new Map();
    this.size = capacity;

    this.head = new Node(0,0);
    this.tail = new Node(0,0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
    
};

LRUCache.prototype.insert = function(node){

    let mru = this.tail.prev;

    mru.next = node;
    node.prev = mru;

    node.next = this.tail;
    this.tail.prev = node;
}

LRUCache.prototype.remove = function(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cacheMap.has(key)){
        return -1;
    }

    const node = this.cacheMap.get(key);

    this.remove(node);
    this.insert(node);

    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    if(this.cacheMap.has(key)){
        const node = this.cacheMap.get(key);

        node.value = value;

        this.remove(node);
        this.insert(node);

        return;
    }

    const node = new Node(key, value);
    this.insert(node);
    this.cacheMap.set(key, node);

    if(this.cacheMap.size > this.size){
        const lru = this.head.next;

        this.remove(lru);
        this.cacheMap.delete(lru.key);
    }

    return;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */