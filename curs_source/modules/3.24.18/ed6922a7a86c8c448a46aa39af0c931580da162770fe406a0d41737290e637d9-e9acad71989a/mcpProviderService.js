import { Se, bt, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var rLe, qXi;
export { qXi, rLe };
var __wakaru_l8e_initialized = false;
export function l8e() {
if (__wakaru_l8e_initialized) return;
__wakaru_l8e_initialized = true;
"use strict";
x(), bt(), Se(), Pn(), Ze(), Qn(), qs(), rLe = pd("mcpProviderService"), qXi = class extends we {
    constructor(e, t){
        super(), this.experimentService = e, this.logService = t, this._owners = new Map, this._onDidChangeProviders = this._register(new ve), this.onDidChangeProviders = this._onDidChangeProviders.event;
    }
    registerMcpProvider(e) {
        if (e.featureGateName && !this.experimentService.checkFeatureGate(e.featureGateName, {
            disableExposureLog: !1
        })) return we.None;
        const t = this._owners.get(e.id) ?? [];
        return t.push(e), this._owners.set(e.id, t), this._onDidChangeProviders.fire(), rn(()=>this._release(e));
    }
    notifyMcpProviderChanged(e) {
        this._owners.has(e) && this._onDidChangeProviders.fire();
    }
    getAllProviders() {
        const e = [];
        for (const t of this._owners.values()){
            const n = t.at(-1);
            n && e.push(n);
        }
        return e;
    }
    getMcpProvider(e) {
        return this._owners.get(e)?.at(-1);
    }
    notifyTurnEnded(e) {
        for (const t of this.getAllProviders())if (t.onTurnEnded !== void 0) try {
            Promise.resolve(t.onTurnEnded(e)).catch((n)=>{
                this.logService.warn(`[mcpProviderService] provider '${t.id}' failed handling the end of a turn`, n);
            });
        } catch (n) {
            this.logService.warn(`[mcpProviderService] provider '${t.id}' threw handling the end of a turn`, n);
        }
    }
    _release(e) {
        const t = this._owners.get(e.id);
        if (!t) return;
        const n = t.lastIndexOf(e);
        if (n === -1) return;
        const i = n === t.length - 1;
        t.splice(n, 1), t.length === 0 && this._owners.delete(e.id), i && this._onDidChangeProviders.fire();
    }
}, qXi = ie([
    C(0, Kr),
    C(1, Wn)
], qXi), mn(rLe, qXi, 1, 1);

}
