import { Ec, Qe, Vn, st } from "./Iwo.js";
import { qn } from "./async.js";
import { E } from "./tslib.es6.js";
var FIv, BIv;
export { BIv, FIv };
var __wakaru_yI0_initialized = false;
export function yI0() {
if (__wakaru_yI0_initialized) return;
__wakaru_yI0_initialized = true;
"use strict";
E(), qn(), Qe(), FIv = 5e3, BIv = class extends st {
    constructor(t){
        super(), this.nextRequestId = 0, this.active = null, this.restoreTimeout = this._register(new Vn), this.onPendingChange = t.onPendingChange, this.scheduleRestoreTimeout = t.scheduleRestoreTimeout ?? ((e)=>Ec(e, FIv));
    }
    get isPending() {
        return this.active !== null;
    }
    get isPickPending() {
        return this.active?.kind === "pick";
    }
    beginPick() {
        const t = ++this.nextRequestId;
        return this.restoreTimeout.clear(), this.setActive({
            id: t,
            kind: "pick"
        }), t;
    }
    beginRestore(t) {
        const e = ++this.nextRequestId;
        return this.setActive({
            id: e,
            kind: "restore"
        }), this.restoreTimeout.value = this.scheduleRestoreTimeout(()=>{
            this.active?.id !== e || this.active.kind !== "restore" || (this.restoreTimeout.clear(), this.setActive(null), t());
        }), e;
    }
    resolvePick(t) {
        return t === void 0 ? this.active === null : this.active?.id !== t || this.active.kind !== "pick" ? !1 : (this.setActive(null), !0);
    }
    resolveRestore(t) {
        return this.active?.id !== t || this.active.kind !== "restore" ? !1 : (this.restoreTimeout.clear(), this.setActive(null), !0);
    }
    clearIfActive(t) {
        return this.active?.id !== t ? !1 : (this.restoreTimeout.clear(), this.setActive(null), !0);
    }
    clearStale() {
        this.restoreTimeout.clear(), this.setActive(null);
    }
    dispose() {
        this.active = null, super.dispose();
    }
    setActive(t) {
        const e = this.active !== null;
        this.active = t;
        const n = this.active !== null;
        e !== n && this.onPendingChange(n);
    }
};

}
