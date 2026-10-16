import { le } from "./async.js";
import { at, ot } from "./configuration.js";
import { Fr, ii } from "./environment.js";
import { ge } from "./event.js";
import { B, Hn } from "./ipc.js";
import { Te, hr } from "./ipcMain.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { $, $e, Jt, R5, b5, xm } from "./network.js";
import { Ce, Hv, L, _t, on } from "./path.js";
import { Fe, oe } from "./platform.js";
import { RO, uhe } from "./rpcDevtools.js";
import { fa, lc } from "./ternarySearchTree.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Ls, Us } from "./userDataProfile.js";
import { Wn, vt } from "./uuid.js";
import { session as Jct } from "electron";
function t1(e) {
    return e.getValue(RO) === !0;
}
function lJe(e, t) {
    return Co && Co.dispose(), Co = new _he(e, t), ge(()=>{
        Co?.dispose(), Co = void 0;
    });
}
function dJe(e, t) {
    if (!Co) {
        t({
            statusCode: 503,
            mimeType: al,
            data: Buffer.from(JSON.stringify({
                error: "RPC DevTools coordinator is not registered."
            }), "utf8"),
            headers: {
                "content-type": al,
                "cache-control": "no-store"
            }
        });
        return;
    }
    Co.handleProtocolRequest(e, t);
}
var al, mhe, phe, hhe, ghe, fhe, _he, Co, n1;
var pb;
export { Co, _he, al, dJe, fhe, ghe, hhe, lJe, mhe, n1, pb, phe, t1 };
var __wakaru_vhe_initialized = false;
export function vhe() {
if (__wakaru_vhe_initialized) return;
__wakaru_vhe_initialized = true;
"use strict";
h(), le(), j(), at(), uhe(), al = "application/json; charset=utf-8", mhe = /^[A-Za-z0-9_-]{1,128}$/, phe = 6e4, hhe = 1e4, ghe = 1e3, fhe = 1e3, _he = class extends J {
    constructor(e, t){
        super(), this.configurationService = e, this.logService = t, this.pending = new Map, this.completed = new Map, this._register(this.configurationService.onDidChangeConfiguration((n)=>{
            n.affectsConfiguration(RO) && !t1(this.configurationService) && this.cancelPendingRequests();
        }));
    }
    handleProtocolRequest(e, t) {
        if (!t1(this.configurationService)) {
            t(this.createResponse(404, {
                error: "RPC DevTools requires local trace mode."
            }));
            return;
        }
        const n = this.getEventId(e.url);
        if (!n) {
            t(this.createResponse(400, {
                error: "Missing or invalid RPC DevTools event id."
            }));
            return;
        }
        const r = this.completed.get(n);
        if (r) {
            this.completed.delete(n), r.timeout.dispose(), t(this.completionToProtocolResponse(r.completion));
            return;
        }
        if (this.pending.size >= ghe) {
            t(this.createResponse(429, {
                error: "Too many pending RPC DevTools requests."
            }));
            return;
        }
        const s = Hn(()=>{
            this.pending.delete(n) && (s.dispose(), t(this.createResponse(504, {
                error: "RPC DevTools request timed out."
            })));
        }, phe);
        this.pending.set(n, {
            callback: t,
            timeout: s
        });
    }
    async completeRequest(e) {
        if (!t1(this.configurationService) || !this.isValidEventId(e.id)) return;
        const t = this.pending.get(e.id);
        if (t) {
            this.pending.delete(e.id), t.timeout.dispose(), t.callback(this.completionToProtocolResponse(e));
            return;
        }
        if (this.completed.size >= fhe) {
            const r = this.completed.keys().next().value;
            if (typeof r == "string") {
                const s = this.completed.get(r);
                s && s.timeout.dispose(), this.completed.delete(r);
            }
        }
        const n = Hn(()=>{
            this.completed.delete(e.id), n.dispose();
        }, hhe);
        this.completed.set(e.id, {
            completion: e,
            timeout: n
        });
    }
    dispose() {
        this.cancelPendingRequests();
        for (const e of this.completed.values())e.timeout.dispose();
        this.completed.clear(), super.dispose();
    }
    cancelPendingRequests() {
        for (const [e, t] of this.pending)t.timeout.dispose(), t.callback(this.createResponse(499, {
            error: "RPC DevTools tracing disabled.",
            eventId: e
        }));
        this.pending.clear();
    }
    getEventId(e) {
        try {
            const n = new URL(e).searchParams.get("id") ?? void 0;
            if (n && this.isValidEventId(n)) return n;
        } catch (t) {
            this.logService.debug("[RpcDevtoolsProtocolCoordinator] Failed to parse request URL", t);
        }
    }
    isValidEventId(e) {
        return mhe.test(e);
    }
    completionToProtocolResponse(e) {
        const t = {
            "content-type": al,
            "cache-control": "no-store",
            ...e.headers
        };
        return {
            statusCode: e.statusCode,
            mimeType: al,
            data: Buffer.from(e.body, "utf8"),
            headers: t
        };
    }
    createResponse(e, t) {
        return {
            statusCode: e,
            mimeType: al,
            data: Buffer.from(JSON.stringify(t), "utf8"),
            headers: {
                "content-type": al,
                "cache-control": "no-store"
            }
        };
    }
}, n1 = class {
    constructor(e){
        this.configurationService = e;
    }
    async completeRequest(e) {
        t1(this.configurationService) && await Co?.completeRequest(e);
    }
}, n1 = B([
    w(0, ot)
], n1);

}
var __wakaru_Xct_initialized = false;
export function Xct() {
if (__wakaru_Xct_initialized) return;
__wakaru_Xct_initialized = true;
"use strict";
h(), j(), $e(), Ce(), oe(), lc(), ye(), Wn(), hr(), at(), Fr(), te(), vhe(), Us(), pb = class extends J {
    constructor(e, t, n, r){
        super(), this.environmentService = e, this.logService = n, this.configurationService = r, this.validRoots = fa.forPaths(!Fe), this.validExtensions = new Set([
            ".svg",
            ".png",
            ".jpg",
            ".jpeg",
            ".gif",
            ".bmp",
            ".webp",
            ".mp4",
            ".otf",
            ".ttf"
        ]), this.addValidFileRoot(e.appRoot), this.addValidFileRoot(e.extensionsPath), this.addValidFileRoot(t.defaultProfile.globalStorageHome.with({
            scheme: $.file
        }).fsPath), this.addValidFileRoot(e.workspaceStorageHome.with({
            scheme: $.file
        }).fsPath), this.environmentService.isBuilt || this.addValidFileRoot(L(e.appRoot, "..", "packages")), this.handleProtocols();
    }
    handleProtocols() {
        const { defaultSession: e } = Jct;
        e.protocol.registerFileProtocol($.vscodeFileResource, (t, n)=>this.handleResourceRequest(t, n)), this._register(lJe(this.configurationService, this.logService)), e.protocol.registerBufferProtocol($.cursorRpcDevtools, (t, n)=>this.handleRpcDevtoolsRequest(t, n)), e.protocol.interceptFileProtocol($.file, (t, n)=>this.handleFileRequest(t, n)), this._register(ge(()=>{
            e.protocol.unregisterProtocol($.vscodeFileResource), e.protocol.unregisterProtocol($.cursorRpcDevtools), e.protocol.uninterceptProtocol($.file);
        }));
    }
    addValidFileRoot(e) {
        const t = on(e);
        return this.validRoots.get(t) ? J.None : (this.validRoots.set(t, !0), ge(()=>this.validRoots.delete(t)));
    }
    handleRpcDevtoolsRequest(e, t) {
        dJe(e, t);
    }
    handleFileRequest(e, t) {
        const n = x.parse(e.url);
        return this.logService.error(`Refused to load resource ${n.fsPath} from ${$.file}: protocol (original URL: ${e.url})`), t({
            error: -3
        });
    }
    handleResourceRequest(e, t) {
        const n = this.requestToNormalizedFilePath(e), r = _t(n);
        let s;
        return this.environmentService.crossOriginIsolated && (r === "workbench.html" || r === "workbench-dev.html" ? s = xm.CoopAndCoep : s = xm.getHeadersFromQuery(e.url)), this.environmentService.isBuilt || (s = {
            ...s,
            ...b5
        }), (r === "workbench.html" || r === "workbench-dev.html") && (s = {
            ...s,
            ...R5
        }), this.validRoots.findSubstr(n) ? t({
            path: n,
            headers: s
        }) : this.validExtensions.has(Hv(n).toLowerCase()) ? t({
            path: n,
            headers: s
        }) : (this.logService.error(`${$.vscodeFileResource}: Refused to load resource ${n} from ${$.vscodeFileResource}: protocol (original URL: ${e.url})`), t({
            error: -3
        }));
    }
    requestToNormalizedFilePath(e) {
        const t = x.parse(e.url), n = Jt.uriToFileUri(t);
        return on(n.fsPath);
    }
    createIPCObjectUrl() {
        let e;
        const t = x.from({
            scheme: "vscode",
            path: vt()
        }), n = t.toString(), r = async ()=>e;
        return Te.handle(n, r), this.logService.trace(`IPC Object URL: Registered new channel ${n}.`), {
            resource: t,
            update: (s)=>e = s,
            dispose: ()=>{
                this.logService.trace(`IPC Object URL: Removed channel ${n}.`), Te.removeHandler(n);
            }
        };
    }
}, pb = B([
    w(0, ii),
    w(1, Ls),
    w(2, Z),
    w(3, ot)
], pb);

}
