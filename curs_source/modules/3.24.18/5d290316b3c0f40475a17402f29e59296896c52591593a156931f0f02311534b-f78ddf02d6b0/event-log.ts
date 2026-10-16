import { h } from "./tslib.es6.js";
var nm, sm;
export { nm, sm };
var __wakaru_kE_initialized = false;
export function kE() {
if (__wakaru_kE_initialized) return;
__wakaru_kE_initialized = true;
"use strict";
h(), nm = 200, sm = class {
    constructor(e = nm){
        this.head = 0, this.count = 0, this.capacity = e, this.buffer = new Array(e);
    }
    push(e) {
        this.buffer[this.head] = e, this.head = (this.head + 1) % this.capacity, this.count < this.capacity && this.count++;
    }
    getEntries() {
        return this.count === 0 ? [] : this.count < this.capacity ? this.buffer.slice(0, this.count) : [
            ...this.buffer.slice(this.head),
            ...this.buffer.slice(0, this.head)
        ];
    }
    clear() {
        this.head = 0, this.count = 0, this.buffer = new Array(this.capacity);
    }
    get size() {
        return this.count;
    }
};

}
