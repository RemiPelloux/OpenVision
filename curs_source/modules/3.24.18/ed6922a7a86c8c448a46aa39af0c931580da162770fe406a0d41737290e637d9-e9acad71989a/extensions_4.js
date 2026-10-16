import { bt } from "./HVr.js";
import { Uw } from "./extensionManagementUtil.js";
import { G_, kse, xu } from "./extensions_3.js";
import { N_o, xwt } from "./implicitActivationEvents.js";
import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Lch } from "./xmo.js";
var y4v, O_o, Ma, Iwt, Nch, Och;
export { Iwt, Ma, Nch, O_o, Och, y4v };
var __wakaru_hc_initialized = false;
export function hc() {
if (__wakaru_hc_initialized) return;
__wakaru_hc_initialized = true;
"use strict";
x(), bt(), Qt(), Uw(), N_o(), G_(), Ze(), y4v = Object.freeze({
    identifier: new xu("nullExtensionDescription"),
    name: "Null Extension Description",
    version: "0.0.0",
    publisher: "vscode",
    engines: {
        vscode: ""
    },
    extensionLocation: Ee.parse("void:location"),
    isBuiltin: !1,
    targetPlatform: "undefined",
    isUserBuiltin: !1,
    isUnderDevelopment: !1,
    preRelease: !1
}), O_o = "extensions.webWorker", Ma = vn("extensionService"), Iwt = class {
    get versionId() {
        return this._versionId;
    }
    get allExtensions() {
        return this._allExtensions;
    }
    get myExtensions() {
        return this._myExtensions;
    }
    constructor(e, t, n){
        this._versionId = e, this._allExtensions = t.slice(0), this._myExtensions = n.slice(0), this._myActivationEvents = null;
    }
    toSnapshot() {
        return {
            versionId: this._versionId,
            allExtensions: this._allExtensions,
            myExtensions: this._myExtensions,
            activationEvents: xwt.createActivationEventsMap(this._allExtensions)
        };
    }
    set(e, t, n) {
        if (this._versionId > e) throw new Error(`ExtensionHostExtensions: invalid versionId ${e} (current: ${this._versionId})`);
        const i = [], r = [], s = [], o = [], a = Lch(this._allExtensions), c = Lch(t), l = (f, v)=>f.extensionLocation.toString() === v.extensionLocation.toString() || f.isBuiltin === v.isBuiltin || f.isUserBuiltin === v.isUserBuiltin || f.isUnderDevelopment === v.isUnderDevelopment;
        for (const f of this._allExtensions){
            const v = c.get(f.identifier);
            if (!v) {
                i.push(f.identifier), a.delete(f.identifier);
                continue;
            }
            if (!l(f, v)) {
                i.push(f.identifier), a.delete(f.identifier);
                continue;
            }
        }
        for (const f of t){
            const v = a.get(f.identifier);
            if (!v) {
                r.push(f);
                continue;
            }
            if (!l(v, f)) {
                i.push(v.identifier), a.delete(v.identifier);
                continue;
            }
        }
        const u = new kse(this._myExtensions), h = new kse(n);
        for (const f of this._myExtensions)h.has(f) || s.push(f);
        for (const f of n)u.has(f) || o.push(f);
        const p = xwt.createActivationEventsMap(r), g = {
            versionId: e,
            toRemove: i,
            toAdd: r,
            addActivationEvents: p,
            myToRemove: s,
            myToAdd: o
        };
        return this.delta(g), g;
    }
    delta(e) {
        if (this._versionId >= e.versionId) return null;
        const { toRemove: t, toAdd: n, myToRemove: i, myToAdd: r } = e, s = new kse(t), o = new kse(i);
        for(let a = 0; a < this._allExtensions.length; a++)s.has(this._allExtensions[a].identifier) && (this._allExtensions.splice(a, 1), a--);
        for(let a = 0; a < this._myExtensions.length; a++)o.has(this._myExtensions[a]) && (this._myExtensions.splice(a, 1), a--);
        for (const a of n)this._allExtensions.push(a);
        for (const a of r)this._myExtensions.push(a);
        return this._myActivationEvents = null, e;
    }
    containsExtension(e) {
        for (const t of this._myExtensions)if (xu.equals(t, e)) return !0;
        return !1;
    }
    containsActivationEvent(e) {
        return this._myActivationEvents || (this._myActivationEvents = this._readMyActivationEvents()), this._myActivationEvents.has(e);
    }
    _readMyActivationEvents() {
        const e = new Set;
        for (const t of this._allExtensions){
            if (!this.containsExtension(t.identifier)) continue;
            const n = xwt.readActivationEvents(t);
            for (const i of n)e.add(i);
        }
        return e;
    }
}, Nch = class {
    constructor(e, t, n, i){
        this.codeLoadingTime = e, this.activateCallTime = t, this.activateResolvedTime = n, this.activationReason = i;
    }
}, Och = class {
    constructor(e, t){
        this.description = e, this.value = t;
    }
};

}
