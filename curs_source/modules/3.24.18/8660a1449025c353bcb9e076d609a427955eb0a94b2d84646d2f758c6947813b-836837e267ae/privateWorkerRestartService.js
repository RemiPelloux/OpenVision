import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { CJ, UB } from "./debugNamespaceService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { Yz, cCe } from "./observableValue.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var aps, lps;
export { aps, lps };
var __wakaru_K_l_initialized = false;
export function K_l() {
if (__wakaru_K_l_initialized) return;
__wakaru_K_l_initialized = true;
"use strict";
E(), Gt(), Qe(), cCe(), Rn(), It(), Ji(), CJ(), aps = Il("privateWorkerRestartService"), lps = class extends st {
    constructor(t, e){
        super(), this._logService = t, this._provider = new Yz, this._onDidRegisterProvider = this._register(new tt), this.onDidRegisterProvider = this._onDidRegisterProvider.event, this._register(e.register("restartOfflineWorkers", (n)=>this.restartOfflineWorkers(n)));
    }
    registerProvider(t) {
        const e = this._provider.set(t);
        return this._onDidRegisterProvider.fire(), e;
    }
    async restartOfflineWorkers(t) {
        const e = this._provider.getState();
        if (e.state === "fulfilled") try {
            return await e.value.restartOfflineWorkers(t);
        } catch (n) {
            this._logService.warn("[PrivateWorkerRestartService] restartOfflineWorkers failed", n);
            return;
        }
    }
}, lps = Re([
    F(0, Li),
    F(1, UB)
], lps), bn(aps, lps, 1, 1);

}
