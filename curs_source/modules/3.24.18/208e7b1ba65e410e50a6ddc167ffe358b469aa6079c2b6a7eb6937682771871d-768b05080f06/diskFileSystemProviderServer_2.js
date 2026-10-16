import { E } from "./configurationRegistry.js";
import { YVe, f$, h$ } from "./diskFileSystemProviderServer.js";
import { Ns } from "./diskFileSystemProvider_2.js";
import { Ka } from "./errorMessage.js";
import { Wt, ln } from "./files.js";
import { Ne } from "./nls.js";
import { Ce, _t, on } from "./path.js";
import { ee, oe } from "./platform.js";
import { Ln } from "./platform_2.js";
import { pM, v$ } from "./sharedSessionFileWatcher.js";
import { wn } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { JVe, _$ } from "./uriIpc.js";
import { shell as XVe } from "electron";
function ZR(e, t) {
    return t && (e.stack || e.stacktrace) ? E(108, null, A3(e), I3(e.stack) || I3(e.stacktrace)) : A3(e);
}
function I3(e) {
    return Array.isArray(e) ? e.join(`
`) : e;
}
function A3(e) {
    return e.code === "ERR_UNC_HOST_NOT_ALLOWED" ? `${e.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.` : typeof e.code == "string" && typeof e.errno == "number" && typeof e.syscall == "string" ? E(109, null, e.message) : e.message || E(110, null);
}
function bt(e = null, t = !1) {
    if (!e) return E(111, null);
    if (Array.isArray(e)) {
        const n = wn(e), r = bt(n[0], t);
        return n.length > 1 ? E(112, null, r, n.length) : r;
    }
    if (Ln(e)) return e;
    if (e.detail) {
        const n = e.detail;
        if (n.error) return ZR(n.error, t);
        if (n.exception) return ZR(n.exception, t);
    }
    return e.stack ? ZR(e, t) : e.message ? e.message : E(113, null);
}
var T$, k$;
export { A3, I3, T$, ZR, bt, k$ };
var __wakaru_QVe_initialized = false;
export function QVe() {
if (__wakaru_QVe_initialized) return;
__wakaru_QVe_initialized = true;
"use strict";
h(), Ne(), oe(), ye(), Wt(), Ce(), YVe(), JVe(), Ka(), v$(), T$ = class extends h$ {
    constructor(e, t, n, r){
        super(e, t), this.environmentService = n, this.applicationStorageMainService = r;
    }
    getUriTransformer(e) {
        return _$;
    }
    transformIncoming(e, t) {
        return x.revive(t);
    }
    async delete(e, t, n) {
        if (!n.useTrash) return super.delete(e, t, n);
        const r = this.transformIncoming(e, t), s = on(r.fsPath);
        try {
            await XVe.trashItem(s);
        } catch (i) {
            throw Ns(E(ee ? 2058 : 2059, null, _t(s), bt(i)), ln.Unknown);
        }
    }
    createSessionFileWatcher(e, t) {
        const n = this.applicationStorageMainService.getBoolean(pM, -1, !1) ? this.provider : void 0;
        return new k$(e, t, this.logService, this.environmentService, n);
    }
}, k$ = class extends f$ {
    watch(e, t, n) {
        if (n.recursive) throw Ns("Recursive file watching is not supported from main process for performance reasons.", ln.Unavailable);
        return super.watch(e, t, n);
    }
};

}
