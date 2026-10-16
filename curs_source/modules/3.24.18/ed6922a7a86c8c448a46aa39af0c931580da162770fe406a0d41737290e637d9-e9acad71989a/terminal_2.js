import { Se, rn } from "./HVr.js";
import { At, dn } from "./contextkey.js";
import { Ze } from "./instantiation.js";
import { kn, rr } from "./platform_2.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Tr_, ate, ier, Er_, Mf, pG, Wtt, pMh, ixo, RN;
export { Er_, Mf, RN, Tr_, Wtt, ate, ier, ixo, pG, pMh };
var __wakaru_fw_initialized = false;
export function fw() {
if (__wakaru_fw_initialized) return;
__wakaru_fw_initialized = true;
"use strict";
x(), Ze(), dn(), rr(), Se(), Tr_ = new At("terminalTabFocusMode", !1, !0), ate = ((e)=>(e[e.Api = 0] = "Api", e[e.Process = 1] = "Process", e[e.Sequence = 2] = "Sequence", e[e.Config = 3] = "Config", e))(ate || {}), ier = ((e)=>(e.LocalPty = "localPty", e.PtyHost = "ptyHost", e.PtyHostWindow = "ptyHostWindow", e.Logger = "logger", e.Heartbeat = "heartbeat", e))(ier || {}), Er_ = vn("ptyService"), Mf = ((e)=>(e[e.Panel = 1] = "Panel", e[e.Editor = 2] = "Editor", e))(Mf || {}), pG = ((e)=>(e[e.Unknown = 0] = "Unknown", e[e.Shutdown = 1] = "Shutdown", e[e.Process = 2] = "Process", e[e.User = 3] = "User", e[e.Extension = 4] = "Extension", e))(pG || {}), Wtt = {
    Backend: "workbench.contributions.terminal.processBackend"
}, pMh = class {
    constructor(){
        this._backends = new Map;
    }
    get backends() {
        return this._backends;
    }
    registerTerminalBackend(e) {
        const t = this._sanitizeRemoteAuthority(e.remoteAuthority);
        if (this._backends.has(t)) throw new Error(`A terminal backend with remote authority '${t}' was already registered.`);
        return this._backends.set(t, e), rn(()=>{
            this._backends.get(t) === e && this._backends.delete(t);
        });
    }
    getTerminalBackend(e) {
        return this._backends.get(this._sanitizeRemoteAuthority(e));
    }
    _sanitizeRemoteAuthority(e) {
        return e?.toLowerCase() ?? "";
    }
}, kn.add(Wtt.Backend, new pMh), ixo = vn("localPtyService"), RN = vn("terminalLogService");

}
