import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Za, na } from "./authenticationService.js";
import { wQs } from "./dashboard_pb.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { qa } from "./observable.js";
import { CIo } from "./p2pReferralStatus.js";
import { Xo, mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
async function zo_(e) {
    try {
        const n = await (await e.dashboardClient()).getP2PReferralStatus(new wQs);
        return Ko_(n);
    } catch  {
        return;
    }
}
function Ko_(e) {
    return {
        isEligible: e.isEligible === !0,
        rewardLabel: Yo_(e),
        urlPath: e.urlPath ?? "",
        description: e.description ?? "",
        capWindowLabel: e.capWindowLabel ?? "",
        remainingCap: e.remainingCap,
        successfulReferrals: e.successfulReferrals
    };
}
function Yo_(e) {
    if (e.referrerMode !== "flat" || e.referrerCreditCents <= 0) return;
    const t = e.referrerCreditCents, n = t / 100, i = t % 100 !== 0;
    return `$${n.toFixed(i ? 2 : 0)}`;
}
var TIo, Str;
export { Ko_, Str, TIo, Yo_, zo_ };
var __wakaru_sNh_initialized = false;
export function sNh() {
if (__wakaru_sNh_initialized) return;
__wakaru_sNh_initialized = true;
"use strict";
x(), Se(), qa(), Pn(), Ze(), Za(), CIo(), TIo = vn("p2pReferralStatusService"), Str = class extends we {
    constructor(e){
        super(), this._authenticationService = e, this._status = Xo("p2pReferralCtaStatus", void 0), this.status = this._status, this._fetchSeq = 0;
        const t = ()=>this._refresh();
        this._authenticationService.addLoginChangedListener(t), this._register({
            dispose: ()=>this._authenticationService.removeLoginChangedListener(t)
        }), this._refresh();
    }
    _refresh() {
        const e = ++this._fetchSeq;
        if (!this._authenticationService.isAuthenticated()) {
            this._status.set(void 0, void 0);
            return;
        }
        (async ()=>{
            const n = await zo_(this._authenticationService);
            this._fetchSeq === e && this._status.set(n, void 0);
        })();
    }
}, Str = ie([
    C(0, na)
], Str), mn(TIo, Str, 1);

}
