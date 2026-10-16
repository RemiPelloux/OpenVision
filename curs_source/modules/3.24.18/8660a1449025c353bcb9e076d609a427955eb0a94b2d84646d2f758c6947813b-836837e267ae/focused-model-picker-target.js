import { Pse } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
var qDf, zDf, VDf, U3i;
export { U3i, VDf, qDf, zDf };
var __wakaru_KDf_initialized = false;
export function KDf() {
if (__wakaru_KDf_initialized) return;
__wakaru_KDf_initialized = true;
"use strict";
E(), Bs(), qDf = [
    "plan",
    "edit",
    "main"
], zDf = [
    "main",
    "edit"
], VDf = class {
    constructor(){
        this._registrations = [];
    }
    register(t, e, n, i = $t) {
        const r = {
            composerId: t,
            windowId: Pse(i),
            kind: e,
            target: n
        };
        return this._registrations.push(r), ()=>{
            const s = this._registrations.indexOf(r);
            s !== -1 && this._registrations.splice(s, 1);
        };
    }
    getFocusedTargetInWindow(t) {
        const e = Pse(t);
        for (const n of qDf)for(let i = this._registrations.length - 1; i >= 0; i--){
            const r = this._registrations[i];
            if (r.windowId === e && r.kind === n && r.target.isFocused()) return r.target;
        }
    }
    getDefaultPromptTarget(t, e = $t) {
        const n = Pse(e);
        for (const i of zDf)for(let r = this._registrations.length - 1; r >= 0; r--){
            const s = this._registrations[r];
            if (s.composerId === t && s.windowId === n && s.kind === i) return s.target;
        }
    }
    cycleFocusedTargetInWindow(t) {
        const e = this.getFocusedTargetInWindow(t);
        return e ? (e.cycleHotkeyParameter(), !0) : !1;
    }
}, U3i = new VDf;

}
