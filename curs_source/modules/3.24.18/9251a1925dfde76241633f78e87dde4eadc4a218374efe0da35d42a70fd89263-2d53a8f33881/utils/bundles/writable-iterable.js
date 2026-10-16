var WriteIterableClosedError, MapWritable;
export { MapWritable, WriteIterableClosedError };
var __wakaru_init_writable_iterable_initialized = false;
export function init_writable_iterable() {
if (__wakaru_init_writable_iterable_initialized) return;
__wakaru_init_writable_iterable_initialized = true;
"use strict";
WriteIterableClosedError = class extends Error {
    constructor(message){
        super(message);
        this.name = "WriteIterableClosedError";
    }
};
MapWritable = class {
    constructor(writable, map4){
        this.writable = writable;
        this.map = map4;
        this.closed = false;
    }
    async write(item) {
        if (this.closed) {
            throw new WriteIterableClosedError("WritableIterable is closed");
        }
        const mapped = this.map(item);
        await this.writable.write(mapped);
    }
    close() {
        if (this.closed) return;
        this.closed = true;
    }
};

}
