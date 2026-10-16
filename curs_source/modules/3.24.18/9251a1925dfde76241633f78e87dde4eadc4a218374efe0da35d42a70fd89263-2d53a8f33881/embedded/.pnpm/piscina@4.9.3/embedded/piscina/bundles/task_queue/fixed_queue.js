var __wakaru_require_fixed_queue3_cache;
export function require_fixed_queue3() {
if (__wakaru_require_fixed_queue3_cache) return __wakaru_require_fixed_queue3_cache;
var exports2 = {};
__wakaru_require_fixed_queue3_cache = exports2;
"use strict";
var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
    return mod2 && mod2.__esModule ? mod2 : {
        "default": mod2
    };
};
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.FixedQueue = void 0;
var node_assert_1 = __importDefault(require("node:assert"));
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
        if (nextItem === void 0) {
            return null;
        }
        this.list[this.bottom] = void 0;
        this.bottom = this.bottom + 1 & kMask;
        return nextItem;
    }
    remove(task) {
        const indexToRemove = this.list.indexOf(task);
        node_assert_1.default.notStrictEqual(indexToRemove, -1);
        let curr = indexToRemove;
        while(true){
            const next = curr + 1 & kMask;
            this.list[curr] = this.list[next];
            if (this.list[curr] === void 0) {
                break;
            }
            if (next === indexToRemove) {
                this.list[curr] = void 0;
                break;
            }
            curr = next;
        }
        this.top = this.top - 1 & kMask;
    }
};
var FixedQueue2 = class {
    constructor(){
        this._size = 0;
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
        this._size++;
    }
    shift() {
        const tail = this.tail;
        const next = tail.shift();
        if (next !== null) this._size--;
        if (tail.isEmpty() && tail.next !== null) {
            this.tail = tail.next;
            tail.next = null;
        }
        return next;
    }
    remove(task) {
        let prev = null;
        let buffer = this.tail;
        while(true){
            if (buffer.list.includes(task)) {
                buffer.remove(task);
                this._size--;
                break;
            }
            if (buffer.next === null) break;
            prev = buffer;
            buffer = buffer.next;
        }
        if (buffer.isEmpty()) {
            if (prev === null) {
                if (buffer.next !== null) this.tail = buffer.next;
            } else {
                if (buffer.next === null) {
                    this.head = prev;
                } else {
                    prev.next = buffer.next;
                }
            }
        }
    }
    get size() {
        return this._size;
    }
};
exports2.FixedQueue = FixedQueue2;

return exports2;
}
