import { D7, ZI } from "./desktop-bridge.ts";
import { FG, LG, OG, SA, UG, WG, Z7e, xG } from "./desktopBridge.js";
import { Ye, qe } from "./environmentMainService.js";
import { ge } from "./event.js";
import { Nc } from "./index.ts";
import { B } from "./ipc.js";
import { ST, f0, zl } from "./ipc.net_2.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { Gi, _s } from "./nativeHostMainService.js";
import { L } from "./path.js";
import { gn, ie } from "./pfs.js";
import { Ko } from "./platform.js";
import { Tt, et } from "./productService.js";
import { Cn, or } from "./storageMainService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { vt } from "./uuid.js";
import { ct, pt } from "./windows.js";
import * as Dd from "fs";
import { createHash as eGe } from "crypto";
import * as nGe from "http";
import { join as rGe } from "path";
import { timingSafeEqual as tGe } from "crypto";
import { tmpdir as v4e } from "os";
import { randomBytes as yA } from "crypto";
function T4e() {
    const e = vt();
    if (process.platform === "win32") return `\\\\.\\pipe\\vscode-ipc-${e}-sock`;
    const t = process.platform !== "darwin" && zl ? zl : v4e(), n = f0[Ko];
    let r = e;
    if (typeof n == "number") {
        const s = Math.max(0, n - 1 - L(t, "vscode-ipc-.sock").length);
        s < r.length && (r = r.slice(0, s));
    }
    return L(t, `vscode-ipc-${r}.sock`);
}
function P7(e) {
    return typeof e == "string" && e.length > 0;
}
function dBe({ homeDir: e, envOverride: t }) {
    return t !== void 0 ? t : `${e.replace(/[\\/]+$/, "")}/.cursor/desktop-bridge`;
}
function N7(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function uBe(e) {
    return e === "local" || e === "cloud" || e === "draft" || e === "claude-code";
}
function mBe(e) {
    return e === "idle" || e === "running" || e === "completed" || e === "error" || e === "unknown";
}
function pBe(e) {
    if (!(!N7(e) || !P7(e.id) || typeof e.title != "string" || !uBe(e.source) || !mBe(e.status) || typeof e.lastUpdatedAt != "number" || !Number.isFinite(e.lastUpdatedAt) || typeof e.windowId != "number" || !Number.isInteger(e.windowId))) return {
        id: e.id,
        title: e.title,
        source: e.source,
        status: e.status,
        lastUpdatedAt: e.lastUpdatedAt,
        windowId: e.windowId
    };
}
function hBe(e) {
    return e === void 0 || typeof e == "boolean";
}
function gBe(e) {
    return new TextEncoder().encode(e).byteLength;
}
function fBe(e) {
    if (!(!N7(e) || typeof e.type != "string")) {
        if (e.type === "listThreads") return {
            type: "listThreads"
        };
        if (!(e.type !== "sendMessage" || !P7(e.threadId) || typeof e.text != "string" || gBe(e.text) > ZI || !hBe(e.force))) return {
            type: "sendMessage",
            threadId: e.threadId,
            text: e.text,
            ...e.force === void 0 ? {} : {
                force: e.force
            }
        };
    }
}
function X7e(e) {
    return e.isBuilt ? e.featureGateEnabled && e.userEnabled : !0;
}
function Q7e(e) {
    return e instanceof WG ? !0 : e instanceof Error && e.message === SA;
}
function BG(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function GG(e) {
    return BG(e) && typeof e.code == "string" ? e.code : void 0;
}
function Uc(e) {
    return e instanceof Error ? e.name : "Unknown error";
}
function sGe(e) {
    if (!Array.isArray(e)) return;
    const t = [];
    for (const n of e){
        const r = pBe(n);
        r && t.push(r);
    }
    return t;
}
function iGe(e) {
    if (!BG(e) || typeof e.outcome != "string") return !1;
    switch(e.outcome){
        case "submitted":
        case "queued":
            return typeof e.threadTitle == "string";
        case "not-found":
            return !0;
        case "not-sendable":
            return typeof e.reason == "string";
        case "error":
            return typeof e.message == "string";
        default:
            return !1;
    }
}
function Sa(e, t, n) {
    e.writableEnded || (e.writeHead(t, {
        "content-type": "application/json"
    }), e.end(JSON.stringify(n)));
}
var VG, $G, vS;
export { $G, BG, GG, N7, P7, Q7e, Sa, T4e, Uc, VG, X7e, dBe, fBe, gBe, hBe, iGe, mBe, pBe, sGe, uBe, vS };
var __wakaru_aGe_initialized = false;
export function aGe() {
if (__wakaru_aGe_initialized) return;
__wakaru_aGe_initialized = true;
"use strict";
h(), Nc(), j(), gn(), ST(), Ye(), te(), Gi(), Tt(), or(), pt(), Z7e(), VG = 16 * 1024, $G = ZI + VG, vS = class extends J {
    constructor(e, t, n, r, s, i){
        super(), this.environmentMainService = e, this.applicationStorageMainService = t, this.windowsMainService = n, this.nativeHostMainService = r, this.productService = s, this.logService = i;
    }
    start() {
        return this.startPromise || (this.startPromise = this.startInternal().catch((e)=>{
            this.logService.warn("[desktop bridge] Failed to start local bridge:", Uc(e)), this.closeServer(), this.unlinkDiscoveryFile();
        })), this.startPromise;
    }
    async startInternal() {
        await this.applicationStorageMainService.whenReady;
        const e = this.applicationStorageMainService.getBoolean(OG, -1, !1), t = this.applicationStorageMainService.getBoolean(LG, -1, !1);
        if (!X7e({
            isBuilt: this.environmentMainService.isBuilt,
            featureGateEnabled: e,
            userEnabled: t
        })) {
            this.logService.debug("[desktop bridge] Not starting because desktop_bridge feature gate and/or user setting is disabled");
            return;
        }
        const n = dBe({
            homeDir: this.environmentMainService.userHome.fsPath,
            envOverride: process.env.CURSOR_DESKTOP_BRIDGE_DIR
        });
        await this.ensureDiscoveryDirectory(n), this.socketPath = T4e(), this.token = yA(32).toString("hex"), this.rendererInvocationToken = yA(32).toString("hex"), await this.applicationStorageMainService.store(UG, this.rendererInvocationToken, -1, 1);
        const r = nGe.createServer((a, o)=>this.handleRequest(a, o));
        this.server = r, this._register(ge(()=>{
            r.listening && r.close();
        })), await new Promise((a, o)=>{
            const l = (u)=>{
                r.removeListener("listening", d), o(u);
            }, d = ()=>{
                r.removeListener("error", l), a();
            };
            r.once("error", l), r.once("listening", d), r.listen(this.socketPath);
        }), r.on("error", (a)=>{
            this.logService.warn("[desktop bridge] Local bridge server error:", Uc(a));
        });
        const s = eGe("sha256").update(this.environmentMainService.userDataPath).digest("hex").slice(0, 16);
        this.discoveryFilePath = rGe(n, `${s}.json`);
        const i = {
            protocolVersion: D7,
            pid: process.pid,
            socketPath: this.socketPath,
            token: this.token,
            appName: this.productService.nameShort,
            appVersion: this.productService.version,
            userDataDir: this.environmentMainService.userDataPath,
            createdAt: Date.now()
        };
        await this.writeDiscoveryFile(i);
    }
    async ensureDiscoveryDirectory(e) {
        await Dd.promises.mkdir(e, {
            recursive: !0,
            mode: 448
        }), await Dd.promises.chmod(e, 448).catch((t)=>{
            if (process.platform !== "win32") throw t;
        });
    }
    async writeDiscoveryFile(e) {
        const t = this.discoveryFilePath;
        if (!t) throw new Error("Desktop bridge discovery path is unavailable");
        const n = `${t}.${process.pid}.${yA(6).toString("hex")}.tmp`;
        try {
            await Dd.promises.writeFile(n, JSON.stringify(e), {
                encoding: "utf8",
                mode: 384
            }), await ie.rename(n, t);
        } catch (r) {
            throw await Dd.promises.unlink(n).catch(()=>{}), r;
        }
    }
    isAuthorized(e) {
        const t = e.headers.authorization, n = this.token;
        if (typeof t != "string" || n === void 0) return !1;
        const r = Buffer.from(t), s = Buffer.from(`Bearer ${n}`);
        return r.byteLength === s.byteLength && tGe(r, s);
    }
    handleRequest(e, t) {
        if (e.url !== "/") {
            Sa(t, 404, {
                error: "not_found"
            });
            return;
        }
        if (e.method !== "POST") {
            Sa(t, 405, {
                error: "method_not_allowed"
            });
            return;
        }
        if (!this.isAuthorized(e)) {
            Sa(t, 401, {
                error: "unauthorized"
            });
            return;
        }
        const n = [];
        let r = 0, s = !1;
        e.on("data", (i)=>{
            if (r += i.byteLength, r > $G) {
                s = !0;
                return;
            }
            n.push(i);
        }), e.on("error", ()=>{
            Sa(t, 400, {
                error: "invalid_request"
            });
        }), e.on("end", ()=>{
            if (s) {
                Sa(t, 413, {
                    error: "request_too_large"
                });
                return;
            }
            let i;
            try {
                i = JSON.parse(Buffer.concat(n).toString("utf8"));
            } catch  {
                Sa(t, 400, {
                    error: "invalid_json"
                });
                return;
            }
            const a = fBe(i);
            if (!a) {
                Sa(t, 400, {
                    error: "invalid_request"
                });
                return;
            }
            this.dispatchRequest(a).then((o)=>Sa(t, 200, o)).catch((o)=>{
                this.logService.warn("[desktop bridge] Request failed:", Uc(o)), Sa(t, 500, {
                    status: "error",
                    message: "Desktop bridge request failed."
                });
            });
        });
    }
    async dispatchRequest(e) {
        switch(e.type){
            case "listThreads":
                return this.listThreads();
            case "sendMessage":
                return this.sendMessage(e);
            default:
                return e;
        }
    }
    orderedWindows() {
        const e = this.windowsMainService.getWindows(), t = this.windowsMainService.getLastActiveWindow();
        return t ? [
            t,
            ...e.filter((n)=>n.id !== t.id)
        ] : e;
    }
    bridgeActionArgs(e, t = {}) {
        return {
            windowId: e,
            bridgeInvocationToken: this.rendererInvocationToken,
            ...t
        };
    }
    async listThreads() {
        const e = this.orderedWindows(), t = await Promise.all(e.map(async (r)=>{
            try {
                const s = await this.nativeHostMainService.runActionInWindow(void 0, {
                    windowId: r.id,
                    actionId: xG,
                    args: this.bridgeActionArgs(r.id),
                    waitForResult: !0
                });
                return sGe(s) ?? [];
            } catch (s) {
                if (Q7e(s)) throw s;
                return this.logService.warn(`[desktop bridge] Failed to list threads from window ${r.id}:`, Uc(s)), [];
            }
        })), n = new Map;
        for (const r of t)for (const s of r)n.has(s.id) || n.set(s.id, s);
        return {
            threads: [
                ...n.values()
            ]
        };
    }
    async sendMessage(e) {
        let t;
        for (const n of this.orderedWindows()){
            let r;
            try {
                r = await this.nativeHostMainService.runActionInWindow(void 0, {
                    windowId: n.id,
                    actionId: FG,
                    args: this.bridgeActionArgs(n.id, {
                        threadId: e.threadId,
                        text: e.text,
                        force: e.force
                    }),
                    waitForResult: !0
                });
            } catch (s) {
                this.logService.warn(`[desktop bridge] Failed to send through window ${n.id}:`, Uc(s)), t ??= {
                    status: "error",
                    message: "Desktop bridge failed to send through a window."
                };
                continue;
            }
            if (r === void 0) return this.logService.warn(`[desktop bridge] Timed out sending through window ${n.id}`), {
                status: "timeout"
            };
            if (!iGe(r)) {
                this.logService.warn(`[desktop bridge] Invalid send response from window ${n.id}`), t ??= {
                    status: "error",
                    message: "Desktop bridge received an invalid send response."
                };
                continue;
            }
            switch(r.outcome){
                case "not-found":
                    continue;
                case "submitted":
                case "queued":
                    return {
                        status: r.outcome,
                        threadId: e.threadId,
                        windowId: n.id,
                        threadTitle: r.threadTitle
                    };
                case "not-sendable":
                    return {
                        status: "not-sendable",
                        reason: r.reason
                    };
                case "error":
                    t ??= {
                        status: "error",
                        message: r.message
                    };
                    continue;
                default:
                    return r;
            }
        }
        return t ?? {
            status: "unknown-thread"
        };
    }
    closeServer() {
        const e = this.socketPath;
        this.server?.listening && this.server.close(), this.server = void 0, this.socketPath = void 0, e && process.platform !== "win32" && Dd.promises.unlink(e).catch((t)=>{
            GG(t) !== "ENOENT" && this.logService.warn("[desktop bridge] Failed to remove socket file:", Uc(t));
        });
    }
    unlinkDiscoveryFile() {
        const e = this.discoveryFilePath;
        this.discoveryFilePath = void 0, e && Dd.promises.unlink(e).catch((t)=>{
            GG(t) !== "ENOENT" && this.logService.warn("[desktop bridge] Failed to remove discovery file:", Uc(t));
        });
    }
    dispose() {
        this.closeServer(), this.unlinkDiscoveryFile(), super.dispose();
    }
}, vS = B([
    w(0, qe),
    w(1, Cn),
    w(2, ct),
    w(3, _s),
    w(4, et),
    w(5, Z)
], vS);

}
