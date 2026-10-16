import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var KFi, cTv;
export { KFi, cTv };
var __wakaru_YFi_initialized = false;
export function YFi() {
if (__wakaru_YFi_initialized) return;
__wakaru_YFi_initialized = true;
"use strict";
E(), Rn(), It(), KFi = Il("menuAccessContextService"), cTv = class {
    constructor(){
        this.canArmWindowInitialContext = !0, this.pendingContexts = new Map;
    }
    armWindowInitialContext(t, e) {
        if (!this.canArmWindowInitialContext) return;
        this.canArmWindowInitialContext = !1;
        const n = {
            accessContext: "window_initial",
            startedAtMs: e
        };
        return this.initialContext = {
            targetId: t,
            snapshot: n,
            unclaimedMenus: new Set([
                "slash",
                "mention"
            ])
        }, n;
    }
    beginContext(t, e, n) {
        const i = {
            accessContext: e,
            startedAtMs: n
        };
        return this.canArmWindowInitialContext = !1, this.initialContext = void 0, this.pendingContexts.set(t, {
            targetId: t,
            snapshot: i,
            unclaimedMenus: new Set([
                "slash",
                "mention"
            ])
        }), i;
    }
    clearContext(t) {
        this.pendingContexts.delete(t), this.initialContext?.targetId === t && (this.initialContext = void 0);
    }
    claimContext(t, e) {
        const n = this.pendingContexts.get(t), i = this.initialContext?.targetId === t ? this.initialContext : void 0, r = n ?? i;
        if (!(r === void 0 || !r.unclaimedMenus.delete(e))) return r.unclaimedMenus.size === 0 && (i !== void 0 ? this.initialContext = void 0 : this.pendingContexts.delete(t)), r.snapshot;
    }
}, bn(KFi, cTv, 1, 1);

}
