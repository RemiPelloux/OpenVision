import { Se, bt, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { D$, p_e } from "./diffChangeSource.js";
import { Ade, o1e } from "./diffDecorationVisibilityService.js";
import { Pn } from "./extensions.js";
import { CN, zM } from "./inlineDiffService.js";
import { ZOh, el_ } from "./inlineDiffSourceAdapter.js";
import { qa } from "./observable.js";
import { mn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { qp } from "./utils_10.js";
var nnr;
export { nnr };
var __wakaru_tl__initialized = false;
export function tl_() {
if (__wakaru_tl__initialized) return;
__wakaru_tl__initialized = true;
"use strict";
x(), bt(), Se(), qa(), Pn(), p_e(), CN(), el_(), o1e(), nnr = class extends we {
    constructor(e, t){
        super(), this._sources = new Map, this._sourceDisposables = new Map, this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this.descriptorsObservable = qp(this, this._onDidChange.event, ()=>this.getDescriptors());
        const n = new ZOh(e, t), i = this.registerSource(n);
        this._register(n), this._register(i);
    }
    registerSource(e) {
        if (this._sources.has(e.sourceId)) throw new Error(`Source with id '${e.sourceId}' is already registered`);
        this._sources.set(e.sourceId, e);
        const t = e.onDidChange(()=>{
            this._onDidChange.fire();
        });
        return this._sourceDisposables.set(e.sourceId, t), this._onDidChange.fire(), rn(()=>this.unregisterSource(e.sourceId));
    }
    unregisterSource(e) {
        const t = this._sourceDisposables.get(e);
        t && (t.dispose(), this._sourceDisposables.delete(e)), this._sources.delete(e) && this._onDidChange.fire();
    }
    getSources() {
        return Array.from(this._sources.values());
    }
    getSourceById(e) {
        return this._sources.get(e);
    }
    getDescriptors() {
        const e = [];
        for (const t of this._sources.values())e.push(...t.getDescriptors());
        return e;
    }
    getDescriptorsForUri(e) {
        const t = [];
        for (const n of this._sources.values())t.push(...n.getDescriptorsForUri(e));
        return t;
    }
    getDescriptorById(e) {
        for (const t of this._sources.values()){
            const n = t.getDescriptorById(e);
            if (n) return {
                descriptor: n,
                source: t
            };
        }
    }
    getBaselineTextLines(e) {
        for (const t of this._sources.values())if (t.canHandle(e) && t.getBaselineTextLines) return t.getBaselineTextLines(e);
    }
    getRecentDiffDescriptors(e) {
        const t = [];
        for (const n of this._sources.values())t.push(...n.getRecentDiffDescriptors(e));
        return t;
    }
    accept(e, t) {
        const n = this._findSourceForId(e);
        return n ? n.accept(e, t) : Promise.resolve();
    }
    reject(e, t, n) {
        const i = this._findSourceForId(e);
        return i ? i.reject(e, t, n) : Promise.resolve();
    }
    acceptChange(e, t) {
        const n = this._findSourceForId(e);
        return n ? n.acceptChange(e, t) : !0;
    }
    rejectChange(e, t) {
        const n = this._findSourceForId(e);
        return n ? n.rejectChange(e, t) : !0;
    }
    cancel(e) {
        const t = this._findSourceForId(e);
        t && t.cancel(e);
    }
    notifyChange() {
        this._onDidChange.fire();
    }
    _findSourceForId(e) {
        for (const t of this._sources.values())if (t.canHandle(e)) return t;
    }
    dispose() {
        for (const e of this._sourceDisposables.values())e.dispose();
        this._sourceDisposables.clear(), this._sources.clear(), super.dispose();
    }
}, nnr = ie([
    C(0, zM),
    C(1, Ade)
], nnr), mn(D$, nnr, 1);

}
