var AsyncEventBuffer, AsyncEventFanout;
export { AsyncEventBuffer, AsyncEventFanout };
var __wakaru_init_async_event_fanout_initialized = false;
export function init_async_event_fanout() {
if (__wakaru_init_async_event_fanout_initialized) return;
__wakaru_init_async_event_fanout_initialized = true;
"use strict";
AsyncEventBuffer = class {
    constructor(){
        this.items = [];
        this.head = 0;
    }
    get length() {
        return this.items.length - this.head;
    }
    push(event) {
        this.items.push(event);
    }
    shift() {
        if (this.head >= this.items.length) {
            return void 0;
        }
        const event = this.items[this.head];
        this.items[this.head] = void 0;
        this.head++;
        if (this.head > 64 && this.head * 2 >= this.items.length) {
            this.items = this.items.slice(this.head);
            this.head = 0;
        }
        return event;
    }
};
AsyncEventFanout = class {
    constructor(){
        this.queues = new Set();
        this.closed = false;
    }
    get size() {
        return this.queues.size;
    }
    get isClosed() {
        return this.closed;
    }
    add(queue) {
        this.queues.add(queue);
    }
    delete(queue) {
        this.queues.delete(queue);
        queue.notify?.();
        queue.notify = void 0;
    }
    forEach(fn) {
        for (const queue of this.queues){
            fn(queue);
        }
    }
    wake(queue) {
        queue.notify?.();
        queue.notify = void 0;
    }
    wakeAll() {
        for (const queue of this.queues){
            this.wake(queue);
        }
    }
    close() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.wakeAll();
    }
    waitForEvent(ctx, queue) {
        return new Promise((resolve36)=>{
            if (ctx.signal.aborted || this.closed || queue.events.length > 0) {
                resolve36();
                return;
            }
            const cleanup = ()=>{
                if (queue.notify === onEvent) {
                    queue.notify = void 0;
                }
                ctx.signal.removeEventListener("abort", onAbort);
            };
            const onEvent = ()=>{
                cleanup();
                resolve36();
            };
            const onAbort = ()=>{
                cleanup();
                resolve36();
            };
            queue.notify = onEvent;
            ctx.signal.addEventListener("abort", onAbort, {
                once: true
            });
        });
    }
};

}
