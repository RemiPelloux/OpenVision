import { P_ } from "./activity-reconciler.ts";
import { Am, Kl } from "./client-adapter.ts";
import { Tm } from "./connection-metrics.ts";
import { sm } from "./event-log.ts";
import { un } from "./index_5.ts";
import { Om } from "./lazy-auth-hosts.ts";
import { Wt } from "./log-metadata.ts";
import { $r } from "./logger.ts";
import { nn } from "./mcp-fsm-timing-config.ts";
import { Jg } from "./mcp-inline-reconnect-cooldown.ts";
import { h_ } from "./mcp-session-404-tombstone-config.ts";
import { dn } from "./observability.ts";
import { cn } from "./reconnect-manager.ts";
import { eo } from "./retry-after-cooldown.ts";
import { su } from "./transport-factory.ts";
import { h } from "./tslib.es6.js";
import { $l, AE, A_, EE, Gn, Hg, I8, Im, J, Ot, PE, Qi, Qt, RE, Wg, be, bl, co, kw, l_, ln, nE, om, ot, qe, tu, u_, vs, wE, zg, zi, zm } from "./us.js";
import { PromptListChangedNotificationSchema as A8 } from "@modelcontextprotocol/sdk/types.js";
import { ListRootsRequestSchema as E8 } from "@modelcontextprotocol/sdk/types.js";
import { ResourceListChangedNotificationSchema as R8 } from "@modelcontextprotocol/sdk/types.js";
import { ResourceUpdatedNotificationSchema as T8 } from "@modelcontextprotocol/sdk/types.js";
import { Client as b8 } from "@modelcontextprotocol/sdk/client/index.js";
import { ToolListChangedNotificationSchema as k8 } from "@modelcontextprotocol/sdk/types.js";
import { ElicitRequestSchema as w8 } from "@modelcontextprotocol/sdk/types.js";
function mf(e, t) {
    return Gn(e, t);
}
var Wm, Gm, Km;
export { Gm, Km, Wm, mf };
var __wakaru_P8_initialized = false;
export function P8() {
if (__wakaru_P8_initialized) return;
__wakaru_P8_initialized = true;
"use strict";
h(), nn(), Jg(), ot(), h_(), un(), Wt(), $r(), Om(), dn(), cn(), Am(), Tm(), eo(), su(), Wm = class {
    constructor(e){
        this.onRuntimeEvent = e, this.connectPhaseComplete = !1, this.connectPhaseEvents = [];
    }
    emit(e) {
        if (!this.connectPhaseComplete) {
            this.connectPhaseEvents.push(e);
            return;
        }
        this.onRuntimeEvent(this, e);
    }
    markConnectPhaseComplete() {
        this.connectPhaseComplete = !0;
    }
    getConnectPhaseAuthRequiredEvidence() {
        const e = this.connectPhaseEvents.find((t)=>t.kind === "auth_required");
        return {
            hadAuthRequiredEvent: e !== void 0,
            authorizationUrl: e?.authorizationUrl
        };
    }
    getConnectPhaseEvents() {
        return this.connectPhaseEvents;
    }
}, Gm = class {
    constructor(e){
        this.identifier = e, this.closePromises = new WeakMap;
    }
    setClient(e) {
        this.client = e, this.closeRequestedReason !== void 0 && this.closeCurrent(this.closeRequestedReason);
    }
    requestClose(e) {
        return this.closeRequestedReason = e, this.closeCurrent(e);
    }
    commit(e) {
        this.client === e && (this.client = void 0);
    }
    closeCurrent(e) {
        const t = this.client;
        if (!t) return Promise.resolve();
        const r = this.closePromises.get(t);
        if (r) return r;
        J(this.identifier).debug("Closing in-flight MCP connection attempt", {
            reason: e
        });
        const n = Promise.resolve().then(()=>t.close()).catch((s)=>{
            J(this.identifier).debug("Error closing in-flight MCP connection attempt:", s);
        });
        return this.closePromises.set(t, n), n;
    }
}, Km = class {
    constructor(e, t, r, n, s, i){
        this.config = r, this.host = n, this.callbacks = s, this.connectionState = {
            type: "idle"
        }, this.authState = {
            type: "unknown"
        }, this.lastStatus = {
            type: "disconnected"
        }, this.eventLog = new sm, this.subscribedResources = new Set, this.pendingElicitationRequests = new Map, this.currentElicitationProvider = new Map, this.currentToolCallContext = new Map, this.toolNameMap = new Map, this.queue = [], this.draining = !1, this.disposed = !1, this.probeInFlightCount = 0, this.clientGeneration = 0, this.omitReconnectSessionCaptureForNextAttempt = !1, this.consecutiveStreamableHttpSession404Count = 0, this.identifier = e, this.serverInfo = t, this.serverName = i, this.activities = new P_((o)=>A_(o, {
                getStabilityThresholdMs: ()=>zi(this.getReconnectConfigContext()),
                getDegradedProbeDelayMs: ()=>{
                    const a = $l(this.identifier);
                    return a !== void 0 ? Math.max(a, bl(this.getReconnectConfigContext())) : bl(this.getReconnectConfigContext());
                },
                getKeepaliveProbeDelayMs: ()=>zg(this.getReconnectConfigContext()),
                getKeepaliveJitterMs: ()=>Wg(this.getReconnectConfigContext()),
                getKeepaliveProbesEnabled: ()=>!this.shouldSuppressConnectedKeepaliveProbe(),
                getRetryNonRetryableAutomatically: ()=>be("retryNonRetryableAutomatically", this.getReconnectConfigContext()) === !0
            })), this.serviceStarter = this.createServiceStarter();
    }
    connect() {
        this.enqueue([
            {
                target: "connection",
                kind: "connect_start"
            }
        ]);
    }
    closeCurrentServerInstance(e) {
        if (this.activeRuntimeAuthEventSink = void 0, !!this.serverInstance) {
            this.nullifyCallbacks(), e.captureSession && this.captureReconnectSessionInfo(this.serverInstance);
            try {
                this.serverInstance.client.close();
            } catch (t) {
                J(this.identifier).debug(`Error closing client during ${e.reason}: ${t instanceof Error ? t.message : String(t)}`);
            }
            this.serverInstance = void 0;
        }
    }
    cancelPendingElicitations() {
        for (const [e, t] of this.pendingElicitationRequests.entries())this.pendingElicitationRequests.delete(e), t({
            action: "cancel"
        });
    }
    suspendTransport() {
        this.disposed || this.connectionState.type !== "connected" || (this.reconnectSessionInfo = void 0, this.closeCurrentServerInstance({
            captureSession: !1,
            reason: "idle suspend"
        }), this.cancelPendingElicitations(), this.adapter = void 0, this.callbacks.onAdapterRemoved(this.identifier), this.enqueue([
            {
                target: "connection",
                kind: "idle_suspend"
            }
        ]));
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.consecutiveStreamableHttpSession404Count = 0, this.activities.dispose(), this.activeConnectionAttempt?.requestClose("dispose"), this.closeCurrentServerInstance({
            captureSession: !0,
            reason: "dispose"
        }), this.subscribedResources.clear(), this.cancelPendingElicitations(), this.adapter = void 0, this.callbacks.onAdapterRemoved(this.identifier), this.queue.length = 0);
    }
    getConnectPromise() {
        return this.activities.getServicePromise("connection_attempt");
    }
    enqueue(e) {
        this.disposed || (this.queue.push(...e), this.draining || this.drain());
    }
    drain() {
        this.draining = !0;
        let e;
        const t = this.connectionState, r = this.authState;
        let n;
        for(; this.queue.length > 0;){
            const s = this.queue.shift();
            if (this.disposed) break;
            const i = this.connectionState, o = this.authState, a = nE(this.connectionState, this.authState, s, this.config);
            this.connectionState = a.connectionState, this.authState = a.authState, e = a.projectedStatus;
            const c = `${s.target}:${s.kind}`, l = `${zm(i)},auth=${o.type}`, u = `${zm(a.connectionState)},auth=${a.authState.type}`;
            if (this.eventLog.push({
                timestamp: Date.now(),
                event: c,
                stateBefore: l,
                stateAfter: u
            }), l !== u) {
                const p = a.connectionState.type === "failed" && a.connectionState.exhausted === !0, g = p || s.kind === "connect_failure" || s.kind === "transport_error" || s.kind === "transport_closed" || s.kind === "session_invalidated", _ = s.kind === "connect_start" || s.kind === "connect_success" || s.kind === "request_degraded" || s.kind === "server_removed", y = {
                    event: c,
                    stateBefore: l,
                    stateAfter: u,
                    transportType: this.actualTransportType ?? this.serverInfo.type,
                    serverName: this.serverName
                };
                g ? EE(s, p) ? J(this.identifier).warn(`[V2 FSM] ${c}: ${l} -> ${u}`, y) : J(this.identifier).debug(`[V2 FSM] ${c}: ${l} -> ${u}`, y) : _ ? J(this.identifier).info(`[V2 FSM] ${c}: ${l} -> ${u}`, y) : J(this.identifier).debug(`[V2 FSM] ${c}: ${l} -> ${u}`, y);
            }
            n = s.kind, s.target === "connection" && s.kind === "connection_stabilized" && (this.consecutiveStreamableHttpSession404Count = 0), i !== a.connectionState && (this.activities.reconcile(i, a.connectionState, (p)=>this.enqueue(p)), this.activities.reconcileServices(i, a.connectionState, (p)=>this.enqueue(p), this.serviceStarter));
        }
        e !== void 0 && this.hasStatusChanged(e) && (this.lastStatus = e, this.callbacks.onStatusChanged(this.identifier, e), (t.type !== this.connectionState.type || r.type !== this.authState.type) && Qt("mcp.ext.fsm_transitions", 1, "increment", [
            `conn_before:${t.type}`,
            `conn_after:${this.connectionState.type}`,
            `auth_before:${r.type}`,
            `auth_after:${this.authState.type}`,
            `event:${n ?? "unknown"}`,
            `transport:${this.actualTransportType ?? this.serverInfo.type}`
        ])), this.draining = !1;
    }
    createServiceStarter() {
        return (e, t)=>{
            switch(e){
                case "connection_attempt":
                    return this.startConnectionService(t);
                case "health_probe":
                    return this.startHealthProbeService(t);
                default:
                    return e;
            }
        };
    }
    startConnectionService(e) {
        let t = !1;
        const r = new Gm(this.identifier), n = this.runConnectionAttempt(()=>t, e, r).finally(()=>{
            this.activeConnectionAttempt === r && (this.activeConnectionAttempt = void 0);
        });
        return {
            handle: {
                cancel: ()=>{
                    t = !0, r.requestClose("cancel");
                }
            },
            promise: n
        };
    }
    async runConnectionAttempt(e, t, r) {
        const n = Date.now(), s = this.reconnectSessionInfo, i = this.adapter;
        if (this.activeRuntimeAuthEventSink = void 0, e()) return;
        if (this.omitReconnectSessionCaptureForNextAttempt && !this.serverInstance && (this.omitReconnectSessionCaptureForNextAttempt = !1, this.reconnectSessionInfo = void 0), this.serverInstance) {
            this.nullifyCallbacks();
            const p = this.omitReconnectSessionCaptureForNextAttempt;
            p && (this.omitReconnectSessionCaptureForNextAttempt = !1), p || this.captureReconnectSessionInfo(this.serverInstance);
            try {
                this.serverInstance.client.close();
            } catch (g) {
                J(this.identifier).debug(`Error closing client during reconnect: ${g instanceof Error ? g.message : String(g)}`);
            }
            this.serverInstance = void 0, p && (this.reconnectSessionInfo = void 0);
        }
        for (const [p, g] of this.pendingElicitationRequests.entries())this.pendingElicitationRequests.delete(p), g({
            action: "cancel"
        });
        const o = ++this.clientGeneration;
        let a = this.createConnectionAttemptAuthEventSink(), c = this.createSdkClient();
        r.setClient(c), this.activeConnectionAttempt = r;
        const l = this.actualTransportType !== "streamableHttp";
        let u;
        try {
            u = await tu(this.identifier, this.serverInfo, c, this.host, a, this.reconnectSessionInfo, {
                allowDeprecatedSseFallback: l
            });
        } catch (p) {
            const g = p instanceof Error ? p : new Error(String(p));
            u = {
                connectResult: {
                    ok: !1,
                    error: g.message,
                    isRetryable: qe(g, this.serverInfo.type).retryable
                }
            };
        }
        if (!u.connectResult.ok && PE(u.connectResult)) {
            this.reconnectSessionInfo = void 0, J(this.identifier).info("Streamable HTTP reconnect: retrying connection with fresh initialize (no cached session id)");
            try {
                await r.closeCurrent("session-reuse-retry");
            } catch  {}
            if (e()) return;
            c = this.createSdkClient(), r.setClient(c), a = this.createConnectionAttemptAuthEventSink();
            try {
                u = await tu(this.identifier, this.serverInfo, c, this.host, a, void 0, {
                    allowDeprecatedSseFallback: l
                });
            } catch (p) {
                const g = p instanceof Error ? p : new Error(String(p));
                u = {
                    connectResult: {
                        ok: !1,
                        error: g.message,
                        isRetryable: qe(g, this.serverInfo.type).retryable
                    }
                };
            }
        }
        if (e()) {
            await r.requestClose("cancelled-after-connect");
            return;
        }
        const d = u.connectResult, f = [];
        for (const p of a.getConnectPhaseEvents())p.target === "auth" && p.kind === "auth_required" || f.push(p);
        if (d.ok) J(this.identifier).info(`Successfully connected to ${d.actualType} server`), this.actualTransportType = d.actualType, this.serverInstance = {
            transport: d.transport,
            client: d.client,
            type: d.actualType,
            serverInfo: this.serverInfo
        }, r.commit(c), this.reconnectSessionInfo = void 0, this.wireTransportCallbacks(c, o), this.activateRuntimeAuthEventSinkIfEligible(a), s && i ? (i.client = c, i.invalidateToolsCacheKeepingStale(), i.invalidateInstructionsCacheKeepingStale(), i.invalidateResourcesCacheKeepingStale(), this.adapter = i, this.callbacks.onAdapterCreated(this.identifier, i)) : this.createAndRegisterAdapter(c), this.subscribeToResourcesIfSupported(c), vs({
            durationMs: Date.now() - n,
            status: "success",
            transport: d.actualType,
            commandsVersion: "v2"
        }), f.push({
            target: "connection",
            kind: "connect_success"
        });
        else if (d.needsAuth) {
            const p = {
                authUrl: mf(d.authorizationUrl, {
                    includePath: !1
                })
            };
            J(this.identifier).info("MCP OAuth needsAuth (v2)", om({
                event: "mcp_oauth_needs_auth_transition",
                commandsVersion: "v2",
                transportType: this.serverInfo.type,
                needsAuthReason: d.needsAuthReason,
                refreshTokenPresent: d.refreshTokenPresent,
                hadAuthRequiredEvent: d.hadAuthRequiredEvent,
                authorizationUrlPresent: !!d.authorizationUrl,
                siblingRefreshRace: !!d.oauthRefreshDiagnostics?.siblingRefreshRace,
                ...d.oauthRefreshDiagnostics ?? {},
                ...p
            })), vs({
                durationMs: Date.now() - n,
                status: "needs_auth",
                transport: this.serverInfo.type,
                commandsVersion: "v2",
                failureReason: "auth",
                retryable: !0
            }), d.transport && (this.serverInstance = {
                transport: d.transport,
                client: c,
                type: this.serverInfo.type === "stdio" ? "stdio" : this.serverInfo.type === "sse" ? "sse" : "streamableHttp",
                serverInfo: this.serverInfo
            }, r.commit(c), this.wireTransportCallbacks(c, o), this.activateRuntimeAuthEventSinkIfEligible(a)), f.push({
                target: "connection",
                kind: "connect_failure",
                error: "Authorization required",
                isRetryable: !0
            }, {
                target: "auth",
                kind: "auth_required",
                authorizationUrl: d.authorizationUrl
            });
        } else {
            await r.closeCurrent("connect-failure");
            const p = new Error(d.error), g = qe(p, this.serverInfo.type);
            ln(p, this.serverInfo.type) && (this.reconnectSessionInfo = void 0);
            let _ = d.isRetryable ?? g.retryable;
            if (this.serverInfo.type === "streamableHttp") {
                const S = u_(this.getReconnectConfigContext()), v = l_({
                    currentCount: this.consecutiveStreamableHttpSession404Count,
                    sawSession404: ln(p, "streamableHttp"),
                    threshold: S
                });
                this.consecutiveStreamableHttpSession404Count = v.nextCount, v.shouldTombstone && (_ = !1, J(this.identifier).warn(`Tombstoning streamable HTTP connection after ${S} consecutive session HTTP 404 responses; automatic retry disabled`, {
                    transportType: "streamableHttp"
                }));
            }
            const y = {
                ...g,
                retryable: _
            }, m = Date.now() - n, A = {
                transportType: this.serverInfo.type,
                reason: y.reason,
                httpStatus: y.httpStatus,
                retryable: y.retryable,
                durationMs: m
            };
            y.retryable ? J(this.identifier).debug(`Connection failed: ${d.error}`, A) : J(this.identifier).warn(`Connection failed: ${d.error}`, A), Qi({
                identifier: this.identifier,
                phase: "connection",
                error: p,
                serverType: this.serverInfo.type,
                classification: y,
                captureException: !y.retryable && y.reason !== "auth",
                extraData: {
                    transport: this.serverInfo.type
                }
            }), vs({
                durationMs: Date.now() - n,
                status: "error",
                transport: this.serverInfo.type,
                commandsVersion: "v2",
                failureReason: y.reason,
                retryable: y.retryable,
                httpStatusCode: y.httpStatus
            }), f.push({
                target: "connection",
                kind: "connect_failure",
                error: d.error,
                isRetryable: _
            });
        }
        t(f);
    }
    createConnectionAttemptAuthEventSink() {
        return new Wm((e, t)=>this.handleRuntimeAuthEvent(e, t));
    }
    isLazyAuthServer() {
        return this.serverInfo.type === "stdio" ? !1 : Im(this.serverInfo.serverUrl);
    }
    activateRuntimeAuthEventSinkIfEligible(e) {
        this.isLazyAuthServer() && (this.activeRuntimeAuthEventSink = e);
    }
    handleRuntimeAuthEvent(e, t) {
        if (!this.disposed) {
            if (this.activeRuntimeAuthEventSink !== e) {
                J(this.identifier).debug(`Ignoring runtime auth event '${t.kind}' from a superseded or ineligible connection attempt`);
                return;
            }
            J(this.identifier).info(`Dispatching runtime auth event '${t.kind}' to FSM`, om({
                event: "mcp_runtime_auth_event",
                commandsVersion: "v2",
                transportType: this.actualTransportType ?? this.serverInfo.type,
                kind: t.kind,
                ...t.kind === "auth_required" ? {
                    authUrl: mf(t.authorizationUrl, {
                        includePath: !1
                    })
                } : {}
            })), this.enqueue([
                t
            ]);
        }
    }
    wireTransportCallbacks(e, t) {
        e.onerror = (r)=>{
            if (this.clientGeneration !== t) {
                J(this.identifier).debug(`Ignoring stale onerror callback (gen=${t}, current=${this.clientGeneration})`);
                return;
            }
            if (this.probeInFlightCount > 0) {
                const i = Ot(r);
                if (i === 429 || i === 503) return;
            }
            const n = this.actualTransportType ?? this.serverInfo.type, s = AE(r, {
                authState: this.authState,
                transportType: n
            });
            if (s.length > 0) {
                const i = qe(r, n), o = this.serverInfo.type === "streamableHttp" && s.some((l)=>l.target === "connection" && l.kind === "session_invalidated") && ln(r, "streamableHttp");
                if (this.serverInfo.type === "streamableHttp") {
                    const l = u_(this.getReconnectConfigContext()), u = l_({
                        currentCount: this.consecutiveStreamableHttpSession404Count,
                        sawSession404: o,
                        threshold: l
                    });
                    if (this.consecutiveStreamableHttpSession404Count = u.nextCount, u.shouldTombstone) {
                        this.omitReconnectSessionCaptureForNextAttempt = !0;
                        const d = {
                            ...i,
                            retryable: !1
                        };
                        J(this.identifier).warn(`Tombstoning streamable HTTP transport after ${l} consecutive session HTTP 404 responses; automatic retry disabled`, {
                            transportType: n,
                            reason: i.reason,
                            httpStatus: i.httpStatus,
                            authState: this.authState.type
                        }), J(this.identifier).error(`Client error: ${r.message}`, r, {
                            transportType: n,
                            reason: d.reason,
                            httpStatus: d.httpStatus,
                            retryable: !1,
                            authState: this.authState.type
                        }), Qi({
                            identifier: this.identifier,
                            phase: "transport",
                            error: r,
                            serverType: n,
                            classification: d,
                            captureException: !d.retryable && d.reason !== "auth"
                        }), this.enqueue([
                            {
                                target: "connection",
                                kind: "transport_error",
                                error: r.message,
                                isRetryable: !1
                            }
                        ]);
                        return;
                    }
                }
                const a = {
                    transportType: n,
                    reason: i.reason,
                    httpStatus: i.httpStatus,
                    retryable: i.retryable,
                    authState: this.authState.type
                }, c = wE(r, n, i);
                c === "warn" ? J(this.identifier).error(`Client error: ${r.message}`, r, a) : c === "debug" && J(this.identifier).debug(`Client error: ${r.message}`, a), Qi({
                    identifier: this.identifier,
                    phase: "transport",
                    error: r,
                    serverType: n,
                    classification: i,
                    captureException: !i.retryable && i.reason !== "auth"
                }), s.some((l)=>l.target === "connection" && l.kind === "session_invalidated") && (this.omitReconnectSessionCaptureForNextAttempt = !0), this.enqueue(s);
            }
        }, e.onclose = ()=>{
            if (this.clientGeneration !== t) {
                J(this.identifier).debug(`Ignoring stale onclose callback (gen=${t}, current=${this.clientGeneration})`);
                return;
            }
            const r = this.actualTransportType ?? this.serverInfo.type, n = RE({
                authState: this.authState,
                transportType: r
            });
            n.length > 0 && (J(this.identifier).debug("Client closed", {
                transportType: r,
                authState: this.authState.type
            }), this.enqueue(n));
        };
    }
    createSdkClient() {
        const e = {
            elicitation: {
                form: {}
            },
            roots: {
                listChanged: !1
            },
            extensions: {
                "io.modelcontextprotocol/ui": {
                    mimeTypes: [
                        "text/html;profile=mcp-app"
                    ]
                }
            }
        }, t = new b8({
            name: "cursor-vscode",
            version: "1.0.0"
        }, {
            capabilities: e
        });
        return t.setRequestHandler(E8, (r)=>(J(this.identifier).debug("ListRootsRequest received"), {
                roots: this.host.getWorkspaceFolders().map((n)=>({
                        uri: n.uri.toString(),
                        name: n.name
                    }))
            })), t.setNotificationHandler(k8, (r)=>{
            J(this.identifier).debug("ToolListChangedNotification received"), this.adapter?.invalidateToolsCache(), this.callbacks.onOfferingsChanged?.(this.identifier);
        }), t.setNotificationHandler(R8, (r)=>{
            J(this.identifier).debug("ResourceListChangedNotification received"), this.adapter?.invalidateResourcesCache(), this.callbacks.onOfferingsChanged?.(this.identifier);
        }), t.setNotificationHandler(T8, (r)=>{
            J(this.identifier).debug(`ResourceUpdatedNotification received for URI: ${r.params?.uri}`), this.adapter?.invalidateResourcesCache(), this.callbacks.onOfferingsChanged?.(this.identifier);
        }), t.setNotificationHandler(A8, ()=>{
            J(this.identifier).debug("PromptListChangedNotification received"), this.callbacks.onOfferingsChanged?.(this.identifier);
        }), t.setRequestHandler(w8, async (r)=>{
            J(this.identifier).debug(`ElicitRequest received: ${r.params.message}`);
            const n = r.params, s = "requestedSchema" in n, i = this.currentElicitationProvider.get(this.identifier);
            if (i && s) try {
                const o = await i.elicit({
                    message: n.message,
                    requestedSchema: n.requestedSchema
                });
                return {
                    action: o.action,
                    content: o.content
                };
            } catch (o) {
                return J(this.identifier).error(`Error in elicitation provider: ${o instanceof Error ? o.message : String(o)}`, o instanceof Error ? o : void 0), {
                    action: "decline"
                };
            }
            return new Promise((o)=>{
                const a = `${this.identifier}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, c = this.currentToolCallContext.get(this.identifier), l = {
                    id: a,
                    message: n.message,
                    ...s ? {
                        requestedSchema: n.requestedSchema
                    } : {
                        url: n.url,
                        elicitationId: n.elicitationId
                    },
                    serverIdentifier: this.identifier,
                    toolCallId: c
                };
                this.pendingElicitationRequests.set(a, o), this.host.executeCommand("mcp.elicitationRequest", {
                    request: l
                });
            });
        }), t;
    }
    createAndRegisterAdapter(e) {
        const t = this.serverName ?? this.stripIdentifierPrefix(this.identifier);
        let r;
        this.serverInfo.type === "streamableHttp" || this.serverInfo.type === "sse" ? r = {
            url: this.serverInfo.serverUrl,
            headers: this.serverInfo.headers
        } : this.serverInfo.type === "stdio" && (r = {
            command: this.serverInfo.command,
            args: this.serverInfo.args,
            env: this.serverInfo.env
        });
        const n = {
            executeCommand: (s, ...i)=>this.host.executeCommand(s, ...i),
            getStatus: ()=>this.lastStatus,
            getAuthState: ()=>this.authState,
            getServerInfo: ()=>this.serverInfo,
            dispatchEvents: (s, i, o)=>this.enqueue(i),
            reinitializeStreamableHttpConnection: (s, i, o)=>this.handleSessionReinit(o),
            toolNameMap: this.toolNameMap,
            currentElicitationProvider: this.currentElicitationProvider,
            currentToolCallContext: this.currentToolCallContext,
            getInlineReconnectCooldownMs: ()=>kw(this.getReconnectConfigContext())
        };
        this.adapter = new Kl(e, t, this.identifier, n, r), this.callbacks.onAdapterCreated(this.identifier, this.adapter);
    }
    async handleSessionReinit(e) {
        await this.withReconnectLock(async ()=>{
            let t = this.reconnectSessionInfo;
            if (this.serverInstance) {
                this.captureReconnectSessionInfo(this.serverInstance), t = this.reconnectSessionInfo, this.nullifyCallbacks();
                try {
                    this.serverInstance.client.close();
                } catch (s) {
                    J(this.identifier).debug(`Error closing client during session reinit: ${s instanceof Error ? s.message : String(s)}`);
                }
                this.serverInstance = void 0;
            }
            for (const [s, i] of this.pendingElicitationRequests.entries())this.pendingElicitationRequests.delete(s), i({
                action: "cancel"
            });
            let r = this.connectionState.type === "connecting" && this.serverInstance === void 0 ? this.getConnectPromise() : void 0;
            if (r || (this.reconnectSessionInfo = void 0, this.omitReconnectSessionCaptureForNextAttempt = !0, this.enqueue([
                {
                    target: "connection",
                    kind: "session_invalidated"
                }
            ]), r = this.getConnectPromise()), !r) throw new Error("Failed to start MCP session reinitialization");
            await r;
            const n = this.serverInstance;
            if (!n) throw this.reconnectSessionInfo = t, new Error(this.getSessionReinitFailureMessage());
            e != null && (e.client = n.client, e.invalidateToolsCacheKeepingStale(), e.invalidateInstructionsCacheKeepingStale(), e.invalidateResourcesCacheKeepingStale(), this.adapter = e, this.callbacks.onAdapterCreated(this.identifier, e));
        });
    }
    getAdapter() {
        return this.adapter;
    }
    getServerInstance() {
        return this.serverInstance;
    }
    getConnectionState() {
        return this.connectionState;
    }
    getAuthState() {
        return this.authState;
    }
    getLastStatus() {
        return this.lastStatus;
    }
    getServerInfo() {
        return this.serverInfo;
    }
    getReconnectConfigContext() {
        return {
            identifier: this.identifier,
            serverInfo: this.serverInfo
        };
    }
    shouldSuppressConnectedKeepaliveProbe() {
        return this.serverInfo.type === "stdio" ? !1 : this.authState.type !== "unknown" || this.serverInfo.auth !== void 0;
    }
    getEventLog() {
        return this.eventLog.getEntries();
    }
    isDisposed() {
        return this.disposed;
    }
    startHealthProbeService(e) {
        let t = !1;
        const r = this.runHealthProbe(()=>t, e);
        return {
            handle: {
                cancel: ()=>{
                    t = !0;
                }
            },
            promise: r
        };
    }
    async runHealthProbe(e, t) {
        const r = this.adapter;
        if (!r) {
            e() || (this.emitFalseConnectedHealthProbeMetric("no adapter"), t([
                {
                    target: "connection",
                    kind: "health_probe_failed",
                    error: "no adapter"
                }
            ]));
            return;
        }
        const n = r.client;
        try {
            this.probeInFlightCount += 1;
            try {
                const s = Hg(this.getReconnectConfigContext());
                await co(n.ping(), s), e() || t([
                    {
                        target: "connection",
                        kind: "health_probe_succeeded"
                    }
                ]);
                return;
            } catch (s) {
                if (e()) return;
                if (I8(s)) {
                    this.emitFalseConnectedHealthProbeMetric(s), t([
                        {
                            target: "connection",
                            kind: "health_probe_failed",
                            error: s instanceof Error ? s.message : String(s)
                        }
                    ]);
                    return;
                }
            }
            try {
                const s = Hg(this.getReconnectConfigContext()), i = n.getServerCapabilities() ?? {};
                if (i.tools) await co(n.listTools(), s);
                else if (i.resources) await co(n.listResources(), s);
                else if (i.prompts) await co(n.listPrompts(), s);
                else {
                    e() || (this.emitFalseConnectedHealthProbeMetric("ping timeout, no fallback capability"), t([
                        {
                            target: "connection",
                            kind: "health_probe_failed",
                            error: "ping timeout, no fallback capability"
                        }
                    ]));
                    return;
                }
                e() || t([
                    {
                        target: "connection",
                        kind: "health_probe_succeeded"
                    }
                ]);
            } catch (s) {
                if (e()) return;
                this.emitFalseConnectedHealthProbeMetric(s), t([
                    {
                        target: "connection",
                        kind: "health_probe_failed",
                        error: s instanceof Error ? s.message : String(s)
                    }
                ]);
            }
        } catch (s) {
            J(this.identifier).warn(`Health probe unexpected error: ${s instanceof Error ? s.message : String(s)}`), e() || (this.emitFalseConnectedHealthProbeMetric(s), t([
                {
                    target: "connection",
                    kind: "health_probe_failed",
                    error: String(s)
                }
            ]));
        } finally{
            this.probeInFlightCount = Math.max(0, this.probeInFlightCount - 1);
        }
    }
    emitFalseConnectedHealthProbeMetric(e) {
        if (this.connectionState.type !== "connected") return;
        const t = this.actualTransportType ?? this.serverInfo.type, r = [
            "outcome:error",
            `source_state:${this.connectionState.type}`,
            `transport:${t}`,
            "commands_version:v2"
        ], n = qe(e, t);
        r.push(`failure_reason:${n.reason}`), r.push(`retryable:${String(n.retryable)}`), n.httpStatus !== void 0 && r.push(`status_code:${String(n.httpStatus)}`), Qt("mcp.ext.health_probe", 1, "increment", r);
    }
    resolveElicitation(e, t) {
        const r = this.pendingElicitationRequests.get(e);
        return r ? (this.pendingElicitationRequests.delete(e), r(t), !0) : !1;
    }
    nullifyCallbacks() {
        this.serverInstance && (this.serverInstance.client.onclose = void 0, this.serverInstance.client.onerror = void 0);
    }
    captureReconnectSessionInfo(e) {
        if (e.type !== "streamableHttp") {
            this.reconnectSessionInfo = void 0;
            return;
        }
        const t = e.transport, r = t.sessionId;
        if (!r) {
            this.reconnectSessionInfo = void 0;
            return;
        }
        this.reconnectSessionInfo = {
            sessionId: r,
            protocolVersion: t.protocolVersion
        };
    }
    hasStatusChanged(e) {
        const t = this.lastStatus;
        return e.type !== t.type ? !0 : e.type === "error" && t.type === "error" ? e.error !== t.error || e.isRetryable !== t.isRetryable : e.type === "needsAuth" && t.type === "needsAuth" ? e.authorizationUrl !== t.authorizationUrl : e.type === "degraded" && t.type === "degraded" ? e.reason !== t.reason : !1;
    }
    async withReconnectLock(e) {
        const t = this.reconnectLock;
        if (t) {
            await t;
            return;
        }
        const r = e().finally(()=>{
            this.reconnectLock === r && (this.reconnectLock = void 0);
        });
        this.reconnectLock = r, await r;
    }
    getSessionReinitFailureMessage() {
        switch(this.lastStatus.type){
            case "error":
                return this.lastStatus.error;
            case "needsAuth":
                return "Authorization required";
            case "disconnected":
            case "initializing":
            case "connected":
            case "degraded":
                return "Failed to reinitialize MCP session";
            default:
                return this.lastStatus;
        }
    }
    async subscribeToResourcesIfSupported(e) {
        try {
            const t = e.getServerCapabilities() ?? {
                resources: !1
            };
            if (!t.resources || typeof t.resources != "object" || t.resources.subscribe !== !0) return;
            const r = await e.listResources();
            if (!r?.resources?.length) return;
            for (const n of r.resources)try {
                await e.subscribeResource({
                    uri: n.uri
                }), this.subscribedResources.add(n.uri);
            } catch (s) {
                J(this.identifier).debug(`Failed to subscribe to resource ${n.uri}: ${s instanceof Error ? s.message : String(s)}`);
            }
            this.subscribedResources.size > 0 && J(this.identifier).info(`Subscribed to ${this.subscribedResources.size} resources`);
        } catch (t) {
            J(this.identifier).debug(`Error subscribing to resources: ${t instanceof Error ? t.message : String(t)}`);
        }
    }
    stripIdentifierPrefix(e) {
        if (e.startsWith("user-")) return e.slice(5);
        if (e.startsWith("project-")) {
            const t = e.indexOf("-"), r = e.indexOf("-", t + 1);
            return r > 0 ? e.slice(r + 1) : e.slice(8);
        }
        return e;
    }
};

}
