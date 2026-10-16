import { Th } from "./De_3.js";
import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { lnt, mb } from "./browserEditor.contribution.js";
import { L8e, d0 } from "./browserViewStore.js";
import { Ni, hn } from "./editorService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { $Oh, NAo } from "./localServerProbeService.js";
import { Qn, Wn } from "./log.js";
import { eo, ko } from "./opener.js";
import { mn, vn } from "./qIc.js";
import { Ip, Kd } from "./remoteAgentService.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { $Bn, pqt } from "./urlOpenToastService.js";
import { Ku } from "./utilities_3.js";
function Zc_(e) {
    return e.reachable && !e.isCdpDiscoveryEndpoint && e.statusCode !== 404 && !(e.statusCode >= 300 && e.statusCode < 400) && (e.mediaType === void 0 || HOh.has(e.mediaType)) && e.looksLikeHtmlDocument;
}
var Qtr, HOh, Jtr;
export { HOh, Jtr, Qtr, Zc_ };
var __wakaru_OAo_initialized = false;
export function OAo() {
if (__wakaru_OAo_initialized) return;
__wakaru_OAo_initialized = true;
"use strict";
x(), bt(), Se(), Qt(), Pn(), Ze(), Qn(), ko(), Ku(), Vn(), $Bn(), Ip(), Ni(), lnt(), L8e(), $Oh(), Qtr = vn("openBrowserUrlsService"), HOh = new Set([
    "text/html",
    "application/xhtml+xml"
]), Jtr = class extends we {
    constructor(e, t, n, i, r, s, o, a){
        super(), this.storageService = e, this.openerService = t, this.remoteAgentService = n, this.urlOpenToastService = i, this.editorService = r, this.browserViewStore = s, this.localServerProbeService = o, this.logService = a, this._autoOpenedOrigins = new Set, this._originsBeingProbed = new Set, this._onDidChangeUrls = this._register(new ve), this.onDidChangeUrls = this._onDidChangeUrls.event, this.autoOpenLocalhostUrls = this._register(Th(this.storageService, "autoOpenLocalhostUrls"));
    }
    getLatestUrl() {
        return this._latestUrl;
    }
    captureLocalListeningPorts() {
        return !this.autoOpenLocalhostUrls.get() || this.remoteAgentService.getConnection()?.remoteAuthority ? Promise.resolve({
            status: "unavailable"
        }) : this.localServerProbeService.captureLocalListeningPorts();
    }
    isEmptyOrBlankUrl(e) {
        if (!e) return !0;
        const t = e.trim().toLowerCase();
        return t === "" || t === "about:blank" || t === "cursor://blank";
    }
    async setLatestUrl(e, t) {
        const n = t?.guard, i = this.remoteAgentService.getConnection()?.remoteAuthority, r = !!i && (i.startsWith("ssh-remote+") || i.includes("@ssh-remote+"));
        let s;
        try {
            s = new URL(e).origin;
        } catch  {
            s = void 0;
        }
        let o = n && !n.isValid() ? "stale" : "settled";
        if (o !== "stale" && s !== void 0 && this.autoOpenLocalhostUrls.get() && !r) {
            if (this._originsBeingProbed.has(s)) o = "probing";
            else if (!this._autoOpenedOrigins.has(s)) {
                this._originsBeingProbed.add(s);
                try {
                    o = await this.probeAndOpen(e, s, t);
                } finally{
                    this._originsBeingProbed.delete(s);
                }
            }
        }
        return o !== "stale" && this._latestUrl !== e && (this._latestUrl = e, this._onDidChangeUrls.fire(e)), o;
    }
    async probeAndOpen(e, t, n) {
        const i = n?.guard, r = n?.ownerAgentId, s = await this.localServerProbeService.probeLocalServer(t);
        if (!s.reachable) return this.logService.trace(`OpenBrowserUrlsService: Server probe failed for ${t}; skipping auto-open`), "retry";
        if (!Zc_(s)) return this.logService.info(`OpenBrowserUrlsService: ${t} does not serve a web page at its root; skipping auto-open`), "settled";
        if (i && !i.isValid()) return "stale";
        if (this._autoOpenedOrigins.add(t), i && !i.isValid()) return this._autoOpenedOrigins.delete(t), "stale";
        const o = this.editorService.activeEditor;
        if (o instanceof mb) {
            const a = this.browserViewStore.getView(o.browserId);
            if (a) {
                const c = a.getURL();
                if (this.isEmptyOrBlankUrl(c)) return a.navigate(e), this.urlOpenToastService.showUrlOpenToast(e), "settled";
            }
        }
        try {
            let a = !1;
            const c = await this.openerService.open(Ee.parse(e), {
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
            return a ? (this._autoOpenedOrigins.delete(t), "retry") : (c && this.urlOpenToastService.showUrlOpenToast(e), "settled");
        } catch (a) {
            return this.logService.warn(`OpenBrowserUrlsService: Failed to open ${t}`, a), this._autoOpenedOrigins.delete(t), "retry";
        }
    }
}, Jtr = ie([
    C(0, yn),
    C(1, eo),
    C(2, Kd),
    C(3, pqt),
    C(4, hn),
    C(5, d0),
    C(6, NAo),
    C(7, Wn)
], Jtr), mn(Qtr, Jtr, 1);

}
