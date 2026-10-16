import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { NIk } from "./Ycg.js";
import { E1, SEt } from "./browserEditor.contribution.js";
import { K1, PX } from "./browserViewStore.js";
import { Wo, gr } from "./editorService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Xh } from "./ipa.js";
import { Ocs, iml } from "./localServerProbeService.js";
import { Ji, Li } from "./log.js";
import { kc, qc } from "./opener.js";
import { Nh, Sg } from "./remoteAgentService.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { kxi, mRn } from "./urlOpenToastService.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
var Lxi, T0g, Fcs;
export { Fcs, Lxi, T0g };
var __wakaru_Bcs_initialized = false;
export function Bcs() {
if (__wakaru_Bcs_initialized) return;
__wakaru_Bcs_initialized = true;
"use strict";
E(), Gt(), Qe(), fn(), Rn(), It(), Ji(), qc(), wu(), Zi(), kxi(), Sg(), Wo(), SEt(), PX(), iml(), Lxi = jn("openBrowserUrlsService"), T0g = new Set([
    "text/html",
    "application/xhtml+xml"
]), Fcs = class extends st {
    constructor(t, e, n, i, r, s, o, a){
        super(), this.storageService = t, this.openerService = e, this.remoteAgentService = n, this.urlOpenToastService = i, this.editorService = r, this.browserViewStore = s, this.localServerProbeService = o, this.logService = a, this._autoOpenedOrigins = new Set, this._originsBeingProbed = new Set, this._onDidChangeUrls = this._register(new tt), this.onDidChangeUrls = this._onDidChangeUrls.event, this.autoOpenLocalhostUrls = this._register(Xh(this.storageService, "autoOpenLocalhostUrls"));
    }
    getLatestUrl() {
        return this._latestUrl;
    }
    captureLocalListeningPorts() {
        return !this.autoOpenLocalhostUrls.get() || this.remoteAgentService.getConnection()?.remoteAuthority ? Promise.resolve({
            status: "unavailable"
        }) : this.localServerProbeService.captureLocalListeningPorts();
    }
    isEmptyOrBlankUrl(t) {
        if (!t) return !0;
        const e = t.trim().toLowerCase();
        return e === "" || e === "about:blank" || e === "cursor://blank";
    }
    async setLatestUrl(t, e) {
        const n = e?.guard, i = this.remoteAgentService.getConnection()?.remoteAuthority, r = !!i && (i.startsWith("ssh-remote+") || i.includes("@ssh-remote+"));
        let s;
        try {
            s = new URL(t).origin;
        } catch  {
            s = void 0;
        }
        let o = n && !n.isValid() ? "stale" : "settled";
        if (o !== "stale" && s !== void 0 && this.autoOpenLocalhostUrls.get() && !r) {
            if (this._originsBeingProbed.has(s)) o = "probing";
            else if (!this._autoOpenedOrigins.has(s)) {
                this._originsBeingProbed.add(s);
                try {
                    o = await this.probeAndOpen(t, s, e);
                } finally{
                    this._originsBeingProbed.delete(s);
                }
            }
        }
        return o !== "stale" && this._latestUrl !== t && (this._latestUrl = t, this._onDidChangeUrls.fire(t)), o;
    }
    async probeAndOpen(t, e, n) {
        const i = n?.guard, r = n?.ownerAgentId, s = await this.localServerProbeService.probeLocalServer(e);
        if (!s.reachable) return this.logService.trace(`OpenBrowserUrlsService: Server probe failed for ${e}; skipping auto-open`), "retry";
        if (!NIk(s)) return this.logService.info(`OpenBrowserUrlsService: ${e} does not serve a web page at its root; skipping auto-open`), "settled";
        if (i && !i.isValid()) return "stale";
        if (this._autoOpenedOrigins.add(e), i && !i.isValid()) return this._autoOpenedOrigins.delete(e), "stale";
        const o = this.editorService.activeEditor;
        if (o instanceof E1) {
            const a = this.browserViewStore.getView(o.browserId);
            if (a) {
                const l = a.getURL();
                if (this.isEmptyOrBlankUrl(l)) return a.navigate(t), this.urlOpenToastService.showUrlOpenToast(t), "settled";
            }
        }
        try {
            let a = !1;
            const l = await this.openerService.open(rt.parse(t), {
                fromUserGesture: !1,
                suppressLocalhostAutoOpenToast: !0,
                allowContributedOpeners: !0,
                onUnresolvedAutomaticOpenClaimed: ()=>{
                    a = !0;
                },
                ...r ? {
                    ownerAgentId: r
                } : {}
            });
            return a ? (this._autoOpenedOrigins.delete(e), "retry") : (l && this.urlOpenToastService.showUrlOpenToast(t), "settled");
        } catch (a) {
            return this.logService.warn(`OpenBrowserUrlsService: Failed to open ${e}`, a), this._autoOpenedOrigins.delete(e), "retry";
        }
    }
}, Fcs = Re([
    F(0, ki),
    F(1, kc),
    F(2, Nh),
    F(3, mRn),
    F(4, gr),
    F(5, K1),
    F(6, Ocs),
    F(7, Li)
], Fcs), bn(Lxi, Fcs, 1);

}
