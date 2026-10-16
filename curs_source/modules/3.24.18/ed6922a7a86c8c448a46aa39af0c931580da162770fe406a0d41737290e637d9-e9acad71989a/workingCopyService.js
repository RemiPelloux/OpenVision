import { He, Se, bt, ns, po, rn, si, ve, we } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Mc, oc } from "./map.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
var $D, nlh, jGt, ilh;
export { $D, ilh, jGt, nlh };
var __wakaru_dL_initialized = false;
export function dL() {
if (__wakaru_dL_initialized) return;
__wakaru_dL_initialized = true;
"use strict";
x(), Ze(), Pn(), bt(), Qt(), Se(), oc(), si(), $D = vn("workingCopyService"), nlh = class extends Error {
    constructor(e, t){
        super(e), this.name = "WorkingCopyLeakError", this.stack = t;
    }
}, jGt = class mQn extends we {
    constructor(){
        super(...arguments), this._onDidRegister = this._register(new ve), this.onDidRegister = this._onDidRegister.event, this._onDidUnregister = this._register(new ve), this.onDidUnregister = this._onDidUnregister.event, this._onDidChangeDirty = this._register(new ve), this.onDidChangeDirty = this._onDidChangeDirty.event, this._onDidChangeContent = this._register(new ve), this.onDidChangeContent = this._onDidChangeContent.event, this._onDidSave = this._register(new ve), this.onDidSave = this._onDidSave.event, this._workingCopies = new Set, this.mapResourceToWorkingCopies = new Mc, this.mapWorkingCopyToListeners = this._register(new po), this.mapLeakToCounter = new Map;
    }
    get workingCopies() {
        return Array.from(this._workingCopies.values());
    }
    registerWorkingCopy(t) {
        let n = this.mapResourceToWorkingCopies.get(t.resource);
        if (n?.has(t.typeId)) throw new Error(`Cannot register more than one working copy with the same resource ${t.resource.toString()} and type ${t.typeId}.`);
        this._workingCopies.add(t), n || (n = new Map, this.mapResourceToWorkingCopies.set(t.resource, n)), n.set(t.typeId, t);
        const i = new He;
        i.add(t.onDidChangeContent(()=>this._onDidChangeContent.fire(t))), i.add(t.onDidChangeDirty(()=>this._onDidChangeDirty.fire(t))), i.add(t.onDidSave((s)=>this._onDidSave.fire({
                workingCopy: t,
                ...s
            }))), this.mapWorkingCopyToListeners.set(t, i), this._onDidRegister.fire(t), t.isDirty() && this._onDidChangeDirty.fire(t);
        const r = this.trackLeaks(t);
        return rn(()=>{
            r && this.untrackLeaks(r), this.unregisterWorkingCopy(t), this._onDidUnregister.fire(t);
        });
    }
    unregisterWorkingCopy(t) {
        this._workingCopies.delete(t);
        const n = this.mapResourceToWorkingCopies.get(t.resource);
        n?.delete(t.typeId) && n.size === 0 && this.mapResourceToWorkingCopies.delete(t.resource), t.isDirty() && this._onDidChangeDirty.fire(t), this.mapWorkingCopyToListeners.deleteAndDispose(t);
    }
    has(t) {
        return Ee.isUri(t) ? this.mapResourceToWorkingCopies.has(t) : this.mapResourceToWorkingCopies.get(t.resource)?.has(t.typeId) ?? !1;
    }
    get(t) {
        return this.mapResourceToWorkingCopies.get(t.resource)?.get(t.typeId);
    }
    getAll(t) {
        const n = this.mapResourceToWorkingCopies.get(t);
        if (n) return Array.from(n.values());
    }
    trackLeaks(t) {
        if (mQn.LEAK_REPORTED || this._workingCopies.size < mQn.LEAK_TRACKING_THRESHOLD) return;
        const n = `${t.resource.scheme}#${t.typeId || "<no typeId>"}
${new Error().stack?.split(`
`).slice(2).join(`
`) ?? ""}`, i = (this.mapLeakToCounter.get(n) ?? 0) + 1;
        if (this.mapLeakToCounter.set(n, i), this._workingCopies.size > mQn.LEAK_REPORTING_THRESHOLD) {
            mQn.LEAK_REPORTED = !0;
            const [r, s] = Array.from(this.mapLeakToCounter.entries()).reduce(([a, c], [l, u])=>u > c ? [
                    l,
                    u
                ] : [
                    a,
                    c
                ]), o = `Potential working copy LEAK detected, having ${this._workingCopies.size} working copies already. Most frequent owner (${s})`;
            ns(new nlh(o, r));
        }
        return n;
    }
    untrackLeaks(t) {
        const n = (this.mapLeakToCounter.get(t) ?? 1) - 1;
        this.mapLeakToCounter.set(t, n), n === 0 && this.mapLeakToCounter.delete(t);
    }
    get hasDirty() {
        for (const t of this._workingCopies)if (t.isDirty()) return !0;
        return !1;
    }
    get dirtyCount() {
        let t = 0;
        for (const n of this._workingCopies)n.isDirty() && t++;
        return t;
    }
    get dirtyWorkingCopies() {
        return this.workingCopies.filter((t)=>t.isDirty());
    }
    get modifiedCount() {
        let t = 0;
        for (const n of this._workingCopies)n.isModified() && t++;
        return t;
    }
    get modifiedWorkingCopies() {
        return this.workingCopies.filter((t)=>t.isModified());
    }
    isDirty(t, n) {
        const i = this.mapResourceToWorkingCopies.get(t);
        if (i) {
            if (typeof n == "string") return i.get(n)?.isDirty() ?? !1;
            for (const [, r] of i)if (r.isDirty()) return !0;
        }
        return !1;
    }
}, jGt.LEAK_TRACKING_THRESHOLD = 256, jGt.LEAK_REPORTING_THRESHOLD = 2 * jGt.LEAK_TRACKING_THRESHOLD, jGt.LEAK_REPORTED = !1, ilh = jGt, mn($D, ilh, 1);

}
