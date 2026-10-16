import { Ei, Qe, da, st, xr } from "./Iwo.js";
import { Hn, ws } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { y7 } from "./ze.js";
var bHd;
export { bHd };
var __wakaru_a3y_initialized = false;
export function a3y() {
if (__wakaru_a3y_initialized) return;
__wakaru_a3y_initialized = true;
"use strict";
E(), Hn(), Ei(), Qe(), bHd = class extends st {
    constructor(){
        super(), this._editor = null, this._instantiationService = null, this._instances = this._register(new da), this._pending = new Map, this._finishedInstantiation = [], this._finishedInstantiation[0] = !1, this._finishedInstantiation[1] = !1, this._finishedInstantiation[2] = !1, this._finishedInstantiation[3] = !1;
    }
    initialize(t, e, n) {
        this._editor = t, this._instantiationService = n;
        for (const i of e){
            if (this._pending.has(i.id)) {
                xr(new Error(`Cannot have two contributions with the same id ${i.id}`));
                continue;
            }
            this._pending.set(i.id, i);
        }
        this._instantiateSome(0), this._register(y7(ws(this._editor.getDomNode()), ()=>{
            this._instantiateSome(1);
        })), this._register(y7(ws(this._editor.getDomNode()), ()=>{
            this._instantiateSome(2);
        })), this._register(y7(ws(this._editor.getDomNode()), ()=>{
            this._instantiateSome(3);
        }, 5e3));
    }
    saveViewState() {
        const t = {};
        for (const [e, n] of this._instances)typeof n.saveViewState == "function" && (t[e] = n.saveViewState());
        return t;
    }
    restoreViewState(t) {
        for (const [e, n] of this._instances)typeof n.restoreViewState == "function" && n.restoreViewState(t[e]);
    }
    get(t) {
        return this._instantiateById(t), this._instances.get(t) || null;
    }
    set(t, e) {
        this._instances.set(t, e);
    }
    onBeforeInteractionEvent() {
        this._instantiateSome(2);
    }
    onAfterModelAttached() {
        return y7(ws(this._editor?.getDomNode()), ()=>{
            this._instantiateSome(1);
        }, 50);
    }
    _instantiateSome(t) {
        if (this._finishedInstantiation[t]) return;
        this._finishedInstantiation[t] = !0;
        const e = this._findPendingContributionsByInstantiation(t);
        for (const n of e)this._instantiateById(n.id);
    }
    _findPendingContributionsByInstantiation(t) {
        const e = [];
        for (const [, n] of this._pending)n.instantiation === t && e.push(n);
        return e;
    }
    _instantiateById(t) {
        if (this._store.isDisposed) return;
        const e = this._pending.get(t);
        if (e) {
            if (this._pending.delete(t), !this._instantiationService || !this._editor) throw new Error("Cannot instantiate contributions before being initialized!");
            try {
                const n = this._instantiationService.createInstance(e.ctor, this._editor);
                this._instances.set(e.id, n), typeof n.restoreViewState == "function" && e.instantiation !== 0 && console.warn(`Editor contribution '${e.id}' should be eager instantiated because it uses saveViewState / restoreViewState.`);
            } catch (n) {
                xr(n);
            }
        }
    }
};

}
