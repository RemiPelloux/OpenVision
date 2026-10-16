require.d(exports, {
    SJ: ()=>gt,
    LD: ()=>ft,
    createAgentHostExec: ()=>rt,
    l_: ()=>wt,
    Qm: ()=>nt,
    xD: ()=>ht,
    Tr: ()=>vt,
    xX: ()=>k,
    N7: ()=>Ce
});
var s = require(91105), n = require(37949), i = require(55677), o = require(32180), a = require("./module-42862.js"), c = require(36038), l = require(77598), u = require(72187), d = require(33002), h = require(51108), p = require(84959), f = require(92801);
class g extends Error {
    constructor(e){
        super(`MCP server "${e.serverIdentifier}" requires authentication. Call mcp_auth for this server to authorize it, then retry.` + (e.detail ? ` (${e.detail})` : "")), this.name = "PlacementRoutingNeedsAuthError", this.serverIdentifier = e.serverIdentifier, this.servedBy = e.servedBy, this.detail = e.detail;
    }
}
function m(e) {
    return e instanceof Error && "PlacementRoutingNeedsAuthError" === e.name;
}
class v extends Error {
    constructor(e){
        const t = function(e) {
            switch(e){
                case a.wt.DNS:
                    return "dns";
                case a.wt.CONNECTION_REFUSED:
                    return "connection refused";
                case a.wt.TLS:
                    return "tls";
                case a.wt.TIMEOUT:
                    return "timeout";
                case a.wt.HTTP_5XX:
                    return "http 5xx";
                case a.wt.OTHER:
                case a.wt.UNSPECIFIED:
                    return "other";
                default:
                    return "unknown";
            }
        }(e.notReachable.reason);
        super(`MCP server "${e.serverIdentifier}" is not reachable from the Cursor backend (${t})` + (e.notReachable.detail ? `: ${e.notReachable.detail}` : "") + ". It can be reclassified as client-placed in MCP settings."), this.name = "PlacementRoutingNotReachableError", this.serverIdentifier = e.serverIdentifier, this.reason = e.notReachable.reason, this.detail = e.notReachable.detail;
    }
}
function w(e) {
    return e instanceof Error && "PlacementRoutingNotReachableError" === e.name;
}
class y extends Error {
    constructor(e){
        super(`MCP server "${e.serverIdentifier}" is not dialed by the Cursor backend (placement ${a.MC[e.notDialed.placement] ?? "UNSPECIFIED"})` + (e.notDialed.detail ? `: ${e.notDialed.detail}` : "")), this.name = "PlacementRoutingNotDialedError", this.serverIdentifier = e.serverIdentifier, this.placement = e.notDialed.placement, this.detail = e.notDialed.detail;
    }
}
const S = (0, n.h)("placement-routing-mcp:call");
function I(e) {
    return (0, l.createHash)("sha256").update(e).digest("hex").slice(0, 16);
}
const C = (0, d.cF)(Symbol.for("cursor.agentStreamMetadata"), void 0);
function P(e) {
    const t = e.get(C)?.conversationId;
    return "string" == typeof t ? t : "";
}
function k(e = a.G1.UNSPECIFIED) {
    return (t)=>"managed-local" === (0, u.LQ)(t) ? a.G1.AGENT_HOST_LOCAL_LOOP : e;
}
const M = k();
function E(e, t) {
    return void 0 === e ? M(t) : "function" == typeof e ? e(t) : e;
}
function _(e) {
    return m(e) ? "needs_auth" : w(e) ? "not_reachable" : e instanceof i.U$ ? "tool_not_found" : e instanceof i.bm ? "server_not_found" : e instanceof f.T ? function(e) {
        switch(e.code){
            case p.C.Unavailable:
                return "unavailable";
            case p.C.ResourceExhausted:
                return "rate_limited";
            case p.C.Unauthenticated:
                return "unauthenticated";
            case p.C.PermissionDenied:
                return "forbidden";
            case p.C.InvalidArgument:
                return "bad_request";
            case p.C.Canceled:
            case p.C.Aborted:
            case p.C.DeadlineExceeded:
                return "aborted";
            default:
                return "error";
        }
    }(e) : "error";
}
function b(e) {
    return !0 === e.isError ? "tool_error" : "success";
}
function R(e) {
    return (0, h.HHu)(e.url);
}
function q(e) {
    const t = e?.config;
    return void 0 === t ? "unknown" : "url" in t ? (0, h.HHu)(t.url) : "stdio";
}
function A(e) {
    switch(e.outcome.case){
        case "result":
            return function(e) {
                switch(e.result.case){
                    case "success":
                    case "approved":
                        return "none";
                    case "error":
                        return !0 === e.result.value.needsAuth ? "server_needs_auth" : (0, h.vdi)(e.result.value.error) ? "server_timeout" : "server_error";
                    case "rejected":
                        return "server_rejected";
                    case "permissionDenied":
                        return "server_permission_denied";
                    case "toolNotFound":
                        return "server_tool_not_found";
                    case "serverNotFound":
                        return "server_row_not_found";
                    case void 0:
                        return "server_empty_outcome";
                    default:
                        return "server_unknown_outcome";
                }
            }(e.outcome.value);
        case "needsAuth":
            return "server_needs_auth";
        case "notReachable":
            return "server_not_reachable";
        case "notRoutable":
            return "server_not_routable";
        case "notDialed":
            return "server_not_dialed";
        case void 0:
            return "server_empty_outcome";
        default:
            return "server_unknown_outcome";
    }
}
function J(e) {
    return e instanceof f.T ? function(e) {
        switch(e){
            case p.C.Canceled:
                return "connect_canceled";
            case p.C.Unknown:
                return "connect_unknown";
            case p.C.InvalidArgument:
                return "connect_invalid_argument";
            case p.C.DeadlineExceeded:
                return "connect_deadline_exceeded";
            case p.C.NotFound:
                return "connect_not_found";
            case p.C.AlreadyExists:
                return "connect_already_exists";
            case p.C.PermissionDenied:
                return "connect_permission_denied";
            case p.C.ResourceExhausted:
                return "connect_resource_exhausted";
            case p.C.FailedPrecondition:
                return "connect_failed_precondition";
            case p.C.Aborted:
                return "connect_aborted";
            case p.C.OutOfRange:
                return "connect_out_of_range";
            case p.C.Unimplemented:
                return "connect_unimplemented";
            case p.C.Internal:
                return "connect_internal";
            case p.C.Unavailable:
                return "connect_unavailable";
            case p.C.DataLoss:
                return "connect_data_loss";
            case p.C.Unauthenticated:
                return "connect_unauthenticated";
            default:
                return "connect_other";
        }
    }(e.code) : m(e) ? "needs_auth" : w(e) ? "not_reachable" : e instanceof i.U$ ? "tool_not_found" : e instanceof i.bm ? "server_not_found" : e instanceof Error ? "AbortError" === e.name ? "abort" : (0, h.vdi)(e.message) ? "timeout" : "exception" : "exception";
}
function T(e) {
    const t = function(e) {
        switch(e){
            case a.G1.IDE:
                return "ide";
            case a.G1.GLASS:
                return "glass";
            case a.G1.AGENT_HOST_LOCAL_LOOP:
                return "agent_host_local_loop";
            case a.G1.UNSPECIFIED:
                return "unspecified";
            default:
                return "unknown";
        }
    }(e.caller), r = Math.round(e.durationMs);
    if ("server" === e.placement && S.info(e.ctx, "Routed MCP tool call", {
        toolCallId: e.toolCallId,
        conversationId: e.conversationId,
        ...void 0 === e.requestId ? {} : {
            requestId: e.requestId
        },
        serverIdentifierHash: I(e.serverIdentifier),
        providerHost: e.providerHost,
        callerKind: t,
        outcome: e.outcome,
        reason: e.reason,
        durationMs: r,
        elicitationCount: e.elicitationCount
    }), void 0 !== e.metrics) try {
        e.metrics.distribution({
            stat: "mcp_tool.client_call.duration_ms",
            value: r,
            tags: {
                placement: e.placement,
                outcome: e.outcome,
                reason: e.reason,
                caller_kind: t,
                provider_host: e.providerHost
            }
        });
    } catch (t) {
        S.warn(e.ctx, "MCP client call metrics sink threw", {
            error: t
        });
    }
}
const D = (0, n.h)("placement-routing-mcp:call"), N = {
    type: "object",
    properties: {}
};
function x(e) {
    if (0 === e.length) return N;
    try {
        const t = JSON.parse(e);
        if (null === t || "object" != typeof t || Array.isArray(t)) return N;
        const r = t, s = r.properties;
        return {
            type: "object",
            properties: null === s || "object" != typeof s || Array.isArray(s) ? {} : s,
            ...Array.isArray(r.required) && r.required.every((e)=>"string" == typeof e) ? {
                required: r.required
            } : {}
        };
    } catch  {
        return N;
    }
}
function L(e) {
    switch(e){
        case "accept":
            return a.M.ACCEPT;
        case "decline":
            return a.M.DECLINE;
        case "cancel":
            return a.M.CANCEL;
    }
}
async function B(e) {
    let t;
    if (void 0 === e.elicitationProvider) t = new a.vG({
        action: a.M.CANCEL
    });
    else try {
        const r = await e.elicitationProvider.elicit({
            message: e.request.message,
            requestedSchema: x(e.request.requestedSchemaJson)
        }, {
            signal: e.signal
        });
        t = new a.vG({
            action: L(r.action),
            content: "accept" === r.action && void 0 !== r.content ? c.Struct.fromJson(r.content) : void 0
        });
    } catch (r) {
        D.warn(e.ctx, "MCP elicitation provider failed; cancelling", {
            toolCallId: e.toolCallId,
            requestId: e.request.requestId,
            error: r
        }), t = new a.vG({
            action: a.M.CANCEL
        });
    }
    if (e.signal.aborted) D.debug(e.ctx, "Dropping elicitation answer for a closed form", {
        toolCallId: e.toolCallId,
        requestId: e.request.requestId
    });
    else try {
        await e.client.respondToMcpElicitation(new a.Rb({
            toolCallId: e.toolCallId,
            requestId: e.request.requestId,
            response: t
        }));
    } catch (t) {
        D.warn(e.ctx, "RespondToMcpElicitation failed", {
            toolCallId: e.toolCallId,
            requestId: e.request.requestId,
            error: t
        });
    }
}
function U(e) {
    const t = [];
    for (const r of e.content)switch(r.content.case){
        case "text":
            {
                const { text: e, outputLocation: s } = r.content.value;
                t.push({
                    type: "text",
                    text: void 0 !== s && 0 === e.length ? `[output of ${s.sizeBytes} bytes exceeded the inline limit and was not returned]` : e
                });
                break;
            }
        case "image":
            t.push({
                type: "image",
                data: Buffer.from(r.content.value.data).toString("base64"),
                mimeType: r.content.value.mimeType || void 0
            });
    }
    return t;
}
function F(e, t) {
    switch(t.outcome.case){
        case "result":
            return function(e, t) {
                switch(t.result.case){
                    case "success":
                        return {
                            content: U(t.result.value),
                            isError: t.result.value.isError,
                            structuredContent: void 0 !== t.result.value.structuredContent ? t.result.value.structuredContent.toJson() : void 0
                        };
                    case "approved":
                        return {
                            content: [],
                            isError: !1
                        };
                    case "error":
                        if (!0 === t.result.value.needsAuth) throw new g({
                            serverIdentifier: e,
                            servedBy: o.JLr.CURSOR,
                            detail: t.result.value.error
                        });
                        throw new Error(t.result.value.error);
                    case "rejected":
                        throw new Error(t.result.value.reason ? `Tool rejected: ${t.result.value.reason}` : "Tool rejected");
                    case "permissionDenied":
                        throw new Error(`Permission denied: ${t.result.value.error}`);
                    case "toolNotFound":
                        throw new i.U$(t.result.value.name, [
                            ...t.result.value.availableTools
                        ]);
                    case "serverNotFound":
                        throw new i.bm(t.result.value.name, [
                            ...t.result.value.availableServers
                        ]);
                    case void 0:
                        throw new Error(`CallMcpTool returned an empty result for MCP server "${e}"`);
                }
            }(e, t.outcome.value);
        case "needsAuth":
            throw new g({
                serverIdentifier: e,
                servedBy: t.outcome.value.servedBy,
                detail: t.outcome.value.detail
            });
        case "notReachable":
            throw new v({
                serverIdentifier: e,
                notReachable: t.outcome.value
            });
        case "notRoutable":
            throw new Error(`MCP server "${e}" is served by a backend this service cannot execute against` + (t.outcome.value.detail ? `: ${t.outcome.value.detail}` : ""));
        case "notDialed":
            throw new y({
                serverIdentifier: e,
                notDialed: t.outcome.value
            });
        case void 0:
            throw new Error(`CallMcpTool returned an empty outcome for MCP server "${e}"`);
    }
}
var O = require(50768);
function $(e) {
    return 0 === e.trim().length ? void 0 : (0, O.Yl)(e);
}
var j = require(24513);
const W = (0, n.h)("placement-routing-mcp:grant-migration");
function G(e, t) {
    const r = t.map((e)=>({
            identifier: e.serverIdentifier,
            serverUrl: e.serverUrl,
            ref: e
        })), s = function(e, t) {
        const r = new Map, s = new Map, n = new Map, i = new Set, o = [], a = new Map;
        for (const t of e){
            const e = t.rowServerIdentifier || t.serverIdentifier, r = a.get(e);
            (void 0 === r || r.serverIdentifier !== e && t.serverIdentifier === e) && a.set(e, t);
        }
        const c = [];
        for (const t of e)a.get(t.rowServerIdentifier || t.serverIdentifier) === t ? c.push(t) : s.set(t, {
            row: t,
            reason: "duplicate_slot"
        });
        for (const e of c){
            const a = t.filter((t)=>!(i.has(t) || n.has(t) || t.identifier !== e.rowServerIdentifier && t.identifier !== e.serverIdentifier));
            if (0 === a.length) {
                o.push(e);
                continue;
            }
            const c = $(e.url), l = void 0 === c ? [] : a.filter((e)=>$(e.serverUrl) === c);
            if (0 === l.length) {
                s.set(e, {
                    row: e,
                    reason: "url_mismatch"
                });
                for (const e of a)n.set(e, "url_mismatch");
                continue;
            }
            const u = l[0];
            i.add(u), r.set(e, {
                row: e,
                local: u,
                matchedBy: "identifier",
                rpcServerUrl: e.url
            });
        }
        for (const e of o){
            const o = $(e.url);
            if (void 0 === o) {
                s.set(e, {
                    row: e,
                    reason: "row_has_no_url"
                });
                continue;
            }
            const a = t.filter((e)=>!i.has(e) && "url_mismatch" !== n.get(e) && $(e.serverUrl) === o);
            if (0 !== a.length) if (a.length > 1) {
                s.set(e, {
                    row: e,
                    reason: "ambiguous_url",
                    candidates: a.map((e)=>e.identifier)
                });
                for (const e of a)n.set(e, "ambiguous_url");
            } else i.add(a[0]), r.set(e, {
                row: e,
                local: a[0],
                matchedBy: "url",
                rpcServerUrl: e.url
            });
            else s.set(e, {
                row: e,
                reason: "no_local_match"
            });
        }
        const l = [], u = [];
        for (const t of e){
            const e = r.get(t);
            if (e) {
                l.push(e);
                continue;
            }
            const n = s.get(t);
            n && u.push(n);
        }
        const d = [];
        for (const e of t)i.has(e) || d.push({
            local: e,
            reason: n.get(e) ?? "no_row"
        });
        return {
            bindings: l,
            unboundRows: u,
            unboundLocals: d
        };
    }(e.map((e)=>({
            serverIdentifier: e.serverIdentifier,
            rowServerIdentifier: e.rowServerIdentifier,
            url: e.url ?? "",
            row: e
        })), r), n = new Map;
    for (const e of s.bindings)n.set(e.local.ref, {
        row: e.row.row
    });
    for (const e of s.unboundLocals)n.set(e.local.ref, {
        skipped: "no_row" === e.reason ? "not_server_placed" : e.reason
    });
    return n;
}
async function K(e, t, r) {
    if (e.exhausted?.has(t.authStorageKey)) return {
        kind: "skipped",
        reason: "already_attempted"
    };
    try {
        await e.disconnect(t);
    } catch (e) {
        return {
            kind: "disconnect_failed",
            error: e
        };
    }
    if (!1 === e.stillServerPlaced?.(r)) return {
        kind: "skipped",
        reason: "not_server_placed"
    };
    const s = await e.store.loadTokens(t.authStorageKey), n = s?.refresh_token;
    if (void 0 === n || 0 === n.length) return {
        kind: "skipped",
        reason: "no_refresh_token"
    };
    const i = await e.store.loadClientInformation(t.authStorageKey);
    if (void 0 === i) return {
        kind: "skipped",
        reason: "no_client_information"
    };
    let o;
    try {
        o = await e.client.migrateMcpOAuthGrant(new a.ev({
            serverUrl: r.url,
            refreshToken: n,
            clientInformation: new j.Im({
                clientId: i.client_id,
                clientSecret: i.client_secret,
                redirectUris: [
                    ...i.redirect_uris ?? []
                ]
            })
        }));
    } catch (e) {
        return {
            kind: "rpc_failed",
            error: e
        };
    }
    switch(o.outcome.case){
        case "migrated":
            return await e.store.deleteCredentials(t.authStorageKey), {
                kind: "migrated"
            };
        case "serverCopyKept":
            return await e.store.deleteCredentials(t.authStorageKey), {
                kind: "server_copy_kept"
            };
        default:
            {
                const r = function(e) {
                    const t = e.outcome;
                    switch(t.case){
                        case "invalidGrant":
                            return {
                                kind: "kept",
                                reason: "invalid_grant",
                                detail: t.value.detail,
                                retryable: !1
                            };
                        case "reuseDetected":
                            return {
                                kind: "kept",
                                reason: "reuse_detected",
                                detail: t.value.detail,
                                retryable: !1
                            };
                        case "providerError":
                            return {
                                kind: "kept",
                                reason: "provider_error",
                                detail: t.value.detail,
                                retryable: !0
                            };
                        case "rejectedGrokRow":
                            return {
                                kind: "kept",
                                reason: "rejected_grok_row",
                                detail: "",
                                retryable: !1
                            };
                        case "notImplemented":
                            return {
                                kind: "kept",
                                reason: "not_implemented",
                                detail: t.value.method,
                                retryable: !0
                            };
                        case "persistFailed":
                            return {
                                kind: "kept",
                                reason: "persist_failed",
                                detail: t.value.detail,
                                retryable: !1
                            };
                        case "rejectedClientPlaced":
                            return {
                                kind: "kept",
                                reason: "rejected_client_placed",
                                detail: "",
                                retryable: !0
                            };
                        default:
                            return {
                                kind: "kept",
                                reason: "unknown_outcome",
                                detail: t.case ?? "",
                                retryable: !0
                            };
                    }
                }(o);
                return r.retryable || e.exhausted?.add(t.authStorageKey), r;
            }
    }
}
var H = require(9639), z = require(34175);
const Q = {
    typeName: "aiserver.v1.McpToolService",
    methods: {
        listMcpTools: {
            name: "ListMcpTools",
            I: a.DY,
            O: a.Hl,
            kind: c.MethodKind.Unary
        },
        callMcpTool: {
            name: "CallMcpTool",
            I: a.aB,
            O: a.Gv,
            kind: c.MethodKind.ServerStreaming
        },
        respondToMcpElicitation: {
            name: "RespondToMcpElicitation",
            I: a.Rb,
            O: a.Zm,
            kind: c.MethodKind.Unary
        },
        migrateMcpOAuthGrant: {
            name: "MigrateMcpOAuthGrant",
            I: a.ev,
            O: a.s6,
            kind: c.MethodKind.Unary
        },
        setMcpServerPlacement: {
            name: "SetMcpServerPlacement",
            I: a.I,
            O: a.wC,
            kind: c.MethodKind.Unary
        }
    }
};
var V = require(46421);
const X = "mcp_auth";
function Y(e) {
    return {
        clientKey: e.serverIdentifier,
        providerIdentifier: e.serverName,
        ...void 0 === e.plugin ? {} : {
            plugin: e.plugin
        },
        ...void 0 === e.marketplace ? {} : {
            marketplace: e.marketplace
        },
        ...void 0 === e.pluginId ? {} : {
            pluginId: e.pluginId
        },
        ...void 0 === e.marketplaceId ? {} : {
            marketplaceId: e.marketplaceId
        },
        toolName: X,
        name: (t = e.serverIdentifier, `${t}-${X}`),
        description: "Authenticate this MCP server. Call it with empty arguments when the server reports needsAuth or a tool call fails with an authentication error, then retry the original request.",
        inputSchema: {
            type: "object",
            properties: {},
            additionalProperties: !1
        }
    };
    var t;
}
function Z(e) {
    return e.toolName === X;
}
const ee = "default", te = {
    rows: new Map,
    serverPlacedIdentifiers: new Set,
    serverPlacedUrls: new Set
};
function re(e) {
    if (void 0 !== e && 0 !== e.trim().length) return (0, h.Yl9)(e);
}
function se(e) {
    switch(e){
        case "connected":
        case "needsAuth":
        case "error":
        case "loading":
            return e;
        default:
            return "loading";
    }
}
function ne(e) {
    if (void 0 !== e && 0 !== e.length) try {
        const t = JSON.parse(e);
        return null === t || "object" != typeof t || Array.isArray(t) ? void 0 : t;
    } catch  {
        return;
    }
}
function ie(e) {
    return void 0 === e || 0 === e.length ? void 0 : e;
}
function oe(e) {
    const t = function(e) {
        const t = ie(e.plugin), r = ie(e.marketplace), s = ie(e.pluginDbId), n = ie(e.marketplaceId);
        return {
            ...void 0 === t ? {} : {
                plugin: t
            },
            ...void 0 === r ? {} : {
                marketplace: r
            },
            ...void 0 === s ? {} : {
                pluginId: s
            },
            ...void 0 === n ? {} : {
                marketplaceId: n
            }
        };
    }(e), r = function(e) {
        return ie(e.displayName) ?? e.tools.find((e)=>e.providerIdentifier.length > 0)?.providerIdentifier ?? e.serverIdentifier;
    }(e), s = e.tools.map((s)=>(function(e, t, r, s) {
            const n = r.toolName || r.name;
            return {
                clientKey: e.serverIdentifier,
                providerIdentifier: t,
                ...s,
                toolName: n,
                name: r.name || `${e.serverIdentifier}-${n}`,
                description: r.description || void 0,
                inputSchema: (0, H.Hvh)(r),
                outputSchema: (0, H.mku)(r.outputSchemaJson),
                annotations: ne(r.annotationsJson)
            };
        })(e, r, s, t));
    return {
        serverIdentifier: e.serverIdentifier,
        rowServerIdentifier: e.rowServerIdentifier || e.serverIdentifier,
        serverName: r,
        accountLabel: e.accountLabel || ee,
        url: e.url,
        normalizedUrl: re(e.url),
        servedBy: e.servedBy,
        status: se(e.status),
        tools: s,
        instructions: ie(e.instructions),
        plugin: t
    };
}
function ae(e) {
    return "needsAuth" === e.status ? void 0 : e.instructions;
}
function ce(e, t) {
    if (e.serverPlacedIdentifiers.has(t.identifier) || void 0 !== t.authStorageKey && e.serverPlacedIdentifiers.has(t.authStorageKey)) return !0;
    const r = re(t.url);
    return void 0 !== r && e.serverPlacedUrls.has(r);
}
function le(e, t, r) {
    const s = e.rows.get(t);
    if (void 0 === s || s.status === r) return e;
    const n = new Map(e.rows);
    return n.set(t, {
        ...s,
        status: r,
        tools: "needsAuth" === r ? [] : s.tools
    }), {
        rows: n,
        serverPlacedIdentifiers: e.serverPlacedIdentifiers,
        serverPlacedUrls: e.serverPlacedUrls
    };
}
function ue(e, t) {
    if (void 0 === e.rows.get(t)) return e;
    const r = new Map(e.rows);
    r.delete(t);
    const s = new Set, n = new Set;
    for (const e of r.values())s.add(e.serverIdentifier), s.add(e.rowServerIdentifier), void 0 !== e.normalizedUrl && n.add(e.normalizedUrl);
    return {
        rows: r,
        serverPlacedIdentifiers: s,
        serverPlacedUrls: n
    };
}
function de(e) {
    switch(e){
        case "connected":
            return "connected";
        case "needsAuth":
            return "needsAuth";
        case "error":
            return "error";
        case "loading":
            return "initializing";
    }
}
function he(e) {
    const t = [
        ...e.serverPlacedIdentifiers
    ].sort(), r = [
        ...e.serverPlacedUrls
    ].sort();
    return `${t.join("\0")}|${r.join("\0")}`;
}
class pe {
    constructor(e, t){
        this.row = e, this.callTool_ = t, this.config = void 0, this.serverName = e.serverName, this.plugin = e.plugin.plugin, this.marketplace = e.plugin.marketplace, this.pluginId = e.plugin.pluginId, this.marketplaceId = e.plugin.marketplaceId;
    }
    async getTools(e) {
        return this.row.tools.map((e)=>({
                name: e.toolName,
                description: e.description,
                inputSchema: e.inputSchema,
                outputSchema: e.outputSchema,
                title: e.title,
                annotations: e.annotations,
                _meta: e._meta
            }));
    }
    callTool(e, t, r, s, n) {
        const o = this.row.tools.find((e)=>e.toolName === t || e.name === t);
        return void 0 === o ? Promise.reject(new i.U$(t, this.row.tools.map((e)=>e.toolName))) : this.callTool_(e, this.row, o.name, r, s, n);
    }
    async getInstructions(e) {
        return ae(this.row);
    }
    async getState(e) {
        switch(this.row.status){
            case "connected":
                return {
                    kind: "ready"
                };
            case "needsAuth":
                return {
                    kind: "requires_authentication",
                    url: "",
                    callback: async ()=>{}
                };
            case "error":
                return {
                    kind: "error"
                };
            case "loading":
                return {
                    kind: "loading"
                };
        }
    }
    async listResources(e) {
        return {
            resources: []
        };
    }
    async readResource(e, t) {
        throw new Error(`Resource ${t.uri} is unavailable: server-placed MCP server "${this.row.serverIdentifier}" exposes tools only`);
    }
    async listPrompts(e) {
        return [];
    }
    async getPrompt(e, t, r) {
        throw new Error(`Prompt ${t} is unavailable: server-placed MCP server "${this.row.serverIdentifier}" exposes tools only`);
    }
}
class fe {
    constructor(e, t){
        this.message = t, this.config = void 0, this.serverName = e;
    }
    async getTools(e) {
        return [];
    }
    async callTool() {
        throw new Error(this.message);
    }
    async getInstructions(e) {}
    async getState(e) {
        return {
            kind: "error",
            message: this.message
        };
    }
    async listResources(e) {
        return {
            resources: []
        };
    }
    async readResource() {
        throw new Error(this.message);
    }
    async listPrompts(e) {
        return [];
    }
    async getPrompt() {
        throw new Error(this.message);
    }
}
const ge = (0, n.h)("placement-routing-mcp");
function me(e) {
    return JSON.stringify([
        e.status,
        e.instructions ?? null,
        [
            e.plugin.plugin ?? null,
            e.plugin.marketplace ?? null,
            e.plugin.pluginId ?? null,
            e.plugin.marketplaceId ?? null
        ],
        e.tools.map((e)=>[
                e.name,
                e.toolName,
                e.providerIdentifier,
                e.title ?? null,
                e.description ?? null,
                e.inputSchema ?? null,
                e.outputSchema ?? null,
                e.annotations ?? null
            ])
    ]);
}
class ve {
    constructor(e){
        this.options = e, this.listeners = new Set, this.waitCapLogged = !1, this.disposeCtx = (0, d.q6)(), this.snapshot = te, this.listingSeq = 0, this.appliedSeq = 0, this.pendingWaits = new Set, this.needsAuthMarks = new Map, this.needsAuthStreak = 0, this.needsAuthRowsKey = "", this.droppedRowMarks = new Map, this.withheldDefinitions = new Map, this.lastExcludedWrappedKeys = new Set, this.wrappedInputsSeq = 0, this.serializedTail = Promise.resolve(), this.loggedCollisions = new Set, this.pendingEvents = [], this.notifyScheduled = !1, this.disposed = !1, this.exhaustedGrantKeys = new Set, this.replacedLeases = [], this.client = e.client ?? (void 0 !== e.transport ? (0, V.UU)(Q, e.transport) : void 0), this.listingTtlMs = e.listingTtlMs ?? 3e4, this.listingRetryMs = e.listingRetryMs ?? 5e3, this.listingWaitCapMs = e.listingWaitCapMs, this.serveLastListingOnTtl = !0 === e.serveLastListingOnTtl, this.serveLastListingOnChange = !0 === e.serveLastListingOnChange, this.listingRefusedTtlMs = e.listingRefusedTtlMs ?? 3e5, this.needsAuthBackoffMaxMs = e.needsAuthBackoffMaxMs ?? 3e5, this.now = e.now ?? (()=>Date.now()), this.scheduleTimeout = e.scheduleTimeout ?? ((e, t)=>{
            const r = setTimeout(e, t);
            return ()=>clearTimeout(r);
        });
    }
    getPlacementSnapshot() {
        return this.snapshot;
    }
    isPlacementKnown() {
        return void 0 === this.client || void 0 !== this.snapshotAt;
    }
    getListingError() {
        return this.listingError;
    }
    isServerPlaced(e) {
        return this.snapshot.serverPlacedIdentifiers.has(e);
    }
    async refreshPlacements(e) {
        this.resetNeedsAuthBackoff(), await this.ensureSnapshot(e, !0);
        const { snapshot: t } = await this.ensureWrappedLease(e);
        return t;
    }
    noteGrantChanged(e, t) {
        this.disposed || (this.needsAuthMarks.delete(t), this.markListingStale(), this.grantChangedSinceSeq = this.listingSeq, this.invalidateListing(e));
    }
    async mergeSnapshots(e, t) {
        const { snapshot: r, lease: s } = await this.resolve(e), n = this.excludedWrappedKeys(r, await this.wrappedClients(e, s));
        return this.lastExcludedWrappedKeys = n, [
            ...t.filter((e)=>!n.has(e.serverIdentifier)),
            ...[
                ...r.rows.values()
            ].map((e)=>(function(e, t) {
                    return {
                        serverIdentifier: e.serverIdentifier,
                        serverName: e.serverName,
                        ...e.plugin,
                        status: de(e.status),
                        tools: ("needsAuth" === e.status ? [] : e.tools).map((e)=>({
                                name: e.toolName,
                                description: e.description,
                                inputSchema: e.inputSchema,
                                outputSchema: e.outputSchema,
                                title: e.title,
                                annotations: e.annotations,
                                _meta: e._meta
                            })),
                        resources: [],
                        prompts: [],
                        instructions: ae(e),
                        snapshotGeneration: t
                    };
                })(e, this.appliedSeq))
        ];
    }
    async migrateGrantsForServerPlaced(e) {
        return await this.resolve(e), this.pendingGrantMigration() ?? this.runGrantMigration(e);
    }
    pendingGrantMigration() {
        return this.grantMigrationLatest;
    }
    async getTools(e) {
        const { snapshot: t, lease: r } = await this.resolve(e);
        return (await this.buildCatalog(e, t, r)).tools;
    }
    async buildCatalog(e, t, r) {
        const s = await this.wrappedClients(e, r), n = this.excludedWrappedKeys(t, s);
        this.lastExcludedWrappedKeys = n;
        const i = (await r.getTools(e)).filter((e)=>!n.has(e.clientKey)), o = await this.wrappedNeedsAuthTools(e, s, n, i), a = new Map, c = (e, t)=>{
            const r = a.get(e.name);
            if (void 0 === r) return void a.set(e.name, t);
            const s = "ambiguous" === r.kind ? r.tools : [
                r.tool
            ];
            a.set(e.name, {
                kind: "ambiguous",
                tools: [
                    ...s,
                    e
                ]
            });
        };
        for (const e of [
            ...i,
            ...o
        ])c(e, {
            kind: "wrapped",
            tool: e,
            providerHost: q(s[e.clientKey])
        });
        const l = [];
        for (const e of t.rows.values()){
            const t = "needsAuth" === e.status ? [
                Y({
                    serverIdentifier: e.serverIdentifier,
                    serverName: e.serverName,
                    ...e.plugin
                })
            ] : e.tools;
            for (const r of t)l.push(r), c(r, {
                kind: "server",
                row: e,
                tool: r
            });
        }
        const u = new Set;
        for (const [t, r] of a){
            if ("ambiguous" !== r.kind) continue;
            u.add(t);
            const s = r.tools.map((e)=>e.clientKey).sort(), n = `${t}\0${s.join("\0")}`;
            this.loggedCollisions.has(n) || (this.loggedCollisions.add(n), ge.warn(e, "MCP tool name bound on more than one side; withholding it and failing closed on calls", {
                name: t,
                servers: s
            }));
        }
        return {
            tools: [
                ...i,
                ...o,
                ...l
            ].filter((e)=>!u.has(e.name)),
            bindings: a
        };
    }
    async getToolsForServers(e, t) {
        const r = new Set(t);
        return (await this.getTools(e)).filter((e)=>r.has(e.clientKey));
    }
    async getToolSet(e) {
        const { snapshot: t, lease: r } = await this.resolve(e), s = await r.getToolSet(e), { bindings: n } = await this.buildCatalog(e, t, r);
        return {
            execute: async (t, r, o, a)=>{
                const c = n.get(t);
                if (void 0 === c || "ambiguous" === c.kind) throw this.resetNeedsAuthBackoff(), this.invalidateListing(e), new i.U$(t, [
                    ...n.keys()
                ].filter((e)=>"ambiguous" !== n.get(e)?.kind));
                if (Z(c.tool)) throw new Error(`${c.tool.toolName} for MCP server "${c.tool.clientKey}" is an interactive authentication step handled by the agent loop, not a callable tool`);
                if ("wrapped" === c.kind) return this.callWrapped(e, c, o, ()=>s.execute(t, r, o, a));
                try {
                    return await this.callServerPlaced(e, c.row, c.tool.name, r, o, a?.createProvider(c.row.serverName, c.tool.toolName, o));
                } catch (t) {
                    if (!function(e) {
                        return e instanceof Error && "PlacementRoutingNotDialedError" === e.name;
                    }(t)) throw t;
                    return this.recoverFromNotDialed(e, t, c.row, c.tool, r, o, a);
                }
            }
        };
    }
    async recoverFromNotDialed(e, t, r, s, n, i, o) {
        const { serverIdentifier: a } = r;
        ge.info(e, "Routed MCP call refused as not dialed; dropping the row and re-listing placement", {
            serverIdentifierHash: I(a),
            placement: t.placement,
            toolCallId: i
        }), this.dropRow(a), this.needsAuthMarks.delete(a);
        const { landed: c } = await this.relistNow(e);
        if (c && this.snapshot.rows.has(a)) throw t;
        const { snapshot: l, lease: u } = await this.ensureWrappedLease(e), { bindings: d } = await this.buildCatalog(e, l, u), h = this.localKeysForRow(r, await this.wrappedClients(e, u)), p = [
            ...d.values()
        ].find((e)=>"wrapped" === e.kind && !Z(e.tool) && h.has(e.tool.clientKey) && e.tool.toolName === s.toolName);
        if (void 0 !== p) {
            ge.info(e, "Retrying refused MCP call through the wrapped lease", {
                serverIdentifierHash: I(a),
                toolCallId: i
            });
            const t = await u.getToolSet(e);
            return this.callWrapped(e, p, i, ()=>t.execute(p.tool.name, n, i, o));
        }
        const f = [
            ...d.values()
        ].find((e)=>"wrapped" === e.kind && Z(e.tool) && h.has(e.tool.clientKey));
        if (void 0 !== f) throw new Error(`MCP server "${a}" now runs on this machine and requires authentication here; call ${f.tool.name} to sign in locally, then retry.`);
        if (!c) throw new Error(`MCP server "${a}" is no longer dialed by Cursor's servers and its placement is still being re-listed; retry "${s.name}" on the next turn.`);
        throw new Error(`MCP server "${a}" now runs on this machine; its tools are listed from this machine on the next turn, and "${s.name}" is not among them yet.`);
    }
    localKeysForRow(e, t) {
        const r = new Set([
            e.serverIdentifier,
            e.rowServerIdentifier
        ]);
        if (void 0 === e.normalizedUrl) return r;
        for (const [s, n] of Object.entries(t)){
            const t = n.config;
            re(void 0 !== t && "url" in t ? t.url : void 0) === e.normalizedUrl && r.add(s);
        }
        return r;
    }
    async relistNow(e) {
        this.markListingStale();
        const { landed: t } = await this.awaitListingBounded(e, this.startOrJoinListing(e), "refusal");
        return {
            landed: t
        };
    }
    markListingStale() {
        this.staleSinceSeq = this.listingSeq, this.resetNeedsAuthBackoff();
    }
    resetNeedsAuthBackoff() {
        this.needsAuthStreak = 0, this.needsAuthRowsKey = "";
    }
    noteNeedsAuthRows(e, t) {
        if (void 0 !== this.staleSinceSeq && t <= this.staleSinceSeq) return;
        const r = [
            ...e.rows.values()
        ].filter((e)=>"needsAuth" === e.status).map((e)=>e.serverIdentifier).sort().join("\0");
        "" !== r ? (this.needsAuthStreak = r === this.needsAuthRowsKey ? this.needsAuthStreak + 1 : 1, this.needsAuthRowsKey = r) : this.resetNeedsAuthBackoff();
    }
    needsAuthBackoffTtlMs() {
        return this.needsAuthStreak <= 1 || this.listingTtlMs >= this.needsAuthBackoffMaxMs ? this.listingTtlMs : Math.min(this.listingTtlMs * 2 ** (this.needsAuthStreak - 1), this.needsAuthBackoffMaxMs);
    }
    onWrappedChange(e, t, r) {
        if (void 0 === this.snapshotAt) return;
        const s = r?.serverIdentifiers;
        void 0 !== s && s.some((e)=>this.snapshot.serverPlacedIdentifiers.has(e) || this.lastExcludedWrappedKeys.has(e) || this.withheldDefinitions.has(e)) ? this.relistForWrappedChange(e) : void 0 === s && r?.reason === H.Jdl.Status || this.readWrappedInputs(e, t, "change");
    }
    relistForWrappedChange(e) {
        this.markListingStale(), this.invalidateListing(e, this.listingRetryMs);
    }
    readWrappedInputs(e, t, r) {
        const s = ++this.wrappedInputsSeq;
        (async function(e, t) {
            const r = await t.getClients(e), s = new Map;
            return await Promise.all(Object.entries(r).map(async ([t, r])=>{
                const n = function(e) {
                    const t = void 0 !== e && "url" in e ? e.url.trim() : void 0;
                    return void 0 !== t && /^https?:\/\//i.test(t) ? t : void 0;
                }(r.config);
                if (void 0 === n) return;
                const i = await async function(e, t) {
                    try {
                        const r = await t.getState(e);
                        return "requires_authentication" === r.kind || "error" === r.kind ? r.kind : "";
                    } catch  {
                        return "unreadable";
                    }
                }(e, r), o = (0, l.createHash)("sha256").update(JSON.stringify([
                    (a = r.config, JSON.stringify(a, (e, t)=>null === t || "object" != typeof t || Array.isArray(t) ? t : Object.fromEntries(Object.entries(t).sort(([e], [t])=>e < t ? -1 : e > t ? 1 : 0)))),
                    i
                ])).digest("hex");
                var a;
                s.set(t, {
                    url: n,
                    inputs: o
                });
            })), s;
        })(e, t).then((n)=>{
            const i = this.wrapped;
            if (this.disposed || i?.lease !== t) return;
            const o = this.wrappedInputs;
            if (void 0 !== o && o.seq > s) return;
            const a = {
                rows: n,
                placementKnown: i.placementKnown,
                snapshots: [
                    this.snapshot,
                    i.snapshot
                ],
                seq: s
            };
            this.wrappedInputs = a;
            const c = void 0 === o ? "change" === r : o.placementKnown === a.placementKnown && function(e, t) {
                const r = [
                    ...e.snapshots,
                    ...t.snapshots
                ], s = new Set([
                    ...e.rows.keys(),
                    ...t.rows.keys()
                ]);
                for (const n of s){
                    const s = e.rows.get(n), i = t.rows.get(n);
                    if (s?.inputs === i?.inputs) continue;
                    const o = i?.url ?? s?.url, a = r.map((e)=>ce(e, {
                            identifier: n,
                            url: o
                        }));
                    if (a.every((e)=>e === a[0])) return !0;
                }
                return !1;
            }(o, a);
            c && this.relistForWrappedChange(e);
        }, (s)=>{
            this.disposed || this.wrapped?.lease !== t || "build" === r || (ge.warn(e, "Wrapped lease clients unavailable after a change; re-listing", {
                error: s
            }), this.relistForWrappedChange(e));
        });
    }
    dropRow(e) {
        this.droppedRowMarks.set(e, this.listingSeq);
        const t = ue(this.snapshot, e);
        t !== this.snapshot && this.applySnapshot(t, !1);
    }
    invalidateListing(e, t = 0) {
        if (void 0 === this.client || this.disposed) return;
        const r = this.now();
        this.inListingBackoff(r) || t > 0 && void 0 !== this.snapshotAt && r - this.snapshotAt < t || this.startOrJoinListing(e);
    }
    async getClients(e) {
        const { snapshot: t, lease: r } = await this.resolve(e), s = await r.getClients(e), n = this.excludedWrappedKeys(t, s), i = {};
        for (const [e, t] of Object.entries(s))n.has(e) || (i[e] = t);
        for (const e of t.rows.values())i[e.serverIdentifier] = this.createServerPlacedClient(e);
        for (const [e, t] of this.withheldDefinitions)i[e] ??= this.createWithheldClient(t);
        return i;
    }
    async getClient(e, t) {
        const { snapshot: r, lease: s } = await this.resolve(e), n = r.rows.get(t) ?? [
            ...r.rows.values()
        ].find((e)=>e.rowServerIdentifier === t && e.accountLabel === ee);
        if (void 0 !== n) return this.createServerPlacedClient(n);
        if (r.serverPlacedIdentifiers.has(t)) return;
        const i = this.withheldDefinitions.get(t);
        if (void 0 !== i) return this.createWithheldClient(i);
        const o = await s.getClient(e, t);
        return void 0 !== o && this.excludedWrappedKeys(r, {
            [t]: o
        }).has(t) ? void 0 : o;
    }
    excludedWrappedKeys(e, t) {
        const r = new Set;
        for (const [s, n] of Object.entries(t)){
            const t = n.config;
            ce(e, {
                identifier: s,
                url: void 0 !== t && "url" in t ? t.url : void 0
            }) && r.add(s);
        }
        for (const t of e.serverPlacedIdentifiers)r.add(t);
        return r;
    }
    async wrappedClients(e, t) {
        try {
            return await t.getClients(e);
        } catch (t) {
            return ge.warn(e, "Wrapped MCP lease getClients failed", {
                error: t
            }), {};
        }
    }
    createWithheldClient(e) {
        const t = this.listingError?.error, r = t instanceof Error ? t.message : void 0 === t ? "" : String(t);
        return new fe(e.identifier, `MCP server "${e.identifier}" is not connected: its placement is unknown because ListMcpTools failed` + (r ? ` (${r})` : "") + ". It will connect once the backend answers.");
    }
    async getInstructions(e) {
        const { snapshot: t, lease: r } = await this.resolve(e), s = this.excludedWrappedKeys(t, await this.wrappedClients(e, r)), n = [
            ...t.rows.values()
        ].flatMap((e)=>{
            const t = ae(e);
            return void 0 === t ? [] : [
                new z.I0({
                    serverIdentifier: e.serverIdentifier,
                    serverName: e.serverName,
                    instructions: t
                })
            ];
        });
        return [
            ...(await r.getInstructions(e)).filter((e)=>!s.has(e.serverIdentifier)),
            ...n
        ];
    }
    onDidChange(e) {
        return this.listeners.add(e), {
            dispose: ()=>{
                this.listeners.delete(e);
            }
        };
    }
    dispose() {
        if (!this.disposed) {
            this.disposed = !0, this.listeners.clear();
            for (const e of [
                ...this.pendingWaits
            ])e("capped");
            this.serialized(async ()=>{
                const e = this.wrapped;
                this.wrapped = void 0, void 0 !== e && (e.subscription.dispose(), await this.disposeWrappedLease(e.lease));
            });
        }
    }
    serialized(e) {
        const t = this.serializedTail.then(e, e);
        return this.serializedTail = t.then(()=>{}, ()=>{}), t;
    }
    async resolve(e) {
        this.assertNotDisposed(), await this.ensureSnapshot(e, !1);
        const { snapshot: t, lease: r } = await this.ensureWrappedLease(e);
        return {
            snapshot: t,
            lease: r
        };
    }
    assertNotDisposed() {
        if (this.disposed) throw new Error("PlacementRoutingMcpProvider has been disposed");
    }
    listingDue(e) {
        if (this.inListingBackoff(e)) return !1;
        if (void 0 === this.snapshotAt || void 0 !== this.staleSinceSeq) return !0;
        if (void 0 !== this.listingError) return !0;
        if (void 0 !== this.refusedAt) return e - this.snapshotAt >= this.listingRefusedTtlMs;
        const t = this.needsAuthMarks.size > 0 ? Math.min(this.listingTtlMs, this.listingRetryMs) : this.needsAuthBackoffTtlMs();
        return e - this.snapshotAt >= t;
    }
    inListingBackoff(e) {
        const t = this.listingError;
        return !(void 0 === t || e - t.failedAt >= this.listingRetryMs) && (void 0 === this.staleSinceSeq || t.requestSeq > this.staleSinceSeq);
    }
    ensureSnapshot(e, t) {
        if (void 0 === this.client) return Promise.resolve(this.snapshot);
        if (t) return this.startOrJoinListing(e).done.then(()=>this.snapshot);
        if (!this.listingDue(this.now())) return Promise.resolve(this.snapshot);
        const r = this.startOrJoinListing(e), s = void 0 === this.snapshotAt ? "cold" : void 0 !== this.staleSinceSeq ? "change" : void 0;
        return void 0 === s && this.serveLastListingOnTtl ? Promise.resolve(this.snapshot) : "change" === s && this.serveLastListingOnChange && void 0 === this.grantChangedSinceSeq ? (this.recordListingWait(e, this.now(), s, "served_last"), Promise.resolve(this.snapshot)) : this.awaitListingBounded(e, r, s ?? "cold").then(({ snapshot: e })=>e);
    }
    awaitListingBounded(e, t, r) {
        const s = this.now(), n = this.listingWaitCapMs;
        return new Promise((i)=>{
            let o, a = !1;
            const c = (t)=>{
                a || (a = !0, o?.(), this.pendingWaits.delete(c), this.disposed || this.recordListingWait(e, s, r, t), i({
                    snapshot: this.snapshot,
                    landed: "listed" === t
                }));
            };
            this.pendingWaits.add(c), void 0 !== n && (o = this.scheduleTimeout(()=>c("capped"), n)), t.done.then(()=>c(this.appliedSeq >= t.seq ? "listed" : "failed"));
        });
    }
    recordListingWait(e, t, r, s) {
        "capped" !== s || this.waitCapLogged || (this.waitCapLogged = !0, ge.warn(e, "ListMcpTools did not answer within the read wait cap; proceeding on the last listing", {
            waitCapMs: this.listingWaitCapMs,
            trigger: r,
            placementKnown: void 0 !== this.snapshotAt,
            rowsRetained: this.snapshot.rows.size
        })), function(e) {
            if (void 0 !== e.metrics) try {
                e.metrics.distribution({
                    stat: "mcp_tool.placement_listing.wait_ms",
                    value: e.waitedMs,
                    tags: {
                        trigger: e.trigger,
                        outcome: e.outcome
                    }
                });
            } catch (t) {
                S.warn(e.ctx, "MCP placement listing wait metrics sink threw", {
                    error: t
                });
            }
        }({
            ctx: e,
            metrics: this.options.metrics,
            waitedMs: this.now() - t,
            trigger: r,
            outcome: s
        });
    }
    startOrJoinListing(e) {
        const t = this.snapshotInFlight;
        if (void 0 !== t && (void 0 === this.staleSinceSeq || t.seq > this.staleSinceSeq)) return t;
        const r = this.client;
        if (void 0 === r) return {
            seq: this.listingSeq,
            done: Promise.resolve()
        };
        const s = ++this.listingSeq, n = (async ()=>{
            try {
                const e = await r.listMcpTools(new a.DY({
                    serverIdentifiers: [],
                    mcpConfigJson: this.options.mcpConfigJson
                }));
                if (this.disposed || s <= this.appliedSeq) return;
                const t = this.withoutStaleDroppedRows(this.preserveNewerNeedsAuthMarks(function(e) {
                    const t = new Map, r = new Set, s = new Set;
                    for (const n of e.servers){
                        if (n.placement !== a.MC.SERVER) continue;
                        if (0 === n.serverIdentifier.length) continue;
                        const e = oe(n);
                        t.set(e.serverIdentifier, e), r.add(e.serverIdentifier), r.add(e.rowServerIdentifier), void 0 !== e.normalizedUrl && s.add(e.normalizedUrl);
                    }
                    return {
                        rows: t,
                        serverPlacedIdentifiers: r,
                        serverPlacedUrls: s
                    };
                }(e), s), s), n = void 0 === this.snapshotAt;
                this.listingError = void 0, this.waitCapLogged = !1, this.refusedAt = void 0, this.noteNeedsAuthRows(t, s), this.snapshotAt = this.now(), this.appliedSeq = s, this.clearMarksAnsweredBy(s), this.applySnapshot(t, n);
            } catch (t) {
                if (s <= this.appliedSeq) return;
                if (!this.disposed && function(e) {
                    if (e instanceof f.T) return e.code === p.C.PermissionDenied;
                    if (!(e instanceof Error) || "ConnectError" !== e.name) return !1;
                    const t = e.code;
                    return t === p.C.PermissionDenied || "PermissionDenied" === t;
                }(t)) {
                    const t = this.withoutStaleDroppedRows(this.preserveNewerNeedsAuthMarks(te, s), s), r = void 0 === this.snapshotAt;
                    return this.listingError = void 0, this.waitCapLogged = !1, this.resetNeedsAuthBackoff(), this.snapshotAt = this.now(), this.refusedAt = this.snapshotAt, this.appliedSeq = s, this.clearMarksAnsweredBy(s), ge.info(e, "ListMcpTools refused: hosted MCP is not enabled for this account", {
                        rowsReleased: this.snapshot.rows.size
                    }), void this.applySnapshot(t, r);
                }
                this.listingError = {
                    error: t,
                    failedAt: this.now(),
                    requestSeq: s
                }, ge.warn(e, "ListMcpTools failed", {
                    error: t,
                    placementKnown: void 0 !== this.snapshotAt,
                    rowsRetained: this.snapshot.rows.size
                });
            } finally{
                this.snapshotInFlight?.seq === s && (this.snapshotInFlight = void 0);
            }
        })(), i = {
            seq: s,
            done: n
        };
        return this.snapshotInFlight = i, i;
    }
    clearMarksAnsweredBy(e) {
        void 0 !== this.staleSinceSeq && e > this.staleSinceSeq && (this.staleSinceSeq = void 0), void 0 !== this.grantChangedSinceSeq && e > this.grantChangedSinceSeq && (this.grantChangedSinceSeq = void 0);
    }
    preserveNewerNeedsAuthMarks(e, t) {
        let r = e;
        for (const [s, n] of this.needsAuthMarks)!e.rows.has(s) || t > n ? this.needsAuthMarks.delete(s) : r = le(r, s, "needsAuth");
        return r;
    }
    withoutStaleDroppedRows(e, t) {
        let r = e;
        for (const [e, s] of this.droppedRowMarks)t > s ? this.droppedRowMarks.delete(e) : r = ue(r, e);
        return r;
    }
    applySnapshot(e, t) {
        const r = this.snapshot;
        if (this.snapshot = e, t) return void this.scheduleNotify({
            reason: H.Jdl.Snapshots
        });
        if (he(r) !== he(e)) return void this.scheduleNotify({
            reason: H.Jdl.Snapshots
        });
        const s = function(e, t) {
            const r = new Set;
            for (const [s, n] of t.rows){
                const t = e.rows.get(s);
                void 0 !== t && me(t) === me(n) || r.add(s);
            }
            for (const s of e.rows.keys())t.rows.has(s) || r.add(s);
            return [
                ...r
            ];
        }(r, e);
        s.length > 0 && this.scheduleNotify({
            serverIdentifiers: s,
            reason: H.Jdl.Snapshots
        });
    }
    wrappedLeaseKey(e, t) {
        return `${t ? "known" : "unknown"}|${he(e)}`;
    }
    async ensureWrappedLease(e) {
        for(;;){
            this.assertNotDisposed();
            const t = this.snapshot, r = this.wrapped;
            if (void 0 !== r && r.key === this.wrappedLeaseKey(t, this.isPlacementKnown())) return {
                snapshot: t,
                lease: r.lease
            };
            await this.serialized(()=>this.rebuildWrappedLeaseIfStale(e));
        }
    }
    async rebuildWrappedLeaseIfStale(e) {
        this.assertNotDisposed();
        const t = this.snapshot, r = this.isPlacementKnown(), s = this.wrappedLeaseKey(t, r);
        void 0 !== this.wrapped && this.wrapped.key === s || await this.buildWrappedLease(e, t, s, r);
    }
    async buildWrappedLease(e, t, r, s) {
        const n = new Map, i = await this.options.createWrappedLease(e, {
            placementKnown: s,
            serverPlacedIdentifiers: t.serverPlacedIdentifiers,
            serverPlacedUrls: t.serverPlacedUrls,
            includeDefinition: (e)=>"http" !== e.kind || s ? !ce(t, e) : (n.set(e.identifier, e), !1)
        });
        if (this.disposed) throw this.disposeWrappedLease(i), new Error("PlacementRoutingMcpProvider has been disposed");
        const o = i.onDidChange((t)=>{
            this.scheduleNotify(t), this.onWrappedChange(e, i, t);
        }), a = this.wrapped;
        return this.wrapped = {
            lease: i,
            key: r,
            placementKnown: s,
            snapshot: t,
            subscription: o
        }, this.withheldDefinitions = n, this.readWrappedInputs(e, i, "build"), void 0 !== a && (a.subscription.dispose(), this.replacedLeases.push({
            lease: a.lease,
            disposal: this.disposeWrappedLease(a.lease)
        })), s && !0 === this.options.grantMigration?.migrationEnabled && t.rows.size > 0 && this.runGrantMigration(e).catch((t)=>{
            ge.warn(e, "Automatic MCP grant migration pass failed", {
                error: t
            });
        }), i;
    }
    runGrantMigration(e) {
        const t = this.options.grantMigration;
        if (void 0 === t || !t.migrationEnabled || void 0 === this.client) return Promise.resolve([]);
        if (void 0 !== this.grantMigrationQueued) return this.grantMigrationQueued;
        const r = this.client, s = this.serialized(()=>(this.grantMigrationQueued === s && (this.grantMigrationQueued = void 0), this.disposed ? Promise.resolve([]) : this.executeGrantMigrationPass(e, t, r)));
        return this.grantMigrationQueued = s, this.grantMigrationLatest = s, s.then(()=>this.forgetGrantMigration(s), ()=>this.forgetGrantMigration(s)), s;
    }
    forgetGrantMigration(e) {
        this.grantMigrationQueued === e && (this.grantMigrationQueued = void 0), this.grantMigrationLatest === e && (this.grantMigrationLatest = void 0);
    }
    async executeGrantMigrationPass(e, t, r) {
        const s = this.snapshot;
        if (!(void 0 !== this.wrapped && this.wrapped.key === this.wrappedLeaseKey(s, this.isPlacementKnown())) || 0 === s.rows.size) return [];
        const n = await t.listLocalGrants(e), i = await async function(e, t) {
            const r = [], s = t.migrationEnabled ? G(t.serverPlacedRows, t.grants) : void 0;
            for (const n of t.grants){
                if (void 0 === s) {
                    r.push({
                        ref: n,
                        outcome: {
                            kind: "skipped",
                            reason: "migration_disabled"
                        }
                    });
                    continue;
                }
                const i = s.get(n) ?? {
                    skipped: "not_server_placed"
                };
                if ("skipped" in i) {
                    "url_mismatch" === i.skipped && W.warn(e, "MCP grant not migrated: local definition names a server-placed row but dials a different URL", {
                        serverIdentifierHash: I(n.serverIdentifier)
                    }), r.push({
                        ref: n,
                        outcome: {
                            kind: "skipped",
                            reason: i.skipped
                        }
                    });
                    continue;
                }
                const o = await K(t, n, i.row);
                "rpc_failed" === o.kind || "disconnect_failed" === o.kind ? W.warn(e, "MCP grant migration step failed; keeping the local record", {
                    serverIdentifierHash: I(n.serverIdentifier),
                    step: o.kind,
                    error: o.error
                }) : W.info(e, "MCP grant migration outcome", {
                    serverIdentifierHash: I(n.serverIdentifier),
                    outcome: o.kind,
                    ..."reason" in o ? {
                        reason: o.reason
                    } : {}
                }), r.push({
                    ref: n,
                    outcome: o
                });
            }
            return r;
        }(e, {
            migrationEnabled: !0,
            client: r,
            store: t.store,
            grants: n,
            serverPlacedRows: [
                ...s.rows.values()
            ],
            disconnect: async ()=>{
                if (!await this.settleReplacedLeases()) throw new Error("a replaced wrapped MCP lease did not dispose cleanly; the grant may still be in local use");
            },
            stillServerPlaced: (e)=>{
                const t = this.snapshot.rows.get(e.serverIdentifier);
                return void 0 !== t && t.normalizedUrl === e.normalizedUrl;
            },
            exhausted: this.exhaustedGrantKeys
        });
        return i.some((e)=>"migrated" === e.outcome.kind || "server_copy_kept" === e.outcome.kind) && !this.disposed && await this.ensureSnapshot(e, !0), i;
    }
    async settleReplacedLeases() {
        for(;;){
            const e = [
                ...this.replacedLeases
            ];
            if (0 === e.length) return !0;
            const t = new Set;
            if (await Promise.all(e.map(async (e)=>{
                let r = await e.disposal;
                r || (e.disposal = this.disposeWrappedLease(e.lease), r = await e.disposal), r && t.add(e);
            })), this.replacedLeases = this.replacedLeases.filter((e)=>!t.has(e)), !e.every((e)=>t.has(e))) return !1;
        }
    }
    async disposeWrappedLease(e) {
        try {
            return await e.dispose?.(), !0;
        } catch (e) {
            return ge.warn(this.disposeCtx, "Wrapped MCP lease dispose failed", {
                error: e
            }), !1;
        }
    }
    scheduleNotify(e) {
        this.disposed || (this.pendingEvents.push(e), this.notifyScheduled || (this.notifyScheduled = !0, queueMicrotask(()=>{
            if (this.notifyScheduled = !1, this.disposed) return;
            const e = function(e) {
                let t, r = !1;
                const s = new Set;
                for (const n of e)if (t ??= n?.reason, (0, H._1u)(n)) r = !0;
                else for (const e of n?.serverIdentifiers ?? [])s.add(e);
                return r ? void 0 === t ? void 0 : {
                    reason: t
                } : {
                    serverIdentifiers: [
                        ...s
                    ],
                    reason: t
                };
            }(this.pendingEvents);
            this.pendingEvents = [];
            for (const t of this.listeners)try {
                t(e);
            } catch (e) {
                ge.warn(this.disposeCtx, "MCP lease change listener threw", {
                    error: e
                });
            }
        })));
    }
    async wrappedNeedsAuthTools(e, t, r, s) {
        const n = new Set(s.map((e)=>e.clientKey)), i = [];
        for (const [s, o] of Object.entries(t))if (!n.has(s) && !r.has(s)) try {
            "requires_authentication" === (await o.getState(e)).kind && i.push(Y({
                serverIdentifier: s,
                serverName: o.serverName,
                plugin: o.plugin,
                marketplace: o.marketplace,
                pluginId: o.pluginId,
                marketplaceId: o.marketplaceId
            }));
        } catch  {}
        return i;
    }
    createServerPlacedClient(e) {
        return new pe(e, (e, t, r, s, n, i)=>this.callServerPlaced(e, t, r, s, n, i));
    }
    async callWrapped(e, t, r, s) {
        const n = this.now();
        let i = "error", o = "none";
        try {
            const e = await s();
            return i = b(e), e;
        } catch (e) {
            throw i = _(e), o = J(e), e;
        } finally{
            T({
                ctx: e,
                metrics: this.options.metrics,
                placement: "client",
                caller: E(this.options.caller, e),
                providerHost: t.providerHost,
                serverIdentifier: t.tool.clientKey,
                toolCallId: r ?? "",
                conversationId: P(e),
                outcome: i,
                reason: o,
                durationMs: this.now() - n,
                elicitationCount: 0
            });
        }
    }
    async callServerPlaced(e, t, r, s, n, i) {
        if (void 0 === this.client) throw new Error(`MCP server "${t.serverIdentifier}" is server-placed but this host has no McpToolService transport`);
        const o = E(this.options.caller, e), u = P(e), d = new a.aB({
            serverIdentifier: t.serverIdentifier,
            toolName: r,
            args: c.Struct.fromJson(s),
            accountKey: t.accountLabel,
            toolCallId: n ?? "",
            conversationId: u,
            caller: o,
            deviceTag: this.options.deviceTag ?? "",
            clientApproved: this.options.clientApproved ?? !0,
            mcpConfigJson: this.options.mcpConfigJson
        }), h = (0, l.randomUUID)(), p = this.now();
        let f, g = "error", v = 0;
        try {
            const r = await async function(e) {
                const t = e.request.serverIdentifier, r = new AbortController, s = new Map;
                let n;
                const i = void 0 === e.requestId ? e.client.callMcpTool(e.request) : e.client.callMcpTool(e.request, {
                    headers: {
                        "x-request-id": e.requestId
                    }
                });
                try {
                    for await (const t of i){
                        const i = t;
                        switch(i.event.case){
                            case "progress":
                                {
                                    const t = i.event.value;
                                    e.onProgress?.({
                                        progress: t.progress,
                                        total: t.total,
                                        message: t.message
                                    });
                                    break;
                                }
                            case "elicitationRequest":
                                {
                                    e.onElicitationRequest?.();
                                    const t = i.event.value.requestId, n = new AbortController;
                                    s.set(t, n), B({
                                        ctx: e.ctx,
                                        client: e.client,
                                        toolCallId: e.request.toolCallId,
                                        request: i.event.value,
                                        elicitationProvider: e.elicitationProvider,
                                        signal: AbortSignal.any([
                                            r.signal,
                                            n.signal
                                        ])
                                    }).finally(()=>{
                                        s.get(t) === n && s.delete(t);
                                    }).catch(()=>{});
                                    break;
                                }
                            case "elicitationClosed":
                                s.get(i.event.value.requestId)?.abort(), s.delete(i.event.value.requestId);
                                break;
                            case "outcome":
                                n = i.event.value;
                        }
                    }
                } catch (n) {
                    throw r.abort(), D.warn(e.ctx, "CallMcpTool stream failed", {
                        serverIdentifier: t,
                        toolCallId: e.request.toolCallId,
                        ...void 0 === e.requestId ? {} : {
                            requestId: e.requestId
                        },
                        openElicitations: s.size,
                        error: n
                    }), n;
                }
                if (r.abort(), void 0 === n) throw e.onFailureReason?.("stream_no_outcome"), new Error(`CallMcpTool stream for MCP server "${t}" ended without an outcome`);
                const o = A(n);
                return "none" !== o && e.onFailureReason?.(o), F(t, n);
            }({
                ctx: e,
                client: this.client,
                request: d,
                elicitationProvider: i,
                requestId: h,
                onFailureReason: (e)=>{
                    f = e;
                },
                onProgress: (r)=>{
                    ge.debug(e, "CallMcpTool progress", {
                        serverIdentifier: t.serverIdentifier,
                        toolCallId: n,
                        progress: r.progress,
                        total: r.total,
                        messageLength: r.message?.length ?? 0
                    });
                },
                onElicitationRequest: ()=>{
                    v += 1;
                }
            });
            return g = b(r), r;
        } catch (e) {
            throw g = _(e), f ??= J(e), m(e) && this.markNeedsAuth(t.serverIdentifier), e;
        } finally{
            T({
                ctx: e,
                metrics: this.options.metrics,
                placement: "server",
                caller: o,
                providerHost: R(t),
                serverIdentifier: t.serverIdentifier,
                toolCallId: n ?? "",
                conversationId: u,
                outcome: g,
                reason: f ?? "none",
                requestId: h,
                durationMs: this.now() - p,
                elicitationCount: v
            });
        }
    }
    markNeedsAuth(e) {
        this.resetNeedsAuthBackoff(), this.needsAuthMarks.set(e, this.listingSeq);
        const t = le(this.snapshot, e, "needsAuth");
        t !== this.snapshot && (this.snapshot = t, this.scheduleNotify({
            serverIdentifiers: [
                e
            ],
            reason: H.Jdl.Status
        }));
    }
}
var we = require(51455), ye = require(76760);
const Se = 3e4;
async function Ie(e) {
    await (0, we.mkdir)(e.projectsDir, {
        recursive: !0
    });
    const t = await (0, we.realpath)(e.projectsDir), r = Date.now(), n = new Date(r).toISOString().slice(0, 10), i = (0, ye.join)(t, `.agent-data-cleanup-${n}`);
    try {
        const e = await (0, we.open)(i, "wx", 384);
        await e.close();
    } catch (e) {
        if (e instanceof Error && "code" in e && "EEXIST" === e.code) return;
        throw e;
    }
    return await (0, s.r5P)({
        projectsDir: t,
        nowMs: r
    });
}
function Ce(e) {
    const t = e.run ?? Ie, r = e.initialDelayMs ?? Se, n = e.intervalMs ?? s.BNF, i = e.setTimeoutFn ?? setTimeout, o = e.setIntervalFn ?? setInterval, a = e.clearTimeoutFn ?? clearTimeout, c = e.clearIntervalFn ?? clearInterval;
    let l = !1;
    const u = async ()=>{
        try {
            const r = Date.now(), s = await t({
                projectsDir: e.projectsDir
            });
            if (l || void 0 === s) return;
            try {
                e.onCompleted?.(s, {
                    projectsDir: e.projectsDir,
                    durationMs: Date.now() - r
                });
            } catch  {}
        } catch (t) {
            if (l) return;
            try {
                e.onFailed?.(t, {
                    projectsDir: e.projectsDir
                });
            } catch  {}
        }
    }, d = i(()=>{
        l || u();
    }, r), h = o(()=>{
        l || u();
    }, n);
    return ()=>{
        l || (l = !0, a(d), c(h));
    };
}
var Pe = require(73024);
function ke(e) {
    return e instanceof Error && "code" in e && ("ENOENT" === e.code || "ENOTDIR" === e.code);
}
class Me {
    async requestApproval(e) {
        return {
            approved: !1,
            reason: "agent-host-exec denies local side effects by default. Interactive embedders must supply a pendingDecisionStore override."
        };
    }
}
function Ee(e) {
    try {
        return (0, Pe.existsSync)(e) ? (0, Pe.realpathSync)(e) : (0, ye.resolve)(e);
    } catch  {
        return (0, ye.resolve)(e);
    }
}
function _e(e) {
    return "needsApproval" === e.type ? {
        type: "permissionsConfig",
        isReadonly: !0
    } : e;
}
class be {
    constructor(e, t, r){
        var n;
        this.workspaceRoots = e.map(Ee), this.readRules = new s.khl(t, new Me, (n = r?.permissions ?? {
            getPermissions: async ()=>({
                    allow: [],
                    deny: [],
                    approvalMode: "ask-every-time",
                    readBoundary: "workspace",
                    userConfiguredPolicy: {
                        type: "workspace_readonly"
                    }
                }),
            updatePermissions: async ()=>{}
        }, {
            async getPermissions () {
                const e = await n.getPermissions();
                return {
                    ...e,
                    readBoundary: "workspace",
                    approvalMode: "unrestricted" === e.approvalMode ? "ask-every-time" : e.approvalMode
                };
            },
            updatePermissions: (e)=>n.updatePermissions(e)
        }), r?.teamSettings ?? new s.waD({
            getTeamAdminSettings: async ()=>{},
            getTeamRepos: async ()=>{}
        }), [
            ...this.workspaceRoots
        ], !1, {
            perUserSandboxConfigPath: r?.perUserSandboxConfigPath ?? "/nonexistent/agent-host-exec-sandbox.json"
        });
    }
    async shouldBlockRead(e, t) {
        return this.applyHeadlessReadRules(e, t, !1);
    }
    async shouldBlockFileRead(e, t) {
        return this.applyHeadlessReadRules(e, t, !0);
    }
    async getFileReadBoundaryBlocker() {
        return async (e, t)=>!1 !== await this.shouldBlockRead(e) || t !== e && !1 !== await this.shouldBlockRead(t);
    }
    async shouldBlockWrite(e, t, r) {
        return {
            type: "permissionsConfig",
            isReadonly: !0
        };
    }
    async shouldBlockShellCommand(e, t, r, s) {
        return {
            kind: "block",
            reason: {
                type: "permissionsConfig",
                isReadonly: !0
            }
        };
    }
    async shouldEnforceShellInvariantBlocks() {
        return {
            kind: "block",
            reason: {
                type: "permissionsConfig",
                isReadonly: !0
            }
        };
    }
    async isShellCommandFullyAllowlisted() {
        return !1;
    }
    async shouldBlockMcp(e, t) {
        return {
            type: "permissionsConfig",
            isReadonly: !0
        };
    }
    async isMcpFullyAllowlisted() {
        return !1;
    }
    async isWebFetchFullyAllowlisted() {
        return !1;
    }
    async addToAllowList() {}
    async addToDenyList() {}
    async applyHeadlessReadRules(e, t, r) {
        const s = (e)=>r ? this.readRules.shouldBlockFileRead(e, t) : this.readRules.shouldBlockRead(e, t), n = await s(e);
        if (!1 !== n) return _e(n);
        const i = await this.resolvedPathIfDifferent(e);
        if (void 0 !== i) {
            const e = await s(i);
            if (!1 !== e) return _e(e);
        }
        return !await this.isInAnyWorkspace(e) && {
            type: "permissionsConfig",
            isReadonly: !0
        };
    }
    async resolvedPathIfDifferent(e) {
        const t = (0, ye.resolve)(e), r = await (0, s.yeE)(t);
        if (null !== r && r !== t) return r;
    }
    async isInAnyWorkspace(e) {
        for (const t of this.workspaceRoots)if (await this.isInWorkspace(t, e)) return !0;
        return !1;
    }
    async isInWorkspace(e, t) {
        let r = (0, ye.resolve)(e, t);
        for(;;)try {
            const t = await (0, we.realpath)(r), s = (0, ye.relative)(e, t);
            return "" === s || ".." !== s && !s.startsWith(`..${ye.sep}`) && !(0, ye.isAbsolute)(s);
        } catch (e) {
            if (!ke(e)) return !1;
            const t = (0, ye.dirname)(r);
            if (t === r) return !1;
            r = t;
        }
    }
}
class Re {
    async open(e, t) {}
    async getDiagnostics(e, t) {
        return [];
    }
}
class qe {
    async getCodebaseReference(e, t) {}
}
class Ae {
    async getAllCursorRules(e) {
        return [];
    }
    reload(e) {}
    dispose() {}
    onDidChangeRules(e) {
        return ()=>{};
    }
}
const Je = {};
function Te(e) {
    for (const t of e){
        if ("string" != typeof t || 0 === t.trim().length) throw new Error("agent-host-exec workspacePaths entries must be non-empty absolute paths");
        if (!(0, ye.isAbsolute)(t)) throw new Error(`agent-host-exec workspace path must be absolute: ${t}`);
    }
    return e;
}
function De(e) {
    if ("string" != typeof e || 0 === e.trim().length) throw new Error("agent-host-exec requires a non-empty projectDir");
    if (!(0, ye.isAbsolute)(e)) throw new Error(`agent-host-exec projectDir must be absolute: ${e}`);
    return e;
}
const Ne = new WeakMap;
let xe = 1;
function Le(e) {
    const t = Ne.get(e);
    if (void 0 !== t) return t;
    const r = xe++;
    return Ne.set(e, r), r;
}
function Be(e) {
    if (void 0 === e) return {};
    const t = {};
    for (const r of Object.keys(e)){
        const s = e[r];
        void 0 !== s && (t[r] = s);
    }
    return t;
}
class Ue {
    async requestApproval() {
        return {
            approved: !0
        };
    }
    async requestReadApproval() {
        return {
            approved: !0
        };
    }
}
var Fe = require(31489);
function Oe() {
    return e = "Network fetch is disabled by agent-host-exec headless defaults", {
        execute: async (t, r)=>$e(r, e)
    };
    var e;
}
function $e(e, t) {
    return new Fe.uN({
        result: {
            case: "error",
            value: new Fe.fk({
                url: e.url,
                error: t
            })
        }
    });
}
function je(e, t) {
    return {
        async execute (r, s, n) {
            const i = await e.execute(r, s, n), o = function(e) {
                switch(e.result.case){
                    case "success":
                    case "timeout":
                        return e.result.value.directoryTreeRoot;
                    default:
                        return;
                }
            }(i);
            return void 0 !== o && await We(o, t, !0), i;
        }
    };
}
async function We(e, t, r) {
    if (!r) {
        const r = await (0, s.yeE)(e.absPath);
        if (null === r || await t.isCursorIgnored(r)) return !1;
    }
    const n = [];
    for (const r of e.childrenFiles){
        const i = (0, ye.join)(e.absPath, r.name), o = await (0, s.yeE)(i);
        null !== o && (await t.isCursorIgnored(o) || n.push(r));
    }
    e.childrenFiles = n;
    const i = await Promise.all(e.childrenDirs.map(async (e)=>({
            dir: e,
            keep: await We(e, t, !1)
        })));
    return e.childrenDirs = i.filter((e)=>e.keep).map((e)=>e.dir), e.childrenWereProcessed || (e.fullSubtreeExtensionCounts = {}, e.numFiles = 0), !(!r && e.childrenWereProcessed && 0 === e.childrenFiles.length && 0 === e.childrenDirs.length);
}
class Ge {
    constructor(e){
        this.delegate = e;
    }
    isIgnoredByAny(e) {
        return this.delegate.isIgnoredByAny(e);
    }
    isGitIgnored(e) {
        return this.delegate.isGitIgnored(e);
    }
    isCursorIgnored(e) {
        return this.delegate.isCursorIgnored(e);
    }
    isRepoBlocked(e) {
        return this.delegate.isRepoBlocked(e);
    }
    async listCursorIgnoreFilesByRoot(e) {
        return [];
    }
    getCursorIgnoreMapping() {
        return this.delegate.getCursorIgnoreMapping();
    }
    getGitIgnoreMapping() {
        return this.delegate.getGitIgnoreMapping();
    }
    getRepoBlockExcludeGlobs(e) {
        return this.delegate.getRepoBlockExcludeGlobs(e);
    }
}
function Ke(e) {
    return "deny-all" === e.policy.mode ? new be(e.workspacePaths, e.ignoreService, {
        permissions: e.policy.permissions,
        teamSettings: e.policy.teamSettings,
        perUserSandboxConfigPath: e.policy.perUserSandboxConfigPath
    }) : new s.khl(e.ignoreService, e.policy.provider, e.policy.permissions ?? {
        getPermissions: async ()=>({
                allow: [],
                deny: [],
                approvalMode: "ask-every-time",
                userConfiguredPolicy: {
                    type: "workspace_readonly"
                }
            }),
        updatePermissions: async ()=>{}
    }, e.policy.teamSettings ?? new s.waD({
        getTeamAdminSettings: async ()=>{},
        getTeamRepos: async ()=>{}
    }), [
        ...e.workspacePaths
    ], !1, {
        perUserSandboxConfigPath: e.policy.perUserSandboxConfigPath
    });
}
var He = require(25925);
function ze(e) {
    try {
        return !!(0, Pe.statSync)(e).isFile() && ((0, Pe.accessSync)(e, Pe.constants.X_OK), !0);
    } catch  {
        return !1;
    }
}
function Qe(e) {
    try {
        const t = (0, Pe.statSync)(e);
        if (t.isFile()) return (0, Pe.accessSync)(e, Pe.constants.X_OK), e;
        if (!t.isDirectory()) return;
    } catch  {
        return;
    }
    const t = "win32" === process.platform ? [
        "rg.exe",
        "ripgrep.exe",
        "rg",
        "ripgrep"
    ] : [
        "rg",
        "ripgrep"
    ];
    for (const r of t){
        const t = (0, ye.join)(e, r);
        if (ze(t)) return t;
    }
}
function Ve() {
    const e = process.env.CURSOR_RIPGREP_RLOCATION;
    if (void 0 !== e && "" !== e) for (const t of function() {
        const e = [];
        for (const t of [
            process.env.RUNFILES_DIR,
            process.env.TEST_SRCDIR
        ])void 0 === t || "" === t || e.includes(t) || e.push(t);
        return e;
    }()){
        const r = Qe((0, ye.join)(t, e));
        if (void 0 !== r) return r;
    }
}
function Xe(e) {
    if (e) {
        try {
            if ((0, Pe.statSync)(e).isDirectory()) {
                const t = Qe(e);
                return void (void 0 !== t && (0, He.J)(t));
            }
        } catch  {}
        return void (0, He.J)(e);
    }
    const t = Ve();
    if (void 0 !== t) return void (0, He.J)(t);
    if ((0, He.yo)()) return;
    const r = "win32" === process.platform ? "rg.exe" : "rg", s = process.argv[1];
    if (void 0 !== s) {
        const e = (0, ye.join)((0, ye.dirname)(s), r);
        if (ze(e)) return void (0, He.J)(e);
    }
    if ("win32" !== process.platform) {
        const e = [
            "/usr/bin/rg",
            "/usr/local/bin/rg",
            "/home/linuxbrew/.linuxbrew/bin/rg",
            "/opt/homebrew/bin/rg"
        ], t = process.env.HOME;
        t && e.push((0, ye.join)(t, ".cargo", "bin", "rg"));
        for (const t of e)if (ze(t)) return void (0, He.J)(t);
    }
    const n = (0, He.xS)();
    n && (0, He.J)(n);
}
const Ye = (0, n.h)("agent-host-exec"), Ze = "permissionsService and pendingDecisionStore must be overridden together", et = "configureSession.permissions cannot be combined with permissionsService or pendingDecisionStore overrides";
function tt(e) {
    if (void 0 !== e.permissionsService !== (void 0 !== e.pendingDecisionStore)) throw new Error(Ze);
    if (void 0 !== e.permissionsService && void 0 !== e.pendingDecisionStore) return {
        permissionsService: e.permissionsService,
        pendingDecisionStore: e.pendingDecisionStore
    };
}
function rt(e) {
    void 0 === e.configureSession ? (Te(e.workspacePaths ?? []), De(e.projectDir ?? "")) : (void 0 !== e.workspacePaths && 0 !== e.workspacePaths.length || void 0 !== e.projectDir && 0 !== e.projectDir.trim().length) && (void 0 !== e.workspacePaths && e.workspacePaths.length > 0 && Te(e.workspacePaths), void 0 !== e.projectDir && e.projectDir.trim().length > 0 && De(e.projectDir));
    const t = void 0 === e.workspacePaths || 0 === e.workspacePaths.length ? void 0 : Te(e.workspacePaths), r = void 0 === e.projectDir || 0 === e.projectDir.trim().length ? void 0 : De(e.projectDir);
    Xe(e.ripgrepPath);
    const n = new Map;
    let i = !1;
    return {
        createResources: (o)=>{
            if (i) throw new Error("createAgentHostExec has been disposed");
            const a = e.configureSession?.(o), c = Te(a?.workspacePaths ?? t ?? []), l = Te(a?.permissionWorkspacePaths ?? c), u = De(a?.projectDir ?? r ?? ""), h = Be(a?.overrides), p = Be(e.resourceDefaults), f = a?.permissions?.teamSettings ?? e.permissions?.teamSettings;
            let g = h.ignoreService ?? p.ignoreService;
            if (void 0 === g) {
                const e = function(e, t, r) {
                    const s = [
                        ...e
                    ].map(Ee).sort(), n = void 0 === r ? "no-team" : `team:${Le(r)}`;
                    return `${s.join("\0")}::${Object.prototype.toString.call(t)}::${Le(t)}::${n}`;
                }(c, o.gitExecutor, f);
                g = n.get(e), void 0 === g && (g = function(e, t, r) {
                    const n = new s.E1e(e, r, [
                        ...t
                    ]), i = t[0];
                    if (void 0 !== i) {
                        const e = (0, s.gMI)(i);
                        n.isGitIgnored(e).catch((e)=>{
                            Ye.error((0, d.q6)(), "ignore service initialization failed", e instanceof Error ? e : new Error(String(e)));
                        });
                    }
                    return n;
                }(o.gitExecutor, c, f), n.set(e, g));
            }
            if (void 0 !== a?.permissions && (void 0 !== h.permissionsService || void 0 !== h.pendingDecisionStore)) throw new Error(et);
            const m = void 0 === a?.permissions ? tt(h) ?? tt(p) : void 0, v = a?.permissions ?? (void 0 === m ? e.permissions ?? {
                mode: "deny-all"
            } : void 0), w = m?.pendingDecisionStore ?? ("interactive" === v?.mode ? v.provider : function(e) {
                switch(e){
                    case "deny":
                    case "fail-closed":
                        return new Me;
                    case "auto-approve":
                        return new Ue;
                    default:
                        return e;
                }
            }("deny")), y = void 0 === m && "interactive" !== v?.mode, S = y ? new Ge(g) : g, I = m?.permissionsService ?? Ke({
                policy: v ?? {
                    mode: "deny-all"
                },
                ignoreService: g,
                workspacePaths: l
            }), C = a?.wrapPermissionsService?.(I) ?? I, P = c[0] ?? u, k = {
                pendingDecisionStore: w,
                fileChangeTracker: new s.$1H(P),
                gitExecutor: o.gitExecutor,
                ignoreService: S,
                grepProvider: Je,
                permissionsService: C,
                workspacePaths: [
                    ...c
                ],
                diagnosticsProvider: new Re,
                mcpLease: o.mcpLease,
                cursorRulesService: new Ae,
                subagentsService: new s.KpW,
                repositoryProvider: new qe,
                projectDir: u,
                backgroundWorkRegistry: o.backgroundWorkRegistry,
                mcpMetaToolEnabled: !0,
                _defaultSandboxPolicy: {
                    type: "workspace_readonly"
                },
                useStreamingRead: ()=>!1
            }, M = new s.DvK({
                ...k,
                ...p,
                ...h,
                workspacePaths: [
                    ...c
                ],
                projectDir: u,
                gitExecutor: o.gitExecutor,
                mcpLease: o.mcpLease,
                backgroundWorkRegistry: o.backgroundWorkRegistry,
                wakeupOwnerConversationId: o.rootSessionId,
                pendingDecisionStore: w,
                permissionsService: C,
                ignoreService: S,
                rebuildRequestContextOnRulesChange: !0
            }), E = e.network ?? "deny";
            if ("inherit" !== E) {
                const e = "deny" === E ? Oe() : function(e, t) {
                    return {
                        async execute (r, s, n) {
                            try {
                                if (await t.isWebFetchFullyAllowlisted(r, {
                                    url: s.url
                                })) return e.execute(r, s, n);
                            } catch  {}
                            return $e(s, "Network fetch is not allowed by headless permissions");
                        }
                    };
                }(M.get(H.IGA), C);
                M.register(H.IGA, e);
            }
            let _;
            y && M.register(H.bL4, je(M.get(H.bL4), S));
            try {
                _ = e.wrapResources?.({
                    args: o,
                    provider: M
                });
            } catch (e) {
                throw M.dispose().catch((e)=>{
                    Ye.error((0, d.q6)(), "provider cleanup after wrapResources failure", e);
                }), e;
            }
            const b = _?.accessor ?? M;
            return {
                register: (e, t)=>M.register(e, t),
                get: (e)=>b.get(e),
                entries: ()=>b.entries(),
                dispose: async ()=>{
                    let e;
                    try {
                        await _?.dispose?.();
                    } catch (t) {
                        e = t;
                    }
                    try {
                        await M.dispose();
                    } catch (t) {
                        e ??= t;
                    }
                    if (void 0 !== e) throw e;
                }
            };
        },
        async dispose () {
            i = !0, n.clear();
        }
    };
}
var st = require(47462);
function nt(e) {
    const t = function(e) {
        if ("function" == typeof e) return e;
        return ()=>e;
    }(e.context);
    return {
        accessor: new st.ae(e.provider, e.hookExecutor, t, e.mcpLease)
    };
}
var it = require(48161);
const ot = [
    "project",
    "user",
    "team",
    "mdm",
    "plugins"
], at = new Set([
    ...ot,
    "all"
]);
function ct(e) {
    const t = function(e) {
        if (void 0 === e || 0 === e.length) return lt([]);
        for (const t of e)if (!at.has(t)) throw new Error(`Unsupported setting source "${String(t)}"`);
        if (e.includes("all")) {
            if (e.length > 1) throw new Error('settingSources cannot mix "all" with individual setting sources');
            return {
                ...lt(ot),
                all: !0
            };
        }
        return lt(e);
    }(e), r = [
        "team",
        "mdm",
        "plugins"
    ].filter((e)=>t[e]);
    if (r.length > 0) throw new Error(`Headless disk setting sources do not support: ${r.join(", ")}`);
    return t;
}
function lt(e) {
    const t = new Set(e);
    return {
        project: t.has("project"),
        user: t.has("user"),
        team: t.has("team"),
        mdm: t.has("mdm"),
        plugins: t.has("plugins"),
        all: !1
    };
}
i.uz;
const ut = {
    getAllAgentSkills: async ()=>[],
    reload () {},
    onDidChangeSkills: ()=>()=>{},
    dispose () {}
};
function dt() {
    return {
        cursorRulesService: new Ae,
        subagentsService: new s.KpW,
        agentSkillsService: ut,
        getAgentSkills: async ()=>[],
        reloadSkillRoots () {},
        dispose () {}
    };
}
function ht(e) {
    const t = ct(e.sources);
    if (function(e) {
        return ot.every((t)=>!e[t]);
    }(t)) return dt();
    const r = t.project ? [
        ...e.workspacePaths
    ] : [], n = !0 === t.user;
    if (0 === r.length && !n) return dt();
    Xe(e.ripgrepPath);
    const i = (0, d.q6)(), o = e.getThirdPartyExtensibilityEnabled ?? (()=>!0), a = e.userHome ?? (0, it.homedir)(), c = !0 === e.allowExternalSubagentSymlinks, l = [];
    for (const t of r)l.push(new s.KOV(i, e.gitExecutor, t, !0, o, e.fileWatcher, e.ignoreService));
    let u;
    (r.length > 0 || n) && (u = new s.EVC(i, r, n ? a : `${r[0]}/.agent-host-exec-no-user-home`, e.gitExecutor, !0, e.fileWatcher, o, e.initialBuiltinSkillsSyncPromise ?? Promise.resolve(), e.surface ?? "headless", void 0, ()=>e.getAgentStoreSkillsContext?.().agentStoreSkillsDirs ?? [], e.agentSkillsCatalogCache), l.push(u));
    const h = 0 === l.length ? new Ae : 1 === l.length ? l[0] : new s.Px0(l, e.getAgentStoreSkillsContext ?? (()=>s.$3f)), p = [];
    if (t.project) for (const e of r)p.push(new s.VzO(e, o, "workspace", c));
    n && p.push(new s.VzO(a, o, "user", c));
    const f = 0 === p.length ? new s.KpW : 1 === p.length ? p[0] : new s.o_K(p), g = u ?? ut;
    return {
        cursorRulesService: h,
        subagentsService: f,
        agentSkillsService: g,
        getAgentSkills: (e)=>g.getAllAgentSkills(e),
        reloadSkillRoots () {
            u?.reloadSkillRoots();
        },
        dispose () {
            h.dispose();
        }
    };
}
function pt(e) {
    const t = new Set;
    for (const r of e)r.length > 0 && t.add(r);
    return [
        ...t
    ];
}
class ft {
    constructor(e){
        this.processRoutingEnabled = e, this.sessions = new Map, this.listeners = new Set;
    }
    isRoutingEnabled() {
        if (this.processRoutingEnabled) return !0;
        for (const e of this.sessions.values())if (e.enabled) return !0;
        return !1;
    }
    localGrantIdentifiers() {
        const e = new Set;
        for (const t of this.sessions.values())for (const r of t.grantIdentifiers)e.add(r);
        return e;
    }
    noteSession(e, t) {
        const r = {
            enabled: !0 === t?.hostedMcpRoutingEnabled,
            grantIdentifiers: pt((t?.hostedMcpLocalGrantIdentifiers ?? []).map((e)=>e.trim()))
        }, s = this.fingerprint();
        this.sessions.set(e, r), this.fireIfChanged(s);
    }
    forgetSession(e) {
        if (!this.sessions.has(e)) return;
        const t = this.fingerprint();
        this.sessions.delete(e), this.fireIfChanged(t);
    }
    onDidChange(e) {
        return this.listeners.add(e), {
            dispose: ()=>{
                this.listeners.delete(e);
            }
        };
    }
    fingerprint() {
        return JSON.stringify([
            this.isRoutingEnabled(),
            [
                ...this.localGrantIdentifiers()
            ].sort()
        ]);
    }
    fireIfChanged(e) {
        if (this.fingerprint() !== e) for (const e of this.listeners)e();
    }
}
class gt {
    constructor(e){
        this.routingEnabled = e, this.includeDefinition = (e)=>!this.routingEnabled() || (void 0 === this.routingFilter ? "stdio" === e.kind : this.routingFilter(e));
    }
    setRoutingFilter(e) {
        this.routingFilter = e;
    }
    clearRoutingFilter() {
        this.routingFilter = void 0;
    }
    hasRoutingFilter() {
        return void 0 !== this.routingFilter;
    }
}
class mt {
    constructor(e){
        this.listeners = new Set, this.subscriptions = [], this.flips = Promise.resolve(), this.disposed = !1, this.lease = e.lease, this.filter = e.filter, this.state = e.state, this.log = e.log ?? (()=>{});
        const t = e.lease, r = e.filter, s = e.transport;
        this.canRoute = void 0 !== s, this.createRouting = ()=>{
            let n;
            return n = new ve({
                transport: s,
                caller: e.caller,
                deviceTag: e.deviceTag,
                metrics: e.metrics,
                listingTtlMs: e.listingTtlMs,
                listingWaitCapMs: e.listingWaitCapMs,
                serveLastListingOnTtl: e.serveLastListingOnTtl,
                serveLastListingOnChange: e.serveLastListingOnChange,
                createWrappedLease: async (e, s)=>{
                    if (this.routingProvider !== n || this.disposed) throw new Error("hosted-mcp-routing: provider replaced before its placement listing finished");
                    return r.setRoutingFilter(s.includeDefinition), await t.rebuild(), function(e) {
                        return {
                            getTools: (t)=>e.getTools(t),
                            getToolSet: (t)=>e.getToolSet(t),
                            getClients: (t)=>e.getClients(t),
                            getClient: (t, r)=>e.getClient(t, r),
                            getInstructions: (t)=>e.getInstructions(t),
                            getToolsForServers: (t, r)=>e.getToolsForServers(t, r),
                            onDidChange: (t)=>e.onDidChange(t),
                            dispose: ()=>{}
                        };
                    }(t);
                },
                ...void 0 === e.grantMigration ? {} : {
                    grantMigration: {
                        migrationEnabled: !0 === e.grantMigration.migrationEnabled,
                        store: e.grantMigration.store,
                        listLocalGrants: e.grantMigration.listLocalGrants
                    }
                }
            }), n;
        }, this.active = this.canRoute && this.state.isRoutingEnabled(), this.active && this.startRouting(), this.subscriptions.push(this.state.onDidChange(()=>{
            this.onGateChange();
        }), this.lease.onDidChange((e)=>{
            this.active || this.fire(e);
        }));
    }
    get routing() {
        return this.routingProvider;
    }
    isRoutingActive() {
        return this.active;
    }
    settled() {
        return this.flips;
    }
    noteGrantChanged(e, t) {
        this.active && !this.disposed && this.routingProvider?.noteGrantChanged(e, t);
    }
    target() {
        return this.active && void 0 !== this.routingProvider ? this.routingProvider : this.lease;
    }
    startRouting() {
        const e = this.createRouting();
        this.routingProvider = e, this.routingSubscription = e.onDidChange((t)=>{
            this.active && this.routingProvider === e && this.fire(t);
        });
    }
    stopRouting() {
        const e = this.routingProvider;
        return this.routingProvider = void 0, this.routingSubscription?.dispose(), this.routingSubscription = void 0, this.filter.clearRoutingFilter(), e;
    }
    onGateChange() {
        const e = this.canRoute && this.state.isRoutingEnabled();
        if (e === this.active || this.disposed) return;
        let t;
        e ? this.startRouting() : t = this.stopRouting(), this.active = e;
        const r = this.routingProvider, s = async ()=>{
            try {
                await this.lease.rebuild();
            } catch (e) {
                this.log(`hosted-mcp-routing: lease rebuild after gate change failed: ${e instanceof Error ? e.message : String(e)}`);
            }
            t?.dispose(), e && void 0 !== r && !this.disposed && r.refreshPlacements((0, d.q6)()).catch((e)=>{
                this.log(`hosted-mcp-routing: placement listing after gate change failed: ${e instanceof Error ? e.message : String(e)}`);
            }), this.fire(void 0);
        };
        this.flips = this.flips.then(s, s);
    }
    async getTools(e) {
        return await this.flips, this.target().getTools(e);
    }
    async getToolSet(e) {
        return await this.flips, this.target().getToolSet(e);
    }
    async getClients(e) {
        return await this.flips, this.target().getClients(e);
    }
    async getClient(e, t) {
        return await this.flips, this.target().getClient(e, t);
    }
    async getInstructions(e) {
        return await this.flips, this.target().getInstructions(e);
    }
    async getToolsForServers(e, t) {
        return await this.flips, this.target().getToolsForServers(e, t);
    }
    onDidChange(e) {
        return this.listeners.add(e), {
            dispose: ()=>{
                this.listeners.delete(e);
            }
        };
    }
    dispose() {
        if (!this.disposed) {
            this.disposed = !0;
            for (const e of this.subscriptions.splice(0))e.dispose();
            this.listeners.clear(), this.stopRouting()?.dispose();
        }
    }
    fire(e) {
        for (const t of this.listeners)t(e);
    }
}
function vt(e) {
    return new mt(e);
}
function wt() {
    let e, t;
    const r = new Promise((r, s)=>{
        e = r, t = s;
    });
    return r.catch(()=>{}), {
        transport: {
            unary: async (e, t, s, n, i, o, a)=>(await r).unary(e, t, s, n, i, o, a),
            stream: async (e, t, s, n, i, o, a)=>(await r).stream(e, t, s, n, i, o, a)
        },
        resolve: (r)=>{
            e?.(r), e = void 0, t = void 0;
        },
        dispose: ()=>{
            t?.(new Error("Connect transport was disposed before it was ready")), e = void 0, t = void 0;
        }
    };
}
