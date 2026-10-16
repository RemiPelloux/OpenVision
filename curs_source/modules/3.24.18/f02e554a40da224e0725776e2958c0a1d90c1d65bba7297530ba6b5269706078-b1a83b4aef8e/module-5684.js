"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AsyncIterPushable = void 0;
class r {
    constructor(t){
        this.timeoutMs = t, this.queue = [], this.queueHead = 0, this.resolve = void 0, this.reject = void 0, this._end = !1, this.e = void 0, this.basicPromise = new Promise((t, e)=>{
            this.resolve = t, this.reject = e;
        });
    }
    hasQueuedValue() {
        return this.queueHead < this.queue.length;
    }
    shiftQueuedValue() {
        const t = this.queue[this.queueHead];
        return this.queue[this.queueHead] = void 0, this.queueHead++, this.queueHead > 64 && 2 * this.queueHead >= this.queue.length && (this.queue = this.queue.slice(this.queueHead), this.queueHead = 0), t;
    }
    push(t) {
        this.queue.push(t), this.resolve && this.resolve();
    }
    end() {
        this.resolve && this.resolve(), this._end = !0;
    }
    error(t) {
        this.reject && this.reject(t), this.e = t;
    }
    resetPromise() {
        this.basicPromise = new Promise((t, e)=>{
            this.resolve = t, this.reject = e;
        }).catch((t)=>{
            this.e = t;
        });
    }
    [Symbol.asyncIterator]() {
        const t = this.timeoutMs;
        return {
            next: async ()=>{
                try {
                    if (void 0 !== this.e) throw this.e;
                    if (this.hasQueuedValue()) return {
                        done: !1,
                        value: this.shiftQueuedValue()
                    };
                    if (this._end) return {
                        done: !0,
                        value: void 0
                    };
                    const e = await async function(t, e) {
                        let r;
                        try {
                            return await Promise.race([
                                t.then(()=>!1),
                                new Promise((t)=>{
                                    r = setTimeout(()=>t(!0), e);
                                })
                            ]);
                        } finally{
                            void 0 !== r && clearTimeout(r);
                        }
                    }(this.basicPromise, t);
                    if (void 0 !== this.e) throw this.e;
                    if (this.hasQueuedValue()) return {
                        done: !1,
                        value: this.shiftQueuedValue()
                    };
                    if (e || this._end) return {
                        done: !0,
                        value: void 0
                    };
                    throw new Error("AsyncIterPushable: should not be here");
                } finally{
                    this.resetPromise();
                }
            },
            throw: async (t)=>(this.error(t), this._end = !0, this.resetPromise(), {
                    done: !0,
                    value: void 0
                })
        };
    }
}
exports.AsyncIterPushable = r;
