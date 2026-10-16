import { Pn, Qe } from "./Iwo.js";
import { jn } from "./SZu.js";
import { Hi, cn } from "./contextkey.js";
import { It } from "./instantiation.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
var N0k, ame, Has, L0k, ny, pG, sEt, syg, Adl, Z4;
export { Adl, Has, L0k, N0k, Z4, ame, ny, pG, sEt, syg };
var __wakaru_UC_initialized = false;
export function UC() {
if (__wakaru_UC_initialized) return;
__wakaru_UC_initialized = true;
"use strict";
E(), It(), Hi(), Eo(), Qe(), N0k = new cn("terminalTabFocusMode", !1, !0), ame = ((t)=>(t[t.Api = 0] = "Api", t[t.Process = 1] = "Process", t[t.Sequence = 2] = "Sequence", t[t.Config = 3] = "Config", t))(ame || {}), Has = ((t)=>(t.LocalPty = "localPty", t.PtyHost = "ptyHost", t.PtyHostWindow = "ptyHostWindow", t.Logger = "logger", t.Heartbeat = "heartbeat", t))(Has || {}), L0k = jn("ptyService"), ny = ((t)=>(t[t.Panel = 1] = "Panel", t[t.Editor = 2] = "Editor", t))(ny || {}), pG = ((t)=>(t[t.Unknown = 0] = "Unknown", t[t.Shutdown = 1] = "Shutdown", t[t.Process = 2] = "Process", t[t.User = 3] = "User", t[t.Extension = 4] = "Extension", t))(pG || {}), sEt = {
    Backend: "workbench.contributions.terminal.processBackend"
}, syg = class {
    constructor(){
        this._backends = new Map;
    }
    get backends() {
        return this._backends;
    }
    registerTerminalBackend(t) {
        const e = this._sanitizeRemoteAuthority(t.remoteAuthority);
        if (this._backends.has(e)) throw new Error(`A terminal backend with remote authority '${e}' was already registered.`);
        return this._backends.set(e, t), Pn(()=>{
            this._backends.get(e) === t && this._backends.delete(e);
        });
    }
    getTerminalBackend(t) {
        return this._backends.get(this._sanitizeRemoteAuthority(t));
    }
    _sanitizeRemoteAuthority(t) {
        return t?.toLowerCase() ?? "";
    }
}, Fi.add(sEt.Backend, new syg), Adl = jn("localPtyService"), Z4 = jn("terminalLogService");

}
