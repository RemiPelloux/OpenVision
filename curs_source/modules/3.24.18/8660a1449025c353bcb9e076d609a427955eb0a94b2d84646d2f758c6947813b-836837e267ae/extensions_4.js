import { Gt } from "./Iwo.js";
import { jn } from "./SZu.js";
import { iF } from "./extensionManagementUtil.js";
import { Pw, lm, pbe } from "./extensions_3.js";
import { oKm } from "./gYa.js";
import { JJa, zqt } from "./implicitActivationEvents.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
var Mrk, eel, id, Kqt, aKm, lKm;
export { Kqt, Mrk, aKm, eel, id, lKm };
var __wakaru_ld_initialized = false;
export function ld() {
if (__wakaru_ld_initialized) return;
__wakaru_ld_initialized = true;
"use strict";
E(), Gt(), fn(), iF(), JJa(), Pw(), It(), Mrk = Object.freeze({
    identifier: new lm("nullExtensionDescription"),
    name: "Null Extension Description",
    version: "0.0.0",
    publisher: "vscode",
    engines: {
        vscode: ""
    },
    extensionLocation: rt.parse("void:location"),
    isBuiltin: !1,
    targetPlatform: "undefined",
    isUserBuiltin: !1,
    isUnderDevelopment: !1,
    preRelease: !1
}), eel = "extensions.webWorker", id = jn("extensionService"), Kqt = class {
    get versionId() {
        return this._versionId;
    }
    get allExtensions() {
        return this._allExtensions;
    }
    get myExtensions() {
        return this._myExtensions;
    }
    constructor(t, e, n){
        this._versionId = t, this._allExtensions = e.slice(0), this._myExtensions = n.slice(0), this._myActivationEvents = null;
    }
    toSnapshot() {
        return {
            versionId: this._versionId,
            allExtensions: this._allExtensions,
            myExtensions: this._myExtensions,
            activationEvents: zqt.createActivationEventsMap(this._allExtensions)
        };
    }
    set(t, e, n) {
        if (this._versionId > t) throw new Error(`ExtensionHostExtensions: invalid versionId ${t} (current: ${this._versionId})`);
        const i = [], r = [], s = [], o = [], a = oKm(this._allExtensions), l = oKm(e), c = (g, f)=>g.extensionLocation.toString() === f.extensionLocation.toString() || g.isBuiltin === f.isBuiltin || g.isUserBuiltin === f.isUserBuiltin || g.isUnderDevelopment === f.isUnderDevelopment;
        for (const g of this._allExtensions){
            const f = l.get(g.identifier);
            if (!f) {
                i.push(g.identifier), a.delete(g.identifier);
                continue;
            }
            if (!c(g, f)) {
                i.push(g.identifier), a.delete(g.identifier);
                continue;
            }
        }
        for (const g of e){
            const f = a.get(g.identifier);
            if (!f) {
                r.push(g);
                continue;
            }
            if (!c(f, g)) {
                i.push(f.identifier), a.delete(f.identifier);
                continue;
            }
        }
        const u = new pbe(this._myExtensions), d = new pbe(n);
        for (const g of this._myExtensions)d.has(g) || s.push(g);
        for (const g of n)u.has(g) || o.push(g);
        const h = zqt.createActivationEventsMap(r), p = {
            versionId: t,
            toRemove: i,
            toAdd: r,
            addActivationEvents: h,
            myToRemove: s,
            myToAdd: o
        };
        return this.delta(p), p;
    }
    delta(t) {
        if (this._versionId >= t.versionId) return null;
        const { toRemove: e, toAdd: n, myToRemove: i, myToAdd: r } = t, s = new pbe(e), o = new pbe(i);
        for(let a = 0; a < this._allExtensions.length; a++)s.has(this._allExtensions[a].identifier) && (this._allExtensions.splice(a, 1), a--);
        for(let a = 0; a < this._myExtensions.length; a++)o.has(this._myExtensions[a]) && (this._myExtensions.splice(a, 1), a--);
        for (const a of n)this._allExtensions.push(a);
        for (const a of r)this._myExtensions.push(a);
        return this._myActivationEvents = null, t;
    }
    containsExtension(t) {
        for (const e of this._myExtensions)if (lm.equals(e, t)) return !0;
        return !1;
    }
    containsActivationEvent(t) {
        return this._myActivationEvents || (this._myActivationEvents = this._readMyActivationEvents()), this._myActivationEvents.has(t);
    }
    _readMyActivationEvents() {
        const t = new Set;
        for (const e of this._allExtensions){
            if (!this.containsExtension(e.identifier)) continue;
            const n = zqt.readActivationEvents(e);
            for (const i of n)t.add(i);
        }
        return t;
    }
}, aKm = class {
    constructor(t, e, n, i){
        this.codeLoadingTime = t, this.activateCallTime = e, this.activateResolvedTime = n, this.activationReason = i;
    }
}, lKm = class {
    constructor(t, e){
        this.description = t, this.value = e;
    }
};

}
