import { H3w, L$f, N$f, eZ, i1 } from "./BA.js";
import { r0o } from "./Iwo.js";
import { aXn, cXn, uXn } from "./client.js";
import { ZNi } from "./eventbuilder_2.js";
import { fh } from "./index_10.js";
import { E } from "./tslib.es6.js";
import { _Oe } from "./version.js";
function Xko(t) {
    "aggregates" in t ? t.attrs?.ip_address === void 0 && (t.attrs = {
        ...t.attrs,
        ip_address: "{{auto}}"
    }) : t.ipAddress === void 0 && (t.ipAddress = "{{auto}}");
}
function Zko(t, e, n = [
    e
], i = "npm") {
    const r = t._metadata || {};
    r.sdk || (r.sdk = {
        name: `sentry.javascript.${e}`,
        packages: n.map((s)=>({
                name: `${i}:@sentry/${s}`,
                version: _Oe
            })),
        version: _Oe
    }), t._metadata = r;
}
var G8l;
export { G8l, Xko, Zko };
var __wakaru_F$f_initialized = false;
export function F$f() {
if (__wakaru_F$f_initialized) return;
__wakaru_F$f_initialized = true;
E(), fh(), ZNi(), eZ(), G8l = class extends uXn {
    constructor(t){
        const e = H3w(t), n = i1.SENTRY_SDK_SOURCE || r0o();
        Zko(e, "browser", [
            "browser"
        ], n), e._metadata?.sdk && (e._metadata.sdk.settings = {
            infer_ip: e.sendDefaultPii ? "auto" : "never",
            ...e._metadata.sdk.settings
        }), super(e);
        const { sendDefaultPii: i, sendClientReports: r, enableLogs: s, _experiments: o, enableMetrics: a } = this._options, l = a ?? o?.enableMetrics ?? !0;
        i1.document && (r || s || l) && i1.document.addEventListener("visibilitychange", ()=>{
            i1.document.visibilityState === "hidden" && (r && this._flushOutcomes(), s && aXn(this), l && cXn(this));
        }), i && this.on("beforeSendSession", Xko);
    }
    eventFromException(t, e) {
        return N$f(this._options.stackParser, t, e, this._options.attachStacktrace);
    }
    eventFromMessage(t, e = "info", n) {
        return L$f(this._options.stackParser, t, e, n, this._options.attachStacktrace);
    }
    _prepareEvent(t, e, n, i) {
        return t.platform = t.platform || "javascript", super._prepareEvent(t, e, n, i);
    }
};

}
