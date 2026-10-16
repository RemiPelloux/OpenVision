import { ZF, x0 } from "./contextkey.js";
import { ge } from "./event.js";
import { Q, ne } from "./instantiation.js";
import { j } from "./lifecycle.js";
import { pr, ri } from "./platform_2.js";
import { h } from "./tslib.es6.js";
var oet, Lu, cet, qr, h_e, g_e, P2, det;
export { Lu, P2, cet, det, g_e, h_e, oet, qr };
var __wakaru_f_e_initialized = false;
export function f_e() {
if (__wakaru_f_e_initialized) return;
__wakaru_f_e_initialized = true;
"use strict";
h(), ne(), ZF(), ri(), j(), oet = new x0("terminalTabFocusMode", !1, !0), Lu = ((e)=>(e.LocalPty = "localPty", e.PtyHost = "ptyHost", e.PtyHostWindow = "ptyHostWindow", e.Logger = "logger", e.Heartbeat = "heartbeat", e))(Lu || {}), cet = Q("ptyService"), qr = ((e)=>(e[e.BeatInterval = 5e3] = "BeatInterval", e[e.ConnectingBeatInterval = 2e4] = "ConnectingBeatInterval", e[e.FirstWaitMultiplier = 1.2] = "FirstWaitMultiplier", e[e.SecondWaitMultiplier = 1] = "SecondWaitMultiplier", e[e.CreateProcessTimeout = 5e3] = "CreateProcessTimeout", e))(qr || {}), h_e = {
    Backend: "workbench.contributions.terminal.processBackend"
}, g_e = class {
    constructor(){
        this._backends = new Map;
    }
    get backends() {
        return this._backends;
    }
    registerTerminalBackend(e) {
        const t = this._sanitizeRemoteAuthority(e.remoteAuthority);
        if (this._backends.has(t)) throw new Error(`A terminal backend with remote authority '${t}' was already registered.`);
        return this._backends.set(t, e), ge(()=>{
            this._backends.get(t) === e && this._backends.delete(t);
        });
    }
    getTerminalBackend(e) {
        return this._backends.get(this._sanitizeRemoteAuthority(e));
    }
    _sanitizeRemoteAuthority(e) {
        return e?.toLowerCase() ?? "";
    }
}, pr.add(h_e.Backend, new g_e), P2 = Q("localPtyService"), det = Q("terminalLogService");

}
