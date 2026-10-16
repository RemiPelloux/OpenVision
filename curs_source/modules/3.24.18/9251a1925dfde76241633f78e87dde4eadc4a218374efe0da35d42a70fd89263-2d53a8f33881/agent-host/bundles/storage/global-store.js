var LazyAgentHostGlobalStore;
export { LazyAgentHostGlobalStore };
var __wakaru_init_global_store_initialized = false;
export function init_global_store() {
if (__wakaru_init_global_store_initialized) return;
__wakaru_init_global_store_initialized = true;
"use strict";
LazyAgentHostGlobalStore = class {
    constructor(open7){
        this.open = open7;
        this.closed = false;
    }
    get items() {
        return this.opened().items;
    }
    transaction(fn) {
        return this.opened().transaction(fn);
    }
    close() {
        this.closed = true;
        this.store?.close();
    }
    opened() {
        if (this.store === void 0) {
            if (this.closed) {
                throw new Error("Agent host global store is closed");
            }
            this.store = this.open();
        }
        return this.store;
    }
};

}
