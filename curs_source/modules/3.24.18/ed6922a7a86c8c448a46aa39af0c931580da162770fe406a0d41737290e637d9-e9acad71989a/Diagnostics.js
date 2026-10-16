import { fHt, gHt, mto, oyv } from "./A3u.js";
import { x } from "./tslib.es6.js";
var eLn, J$i, eHi, Jgd, n_e;
export { J$i, Jgd, eHi, eLn, n_e };
var __wakaru_gto_initialized = false;
export function gto() {
if (__wakaru_gto_initialized) return;
__wakaru_gto_initialized = true;
"use strict";
x(), eLn = new Map, J$i = "start", eHi = "end", Jgd = "statsig::diagnostics", n_e = {
    _getMarkers: (e)=>eLn.get(e),
    _markInitOverallStart: (e)=>{
        fHt(e, gHt({}, J$i, "overall"));
    },
    _markInitOverallEnd: (e, t, n)=>{
        fHt(e, gHt({
            success: t,
            error: t ? void 0 : {
                name: "InitializeError",
                message: "Failed to initialize"
            },
            evaluationDetails: n
        }, eHi, "overall"));
    },
    _markInitNetworkReqStart: (e, t)=>{
        fHt(e, gHt(t, J$i, "initialize", "network_request"));
    },
    _markInitNetworkReqEnd: (e, t)=>{
        fHt(e, gHt(t, eHi, "initialize", "network_request"));
    },
    _markInitProcessStart: (e)=>{
        fHt(e, gHt({}, J$i, "initialize", "process"));
    },
    _markInitProcessEnd: (e, t)=>{
        fHt(e, gHt(t, eHi, "initialize", "process"));
    },
    _clearMarkers: (e)=>{
        eLn.delete(e);
    },
    _formatError (e) {
        if (e && typeof e == "object") return {
            code: mto(e, "code"),
            name: mto(e, "name"),
            message: mto(e, "message")
        };
    },
    _getDiagnosticsData (e, t, n, i) {
        return {
            success: e?.ok === !0,
            statusCode: e?.status,
            sdkRegion: e?.headers?.get("x-statsig-region"),
            isDelta: n.includes('"is_delta":true') === !0 ? !0 : void 0,
            attempt: t,
            error: n_e._formatError(i)
        };
    },
    _enqueueDiagnosticsEvent (e, t, n, i) {
        const r = n_e._getMarkers(n);
        if (r == null || r.length <= 0) return -1;
        const s = r[r.length - 1].timestamp - r[0].timestamp;
        n_e._clearMarkers(n);
        const o = oyv(e, {
            context: "initialize",
            markers: r.slice(),
            statsigOptions: i
        });
        return t.enqueue(o), s;
    }
};

}
