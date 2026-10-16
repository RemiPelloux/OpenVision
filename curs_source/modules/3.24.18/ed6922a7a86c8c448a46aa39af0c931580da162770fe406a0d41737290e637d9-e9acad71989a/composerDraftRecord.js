import { L_v, P_v } from "./A3u.js";
import { De } from "./De_3.js";
import { HM } from "./index_191.js";
import { x } from "./tslib.es6.js";
var H3u, W3u, gXs;
export { H3u, W3u, gXs };
var __wakaru_G3u_initialized = false;
export function G3u() {
if (__wakaru_G3u_initialized) return;
__wakaru_G3u_initialized = true;
"use strict";
x(), HM(), H3u = "composerDraft:", W3u = De.object({
    text: De.string(),
    richText: De.string().optional()
}), gXs = class {
    constructor(e, t){
        this.storageService = e, this.keyPrefix = t, this._written = new Map, this._epoch = 0, this._queue = Promise.resolve();
    }
    _enqueue(e) {
        const t = this._queue.then(e, e);
        return this._queue = t.then(()=>{}, ()=>{}), t;
    }
    async read(e) {
        await this._queue;
        const t = this._epoch, n = await this.storageService.cursorDiskKVGet(this.keyPrefix + e);
        if (t !== this._epoch) return;
        if (this._written.has(e)) return this._written.get(e);
        const i = P_v(n);
        return (n === void 0 || i !== void 0) && this._written.set(e, i), i;
    }
    write(e, t) {
        const n = this._epoch, i = t.text === "" ? void 0 : {
            text: t.text,
            richText: t.richText
        };
        return this._enqueue(async ()=>{
            n !== this._epoch || this._written.has(e) && L_v(this._written.get(e), i) || (await this.storageService.cursorDiskKVSet(this.keyPrefix + e, i === void 0 ? void 0 : JSON.stringify(i)), this._written.set(e, i));
        });
    }
    forget(e) {
        this._written.delete(e);
    }
    delete(e) {
        return this._enqueue(async ()=>{
            this._written.delete(e), await this.storageService.cursorDiskKVSet(this.keyPrefix + e, void 0);
        });
    }
    clear() {
        return this._enqueue(async ()=>{
            this._epoch++, this._written.clear(), await this.storageService.cursorDiskKVClearPrefix(this.keyPrefix);
        });
    }
};

}
