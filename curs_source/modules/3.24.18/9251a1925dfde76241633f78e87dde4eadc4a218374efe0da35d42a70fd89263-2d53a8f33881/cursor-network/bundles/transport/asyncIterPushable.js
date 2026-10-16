var __wakaru_require_asyncIterPushable_cache;
export function require_asyncIterPushable() {
if (__wakaru_require_asyncIterPushable_cache) return __wakaru_require_asyncIterPushable_cache;
var exports2 = {};
__wakaru_require_asyncIterPushable_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AsyncIterPushable = void 0;
async function raceAgainstTimeout(promise, timeoutMs) {
    let timer2;
    try {
        return await Promise.race([
            promise.then(()=>false),
            new Promise((resolve36)=>{
                timer2 = setTimeout(()=>resolve36(true), timeoutMs);
            })
        ]);
    } finally{
        if (timer2 !== void 0) {
            clearTimeout(timer2);
        }
    }
}
var AsyncIterPushable = class {
    constructor(timeoutMs){
        this.timeoutMs = timeoutMs;
        this.queue = [];
        this.queueHead = 0;
        this.resolve = void 0;
        this.reject = void 0;
        this._end = false;
        this.e = void 0;
        this.basicPromise = new Promise((resolve36, reject2)=>{
            this.resolve = resolve36;
            this.reject = reject2;
        });
    }
    hasQueuedValue() {
        return this.queueHead < this.queue.length;
    }
    shiftQueuedValue() {
        const value = this.queue[this.queueHead];
        this.queue[this.queueHead] = void 0;
        this.queueHead++;
        if (this.queueHead > 64 && this.queueHead * 2 >= this.queue.length) {
            this.queue = this.queue.slice(this.queueHead);
            this.queueHead = 0;
        }
        return value;
    }
    push(value) {
        this.queue.push(value);
        if (this.resolve) {
            this.resolve();
        }
    }
    end() {
        if (this.resolve) {
            this.resolve();
        }
        this._end = true;
    }
    error(e) {
        if (this.reject) {
            this.reject(e);
        }
        this.e = e;
    }
    resetPromise() {
        this.basicPromise = new Promise((resolve36, reject2)=>{
            this.resolve = resolve36;
            this.reject = reject2;
        }).catch((e)=>{
            this.e = e;
        });
    }
    [Symbol.asyncIterator]() {
        const timeoutMs = this.timeoutMs;
        return {
            next: async ()=>{
                try {
                    if (this.e !== void 0) {
                        throw this.e;
                    }
                    if (this.hasQueuedValue()) {
                        return {
                            done: false,
                            value: this.shiftQueuedValue()
                        };
                    }
                    if (this._end) {
                        return {
                            done: true,
                            value: void 0
                        };
                    }
                    const isTimeout = await raceAgainstTimeout(this.basicPromise, timeoutMs);
                    if (this.e !== void 0) {
                        throw this.e;
                    }
                    if (this.hasQueuedValue()) {
                        return {
                            done: false,
                            value: this.shiftQueuedValue()
                        };
                    }
                    if (isTimeout || this._end) {
                        return {
                            done: true,
                            value: void 0
                        };
                    }
                    throw new Error("AsyncIterPushable: should not be here");
                } finally{
                    this.resetPromise();
                }
            },
            throw: async (e)=>{
                this.error(e);
                this._end = true;
                this.resetPromise();
                return {
                    done: true,
                    value: void 0
                };
            }
        };
    }
};
exports2.AsyncIterPushable = AsyncIterPushable;

return exports2;
}
