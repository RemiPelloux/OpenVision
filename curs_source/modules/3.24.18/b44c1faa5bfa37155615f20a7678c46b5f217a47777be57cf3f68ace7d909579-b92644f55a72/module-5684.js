"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AsyncIterPushable = void 0;
class r {
    constructor(e){
        this.timeoutMs = e, this.queue = [], this.queueHead = 0, this.resolve = void 0, this.reject = void 0, this._end = !1, this.e = void 0, this.basicPromise = new Promise((e, t)=>{
            this.resolve = e, this.reject = t;
        });
    }
    hasQueuedValue() {
        return this.queueHead < this.queue.length;
    }
    shiftQueuedValue() {
        const e = this.queue[this.queueHead];
        return this.queue[this.queueHead] = void 0, this.queueHead++, this.queueHead > 64 && 2 * this.queueHead >= this.queue.length && (this.queue = this.queue.slice(this.queueHead), this.queueHead = 0), e;
    }
    push(e) {
        this.queue.push(e), this.resolve && this.resolve();
    }
    end() {
        this.resolve && this.resolve(), this._end = !0;
    }
    error(e) {
        this.reject && this.reject(e), this.e = e;
    }
    resetPromise() {
        this.basicPromise = new Promise((e, t)=>{
            this.resolve = e, this.reject = t;
        }).catch((e)=>{
            this.e = e;
        });
    }
    [Symbol.asyncIterator]() {
        const e = this.timeoutMs;
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
                    const t = await async function(e, t) {
                        let r;
                        try {
                            return await Promise.race([
                                e.then(()=>!1),
                                new Promise((e)=>{
                                    r = setTimeout(()=>e(!0), t);
                                })
                            ]);
                        } finally{
                            void 0 !== r && clearTimeout(r);
                        }
                    }(this.basicPromise, e);
                    if (void 0 !== this.e) throw this.e;
                    if (this.hasQueuedValue()) return {
                        done: !1,
                        value: this.shiftQueuedValue()
                    };
                    if (t || this._end) return {
                        done: !0,
                        value: void 0
                    };
                    throw new Error("AsyncIterPushable: should not be here");
                } finally{
                    this.resetPromise();
                }
            },
            throw: async (e)=>(this.error(e), this._end = !0, this.resetPromise(), {
                    done: !0,
                    value: void 0
                })
        };
    }
}
exports.AsyncIterPushable = r;
