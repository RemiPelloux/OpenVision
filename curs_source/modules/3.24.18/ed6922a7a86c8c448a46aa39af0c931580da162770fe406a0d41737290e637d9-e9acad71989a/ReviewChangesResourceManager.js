import { bt, ve } from "./HVr.js";
import { b9n, sP } from "./ReviewChangesResource.js";
import { qa } from "./observable.js";
import { x } from "./tslib.es6.js";
import { qp, r2t } from "./utils_10.js";
var y9n;
export { y9n };
var __wakaru_GHh_initialized = false;
export function GHh() {
if (__wakaru_GHh_initialized) return;
__wakaru_GHh_initialized = true;
"use strict";
x(), bt(), qa(), b9n(), y9n = class {
    constructor(e, t){
        this.instantiationService = e, this.composerTextModelService = t, this._onDidChangeResources = new ve, this._currentResources = [], this._resourcesMap = new Map, this._resourcesObservable = qp(this._onDidChangeResources.event, ()=>this._currentResources), this.resources = new r2t(this._resourcesObservable), this.contextKeys = {
            appLayoutMultiDiff: !0
        };
    }
    get resourcesObservable() {
        return this._resourcesObservable;
    }
    updateResources(e) {
        const t = new Map(e.map((o)=>[
                this._getResourceKey(o),
                o
            ]));
        let n = !1;
        const i = [], r = [], s = this._currentResources.filter((o)=>{
            const a = this._getResourceKey(o);
            return t.has(a) ? !0 : (n = !0, this._resourcesMap.delete(a), i.push(o), !1);
        });
        for (const [o, a] of t)if (!this._resourcesMap.has(o)) {
            n = !0;
            const l = sP.hydrateSkeleton(a);
            this._resourcesMap.set(o, l), s.push(l), r.push(l);
        }
        if (n) {
            for (const o of i)o.dispose();
            this._currentResources = s, this._onDidChangeResources.fire();
        }
        return this._currentResources;
    }
    _getResourceKey(e) {
        return JSON.stringify([
            e.modifiedUri?.path,
            e.originalUri?.path
        ]);
    }
    dispose() {
        this._onDidChangeResources.dispose();
        for (const e of this._currentResources)e.dispose();
        this._resourcesMap.clear();
    }
};

}
