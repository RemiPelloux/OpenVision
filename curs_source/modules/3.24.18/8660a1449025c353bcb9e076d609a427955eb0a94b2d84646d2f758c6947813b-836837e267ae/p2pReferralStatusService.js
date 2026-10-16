import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { XTk } from "./Ycg.js";
import { Rs, ss } from "./authenticationService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Jc } from "./observable.js";
import { Sxi } from "./p2pReferralStatus.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { bc } from "./ze.js";
var scs, ocs;
export { ocs, scs };
var __wakaru_Khl_initialized = false;
export function Khl() {
if (__wakaru_Khl_initialized) return;
__wakaru_Khl_initialized = true;
"use strict";
E(), Qe(), Jc(), Rn(), It(), Rs(), Sxi(), scs = jn("p2pReferralStatusService"), ocs = class extends st {
    constructor(t){
        super(), this._authenticationService = t, this._status = bc("p2pReferralCtaStatus", void 0), this.status = this._status, this._fetchSeq = 0;
        const e = ()=>this._refresh();
        this._authenticationService.addLoginChangedListener(e), this._register({
            dispose: ()=>this._authenticationService.removeLoginChangedListener(e)
        }), this._refresh();
    }
    _refresh() {
        const t = ++this._fetchSeq;
        if (!this._authenticationService.isAuthenticated()) {
            this._status.set(void 0, void 0);
            return;
        }
        (async ()=>{
            const n = await XTk(this._authenticationService);
            this._fetchSeq === t && this._status.set(n, void 0);
        })();
    }
}, ocs = Re([
    F(0, ss)
], ocs), bn(scs, ocs, 1);

}
