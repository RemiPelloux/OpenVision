import { Ei, Gt, Nt, Pn, Qe, da, st, tt, xr } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { du, gd } from "./map.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
var rF, RKm, HIn, PKm;
export { HIn, PKm, RKm, rF };
var __wakaru_V4_initialized = false;
export function V4() {
if (__wakaru_V4_initialized) return;
__wakaru_V4_initialized = true;
"use strict";
E(), It(), Rn(), Gt(), fn(), Qe(), du(), Ei(), rF = jn("workingCopyService"), RKm = class extends Error {
    constructor(t, e){
        super(t), this.name = "WorkingCopyLeakError", this.stack = e;
    }
}, HIn = class qZi extends st {
    constructor(){
        super(...arguments), this._onDidRegister = this._register(new tt), this.onDidRegister = this._onDidRegister.event, this._onDidUnregister = this._register(new tt), this.onDidUnregister = this._onDidUnregister.event, this._onDidChangeDirty = this._register(new tt), this.onDidChangeDirty = this._onDidChangeDirty.event, this._onDidChangeContent = this._register(new tt), this.onDidChangeContent = this._onDidChangeContent.event, this._onDidSave = this._register(new tt), this.onDidSave = this._onDidSave.event, this._workingCopies = new Set, this.mapResourceToWorkingCopies = new gd, this.mapWorkingCopyToListeners = this._register(new da), this.mapLeakToCounter = new Map;
    }
    get workingCopies() {
        return Array.from(this._workingCopies.values());
    }
    registerWorkingCopy(e) {
        let n = this.mapResourceToWorkingCopies.get(e.resource);
        if (n?.has(e.typeId)) throw new Error(`Cannot register more than one working copy with the same resource ${e.resource.toString()} and type ${e.typeId}.`);
        this._workingCopies.add(e), n || (n = new Map, this.mapResourceToWorkingCopies.set(e.resource, n)), n.set(e.typeId, e);
        const i = new Nt;
        i.add(e.onDidChangeContent(()=>this._onDidChangeContent.fire(e))), i.add(e.onDidChangeDirty(()=>this._onDidChangeDirty.fire(e))), i.add(e.onDidSave((s)=>this._onDidSave.fire({
                workingCopy: e,
                ...s
            }))), this.mapWorkingCopyToListeners.set(e, i), this._onDidRegister.fire(e), e.isDirty() && this._onDidChangeDirty.fire(e);
        const r = this.trackLeaks(e);
        return Pn(()=>{
            r && this.untrackLeaks(r), this.unregisterWorkingCopy(e), this._onDidUnregister.fire(e);
        });
    }
    unregisterWorkingCopy(e) {
        this._workingCopies.delete(e);
        const n = this.mapResourceToWorkingCopies.get(e.resource);
        n?.delete(e.typeId) && n.size === 0 && this.mapResourceToWorkingCopies.delete(e.resource), e.isDirty() && this._onDidChangeDirty.fire(e), this.mapWorkingCopyToListeners.deleteAndDispose(e);
    }
    has(e) {
        return rt.isUri(e) ? this.mapResourceToWorkingCopies.has(e) : this.mapResourceToWorkingCopies.get(e.resource)?.has(e.typeId) ?? !1;
    }
    get(e) {
        return this.mapResourceToWorkingCopies.get(e.resource)?.get(e.typeId);
    }
    getAll(e) {
        const n = this.mapResourceToWorkingCopies.get(e);
        if (n) return Array.from(n.values());
    }
    trackLeaks(e) {
        if (qZi.LEAK_REPORTED || this._workingCopies.size < qZi.LEAK_TRACKING_THRESHOLD) return;
        const n = `${e.resource.scheme}#${e.typeId || "<no typeId>"}
${new Error().stack?.split(`
`).slice(2).join(`
`) ?? ""}`, i = (this.mapLeakToCounter.get(n) ?? 0) + 1;
        if (this.mapLeakToCounter.set(n, i), this._workingCopies.size > qZi.LEAK_REPORTING_THRESHOLD) {
            qZi.LEAK_REPORTED = !0;
            const [r, s] = Array.from(this.mapLeakToCounter.entries()).reduce(([a, l], [c, u])=>u > l ? [
                    c,
                    u
                ] : [
                    a,
                    l
                ]), o = `Potential working copy LEAK detected, having ${this._workingCopies.size} working copies already. Most frequent owner (${s})`;
            xr(new RKm(o, r));
        }
        return n;
    }
    untrackLeaks(e) {
        const n = (this.mapLeakToCounter.get(e) ?? 1) - 1;
        this.mapLeakToCounter.set(e, n), n === 0 && this.mapLeakToCounter.delete(e);
    }
    get hasDirty() {
        for (const e of this._workingCopies)if (e.isDirty()) return !0;
        return !1;
    }
    get dirtyCount() {
        let e = 0;
        for (const n of this._workingCopies)n.isDirty() && e++;
        return e;
    }
    get dirtyWorkingCopies() {
        return this.workingCopies.filter((e)=>e.isDirty());
    }
    get modifiedCount() {
        let e = 0;
        for (const n of this._workingCopies)n.isModified() && e++;
        return e;
    }
    get modifiedWorkingCopies() {
        return this.workingCopies.filter((e)=>e.isModified());
    }
    isDirty(e, n) {
        const i = this.mapResourceToWorkingCopies.get(e);
        if (i) {
            if (typeof n == "string") return i.get(n)?.isDirty() ?? !1;
            for (const [, r] of i)if (r.isDirty()) return !0;
        }
        return !1;
    }
}, HIn.LEAK_TRACKING_THRESHOLD = 256, HIn.LEAK_REPORTING_THRESHOLD = 2 * HIn.LEAK_TRACKING_THRESHOLD, HIn.LEAK_REPORTED = !1, PKm = HIn, bn(rF, PKm, 1);

}
