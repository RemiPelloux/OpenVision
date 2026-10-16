import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { XGk, ZGk, rct } from "./Ycg.js";
import { Rs, ss } from "./authenticationService.js";
import { pr } from "./code_3.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { Ag } from "./connectErrors.js";
import { Du, _Ba } from "./dashboard_pb.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { bxl } from "./linearIssueIdentity.js";
import { CIi, dVt } from "./microtaskBatcher.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { ICt } from "./yBp.js";
var yxl, Mhf, Dhf, Nhf, Sxl, Pvs, Lhf, kxl, wxl, Cxl, FPi, Mvs;
export { Cxl, Dhf, FPi, Lhf, Mhf, Mvs, Nhf, Pvs, Sxl, kxl, wxl, yxl };
var __wakaru_Ohf_initialized = false;
export function Ohf() {
if (__wakaru_Ohf_initialized) return;
__wakaru_Ohf_initialized = true;
"use strict";
E(), Gt(), Qe(), It(), Rn(), dp(), Du(), Ag(), Rs(), _s(), bxl(), CIi(), yxl = 25, Mhf = 300 * 1e3, Dhf = 300 * 1e3, Nhf = 900 * 1e3, Sxl = 3600 * 1e3, Pvs = 60 * 1e3, Lhf = 30 * 1e3, kxl = 60 * 1e3, wxl = 5 * 1e3, Cxl = {
    kind: "loading"
}, FPi = Il("linearIssueSummaryStore"), Mvs = class extends st {
    constructor(t, e){
        super(), this._cursorAuthenticationService = t, this._experimentService = e, this._entries = new Map, this._inFlight = new Set, this._batcher = this._register(new dVt(rct, (n)=>this._fetch(n))), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event;
    }
    _now() {
        return Date.now();
    }
    getSummary(t) {
        return this._entries.get(rct(t))?.state ?? Cxl;
    }
    request(t) {
        const e = rct(t);
        if (this._inFlight.has(e)) return;
        const n = this._entries.get(e);
        if (!(n !== void 0 && n.freshUntilMs > this._now())) {
            if (!this._experimentService.checkFeatureGate("glass_preview_linear_tickets", {
                disableExposureLog: !0
            })) {
                this._set(e, {
                    kind: "unavailable",
                    reason: "disabled"
                }, Sxl);
                return;
            }
            this._inFlight.add(e), this._batcher.schedule(t);
        }
    }
    async _fetch(t) {
        const e = new Map;
        for (const i of t){
            const r = e.get(i.workspaceUrlKey);
            r === void 0 ? e.set(i.workspaceUrlKey, [
                i
            ]) : r.push(i);
        }
        const n = [];
        for (const i of e.values())for(let r = 0; r < i.length; r += yxl)n.push(i.slice(r, r + yxl));
        await Promise.all(n.map((i)=>this._fetchChunk(i)));
    }
    async _fetchChunk(t) {
        const e = t[0]?.workspaceUrlKey;
        if (e !== void 0) try {
            const i = await (await this._cursorAuthenticationService.dashboardClient()).batchGetLinearIssueSummaries(new _Ba({
                workspaceUrlKey: e,
                identifiers: t.map((r)=>r.identifier)
            }));
            if (this._store.isDisposed) return;
            this._applyResponse(t, i);
        } catch (n) {
            if (this._store.isDisposed) return;
            this._applyFailure(t, n);
        } finally{
            for (const n of t)this._inFlight.delete(rct(n));
        }
    }
    _applyResponse(t, e) {
        const n = new Set;
        for (const a of e.issues){
            const l = t.find((c)=>c.identifier === a.identifier);
            l !== void 0 && (n.add(l.identifier), this._set(rct(l), {
                kind: "known",
                summary: ZGk(a)
            }, Mhf));
        }
        for (const a of e.missingIdentifiers){
            const l = t.find((c)=>c.identifier === a);
            l !== void 0 && (n.add(a), this._set(rct(l), {
                kind: "unavailable",
                reason: "missing"
            }, Dhf));
        }
        const i = t.filter((a)=>!n.has(a.identifier));
        if (i.length === 0) return;
        const r = e.retryAfterMs === void 0 ? void 0 : Number(e.retryAfterMs), [s, o] = XGk(e.unavailableReason, r);
        for (const a of i)this._set(rct(a), {
            kind: "unavailable",
            reason: s
        }, o);
    }
    _applyFailure(t, e) {
        let n = "error", i = Pvs;
        e instanceof Us && (e.code === pr.Unimplemented ? (n = "disabled", i = Sxl) : e.code === pr.ResourceExhausted && (n = "rate_limited", i = Math.max(wxl, ICt(e, this._now()) ?? kxl)));
        for (const r of t)this._set(rct(r), {
            kind: "unavailable",
            reason: n
        }, i);
    }
    _set(t, e, n) {
        this._entries.set(t, {
            state: e,
            freshUntilMs: this._now() + n
        }), this._onDidChange.fire(t);
    }
}, Mvs = Re([
    F(0, ss),
    F(1, Cr)
], Mvs), bn(FPi, Mvs, 1, 1);

}
