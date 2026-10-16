import { Se, bt, rn, ve, we } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var FNn, a3d, c3d, l3d;
export { FNn, a3d, c3d, l3d };
var __wakaru_SVi_initialized = false;
export function SVi() {
if (__wakaru_SVi_initialized) return;
__wakaru_SVi_initialized = true;
"use strict";
x(), Se(), bt(), Pn(), Ze(), FNn = vn("transcriptVisibilityService"), a3d = class extends we {
    constructor(){
        super(...arguments), this.refCounts = new Map, this._onDidHideTranscript = this._register(new ve), this.onDidHideTranscript = this._onDidHideTranscript.event;
    }
    register(e) {
        this.refCounts.set(e, (this.refCounts.get(e) ?? 0) + 1);
        let t = !1;
        return rn(()=>{
            if (t) return;
            t = !0;
            const n = this.refCounts.get(e);
            n !== void 0 && (n <= 1 ? (this.refCounts.delete(e), this._onDidHideTranscript.fire(e)) : this.refCounts.set(e, n - 1));
        });
    }
    isVisible(e) {
        return this.refCounts.has(e);
    }
}, c3d = new a3d, l3d = class {
    constructor(e = c3d){
        this.store = e;
    }
    registerVisibleTranscript(e) {
        return this.store.register(e);
    }
    isTranscriptVisible(e) {
        return this.store.isVisible(e);
    }
    get onDidHideTranscript() {
        return this.store.onDidHideTranscript;
    }
}, mn(FNn, l3d, 1);

}
