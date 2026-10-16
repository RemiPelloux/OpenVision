import { Se, ns, po, si, we } from "./HVr.js";
import { en, xi } from "./dom_2.js";
import { f3 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var s4c;
export { s4c };
var __wakaru_mbg_initialized = false;
export function mbg() {
if (__wakaru_mbg_initialized) return;
__wakaru_mbg_initialized = true;
"use strict";
x(), en(), si(), Se(), s4c = class extends we {
    constructor(){
        super(), this._editor = null, this._instantiationService = null, this._instances = this._register(new po), this._pending = new Map, this._finishedInstantiation = [], this._finishedInstantiation[0] = !1, this._finishedInstantiation[1] = !1, this._finishedInstantiation[2] = !1, this._finishedInstantiation[3] = !1;
    }
    initialize(e, t, n) {
        this._editor = e, this._instantiationService = n;
        for (const i of t){
            if (this._pending.has(i.id)) {
                ns(new Error(`Cannot have two contributions with the same id ${i.id}`));
                continue;
            }
            this._pending.set(i.id, i);
        }
        this._instantiateSome(0), this._register(f3(xi(this._editor.getDomNode()), ()=>{
            this._instantiateSome(1);
        })), this._register(f3(xi(this._editor.getDomNode()), ()=>{
            this._instantiateSome(2);
        })), this._register(f3(xi(this._editor.getDomNode()), ()=>{
            this._instantiateSome(3);
        }, 5e3));
    }
    saveViewState() {
        const e = {};
        for (const [t, n] of this._instances)typeof n.saveViewState == "function" && (e[t] = n.saveViewState());
        return e;
    }
    restoreViewState(e) {
        for (const [t, n] of this._instances)typeof n.restoreViewState == "function" && n.restoreViewState(e[t]);
    }
    get(e) {
        return this._instantiateById(e), this._instances.get(e) || null;
    }
    set(e, t) {
        this._instances.set(e, t);
    }
    onBeforeInteractionEvent() {
        this._instantiateSome(2);
    }
    onAfterModelAttached() {
        return f3(xi(this._editor?.getDomNode()), ()=>{
            this._instantiateSome(1);
        }, 50);
    }
    _instantiateSome(e) {
        if (this._finishedInstantiation[e]) return;
        this._finishedInstantiation[e] = !0;
        const t = this._findPendingContributionsByInstantiation(e);
        for (const n of t)this._instantiateById(n.id);
    }
    _findPendingContributionsByInstantiation(e) {
        const t = [];
        for (const [, n] of this._pending)n.instantiation === e && t.push(n);
        return t;
    }
    _instantiateById(e) {
        if (this._store.isDisposed) return;
        const t = this._pending.get(e);
        if (t) {
            if (this._pending.delete(e), !this._instantiationService || !this._editor) throw new Error("Cannot instantiate contributions before being initialized!");
            try {
                const n = this._instantiationService.createInstance(t.ctor, this._editor);
                this._instances.set(t.id, n), typeof n.restoreViewState == "function" && t.instantiation !== 0 && console.warn(`Editor contribution '${t.id}' should be eager instantiated because it uses saveViewState / restoreViewState.`);
            } catch (n) {
                ns(n);
            }
        }
    }
};

}
