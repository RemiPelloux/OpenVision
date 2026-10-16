import { Gt, Pn, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var zCe, grs;
export { grs, zCe };
var __wakaru_QPe_initialized = false;
export function QPe() {
if (__wakaru_QPe_initialized) return;
__wakaru_QPe_initialized = true;
"use strict";
E(), Gt(), Qe(), Rn(), It(), Ji(), _s(), zCe = Il("mcpProviderService"), grs = class extends st {
    constructor(t, e){
        super(), this.experimentService = t, this.logService = e, this._owners = new Map, this._onDidChangeProviders = this._register(new tt), this.onDidChangeProviders = this._onDidChangeProviders.event;
    }
    registerMcpProvider(t) {
        if (t.featureGateName && !this.experimentService.checkFeatureGate(t.featureGateName, {
            disableExposureLog: !1
        })) return st.None;
        const e = this._owners.get(t.id) ?? [];
        return e.push(t), this._owners.set(t.id, e), this._onDidChangeProviders.fire(), Pn(()=>this._release(t));
    }
    notifyMcpProviderChanged(t) {
        this._owners.has(t) && this._onDidChangeProviders.fire();
    }
    getAllProviders() {
        const t = [];
        for (const e of this._owners.values()){
            const n = e.at(-1);
            n && t.push(n);
        }
        return t;
    }
    getMcpProvider(t) {
        return this._owners.get(t)?.at(-1);
    }
    notifyTurnEnded(t) {
        for (const e of this.getAllProviders())if (e.onTurnEnded !== void 0) try {
            Promise.resolve(e.onTurnEnded(t)).catch((n)=>{
                this.logService.warn(`[mcpProviderService] provider '${e.id}' failed handling the end of a turn`, n);
            });
        } catch (n) {
            this.logService.warn(`[mcpProviderService] provider '${e.id}' threw handling the end of a turn`, n);
        }
    }
    _release(t) {
        const e = this._owners.get(t.id);
        if (!e) return;
        const n = e.lastIndexOf(t);
        if (n === -1) return;
        const i = n === e.length - 1;
        e.splice(n, 1), e.length === 0 && this._owners.delete(t.id), i && this._onDidChangeProviders.fire();
    }
}, grs = Re([
    F(0, Cr),
    F(1, Li)
], grs), bn(zCe, grs, 1, 1);

}
