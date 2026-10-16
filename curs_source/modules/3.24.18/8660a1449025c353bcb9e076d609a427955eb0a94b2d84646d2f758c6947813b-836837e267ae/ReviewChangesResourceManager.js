import { Gt, tt } from "./Iwo.js";
import { D3n, yN } from "./ReviewChangesResource.js";
import { Jc } from "./observable.js";
import { E } from "./tslib.es6.js";
import { Yv, hgn } from "./utils_10.js";
var eNi;
export { eNi };
var __wakaru_iLf_initialized = false;
export function iLf() {
if (__wakaru_iLf_initialized) return;
__wakaru_iLf_initialized = true;
"use strict";
E(), Gt(), Jc(), D3n(), eNi = class {
    constructor(t, e){
        this.instantiationService = t, this.composerTextModelService = e, this._onDidChangeResources = new tt, this._currentResources = [], this._resourcesMap = new Map, this._resourcesObservable = Yv(this._onDidChangeResources.event, ()=>this._currentResources), this.resources = new hgn(this._resourcesObservable), this.contextKeys = {
            appLayoutMultiDiff: !0
        };
    }
    get resourcesObservable() {
        return this._resourcesObservable;
    }
    updateResources(t) {
        const e = new Map(t.map((o)=>[
                this._getResourceKey(o),
                o
            ]));
        let n = !1;
        const i = [], r = [], s = this._currentResources.filter((o)=>{
            const a = this._getResourceKey(o);
            return e.has(a) ? !0 : (n = !0, this._resourcesMap.delete(a), i.push(o), !1);
        });
        for (const [o, a] of e)if (!this._resourcesMap.has(o)) {
            n = !0;
            const c = yN.hydrateSkeleton(a);
            this._resourcesMap.set(o, c), s.push(c), r.push(c);
        }
        if (n) {
            for (const o of i)o.dispose();
            this._currentResources = s, this._onDidChangeResources.fire();
        }
        return this._currentResources;
    }
    _getResourceKey(t) {
        return JSON.stringify([
            t.modifiedUri?.path,
            t.originalUri?.path
        ]);
    }
    dispose() {
        this._onDidChangeResources.dispose();
        for (const t of this._currentResources)t.dispose();
        this._resourcesMap.clear();
    }
};

}
