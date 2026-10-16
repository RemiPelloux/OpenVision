import { le, sT } from "./async.js";
import { Xl, wT } from "./encryptionService.js";
import { N, se } from "./event.js";
import { _je } from "./index_3.ts";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { N$ } from "./logger.ts";
import { Cr } from "./mcp-oauth-keys.ts";
import { z$ } from "./mcpOAuthKeys.js";
import { $, $e } from "./network.js";
import { U$ } from "./oauth-log-events.ts";
import { Cn, Gs, or } from "./storageMainService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ls, Us } from "./userDataProfile.js";
import * as po from "fs";
import * as qd from "path";
import { randomUUID as vje } from "crypto";
function S$e(e) {
    P$ = e;
}
function y$e(e) {
    return P$?.getLogger(e) ?? N$;
}
var P$;
function w$e(e) {
    const t = y$e(e.identifier);
    if (e.level === "error") {
        const n = e.error instanceof Error ? e.error : e.error !== void 0 ? new Error(String(e.error)) : void 0;
        t.error(e.message, n, e.metadata);
        return;
    }
    if (e.level === "warn") {
        t.warn(e.message, e.metadata);
        return;
    }
    if (e.level === "debug") {
        t.debug?.(e.message, e.metadata);
        return;
    }
    t.info(e.message, e.metadata);
}
function E$e(e) {
    return {
        mcpAuthMeta: e
    };
}
function R$e(e) {
    return `[oauth-attempt:${e}] ${Cr.OAUTH_ATTEMPT_CLIENT_SECRET}`;
}
function C$e(e) {
    return `[oauth-attempt:${e}] ${Cr.CODE_VERIFIER}`;
}
function I$e(e) {
    const n = (e.startsWith("[profile:") ? e.replace(/^\[profile:[^\]]+\] /, "") : e).match(/^\[([^\]]+)\] /);
    if (!n) return;
    const r = n[1];
    if (!(r.startsWith("url:") || r.startsWith("oauth-attempt:"))) return r;
}
function A$e(e) {
    return (e.startsWith("[profile:") ? e.replace(/^\[profile:[^\]]+\] /, "") : e).match(/^\[url:([^\]]+)\] /)?.[1];
}
function M$e(e) {
    const t = I$e(e);
    if (t) return t;
    const n = A$e(e);
    return n ? `url:${n}` : "unknown";
}
function P$e(e) {
    return e.includes(Cr.TOKENS) ? "tokens" : e.includes(Cr.CLIENT_INFORMATION) ? "client_information" : e.includes(Cr.CODE_VERIFIER) ? "verifier" : "multiple";
}
function N$e(e) {
    w$e({
        identifier: e.identifier,
        level: e.level ?? "info",
        message: e.message ?? U$[e.event],
        metadata: E$e({
            event: e.event,
            commandsVersion: e.commandsVersion ?? "process",
            mcpOAuthOwner: e.mcpOAuthOwner ?? "mcp_process",
            ...e.fields ?? {}
        }),
        error: e.error
    });
}
function D$e(e) {
    N$e({
        identifier: e.identifier,
        event: "mcp_oauth_credentials_cleared",
        level: e.level ?? "debug",
        commandsVersion: e.commandsVersion,
        mcpOAuthOwner: e.mcpOAuthOwner,
        fields: {
            reason: e.reason,
            clearScope: e.clearScope,
            storageKey: e.storageKey,
            hadRefreshToken: e.hadRefreshToken,
            ...e.fields ?? {}
        }
    });
}
function Y$(e) {
    return Buffer.from(e, "utf8").toString("base64url");
}
function J$(e) {
    try {
        return Buffer.from(e, "base64url").toString("utf8");
    } catch  {
        return;
    }
}
function Tje(e) {
    if (!e || typeof e != "object") return;
    const t = e;
    if (!(typeof t.attemptId != "string" || typeof t.createdAtMs != "number" || !Number.isFinite(t.createdAtMs))) return {
        attemptId: t.attemptId,
        createdAtMs: t.createdAtMs
    };
}
var jS, HS, kM, X$, Q$, qS;
export { A$e, C$e, D$e, E$e, HS, I$e, J$, M$e, N$e, P$, P$e, Q$, R$e, S$e, Tje, X$, Y$, jS, kM, qS, w$e, y$e };
var __wakaru_kje_initialized = false;
export function kje() {
if (__wakaru_kje_initialized) return;
__wakaru_kje_initialized = true;
"use strict";
h(), le(), se(), j(), $e(), wT(), te(), or(), Us(), _je(), z$(), jS = "mcpOAuth.global.", HS = "mcpOAuth.secret.", kM = "mcpOAuth.extensionMigrationComplete", X$ = /^[0-9A-Za-z_-]+$/, Q$ = class {
    constructor(e){
        this.logService = e;
    }
    getLogger(e) {
        return {
            info: (t, n, r)=>{
                this.logService.info(this.formatMessage(e, t), ...this.metadataArgs(e, n));
            },
            warn: (t, n, r)=>{
                this.logService.warn(this.formatMessage(e, t), ...this.metadataArgs(e, n));
            },
            error: (t, n, r, s)=>{
                const i = this.formatMessage(e, t);
                n ? this.logService.error(i, n, ...this.metadataArgs(e, r)) : this.logService.error(i, ...this.metadataArgs(e, r));
            },
            debug: (t, n, r)=>{
                this.logService.debug(this.formatMessage(e, t), ...this.metadataArgs(e, n));
            },
            trace: (t, n, r)=>{
                this.logService.trace(this.formatMessage(e, t), ...this.metadataArgs(e, n));
            }
        };
    }
    formatMessage(e, t) {
        return `[McpOAuthStoreMainService:${e}] ${t}`;
    }
    metadataArgs(e, t) {
        return t ? [
            {
                mcpMeta: {
                    subkey: "cursor_mcp",
                    source: "mcp_oauth_store_main",
                    mcp_version: "main_process",
                    identifier: e,
                    ...t
                }
            }
        ] : [];
    }
}, qS = class extends J {
    constructor(e, t, n, r, s){
        super(), this.applicationStorageService = e, this.storageMainService = t, this.encryptionMainService = n, this.userDataProfilesService = r, this.logService = s, this.secretSequencer = new sT, this.attemptWriteQueues = new Map, this._onDidChangeSecret = this._register(new N), this.onDidChangeSecret = this._onDidChangeSecret.event, S$e(new Q$(s));
    }
    async getGlobalState(e) {
        await this.applicationStorageService.whenReady;
        const t = this.applicationStorageService.get(this.globalStorageKey(e), -1);
        if (t !== void 0) try {
            return JSON.parse(t);
        } catch  {
            this.applicationStorageService.remove(this.globalStorageKey(e), -1);
            return;
        }
    }
    async updateGlobalState(e, t) {
        if (await this.applicationStorageService.whenReady, t === void 0) {
            this.applicationStorageService.remove(this.globalStorageKey(e), -1);
            return;
        }
        this.applicationStorageService.store(this.globalStorageKey(e), JSON.stringify(t), -1, 0);
    }
    async getGlobalStateKeys() {
        return await this.applicationStorageService.whenReady, this.applicationStorageService.keys(-1, 0).filter((e)=>e.startsWith(jS)).map((e)=>J$(e.slice(jS.length))).filter((e)=>e !== void 0);
    }
    async getSecret(e) {
        return this.secretSequencer.queue(e, async ()=>{
            await this.applicationStorageService.whenReady;
            const t = this.applicationStorageService.get(this.secretStorageKey(e), -1);
            if (t) try {
                return await this.encryptionMainService.decrypt(t);
            } catch (n) {
                this.logService.warn(`[McpOAuthStoreMainService] failed to decrypt secret: ${n instanceof Error ? n.message : String(n)}`), this.applicationStorageService.remove(this.secretStorageKey(e), -1), this.logCredentialsCleared(e, "decrypt_failure");
                return;
            }
        });
    }
    async setSecret(e, t) {
        return this.secretSequencer.queue(e, async ()=>{
            await this.applicationStorageService.whenReady;
            const n = await this.encryptionMainService.encrypt(t);
            this.applicationStorageService.store(this.secretStorageKey(e), n, -1, 1), this._onDidChangeSecret.fire(e);
        });
    }
    async setSecretIfAbsent(e, t) {
        return this.secretSequencer.queue(e, async ()=>{
            await this.applicationStorageService.whenReady;
            const n = this.secretStorageKey(e), r = this.applicationStorageService.get(n, -1);
            if (r) try {
                return await this.encryptionMainService.decrypt(r), !1;
            } catch (i) {
                this.logService.warn(`[McpOAuthStoreMainService] failed to decrypt secret during set-if-absent: ${i instanceof Error ? i.message : String(i)}`), this.applicationStorageService.remove(n, -1), this.logCredentialsCleared(e, "decrypt_failure_set_if_absent");
            }
            const s = await this.encryptionMainService.encrypt(t);
            return this.applicationStorageService.store(n, s, -1, 1), this._onDidChangeSecret.fire(e), !0;
        });
    }
    async deleteSecret(e) {
        return this.secretSequencer.queue(e, async ()=>{
            await this.applicationStorageService.whenReady, this.applicationStorageService.remove(this.secretStorageKey(e), -1), this._onDidChangeSecret.fire(e);
        });
    }
    async deleteSecretIfEquals(e, t) {
        return this.secretSequencer.queue(e, async ()=>{
            await this.applicationStorageService.whenReady;
            const n = this.secretStorageKey(e), r = this.applicationStorageService.get(n, -1);
            if (!r) return t === void 0;
            let s;
            try {
                s = await this.encryptionMainService.decrypt(r);
            } catch (i) {
                return this.logService.warn(`[McpOAuthStoreMainService] failed to decrypt secret during conditional delete: ${i instanceof Error ? i.message : String(i)}`), this.applicationStorageService.remove(n, -1), this.logCredentialsCleared(e, "decrypt_failure_conditional_delete"), this._onDidChangeSecret.fire(e), !0;
            }
            return s !== t ? !1 : (this.applicationStorageService.remove(n, -1), this._onDidChangeSecret.fire(e), !0);
        });
    }
    async getSecretKeys() {
        return await this.applicationStorageService.whenReady, this.applicationStorageService.keys(-1, 1).filter((e)=>e.startsWith(HS)).map((e)=>J$(e.slice(HS.length))).filter((e)=>e !== void 0);
    }
    async readAttempt(e) {
        const t = this.attemptFilePath(e);
        if (t) try {
            const n = await po.promises.readFile(t, "utf8");
            return JSON.parse(n);
        } catch (n) {
            if (n?.code === "ENOENT") return;
            throw n;
        }
    }
    async writeAttempt(e, t) {
        const n = this.attemptFilePath(e);
        if (!n) throw new Error("Invalid OAuth attempt ID");
        await this.enqueueAttemptWrite(e, async ()=>{
            await po.promises.mkdir(qd.dirname(n), {
                recursive: !0
            });
            const r = `${n}.${process.pid}.${vje()}.tmp`;
            await po.promises.writeFile(r, JSON.stringify(t), "utf8");
            try {
                await po.promises.rename(r, n);
            } catch (s) {
                throw await po.promises.unlink(r).catch(()=>{}), s;
            }
        });
    }
    async deleteAttempt(e) {
        const t = this.attemptFilePath(e);
        t && (await po.promises.unlink(t).catch((n)=>{
            if (n?.code !== "ENOENT") throw n;
        }), await this.deleteSecret(R$e(e)), await this.deleteSecret(C$e(e)));
    }
    async listAttempts() {
        const e = this.attemptRoot();
        let t;
        try {
            t = await po.promises.readdir(e);
        } catch (r) {
            if (r?.code === "ENOENT") return [];
            throw r;
        }
        const n = [];
        for (const r of t){
            if (!r.endsWith(".json")) continue;
            const s = await this.readAttempt(r.slice(0, -5));
            s !== void 0 && n.push(s);
        }
        return n;
    }
    async sweepStaleAttempts(e) {
        const t = this.attemptRoot();
        let n;
        try {
            n = await po.promises.readdir(t);
        } catch (i) {
            if (i?.code === "ENOENT") return [];
            throw i;
        }
        const r = Date.now(), s = [];
        for (const i of n){
            if (!i.endsWith(".json")) continue;
            const a = i.slice(0, -5), o = await this.readAttempt(a), l = Tje(o);
            (!l || r - l.createdAtMs > e) && (s.push(a), await this.deleteAttempt(a));
        }
        return s;
    }
    async diskKVSetIfAbsent(e, t) {
        return this.storageMainService.applicationStorage.cursorDiskKVSetIfAbsent(e, t);
    }
    async diskKVReplaceIfEquals(e, t, n) {
        return this.storageMainService.applicationStorage.cursorDiskKVReplaceIfEquals(e, t, n);
    }
    async diskKVDelete(e, t) {
        await this.storageMainService.applicationStorage.cursorDiskKVDelete(e, t);
    }
    async diskKVGet(e) {
        return this.storageMainService.applicationStorage.cursorDiskKVGet(e);
    }
    async markExtensionMigrationComplete() {
        await this.updateGlobalState(kM, !0);
    }
    async isExtensionMigrationComplete() {
        return await this.getGlobalState(kM) === !0;
    }
    globalStorageKey(e) {
        return `${jS}${Y$(e)}`;
    }
    secretStorageKey(e) {
        return `${HS}${Y$(e)}`;
    }
    logCredentialsCleared(e, t) {
        const n = M$e(e), r = P$e(e);
        D$e({
            identifier: n,
            reason: t,
            clearScope: r,
            storageKey: e,
            commandsVersion: "v2",
            mcpOAuthOwner: "mcp_oauth_store_main"
        }), this.logService.warn(`[McpOAuthStoreMainService] credentials cleared (reason=${t}, scope=${r}, identifier=${n})`);
    }
    attemptRoot() {
        return qd.join(this.userDataProfilesService.defaultProfile.globalStorageHome.with({
            scheme: $.file
        }).fsPath, "mcp-oauth-attempts");
    }
    attemptFilePath(e) {
        if (!X$.test(e)) return;
        const t = qd.resolve(this.attemptRoot()), n = qd.resolve(t, `${e}.json`), r = qd.relative(t, n);
        if (!(r.startsWith("..") || qd.isAbsolute(r))) return n;
    }
    enqueueAttemptWrite(e, t) {
        const r = (this.attemptWriteQueues.get(e) ?? Promise.resolve()).catch(()=>{}).then(t);
        let s;
        return s = r.finally(()=>{
            this.attemptWriteQueues.get(e) === s && this.attemptWriteQueues.delete(e);
        }).catch(()=>{}), this.attemptWriteQueues.set(e, s), r;
    }
}, qS = B([
    w(0, Cn),
    w(1, Gs),
    w(2, Xl),
    w(3, Ls),
    w(4, Z)
], qS);

}
