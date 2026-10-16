import { F5, W5, ae } from "./buffer.js";
import { Be } from "./code.js";
import { wt } from "./connect-error.js";
import { $g, _w } from "./dashboard_pb.js";
import { bt } from "./diskFileSystemProviderServer_2.js";
import { Ka } from "./errorMessage.js";
import { FKe } from "./grant-migration-binding.ts";
import { Cr } from "./mcp-oauth-keys.ts";
import { z$ } from "./mcpOAuthKeys.js";
import { VKe } from "./mcpOAuthProfileKeys.js";
import { WKe } from "./mcpToolServiceRefusal.js";
import { mP, uP } from "./mcp_pb_2.js";
import { CD, Qc, ame, vw } from "./mcp_tool_pb_2.js";
import { h } from "./tslib.es6.js";
function sxe({ buffer: e }, t = !0, n = !1) {
    const r = e.toBase64;
    if (typeof r == "function") return r.call(e, {
        alphabet: n ? "base64url" : "base64",
        omitPadding: !t
    });
    const s = n ? W5 : F5;
    let i = "";
    const a = e.byteLength % 3;
    let o = 0;
    for(; o < e.byteLength - a; o += 3){
        const l = e[o + 0], d = e[o + 1], u = e[o + 2];
        i += s[l >>> 2], i += s[(l << 4 | d >>> 4) & 63], i += s[(d << 2 | u >>> 6) & 63], i += s[u & 63];
    }
    if (a === 1) {
        const l = e[o + 0];
        i += s[l >>> 2], i += s[l << 4 & 63], t && (i += "==");
    } else if (a === 2) {
        const l = e[o + 0], d = e[o + 1];
        i += s[l >>> 2], i += s[(l << 4 | d >>> 4) & 63], i += s[d << 2 & 63], t && (i += "=");
    }
    return i;
}
function VS(e) {
    try {
        const t = new URL(e), n = new URL(t.pathname, t.origin);
        return n.search = t.search, n.pathname.endsWith("/") && n.pathname.length > 1 && (n.pathname = n.pathname.slice(0, -1)), n.pathname === "/" ? n.origin + n.search : n.toString();
    } catch  {
        return e.toLowerCase().trim();
    }
}
function b$e(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (const s of t)n += String.fromCharCode(s);
    return (typeof btoa == "function" ? btoa(n) : Buffer.from(t).toString("base64")).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/u, "");
}
function _M({ baseKey: e, identifier: t }) {
    return `[${t}] ${e}`;
}
function vM({ baseKey: e, serverUrl: t }) {
    const n = VS(t);
    return `[url:${b$e(n)}] ${e}`;
}
function ww(e) {
    return e.trim().length === 0 ? void 0 : VS(e);
}
function xKe(e, t) {
    const n = new Map, r = new Map, s = new Map, i = new Set, a = [], o = new Map;
    for (const f of e){
        const v = f.rowServerIdentifier || f.serverIdentifier, T = o.get(v);
        (T === void 0 || T.serverIdentifier !== v && f.serverIdentifier === v) && o.set(v, f);
    }
    const l = [];
    for (const f of e)o.get(f.rowServerIdentifier || f.serverIdentifier) === f ? l.push(f) : r.set(f, {
        row: f,
        reason: "duplicate_slot"
    });
    for (const f of l){
        const v = t.filter((y)=>!i.has(y) && !s.has(y) && (y.identifier === f.rowServerIdentifier || y.identifier === f.serverIdentifier));
        if (v.length === 0) {
            a.push(f);
            continue;
        }
        const T = ww(f.url), S = T === void 0 ? [] : v.filter((y)=>ww(y.serverUrl) === T);
        if (S.length === 0) {
            r.set(f, {
                row: f,
                reason: "url_mismatch"
            });
            for (const y of v)s.set(y, "url_mismatch");
            continue;
        }
        const k = S[0];
        i.add(k), n.set(f, {
            row: f,
            local: k,
            matchedBy: "identifier",
            rpcServerUrl: f.url
        });
    }
    for (const f of a){
        const v = ww(f.url);
        if (v === void 0) {
            r.set(f, {
                row: f,
                reason: "row_has_no_url"
            });
            continue;
        }
        const T = t.filter((S)=>!i.has(S) && s.get(S) !== "url_mismatch" && ww(S.serverUrl) === v);
        if (T.length === 0) {
            r.set(f, {
                row: f,
                reason: "no_local_match"
            });
            continue;
        }
        if (T.length > 1) {
            r.set(f, {
                row: f,
                reason: "ambiguous_url",
                candidates: T.map((S)=>S.identifier)
            });
            for (const S of T)s.set(S, "ambiguous_url");
            continue;
        }
        i.add(T[0]), n.set(f, {
            row: f,
            local: T[0],
            matchedBy: "url",
            rpcServerUrl: f.url
        });
    }
    const d = [], u = [];
    for (const f of e){
        const v = n.get(f);
        if (v) {
            d.push(v);
            continue;
        }
        const T = r.get(f);
        T && u.push(T);
    }
    const m = [];
    for (const f of t)i.has(f) || m.push({
        local: f,
        reason: s.get(f) ?? "no_row"
    });
    return {
        bindings: d,
        unboundRows: u,
        unboundLocals: m
    };
}
function hme(e) {
    if (e instanceof wt) return e.code === Be.PermissionDenied;
    if (!(e instanceof Error) || e.name !== "ConnectError") return !1;
    const t = e.code;
    return t === Be.PermissionDenied || t === "PermissionDenied";
}
function BKe(e) {
    return sxe(ae.fromString(e, {
        dontUseNodeBuffer: !0
    }), !1, !0);
}
function GKe({ key: e, profileId: t, isDefaultProfile: n }) {
    return !t || n ? e : `[profile:${BKe(t)}] ${e}`;
}
function $Ke(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function gme(e) {
    if (typeof e == "string") try {
        const t = JSON.parse(e);
        return $Ke(t) ? t : void 0;
    } catch  {
        return;
    }
}
function ND(e) {
    return typeof e == "string" && e.length > 0 ? e : void 0;
}
function fme(e) {
    return e.trim().length === 0 ? void 0 : VS(e);
}
function _me(e, t) {
    return {
        identifier: e.identifier,
        rowIdentifier: e.identifier,
        outcome: {
            kind: "kept",
            reason: "rpc_failed",
            detail: t
        }
    };
}
function jKe(e, t) {
    const n = fme(e);
    return n === void 0 ? [] : t.filter((r)=>fme(r.serverUrl) === n);
}
function vme(e) {
    const t = new Map;
    for (const n of e){
        if (n.placement !== Qc.SERVER || n.servedBy === $g.GROK) continue;
        const r = n.rowServerIdentifier || n.serverIdentifier;
        r.length > 0 && !t.has(r) && t.set(r, {
            identifier: r,
            rowServerIdentifier: r,
            serverIdentifier: n.serverIdentifier,
            url: n.url
        });
    }
    return [
        ...t.values()
    ];
}
function Tme(e, t) {
    return xKe(e, t);
}
function HKe(e) {
    const t = e.outcome;
    switch(t.case){
        case "migrated":
            return {
                kind: "migrated"
            };
        case "serverCopyKept":
            return {
                kind: "server_copy_kept"
            };
        case "invalidGrant":
            return {
                kind: "kept",
                reason: "invalid_grant",
                detail: t.value.detail
            };
        case "reuseDetected":
            return {
                kind: "kept",
                reason: "reuse_detected",
                detail: t.value.detail
            };
        case "providerError":
            return {
                kind: "kept",
                reason: "provider_error",
                detail: t.value.detail
            };
        case "rejectedGrokRow":
            return {
                kind: "kept",
                reason: "rejected_grok_row"
            };
        case "notImplemented":
            return {
                kind: "kept",
                reason: "not_implemented",
                detail: t.value.method
            };
        case "persistFailed":
            return {
                kind: "held",
                reason: "persist_failed",
                detail: t.value.detail,
                nextStep: "server_login"
            };
        case "rejectedClientPlaced":
            return {
                kind: "kept",
                reason: "rejected_client_placed"
            };
        default:
            return {
                kind: "kept",
                reason: "unknown_outcome",
                detail: t.case
            };
    }
}
function kme(e) {
    return e.trim().length === 0 ? void 0 : VS(e);
}
function qKe(e) {
    const { server: t, hold: n, row: r } = e;
    if (n.rowServerIdentifier !== void 0) return n.rowServerIdentifier === r.rowServerIdentifier ? "identifier" : void 0;
    if (t.identifier === r.rowServerIdentifier) return "identifier";
    if (r.canonicalUrl !== void 0 && kme(t.serverUrl) === r.canonicalUrl) return "url";
}
var Sme;
export { $Ke, BKe, GKe, HKe, ND, Sme, Tme, VS, _M, _me, b$e, fme, gme, hme, jKe, kme, qKe, sxe, vM, vme, ww, xKe };
var __wakaru_KKe_initialized = false;
export function KKe() {
if (__wakaru_KKe_initialized) return;
__wakaru_KKe_initialized = true;
"use strict";
h(), FKe(), _w(), mP(), ame(), Ka(), WKe(), z$(), VKe(), Sme = class {
    constructor(e, t, n, r){
        this.store = e, this.servers = t, this.toolClient = n, this.logService = r, this.holdWriteTail = Promise.resolve();
    }
    async migrateGrants(e) {
        const t = this.toolClient.connect();
        if (!t) return {
            kind: "no_access_token"
        };
        let n, r;
        try {
            const d = await t.client.listMcpTools(new vw({}), {
                headers: t.headers
            });
            r = d.servers, n = vme(d.servers);
        } catch (d) {
            if (!hme(d)) return {
                kind: "list_failed",
                detail: bt(d)
            };
            this.logService.info("[McpGrantMigration] ListMcpTools refused: hosted MCP is not enabled for this account; treating as an empty listing"), r = [], n = [];
        }
        const { bindings: s, unboundRows: i, unboundLocals: a } = Tme(n, e), o = await this.releaseStaleMigratedHolds(a.map((d)=>d.local), r), l = new Map;
        for (const d of i){
            const u = d.row.identifier;
            switch(d.reason){
                case "ambiguous_url":
                    this.logService.info(`[McpGrantMigration] row ${u}: ${d.candidates?.length ?? 0} local servers dial its URL (${d.candidates?.join(", ") ?? ""}); none is bound`), l.set(u, {
                        identifier: u,
                        rowIdentifier: u,
                        outcome: {
                            kind: "skipped",
                            reason: "ambiguous_url",
                            detail: d.candidates?.join(", ")
                        }
                    });
                    break;
                case "url_mismatch":
                    this.logService.warn(`[McpGrantMigration] row ${u}: the local server carrying its identifier dials a different URL; not migrated`), l.set(u, {
                        identifier: u,
                        rowIdentifier: u,
                        outcome: {
                            kind: "skipped",
                            reason: "url_mismatch"
                        }
                    });
                    break;
                case "row_has_no_url":
                    l.set(u, {
                        identifier: u,
                        rowIdentifier: u,
                        outcome: {
                            kind: "skipped",
                            reason: "server_not_found",
                            detail: "row has no URL"
                        }
                    });
                    break;
                case "no_local_match":
                    l.set(u, {
                        identifier: u,
                        rowIdentifier: u,
                        outcome: {
                            kind: "skipped",
                            reason: "server_not_found",
                            detail: "no IDE server dials the row URL"
                        }
                    });
                    break;
                case "duplicate_slot":
                    break;
            }
        }
        for (const d of s){
            const u = await this.migrateOne(d.local, d.row, d.rpcServerUrl, t);
            this.logService.info(`[McpGrantMigration] ${d.local.identifier} (row ${d.row.identifier}, by ${d.matchedBy}): ${u.kind}${"reason" in u ? ` (${u.reason})` : ""}${"stage" in u ? ` (${u.stage})` : ""}`), l.set(d.row.identifier, {
                identifier: d.local.identifier,
                rowIdentifier: d.row.identifier,
                matchedBy: d.matchedBy,
                outcome: u
            });
        }
        return {
            kind: "ran",
            results: [
                ...n.map((d)=>l.get(d.identifier)).filter((d)=>d !== void 0),
                ...o
            ]
        };
    }
    async migrateOne(e, t, n, r) {
        if (!e.processRouted) return {
            kind: "skipped",
            reason: "not_process_routed"
        };
        try {
            await this.servers.stopAndParkServer(e.oauthScope);
        } catch (a) {
            return {
                kind: "error",
                stage: "park",
                detail: bt(a)
            };
        }
        let s;
        try {
            s = await this.readLocalRecord(e);
        } catch (a) {
            return await this.release(e.oauthScope), {
                kind: "skipped",
                reason: "store_read_failed",
                detail: bt(a)
            };
        }
        if (!s.hasTokens) return await this.release(e.oauthScope), {
            kind: "skipped",
            reason: "no_local_record"
        };
        if (s.refreshToken === void 0) return await this.release(e.oauthScope), {
            kind: "skipped",
            reason: "no_refresh_token"
        };
        if (s.clientInformation === void 0) return await this.release(e.oauthScope), {
            kind: "skipped",
            reason: "no_client_information"
        };
        let i;
        try {
            const a = await r.client.migrateMcpOAuthGrant(new CD({
                serverUrl: n,
                refreshToken: s.refreshToken,
                clientInformation: s.clientInformation
            }), {
                headers: r.headers
            });
            i = HKe(a);
        } catch (a) {
            i = {
                kind: "kept",
                reason: "rpc_failed",
                detail: bt(a)
            };
        }
        if (i.kind === "migrated" || i.kind === "server_copy_kept") {
            try {
                await this.deleteLocalRecord(e);
            } catch (a) {
                return {
                    kind: "error",
                    stage: "delete_record",
                    detail: bt(a)
                };
            }
            try {
                await this.writeGrantHold(e, "migrated", t);
            } catch (a) {
                return {
                    kind: "error",
                    stage: "hold",
                    detail: `grant ${i.kind}; restart-proof park not written: ${bt(a)}`
                };
            }
            return i;
        }
        if (i.kind === "held") try {
            return await this.writeGrantHold(e, i.reason), i;
        } catch (a) {
            const o = bt(a);
            try {
                await this.deleteLocalRecord(e);
            } catch (l) {
                return {
                    kind: "error",
                    stage: "hold",
                    detail: `hold not written (${o}); record not deleted either: ${bt(l)}`,
                    nextStep: "server_login"
                };
            }
            return {
                kind: "error",
                stage: "hold",
                detail: `hold not written (${o}); local record deleted instead`,
                nextStep: "server_login"
            };
        }
        return await this.release(e.oauthScope), i;
    }
    async releaseStaleMigratedHolds(e, t) {
        const n = [];
        for (const r of e){
            let s;
            try {
                s = await this.readGrantHold(r);
            } catch (o) {
                this.logService.warn(`[McpGrantMigration] could not read the grant hold for ${r.identifier}: ${bt(o)}`);
                continue;
            }
            if (s?.reason !== "migrated") continue;
            if (s.rowServerIdentifier === void 0) {
                this.logService.warn(`[McpGrantMigration] ${r.identifier}: migrated hold names no backend row; kept`);
                continue;
            }
            const i = s.rowServerIdentifier;
            if (!t.filter((o)=>(o.rowServerIdentifier || o.serverIdentifier) === i).some((o)=>o.placement === Qc.SERVER)) {
                try {
                    await this.clearGrantHold(r);
                } catch (o) {
                    this.logService.warn(`[McpGrantMigration] could not clear the grant hold for ${r.identifier}: ${bt(o)}`);
                    continue;
                }
                await this.release(r.oauthScope), this.logService.info(`[McpGrantMigration] ${r.identifier}: row no longer server-placed; migrated hold released`), n.push({
                    identifier: r.identifier,
                    rowIdentifier: r.identifier,
                    outcome: {
                        kind: "released",
                        reason: "no_longer_server_placed"
                    }
                });
            }
        }
        return n;
    }
    serializeHoldWrite(e) {
        const t = this.holdWriteTail.then(e, e);
        return this.holdWriteTail = t.then(()=>{}, ()=>{}), t;
    }
    convertGrantHoldsAfterServerLogin(e, t) {
        return this.serializeHoldWrite(()=>this.doConvertGrantHoldsAfterServerLogin(e, t));
    }
    async doConvertGrantHoldsAfterServerLogin(e, t) {
        const n = [], r = [];
        for (const l of jKe(e, t)){
            let d;
            try {
                d = await this.readGrantHold(l);
            } catch (u) {
                this.logService.warn(`[McpGrantMigration] could not read the grant hold for ${l.identifier} after a server-side login: ${bt(u)}`), n.push({
                    identifier: l.identifier,
                    rowIdentifier: l.identifier,
                    outcome: {
                        kind: "error",
                        stage: "hold",
                        detail: `hold not read: ${bt(u)}`
                    }
                });
                continue;
            }
            d?.reason === "persist_failed" && r.push(l);
        }
        if (r.length === 0) return n;
        const s = this.toolClient.connect();
        if (!s) return [
            ...n,
            ...r.map((l)=>_me(l, "no usable access token; hold left as persist_failed"))
        ];
        let i;
        try {
            const l = await s.client.listMcpTools(new vw({}), {
                headers: s.headers
            });
            i = vme(l.servers);
        } catch (l) {
            if (!hme(l)) return [
                ...n,
                ...r.map((d)=>_me(d, `ListMcpTools failed: ${bt(l)}`))
            ];
            i = [];
        }
        const { bindings: a, unboundLocals: o } = Tme(i, r);
        for (const l of o)this.logService.info(`[McpGrantMigration] ${l.local.identifier}: server-side login completed but no server-placed row binds (${l.reason}); persist_failed hold kept`), n.push({
            identifier: l.local.identifier,
            rowIdentifier: l.local.identifier,
            outcome: {
                kind: "skipped",
                reason: l.reason === "no_row" ? "server_not_found" : l.reason
            }
        });
        for (const l of a){
            const d = l.local;
            try {
                await this.writeGrantHold(d, "migrated", l.row);
            } catch (u) {
                n.push({
                    identifier: d.identifier,
                    rowIdentifier: l.row.identifier,
                    matchedBy: l.matchedBy,
                    outcome: {
                        kind: "error",
                        stage: "hold",
                        detail: `migrated hold not written; record kept: ${bt(u)}`
                    }
                });
                continue;
            }
            try {
                await this.deleteLocalTokens(d);
            } catch (u) {
                n.push({
                    identifier: d.identifier,
                    rowIdentifier: l.row.identifier,
                    matchedBy: l.matchedBy,
                    outcome: {
                        kind: "error",
                        stage: "delete_record",
                        detail: `migrated hold written; record not deleted: ${bt(u)}`
                    }
                });
                continue;
            }
            this.logService.info(`[McpGrantMigration] ${d.identifier} (row ${l.row.identifier}, by ${l.matchedBy}): server-side login completed; persist_failed hold converted to migrated, park kept`), n.push({
                identifier: d.identifier,
                rowIdentifier: l.row.identifier,
                matchedBy: l.matchedBy,
                outcome: {
                    kind: "hold_converted",
                    from: "persist_failed",
                    to: "migrated"
                }
            });
        }
        return n;
    }
    releaseHoldsForRow(e, t) {
        return this.serializeHoldWrite(()=>this.doReleaseHoldsForRow(e, t));
    }
    async doReleaseHoldsForRow(e, t) {
        const n = kme(e.url), r = [];
        for (const s of t){
            let i;
            try {
                i = await this.readGrantHold(s);
            } catch (o) {
                this.logService.warn(`[McpGrantMigration] could not read the grant hold for ${s.identifier}: ${bt(o)}`);
                continue;
            }
            if (i === void 0) continue;
            const a = qKe({
                server: s,
                hold: i,
                row: {
                    rowServerIdentifier: e.rowServerIdentifier,
                    canonicalUrl: n
                }
            });
            if (a !== void 0) {
                try {
                    await this.clearGrantHold(s);
                } catch (o) {
                    this.logService.warn(`[McpGrantMigration] could not clear the grant hold for ${s.identifier}: ${bt(o)}`);
                    continue;
                }
                await this.release(s.oauthScope), this.logService.info(`[McpGrantMigration] ${s.identifier}: row ${e.rowServerIdentifier} reclassified to the client; ${i.reason} hold released (matched by ${a})`), r.push({
                    identifier: s.identifier,
                    rowIdentifier: e.rowServerIdentifier,
                    matchedBy: a,
                    outcome: {
                        kind: "released",
                        reason: "reclassified_to_client"
                    }
                });
            }
        }
        return r;
    }
    scopedKey(e, t) {
        return GKe({
            key: e,
            profileId: t.profileId,
            isDefaultProfile: t.isDefaultProfile
        });
    }
    async readLocalRecord(e) {
        const t = e.oauthScope, n = async (o)=>{
            const l = gme(await this.store.getSecret(this.scopedKey(_M({
                baseKey: o,
                identifier: t.identifier
            }), t)));
            return l !== void 0 ? l : gme(await this.store.getSecret(this.scopedKey(vM({
                baseKey: o,
                serverUrl: e.serverUrl
            }), t)));
        }, r = await n(Cr.TOKENS), s = await n(Cr.CLIENT_INFORMATION), i = ND(s?.client_id), a = Array.isArray(s?.redirect_uris) ? s.redirect_uris.filter((o)=>typeof o == "string") : [];
        return {
            hasTokens: r !== void 0,
            refreshToken: ND(r?.refresh_token),
            clientInformation: i === void 0 ? void 0 : new uP({
                clientId: i,
                clientSecret: ND(s?.client_secret),
                redirectUris: a
            })
        };
    }
    async deleteLocalRecord(e) {
        await this.servers.clearAllTokens(e.oauthScope);
        for (const t of [
            Cr.TOKENS,
            Cr.CLIENT_INFORMATION
        ])await this.store.deleteSecret(this.scopedKey(vM({
            baseKey: t,
            serverUrl: e.serverUrl
        }), e.oauthScope));
    }
    async deleteLocalTokens(e) {
        const t = e.oauthScope;
        for (const n of [
            Cr.TOKENS,
            Cr.CLIENT_INFORMATION,
            Cr.CODE_VERIFIER
        ])await this.store.deleteSecret(this.scopedKey(_M({
            baseKey: n,
            identifier: t.identifier
        }), t));
        for (const n of [
            Cr.TOKENS,
            Cr.CLIENT_INFORMATION
        ])await this.store.deleteSecret(this.scopedKey(vM({
            baseKey: n,
            serverUrl: e.serverUrl
        }), t));
    }
    holdKey(e) {
        return this.scopedKey(_M({
            baseKey: Cr.GRANT_HOLD,
            identifier: e.oauthScope.identifier
        }), e.oauthScope);
    }
    async writeGrantHold(e, t, n) {
        const r = n === void 0 ? {
            reason: t,
            heldAtMs: Date.now()
        } : {
            reason: t,
            heldAtMs: Date.now(),
            rowServerIdentifier: n.rowServerIdentifier,
            rowIdentifier: n.identifier
        };
        if (await this.store.updateGlobalState(this.holdKey(e), r), (await this.store.getGlobalState(this.holdKey(e)))?.reason !== t) throw new Error("grant hold marker not readable after write");
    }
    async readGrantHold(e) {
        const t = await this.store.getGlobalState(this.holdKey(e));
        return t && typeof t.reason == "string" ? t : void 0;
    }
    async clearGrantHold(e) {
        await this.store.updateGlobalState(this.holdKey(e), void 0);
    }
    async release(e) {
        try {
            await this.servers.releaseParkedServer(e);
        } catch (t) {
            this.logService.warn(`[McpGrantMigration] failed to release ${e.identifier}: ${bt(t)}`);
        }
    }
};

}
