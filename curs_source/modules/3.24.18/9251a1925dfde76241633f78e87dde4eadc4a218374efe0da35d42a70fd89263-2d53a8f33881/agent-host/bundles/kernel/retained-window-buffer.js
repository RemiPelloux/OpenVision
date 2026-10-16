var RetainedWindowBuffer;
export { RetainedWindowBuffer };
var __wakaru_init_retained_window_buffer_initialized = false;
export function init_retained_window_buffer() {
if (__wakaru_init_retained_window_buffer_initialized) return;
__wakaru_init_retained_window_buffer_initialized = true;
"use strict";
RetainedWindowBuffer = class {
    constructor(){
        this.items = [];
        this.start = 0;
    }
    get length() {
        return this.items.length - this.start;
    }
    get physicalLength() {
        return this.items.length;
    }
    get liveCount() {
        let live = 0;
        for(let i = this.start; i < this.items.length; i++){
            if (this.items[i] !== void 0) {
                live++;
            }
        }
        return live;
    }
    push(item) {
        this.items.push(item);
    }
    at(logicalIndex) {
        if (logicalIndex < 0 || logicalIndex >= this.length) {
            return void 0;
        }
        return this.items[this.start + logicalIndex];
    }
    first() {
        return this.at(0);
    }
    last() {
        return this.at(this.length - 1);
    }
    toArray() {
        const length = this.length;
        const retained = new Array(length);
        for(let i = 0; i < length; i++){
            const item = this.items[this.start + i];
            if (item === void 0) {
                throw new Error("RetainedWindowBuffer retained window is sparse");
            }
            retained[i] = item;
        }
        return retained;
    }
    *values() {
        for(let i = this.start; i < this.items.length; i++){
            const item = this.items[i];
            if (item === void 0) {
                throw new Error("RetainedWindowBuffer retained window is sparse");
            }
            yield item;
        }
    }
    evictOldest(count2) {
        if (count2 <= 0) {
            return [];
        }
        if (count2 > this.length) {
            throw new Error(`RetainedWindowBuffer.evictOldest count ${count2} exceeds length ${this.length}`);
        }
        const evictFrom = this.start;
        const evicted = new Array(count2);
        for(let i = 0; i < count2; i++){
            const item = this.items[evictFrom + i];
            if (item === void 0) {
                throw new Error("RetainedWindowBuffer evicted a sparse slot");
            }
            evicted[i] = item;
            this.items[evictFrom + i] = void 0;
        }
        this.start = evictFrom + count2;
        return evicted;
    }
    enforceCap(max) {
        const overflow = this.length - max;
        if (overflow <= 0) {
            return [];
        }
        return this.evictOldest(overflow);
    }
    maybeCompact(threshold) {
        if (threshold <= 0 || this.start < threshold) {
            return;
        }
        this.items = this.items.slice(this.start);
        this.start = 0;
    }
};

}
