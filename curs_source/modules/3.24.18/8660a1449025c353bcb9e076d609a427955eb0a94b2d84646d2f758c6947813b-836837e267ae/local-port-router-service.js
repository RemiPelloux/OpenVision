import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { hme, vG } from "./glass-panel-resource-ownership-service.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Jxs, eAs;
export { Jxs, eAs };
var __wakaru_dfv_initialized = false;
export function dfv() {
if (__wakaru_dfv_initialized) return;
__wakaru_dfv_initialized = true;
"use strict";
E(), Gt(), Qe(), Rn(), It(), hme(), Jxs = Il("localPortRouterService"), eAs = class extends st {
    constructor(t){
        super(), this._onDidChangeLocalPort = this._register(new tt), this.onDidChangeLocalPort = this._onDidChangeLocalPort.event, this._register(t.onDidClaimServedPort((e)=>this.notifyPortChanged(e)));
    }
    onDidChangePort(t, e) {
        return this.onDidChangeLocalPort((n)=>{
            n === t && e();
        });
    }
    notifyPortChanged(t) {
        !Number.isInteger(t) || t <= 0 || this._onDidChangeLocalPort.fire(t);
    }
}, eAs = Re([
    F(0, vG)
], eAs), bn(Jxs, eAs, 1, 1);

}
