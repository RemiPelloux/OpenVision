"use strict";
require.d(exports, {
    W: ()=>s,
    l: ()=>n
});
class n {
    constructor(){
        this.items = [], this.head = 0;
    }
    get length() {
        return this.items.length - this.head;
    }
    push(e) {
        this.items.push(e);
    }
    shift() {
        if (this.head >= this.items.length) return;
        const e = this.items[this.head];
        return this.items[this.head] = void 0, this.head++, this.head > 64 && 2 * this.head >= this.items.length && (this.items = this.items.slice(this.head), this.head = 0), e;
    }
}
class s {
    constructor(){
        this.queues = new Set, this.closed = !1;
    }
    get size() {
        return this.queues.size;
    }
    get isClosed() {
        return this.closed;
    }
    add(e) {
        this.queues.add(e);
    }
    delete(e) {
        this.queues.delete(e), e.notify?.(), e.notify = void 0;
    }
    forEach(e) {
        for (const t of this.queues)e(t);
    }
    wake(e) {
        e.notify?.(), e.notify = void 0;
    }
    wakeAll() {
        for (const e of this.queues)this.wake(e);
    }
    close() {
        this.closed || (this.closed = !0, this.wakeAll());
    }
    waitForEvent(e, t) {
        return new Promise((r)=>{
            if (e.signal.aborted || this.closed || t.events.length > 0) return void r();
            const n = ()=>{
                t.notify === s && (t.notify = void 0), e.signal.removeEventListener("abort", o);
            }, s = ()=>{
                n(), r();
            }, o = ()=>{
                n(), r();
            };
            t.notify = s, e.signal.addEventListener("abort", o, {
                once: !0
            });
        });
    }
}
