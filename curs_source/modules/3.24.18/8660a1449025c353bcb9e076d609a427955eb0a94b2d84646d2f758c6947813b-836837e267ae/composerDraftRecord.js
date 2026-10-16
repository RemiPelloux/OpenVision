import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { KO1, VO1 } from "./yBp.js";
import { ze } from "./ze.js";
var LBp, OBp, yFa;
export { LBp, OBp, yFa };
var __wakaru_FBp_initialized = false;
export function FBp() {
if (__wakaru_FBp_initialized) return;
__wakaru_FBp_initialized = true;
"use strict";
E(), iv(), LBp = "composerDraft:", OBp = ze.object({
    text: ze.string(),
    richText: ze.string().optional()
}), yFa = class {
    constructor(t, e){
        this.storageService = t, this.keyPrefix = e, this._written = new Map, this._epoch = 0, this._queue = Promise.resolve();
    }
    _enqueue(t) {
        const e = this._queue.then(t, t);
        return this._queue = e.then(()=>{}, ()=>{}), e;
    }
    async read(t) {
        await this._queue;
        const e = this._epoch, n = await this.storageService.cursorDiskKVGet(this.keyPrefix + t);
        if (e !== this._epoch) return;
        if (this._written.has(t)) return this._written.get(t);
        const i = VO1(n);
        return (n === void 0 || i !== void 0) && this._written.set(t, i), i;
    }
    write(t, e) {
        const n = this._epoch, i = e.text === "" ? void 0 : {
            text: e.text,
            richText: e.richText
        };
        return this._enqueue(async ()=>{
            n !== this._epoch || this._written.has(t) && KO1(this._written.get(t), i) || (await this.storageService.cursorDiskKVSet(this.keyPrefix + t, i === void 0 ? void 0 : JSON.stringify(i)), this._written.set(t, i));
        });
    }
    forget(t) {
        this._written.delete(t);
    }
    delete(t) {
        return this._enqueue(async ()=>{
            this._written.delete(t), await this.storageService.cursorDiskKVSet(this.keyPrefix + t, void 0);
        });
    }
    clear() {
        return this._enqueue(async ()=>{
            this._epoch++, this._written.clear(), await this.storageService.cursorDiskKVClearPrefix(this.keyPrefix);
        });
    }
};

}
