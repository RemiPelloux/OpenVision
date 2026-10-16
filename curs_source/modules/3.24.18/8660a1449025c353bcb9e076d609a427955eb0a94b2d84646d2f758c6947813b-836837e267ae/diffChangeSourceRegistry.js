import { Gt, Pn, Qe, st, tt } from "./Iwo.js";
import { bn } from "./SZu.js";
import { lPe, mX } from "./diffChangeSource.js";
import { fCe, hPe } from "./diffDecorationVisibilityService.js";
import { Rn } from "./extensions.js";
import { G4, UO } from "./inlineDiffService.js";
import { FIk, L0g } from "./inlineDiffSourceAdapter.js";
import { Jc } from "./observable.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Yv } from "./utils_10.js";
var $cs;
export { $cs };
var __wakaru_BIk_initialized = false;
export function BIk() {
if (__wakaru_BIk_initialized) return;
__wakaru_BIk_initialized = true;
"use strict";
E(), Gt(), Qe(), Jc(), Rn(), lPe(), G4(), FIk(), hPe(), $cs = class extends st {
    constructor(t, e){
        super(), this._sources = new Map, this._sourceDisposables = new Map, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this.descriptorsObservable = Yv(this, this._onDidChange.event, ()=>this.getDescriptors());
        const n = new L0g(t, e), i = this.registerSource(n);
        this._register(n), this._register(i);
    }
    registerSource(t) {
        if (this._sources.has(t.sourceId)) throw new Error(`Source with id '${t.sourceId}' is already registered`);
        this._sources.set(t.sourceId, t);
        const e = t.onDidChange(()=>{
            this._onDidChange.fire();
        });
        return this._sourceDisposables.set(t.sourceId, e), this._onDidChange.fire(), Pn(()=>this.unregisterSource(t.sourceId));
    }
    unregisterSource(t) {
        const e = this._sourceDisposables.get(t);
        e && (e.dispose(), this._sourceDisposables.delete(t)), this._sources.delete(t) && this._onDidChange.fire();
    }
    getSources() {
        return Array.from(this._sources.values());
    }
    getSourceById(t) {
        return this._sources.get(t);
    }
    getDescriptors() {
        const t = [];
        for (const e of this._sources.values())t.push(...e.getDescriptors());
        return t;
    }
    getDescriptorsForUri(t) {
        const e = [];
        for (const n of this._sources.values())e.push(...n.getDescriptorsForUri(t));
        return e;
    }
    getDescriptorById(t) {
        for (const e of this._sources.values()){
            const n = e.getDescriptorById(t);
            if (n) return {
                descriptor: n,
                source: e
            };
        }
    }
    getBaselineTextLines(t) {
        for (const e of this._sources.values())if (e.canHandle(t) && e.getBaselineTextLines) return e.getBaselineTextLines(t);
    }
    getRecentDiffDescriptors(t) {
        const e = [];
        for (const n of this._sources.values())e.push(...n.getRecentDiffDescriptors(t));
        return e;
    }
    accept(t, e) {
        const n = this._findSourceForId(t);
        return n ? n.accept(t, e) : Promise.resolve();
    }
    reject(t, e, n) {
        const i = this._findSourceForId(t);
        return i ? i.reject(t, e, n) : Promise.resolve();
    }
    acceptChange(t, e) {
        const n = this._findSourceForId(t);
        return n ? n.acceptChange(t, e) : !0;
    }
    rejectChange(t, e) {
        const n = this._findSourceForId(t);
        return n ? n.rejectChange(t, e) : !0;
    }
    cancel(t) {
        const e = this._findSourceForId(t);
        e && e.cancel(t);
    }
    notifyChange() {
        this._onDidChange.fire();
    }
    _findSourceForId(t) {
        for (const e of this._sources.values())if (e.canHandle(t)) return e;
    }
    dispose() {
        for (const t of this._sourceDisposables.values())t.dispose();
        this._sourceDisposables.clear(), this._sources.clear(), super.dispose();
    }
}, $cs = Re([
    F(0, UO),
    F(1, fCe)
], $cs), bn(mX, $cs, 1);

}
