var InteractionQueryIdAllocator;
export { InteractionQueryIdAllocator };
var __wakaru_init_interaction_query_ids_initialized = false;
export function init_interaction_query_ids() {
if (__wakaru_init_interaction_query_ids_initialized) return;
__wakaru_init_interaction_query_ids_initialized = true;
"use strict";
InteractionQueryIdAllocator = class {
    constructor(firstId = 0){
        this.nextId = firstId;
    }
    next() {
        return this.nextId++;
    }
    peekNext() {
        return this.nextId;
    }
    observe(id) {
        if (Number.isSafeInteger(id) && id >= this.nextId) {
            this.nextId = id + 1;
        }
    }
};

}
