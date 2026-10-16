var __wakaru_require_fixed_queue_cache;
export function require_fixed_queue() {
if (__wakaru_require_fixed_queue_cache) return __wakaru_require_fixed_queue_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_fixed_queue_cache = module2;
"use strict";
var kSize = 2048;
var kMask = kSize - 1;
var FixedCircularBuffer = class {
    constructor(){
        this.bottom = 0;
        this.top = 0;
        this.list = new Array(kSize);
        this.next = null;
    }
    isEmpty() {
        return this.top === this.bottom;
    }
    isFull() {
        return (this.top + 1 & kMask) === this.bottom;
    }
    push(data) {
        this.list[this.top] = data;
        this.top = this.top + 1 & kMask;
    }
    shift() {
        const nextItem = this.list[this.bottom];
        if (nextItem === void 0) return null;
        this.list[this.bottom] = void 0;
        this.bottom = this.bottom + 1 & kMask;
        return nextItem;
    }
};
module2.exports = class FixedQueue {
    constructor(){
        this.head = this.tail = new FixedCircularBuffer();
    }
    isEmpty() {
        return this.head.isEmpty();
    }
    push(data) {
        if (this.head.isFull()) {
            this.head = this.head.next = new FixedCircularBuffer();
        }
        this.head.push(data);
    }
    shift() {
        const tail = this.tail;
        const next = tail.shift();
        if (tail.isEmpty() && tail.next !== null) {
            this.tail = tail.next;
        }
        return next;
    }
};

return module2.exports;
}
