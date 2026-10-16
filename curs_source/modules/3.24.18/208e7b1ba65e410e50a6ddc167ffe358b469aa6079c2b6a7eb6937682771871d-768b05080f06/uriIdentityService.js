import { pe } from "./descriptors.js";
import { O, se } from "./event.js";
import { Eve, wve, yve } from "./extensions_3.js";
import { Wt, cn } from "./files.js";
import { B } from "./ipc.js";
import { j, ve } from "./lifecycle.js";
import { Ft, HR, Qm } from "./resources.js";
import { R9e, xlt } from "./skipList.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Br, Oi } from "./uriIdentity.js";
function Sve(e, t, n, r) {
    t instanceof pe || (t = new pe(t, [], !!n, n === 2)), yve.push([
        e,
        t
    ]), r === 1 && wve.add(e);
}
var sx, ix, e_;
export { Sve, e_, ix, sx };
var __wakaru_Flt_initialized = false;
export function Flt() {
if (__wakaru_Flt_initialized) return;
__wakaru_Flt_initialized = true;
"use strict";
h(), Oi(), Eve(), Wt(), Ft(), xlt(), se(), j(), sx = class Ix {
    constructor(t){
        this.uri = t, this.time = Ix._clock++;
    }
    touch() {
        return this.time = Ix._clock++, this;
    }
}, sx._clock = 0, ix = sx, e_ = class {
    constructor(e){
        this._fileService = e, this._dispooables = new ve, this._limit = 2 ** 16, this._comparisonKeys = new WeakMap;
        const t = new Map, n = (r)=>{
            let s = t.get(r.scheme);
            return s === void 0 && (s = e.hasProvider(r) && !this._fileService.hasCapability(r, 1024), t.set(r.scheme, s)), s;
        };
        this._dispooables.add(O.any(e.onDidChangeFileSystemProviderRegistrations, e.onDidChangeFileSystemProviderCapabilities)((r)=>{
            t.delete(r.scheme), this._comparisonKeys = new WeakMap;
        })), this.extUri = new Qm(n), this._canonicalUris = new R9e((r, s)=>{
            if (r === s) return 0;
            const i = this._getComparisonKey(r), a = this._getComparisonKey(s);
            return i < a ? -1 : i > a ? 1 : 0;
        }, this._limit);
    }
    _getComparisonKey(e) {
        let t = this._comparisonKeys.get(e);
        return t === void 0 && (t = this.extUri.getComparisonKey(e, !0), this._comparisonKeys.set(e, t)), t;
    }
    dispose() {
        this._dispooables.dispose(), this._canonicalUris.clear();
    }
    asCanonicalUri(e) {
        this._fileService.hasProvider(e) && (e = HR(e));
        const t = this._canonicalUris.get(e);
        return t ? t.touch().uri.with({
            fragment: e.fragment
        }) : (this._canonicalUris.set(e, new ix(e)), this._checkTrim(), e);
    }
    _checkTrim() {
        if (this._canonicalUris.size < this._limit) return;
        const e = [
            ...this._canonicalUris.entries()
        ].sort((n, r)=>n[1].time < r[1].time ? 1 : n[1].time > r[1].time ? -1 : 0);
        ix._clock = 0, this._canonicalUris.clear();
        const t = this._limit * .5;
        for(let n = 0; n < t; n++)this._canonicalUris.set(e[n][0], e[n][1].touch());
    }
}, e_ = B([
    w(0, cn)
], e_), Sve(Br, e_, 1);

}
