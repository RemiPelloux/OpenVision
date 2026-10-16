import { Kdn, Syy, Vdn, qTo } from "./SZu.js";
import { E } from "./tslib.es6.js";
var IZn, rgr, sgr, UQu, aAe;
export { IZn, UQu, aAe, rgr, sgr };
var __wakaru_zTo_initialized = false;
export function zTo() {
if (__wakaru_zTo_initialized) return;
__wakaru_zTo_initialized = true;
"use strict";
E(), IZn = new Map, rgr = "start", sgr = "end", UQu = "statsig::diagnostics", aAe = {
    _getMarkers: (t)=>IZn.get(t),
    _markInitOverallStart: (t)=>{
        Kdn(t, Vdn({}, rgr, "overall"));
    },
    _markInitOverallEnd: (t, e, n)=>{
        Kdn(t, Vdn({
            success: e,
            error: e ? void 0 : {
                name: "InitializeError",
                message: "Failed to initialize"
            },
            evaluationDetails: n
        }, sgr, "overall"));
    },
    _markInitNetworkReqStart: (t, e)=>{
        Kdn(t, Vdn(e, rgr, "initialize", "network_request"));
    },
    _markInitNetworkReqEnd: (t, e)=>{
        Kdn(t, Vdn(e, sgr, "initialize", "network_request"));
    },
    _markInitProcessStart: (t)=>{
        Kdn(t, Vdn({}, rgr, "initialize", "process"));
    },
    _markInitProcessEnd: (t, e)=>{
        Kdn(t, Vdn(e, sgr, "initialize", "process"));
    },
    _clearMarkers: (t)=>{
        IZn.delete(t);
    },
    _formatError (t) {
        if (t && typeof t == "object") return {
            code: qTo(t, "code"),
            name: qTo(t, "name"),
            message: qTo(t, "message")
        };
    },
    _getDiagnosticsData (t, e, n, i) {
        return {
            success: t?.ok === !0,
            statusCode: t?.status,
            sdkRegion: t?.headers?.get("x-statsig-region"),
            isDelta: n.includes('"is_delta":true') === !0 ? !0 : void 0,
            attempt: e,
            error: aAe._formatError(i)
        };
    },
    _enqueueDiagnosticsEvent (t, e, n, i) {
        const r = aAe._getMarkers(n);
        if (r == null || r.length <= 0) return -1;
        const s = r[r.length - 1].timestamp - r[0].timestamp;
        aAe._clearMarkers(n);
        const o = Syy(t, {
            context: "initialize",
            markers: r.slice(),
            statsigOptions: i
        });
        return e.enqueue(o), s;
    }
};

}
