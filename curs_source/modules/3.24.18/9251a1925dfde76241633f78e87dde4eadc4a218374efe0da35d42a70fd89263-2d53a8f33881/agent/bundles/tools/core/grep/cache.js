import { argsMatch } from "../../../../../mcp_sandbox_policy_exports.js";
var LRU_CACHE_CAPACITY, GrepResultCache;
export { GrepResultCache, LRU_CACHE_CAPACITY };
var __wakaru_init_cache2_initialized = false;
export function init_cache2() {
if (__wakaru_init_cache2_initialized) return;
__wakaru_init_cache2_initialized = true;
"use strict";
LRU_CACHE_CAPACITY = 5;
GrepResultCache = class {
    constructor(capacity = LRU_CACHE_CAPACITY){
        this.entries = [];
        this.capacity = capacity;
    }
    get(args) {
        const index = this.entries.findIndex((entry2)=>argsMatch(entry2.args, args));
        if (index === -1) {
            return void 0;
        }
        const [entry] = this.entries.splice(index, 1);
        this.entries.unshift(entry);
        return entry.result;
    }
    set(args, result) {
        const existingIndex = this.entries.findIndex((entry)=>argsMatch(entry.args, args));
        if (existingIndex !== -1) {
            this.entries.splice(existingIndex, 1);
        } else if (this.entries.length >= this.capacity) {
            this.entries.pop();
        }
        this.entries.unshift({
            args,
            result
        });
    }
    clear() {
        this.entries = [];
    }
    get size() {
        return this.entries.length;
    }
};

}
