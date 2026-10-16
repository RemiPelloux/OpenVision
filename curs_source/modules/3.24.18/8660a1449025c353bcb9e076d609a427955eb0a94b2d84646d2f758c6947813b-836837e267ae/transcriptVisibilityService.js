import { Gt, Pn, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var gwi, xTm, ATm, RTm;
export { ATm, RTm, gwi, xTm };
var __wakaru_KXr_initialized = false;
export function KXr() {
if (__wakaru_KXr_initialized) return;
__wakaru_KXr_initialized = true;
"use strict";
E(), Qe(), Gt(), Rn(), It(), gwi = jn("transcriptVisibilityService"), xTm = class extends st {
    constructor(){
        super(...arguments), this.refCounts = new Map, this._onDidHideTranscript = this._register(new tt), this.onDidHideTranscript = this._onDidHideTranscript.event;
    }
    register(t) {
        this.refCounts.set(t, (this.refCounts.get(t) ?? 0) + 1);
        let e = !1;
        return Pn(()=>{
            if (e) return;
            e = !0;
            const n = this.refCounts.get(t);
            n !== void 0 && (n <= 1 ? (this.refCounts.delete(t), this._onDidHideTranscript.fire(t)) : this.refCounts.set(t, n - 1));
        });
    }
    isVisible(t) {
        return this.refCounts.has(t);
    }
}, ATm = new xTm, RTm = class {
    constructor(t = ATm){
        this.store = t;
    }
    registerVisibleTranscript(t) {
        return this.store.register(t);
    }
    isTranscriptVisible(t) {
        return this.store.isVisible(t);
    }
    get onDidHideTranscript() {
        return this.store.onDidHideTranscript;
    }
}, bn(gwi, RTm, 1);

}
