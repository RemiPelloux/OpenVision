var ReplayableAsyncIterable;
export { ReplayableAsyncIterable };
var __wakaru_init_replayable_async_iterable_initialized = false;
export function init_replayable_async_iterable() {
if (__wakaru_init_replayable_async_iterable_initialized) return;
__wakaru_init_replayable_async_iterable_initialized = true;
"use strict";
ReplayableAsyncIterable = class {
    constructor(source){
        this.buffer = [];
        this.closed = false;
        this.waiters = [];
        void this.consume(source);
    }
    async consume(source) {
        try {
            for await (const value of source){
                this.buffer.push(value);
                const toNotify = this.waiters;
                this.waiters = [];
                for (const waiter of toNotify){
                    waiter();
                }
            }
        } catch (e) {
            this.error = e instanceof Error ? e : new Error(String(e));
        } finally{
            this.closed = true;
            const toNotify = this.waiters;
            this.waiters = [];
            for (const waiter of toNotify){
                waiter();
            }
        }
    }
    async *[Symbol.asyncIterator]() {
        let index = 0;
        while(true){
            while(index < this.buffer.length){
                yield this.buffer[index];
                index++;
            }
            if (this.closed) {
                if (this.error !== void 0) {
                    throw this.error;
                }
                return;
            }
            await new Promise((resolve36)=>{
                this.waiters.push(resolve36);
            });
        }
    }
};

}
