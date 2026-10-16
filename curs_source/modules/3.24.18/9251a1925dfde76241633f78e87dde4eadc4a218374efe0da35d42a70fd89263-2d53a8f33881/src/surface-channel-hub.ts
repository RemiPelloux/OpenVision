import { denyAllPermissions, firstNonEmptyId, invocationDeadlineMs, isFallbackSurfaceKind, isValidResultForKind, orphanSettleStatus, permissionsToProto, settleDeadlineMs, systemSurfaceChannelClock } from "../daemon_metrics_exports.js";
import { AgentHostSurfacePermissionsSnapshot, init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_surface_permissions_map } from "./surface-permissions-map.ts";
var SURFACE_CALLBACK_TIMEOUT_MS, SURFACE_RECONNECT_GRACE_MS, SURFACE_HEARTBEAT_INTERVAL_MS, SURFACE_CLOUD_SUBAGENT_DEADLINE_MS, SURFACE_CALLBACK_PROBE_TIMEOUT_MS, SURFACE_CALLBACK_ERROR_UNIMPLEMENTED_KIND, SURFACE_CALLBACK_ERROR_TIMEOUT, IMPLEMENTED_SURFACE_CALLBACK_KINDS, CATALOG_SURFACE_CALLBACK_KINDS, FALLBACK_SURFACE_CALLBACK_KINDS, RESERVED_SURFACE_CALLBACK_KINDS, CATALOG_SURFACE_CALLBACK_KIND_SET, IMPLEMENTED_SURFACE_CALLBACK_KIND_SET, FAIL_CLOSED_DELIVERED_HOP_KINDS, SURFACE_CALLBACK_RESULT_CASE, SurfaceChannelHub;
export { CATALOG_SURFACE_CALLBACK_KINDS, CATALOG_SURFACE_CALLBACK_KIND_SET, FAIL_CLOSED_DELIVERED_HOP_KINDS, FALLBACK_SURFACE_CALLBACK_KINDS, IMPLEMENTED_SURFACE_CALLBACK_KINDS, IMPLEMENTED_SURFACE_CALLBACK_KIND_SET, RESERVED_SURFACE_CALLBACK_KINDS, SURFACE_CALLBACK_ERROR_TIMEOUT, SURFACE_CALLBACK_ERROR_UNIMPLEMENTED_KIND, SURFACE_CALLBACK_PROBE_TIMEOUT_MS, SURFACE_CALLBACK_RESULT_CASE, SURFACE_CALLBACK_TIMEOUT_MS, SURFACE_CLOUD_SUBAGENT_DEADLINE_MS, SURFACE_HEARTBEAT_INTERVAL_MS, SURFACE_RECONNECT_GRACE_MS, SurfaceChannelHub };
var __wakaru_init_surface_channel_hub_initialized = false;
export function init_surface_channel_hub() {
if (__wakaru_init_surface_channel_hub_initialized) return;
__wakaru_init_surface_channel_hub_initialized = true;
"use strict";
init_agent_host_surface_pb();
init_surface_permissions_map();
SURFACE_CALLBACK_TIMEOUT_MS = 3e4;
SURFACE_RECONNECT_GRACE_MS = 3e4;
SURFACE_HEARTBEAT_INTERVAL_MS = 15e3;
SURFACE_CLOUD_SUBAGENT_DEADLINE_MS = 12e4;
SURFACE_CALLBACK_PROBE_TIMEOUT_MS = 2e3;
SURFACE_CALLBACK_ERROR_UNIMPLEMENTED_KIND = "UNIMPLEMENTED_KIND";
SURFACE_CALLBACK_ERROR_TIMEOUT = "SURFACE_CALLBACK_TIMEOUT";
IMPLEMENTED_SURFACE_CALLBACK_KINDS = [
    "permissions_pull",
    "conversation_search",
    "file_change_notify",
    "hook",
    "git",
    "request_context",
    "cloud_subagent",
    "saved_model_parameters",
    "required_global_commands",
    "canvas",
    "mcp_writer",
    "agent_host_plugins",
    "agent_host_agent_store"
];
CATALOG_SURFACE_CALLBACK_KINDS = [
    "permissions_pull",
    "conversation_search",
    "file_change_notify",
    "hook",
    "git",
    "canvas",
    "agent_host_plugins",
    "agent_host_agent_store",
    "mcp_writer",
    "cloud_subagent",
    "saved_model_parameters",
    "required_global_commands",
    "find_subagent",
    "request_context"
];
FALLBACK_SURFACE_CALLBACK_KINDS = [
    "conversation_search",
    "hook",
    "git",
    "request_context",
    "saved_model_parameters",
    "required_global_commands",
    "agent_host_plugins"
];
RESERVED_SURFACE_CALLBACK_KINDS = CATALOG_SURFACE_CALLBACK_KINDS;
CATALOG_SURFACE_CALLBACK_KIND_SET = new Set(CATALOG_SURFACE_CALLBACK_KINDS);
IMPLEMENTED_SURFACE_CALLBACK_KIND_SET = new Set(IMPLEMENTED_SURFACE_CALLBACK_KINDS);
FAIL_CLOSED_DELIVERED_HOP_KINDS = new Set([
    "mcp_writer",
    "canvas",
    "agent_host_plugins",
    "agent_host_agent_store"
]);
SURFACE_CALLBACK_RESULT_CASE = {
    permissions_pull: "permissions",
    conversation_search: "conversationSearch",
    file_change_notify: void 0,
    hook: "hook",
    git: "git",
    canvas: "canvas",
    agent_host_plugins: "agentHostPlugins",
    agent_host_agent_store: "agentHostAgentStore",
    mcp_writer: "mcpWriter",
    cloud_subagent: "cloudSubagent",
    saved_model_parameters: "savedModelParameters",
    required_global_commands: "requiredGlobalCommands",
    find_subagent: "findSubagent",
    request_context: "requestContext"
};
SurfaceChannelHub = class {
    constructor(options2){
        this.hadSurface = new Set();
        this.channels = new Map();
        this.channelGeneration = new Map();
        this.pendingRespond = new Map();
        this.pendingInvocations = new Map();
        this.deadlineLessPending = new Set();
        this.waiters = new Map();
        this.attachRoutes = new Map();
        this.heartbeats = new Set();
        this.unboundKinds = new Map();
        this.boundKinds = new Map();
        this.provenKinds = new Map();
        this.inFlightFallbackHops = new Map();
        this.hopAborts = new Map();
        this.nextCallbackId = 1;
        this.nextGeneration = 1;
        this.nextAttachGeneration = 1;
        this.disposed = false;
        this.clock = options2?.clock ?? systemSurfaceChannelClock();
        this.heartbeatIntervalMs = options2?.heartbeatIntervalMs ?? SURFACE_HEARTBEAT_INTERVAL_MS;
        this.permissionsSnapshotFor = options2?.permissionsSnapshotFor;
    }
    hasEverHadSurface(clientInstanceId) {
        return this.hadSurface.has(clientInstanceId);
    }
    hasOpenChannel(clientInstanceId) {
        return this.channels.has(clientInstanceId);
    }
    pendingCallbackCount() {
        return this.pendingRespond.size;
    }
    setAttachRoute(args) {
        const session = args.sessionId.trim();
        const client = args.clientInstanceId.trim();
        if (session.length === 0 || client.length === 0) {
            return 0;
        }
        const generation = this.nextAttachGeneration;
        this.nextAttachGeneration += 1;
        const live = this.attachRoutes.get(session) ?? [];
        live.push({
            generation,
            clientInstanceId: client
        });
        this.attachRoutes.set(session, live);
        return generation;
    }
    clearAttachRoute(sessionId, generation) {
        const session = sessionId.trim();
        if (session.length === 0) {
            return;
        }
        if (generation === void 0) {
            this.attachRoutes.delete(session);
            return;
        }
        const live = this.attachRoutes.get(session);
        if (live === void 0) {
            return;
        }
        const remaining = live.filter((route)=>route.generation !== generation);
        if (remaining.length === 0) {
            this.attachRoutes.delete(session);
            return;
        }
        this.attachRoutes.set(session, remaining);
    }
    attachRoute(sessionId) {
        const live = this.attachRoutes.get(sessionId.trim());
        if (live === void 0 || live.length === 0) {
            return void 0;
        }
        let latest;
        for (const route of live){
            if (latest === void 0 || route.generation > latest.generation) {
                latest = route;
            }
        }
        return latest?.clientInstanceId;
    }
    resolveCallbackTarget(args) {
        return this.attachRoute(args.sessionId) ?? args.persistedOwner;
    }
    isKindUnbound(clientInstanceId, kind) {
        return this.unboundKinds.get(clientInstanceId)?.has(kind) === true;
    }
    markKindUnbound(clientInstanceId, kind) {
        const clientId = clientInstanceId.trim();
        if (clientId.length === 0) {
            return;
        }
        const kinds = this.unboundKinds.get(clientId) ?? new Set();
        kinds.add(kind);
        this.unboundKinds.set(clientId, kinds);
        this.boundKinds.get(clientId)?.delete(kind);
        this.provenKinds.get(clientId)?.delete(kind);
    }
    isKindBound(clientInstanceId, kind) {
        return this.boundKinds.get(clientInstanceId)?.has(kind) === true;
    }
    markKindBound(clientInstanceId, kind) {
        const clientId = clientInstanceId.trim();
        if (clientId.length === 0) {
            return;
        }
        const unbound = this.unboundKinds.get(clientId);
        unbound?.delete(kind);
        if (unbound !== void 0 && unbound.size === 0) {
            this.unboundKinds.delete(clientId);
        }
        const kinds = this.boundKinds.get(clientId) ?? new Set();
        kinds.add(kind);
        this.boundKinds.set(clientId, kinds);
    }
    markKindProven(clientInstanceId, kind) {
        this.markKindBound(clientInstanceId, kind);
        const clientId = clientInstanceId.trim();
        if (clientId.length === 0) {
            return;
        }
        const kinds = this.provenKinds.get(clientId) ?? new Set();
        kinds.add(kind);
        this.provenKinds.set(clientId, kinds);
    }
    isKindProven(clientInstanceId, kind) {
        return this.provenKinds.get(clientInstanceId)?.has(kind) === true;
    }
    canHopKind(clientInstanceId, kind) {
        return this.hasOpenChannel(clientInstanceId) && !this.isKindUnbound(clientInstanceId, kind);
    }
    resolveHopTarget(args) {
        const target = this.resolveCallbackTarget({
            sessionId: args.sessionId,
            persistedOwner: args.persistedOwner
        });
        if (target === void 0 || target.length === 0) {
            return void 0;
        }
        if (!this.canHopKind(target, args.kind)) {
            return void 0;
        }
        return target;
    }
    async *openChannel(request3, signal) {
        const clientInstanceId = request3.clientInstanceId.trim();
        void request3.workspacePaths;
        if (clientInstanceId.length === 0) {
            throw new Error("client_instance_id is required");
        }
        if (this.disposed) {
            throw new Error("surface channel hub is disposed");
        }
        const prior = this.channels.get(clientInstanceId);
        prior?.replace();
        this.orphanPendingForGeneration(clientInstanceId, prior?.generation, "aborted");
        this.hadSurface.add(clientInstanceId);
        this.unboundKinds.delete(clientInstanceId);
        const generation = this.nextGeneration;
        this.nextGeneration += 1;
        this.channelGeneration.set(clientInstanceId, generation);
        const queue = [];
        let wake;
        let replaced = false;
        const channel = {
            generation,
            push (event) {
                queue.push(event);
                wake?.();
            },
            replace: ()=>{
                replaced = true;
                wake?.();
            }
        };
        this.channels.set(clientInstanceId, channel);
        this.notifyWaiters(clientInstanceId, {
            status: "open"
        });
        this.retargetPendingToGeneration(clientInstanceId, generation);
        const pushHeartbeat = ()=>{
            channel.push({
                case: "heartbeat",
                heartbeat: {
                    epochMs: BigInt(this.clock.now())
                }
            });
        };
        pushHeartbeat();
        this.repushPendingForClient(clientInstanceId);
        let beat = this.scheduleBeats(()=>this.channels.get(clientInstanceId) === channel, pushHeartbeat);
        if (beat !== void 0) {
            this.heartbeats.add(beat);
        }
        const onAbort = ()=>{
            wake?.();
        };
        signal.addEventListener("abort", onAbort);
        try {
            while(!signal.aborted && !this.disposed){
                if (replaced) {
                    break;
                }
                const next = queue.shift();
                if (next !== void 0) {
                    yield next;
                    continue;
                }
                await new Promise((resolve36)=>{
                    wake = resolve36;
                    if (signal.aborted || replaced || this.disposed) {
                        resolve36();
                    }
                });
                wake = void 0;
            }
        } finally{
            signal.removeEventListener("abort", onAbort);
            if (beat !== void 0) {
                this.heartbeats.delete(beat);
                beat.dispose();
                beat = void 0;
            }
            if (this.channels.get(clientInstanceId) === channel) {
                this.channels.delete(clientInstanceId);
                if (signal.aborted || this.disposed) {
                    this.orphanPendingForGeneration(clientInstanceId, channel.generation, "denied");
                }
                this.failPendingForClient(clientInstanceId);
            }
        }
    }
    emitAuthRefresh(args) {
        const channel = this.channels.get(args.targetClientInstanceId);
        if (channel === void 0) {
            return false;
        }
        channel.push({
            case: "auth_refresh",
            authRefresh: {
                reason: args.reason
            }
        });
        return true;
    }
    respond(args) {
        const id = args.callbackId.trim();
        const caller = (args.clientInstanceId ?? "").trim();
        const result = args.result;
        const pending = this.pendingRespond.get(id);
        if (id.length === 0 || pending === void 0) {
            return {
                accepted: false
            };
        }
        if (caller.length === 0 || caller !== pending.targetClientInstanceId) {
            return {
                accepted: false
            };
        }
        if (!isValidResultForKind(pending.kind, result)) {
            return {
                accepted: false
            };
        }
        if (this.channelGeneration.get(pending.targetClientInstanceId) !== pending.generation) {
            return {
                accepted: false
            };
        }
        this.pendingRespond.delete(id);
        pending.settle({
            status: "accepted",
            callbackId: id,
            result
        });
        return {
            accepted: true
        };
    }
    orphanPendingForGeneration(clientInstanceId, generation, status) {
        if (generation === void 0) {
            return;
        }
        for (const [callbackId, pending] of [
            ...this.pendingRespond.entries()
        ]){
            if (pending.targetClientInstanceId === clientInstanceId && pending.generation === generation && !this.deadlineLessPending.has(callbackId) && pending.kind !== "cloud_subagent") {
                pending.settle({
                    status: orphanSettleStatus(status, pending.kind)
                });
            }
        }
    }
    retargetPendingToGeneration(clientInstanceId, generation) {
        for (const pending of this.pendingRespond.values()){
            if (pending.targetClientInstanceId !== clientInstanceId) {
                continue;
            }
            pending.generation = generation;
        }
    }
    async routeToClient(clientInstanceId, options2) {
        const clientId = clientInstanceId.trim();
        if (this.channels.has(clientId)) {
            return {
                status: "open"
            };
        }
        if (!this.hadSurface.has(clientId)) {
            return {
                status: "denied"
            };
        }
        const deadlineMs = options2?.deadlineMs ?? SURFACE_CALLBACK_TIMEOUT_MS;
        return await this.waitForOpenOrTimeout(clientId, deadlineMs, options2?.signal);
    }
    async invokeKind(args) {
        if (this.disposed) {
            return {
                status: "denied"
            };
        }
        if (args.signal?.aborted === true) {
            return {
                status: "aborted"
            };
        }
        if (!IMPLEMENTED_SURFACE_CALLBACK_KINDS.includes(args.kind)) {
            return {
                status: "unimplemented",
                code: SURFACE_CALLBACK_ERROR_UNIMPLEMENTED_KIND
            };
        }
        const targetClientInstanceId = firstNonEmptyId(args.targetClientInstanceId, this.attachRoute(args.sessionId));
        if (targetClientInstanceId.length === 0) {
            return {
                status: "denied"
            };
        }
        if (this.isKindUnbound(targetClientInstanceId, args.kind)) {
            return {
                status: "denied"
            };
        }
        const targeted = {
            ...args,
            targetClientInstanceId
        };
        if (args.kind === "file_change_notify") {
            return this.pushFileChangeNotify(targeted);
        }
        const startedBound = this.isKindBound(targetClientInstanceId, args.kind);
        const hop = new AbortController();
        const resolved = {
            ...targeted,
            signal: args.signal === void 0 ? hop.signal : AbortSignal.any([
                args.signal,
                hop.signal
            ])
        };
        this.trackHop(args.sessionId, hop);
        this.beginFallbackHop(targetClientInstanceId, args.kind);
        let result = {
            status: "denied"
        };
        try {
            result = await this.invokeRoutedKind(resolved, startedBound);
        } finally{
            this.endFallbackHop(targetClientInstanceId, args.kind);
            this.untrackHop(args.sessionId, hop);
        }
        if (result.status === "timeout" || result.status === "unimplemented") {
            this.latchUnboundIfIdle(targetClientInstanceId, args.kind);
        }
        return result;
    }
    async invokeRoutedKind(args, startedBound) {
        const routed = await this.routeToClient(args.targetClientInstanceId, {
            deadlineMs: invocationDeadlineMs(args.kind, "route", startedBound),
            signal: args.signal
        });
        const afterRoute = this.invokeStatusAfterRoute(routed, args.signal, args.kind, startedBound);
        if (afterRoute !== void 0) {
            return afterRoute;
        }
        const callbackId = this.allocateCallbackId();
        const pushed = this.pushInvocation(args, callbackId);
        if (!pushed) {
            const reconnected = await this.routeToClient(args.targetClientInstanceId, {
                deadlineMs: SURFACE_RECONNECT_GRACE_MS,
                signal: args.signal
            });
            if (args.signal.aborted) {
                return {
                    status: "aborted"
                };
            }
            if (reconnected.status !== "open") {
                return {
                    status: "denied"
                };
            }
            if (!this.pushInvocation(args, callbackId)) {
                if (args.signal.aborted) {
                    return {
                        status: "aborted"
                    };
                }
                return {
                    status: "denied"
                };
            }
        }
        const settled = await this.waitForRespond({
            callbackId,
            sessionId: args.sessionId,
            kind: args.kind,
            targetClientInstanceId: args.targetClientInstanceId,
            deadlineMs: settleDeadlineMs(args, startedBound),
            signal: args.signal
        });
        if (settled.status === "unimplemented") {
            return settled;
        }
        if (settled.status === "accepted") {
            this.markKindBound(args.targetClientInstanceId, args.kind);
            return settled;
        }
        if (settled.status === "timeout") {
            return this.timeoutResult(args.kind, startedBound);
        }
        return settled;
    }
    pushFileChangeNotify(args) {
        if (!this.hasOpenChannel(args.targetClientInstanceId)) {
            return {
                status: "denied"
            };
        }
        const callbackId = this.allocateCallbackId();
        if (!this.pushInvocation(args, callbackId)) {
            return {
                status: "denied"
            };
        }
        return {
            status: "accepted",
            callbackId
        };
    }
    allocateCallbackId() {
        const callbackId = `cb-${String(this.nextCallbackId)}`;
        this.nextCallbackId += 1;
        return callbackId;
    }
    fallbackHopKey(clientInstanceId, kind) {
        return `${clientInstanceId}\0${kind}`;
    }
    beginFallbackHop(clientInstanceId, kind) {
        if (!isFallbackSurfaceKind(kind)) {
            return;
        }
        const key = this.fallbackHopKey(clientInstanceId, kind);
        this.inFlightFallbackHops.set(key, (this.inFlightFallbackHops.get(key) ?? 0) + 1);
    }
    endFallbackHop(clientInstanceId, kind) {
        if (!isFallbackSurfaceKind(kind)) {
            return;
        }
        const key = this.fallbackHopKey(clientInstanceId, kind);
        const remaining = (this.inFlightFallbackHops.get(key) ?? 1) - 1;
        if (remaining <= 0) {
            this.inFlightFallbackHops.delete(key);
            return;
        }
        this.inFlightFallbackHops.set(key, remaining);
    }
    trackHop(sessionId, hop) {
        const hops = this.hopAborts.get(sessionId) ?? new Set();
        hops.add(hop);
        this.hopAborts.set(sessionId, hops);
    }
    untrackHop(sessionId, hop) {
        const hops = this.hopAborts.get(sessionId);
        hops?.delete(hop);
        if (hops !== void 0 && hops.size === 0) {
            this.hopAborts.delete(sessionId);
        }
    }
    captureHops(sessionIds) {
        const hops = [];
        for (const sessionId of sessionIds){
            hops.push(...this.hopAborts.get(sessionId) ?? []);
        }
        return {
            abort: ()=>{
                for (const hop of hops){
                    hop.abort();
                }
            }
        };
    }
    abortPendingForSession(sessionIds) {
        this.captureHops(sessionIds).abort();
    }
    latchUnboundIfIdle(clientInstanceId, kind) {
        if (!isFallbackSurfaceKind(kind)) {
            return;
        }
        if (this.isKindBound(clientInstanceId, kind)) {
            return;
        }
        if ((this.inFlightFallbackHops.get(this.fallbackHopKey(clientInstanceId, kind)) ?? 0) > 0) {
            return;
        }
        this.markKindUnbound(clientInstanceId, kind);
    }
    latchUnboundEmptyArmIfUnproven(clientInstanceId, kind, _startedBound) {
        if (!isFallbackSurfaceKind(kind)) {
            return;
        }
        if (this.isKindProven(clientInstanceId, kind)) {
            return;
        }
        this.markKindUnbound(clientInstanceId, kind);
    }
    invokeStatusAfterRoute(routed, signal, kind, startedBound) {
        if (signal.aborted) {
            return {
                status: "aborted"
            };
        }
        if (routed.status === "denied") {
            return {
                status: "denied"
            };
        }
        if (routed.status === "timeout") {
            return this.timeoutResult(kind, startedBound);
        }
        return void 0;
    }
    timeoutResult(kind, startedBound) {
        return {
            status: "timeout",
            code: SURFACE_CALLBACK_ERROR_TIMEOUT,
            ...startedBound || !isFallbackSurfaceKind(kind) ? {} : {
                probe: true
            }
        };
    }
    pushInvocation(args, callbackId) {
        const targetClientInstanceId = args.targetClientInstanceId;
        const invocation = {
            callbackId,
            sessionId: args.sessionId,
            ...args.rootSessionId === void 0 || args.rootSessionId.length === 0 ? {} : {
                rootSessionId: args.rootSessionId
            },
            targetClientInstanceId,
            kind: args.kind,
            ...args.fileChangeNotify === void 0 ? {} : {
                fileChangeNotify: args.fileChangeNotify
            },
            ...args.hook === void 0 ? {} : {
                hook: args.hook
            },
            ...args.git === void 0 ? {} : {
                git: args.git
            },
            ...args.conversationSearch === void 0 ? {} : {
                conversationSearch: args.conversationSearch
            },
            ...args.requestContext === void 0 ? {} : {
                requestContext: args.requestContext
            },
            ...args.cloudSubagent === void 0 ? {} : {
                cloudSubagent: args.cloudSubagent
            },
            ...args.savedModelParameters === void 0 ? {} : {
                savedModelParameters: args.savedModelParameters
            },
            ...args.requiredGlobalCommands === void 0 ? {} : {
                requiredGlobalCommands: args.requiredGlobalCommands
            },
            ...args.canvas === void 0 ? {} : {
                canvas: args.canvas
            },
            ...args.mcpWriter === void 0 ? {} : {
                mcpWriter: args.mcpWriter
            },
            ...args.agentHostPlugins === void 0 ? {} : {
                agentHostPlugins: args.agentHostPlugins
            },
            ...args.agentHostAgentStore === void 0 ? {} : {
                agentHostAgentStore: args.agentHostAgentStore
            }
        };
        const channel = this.channels.get(targetClientInstanceId);
        if (channel === void 0 || targetClientInstanceId.length === 0) {
            return false;
        }
        if (args.kind !== "file_change_notify") {
            this.pendingInvocations.set(callbackId, invocation);
        }
        const pending = this.pendingRespond.get(callbackId);
        if (pending !== void 0) {
            pending.generation = channel.generation;
        }
        channel.push({
            case: "invocation",
            invocation
        });
        return true;
    }
    waitForRespond(args) {
        const callbackId = args.callbackId;
        const sessionId = args.sessionId;
        const kind = args.kind;
        const targetClientInstanceId = args.targetClientInstanceId;
        const signal = args.signal;
        const deadlineMs = args.deadlineMs;
        return new Promise((resolve36)=>{
            let settled = false;
            let timeout2;
            const onAbort = ()=>{
                finish({
                    status: "aborted"
                });
            };
            const finish = (result)=>{
                if (settled) {
                    return;
                }
                settled = true;
                timeout2?.dispose();
                signal.removeEventListener("abort", onAbort);
                this.pendingRespond.delete(callbackId);
                this.pendingInvocations.delete(callbackId);
                this.deadlineLessPending.delete(callbackId);
                if (result.status !== "accepted") {
                    resolve36(result);
                    return;
                }
                if (result.result?.case === "error" && result.result.value.code === SURFACE_CALLBACK_ERROR_UNIMPLEMENTED_KIND) {
                    resolve36({
                        status: "unimplemented",
                        code: SURFACE_CALLBACK_ERROR_UNIMPLEMENTED_KIND
                    });
                    return;
                }
                resolve36({
                    status: "accepted",
                    callbackId,
                    result: this.resolvedResult(sessionId, kind, result.result)
                });
            };
            if (signal.aborted) {
                onAbort();
                return;
            }
            signal.addEventListener("abort", onAbort, {
                once: true
            });
            if (deadlineMs !== void 0) {
                timeout2 = this.clock.setTimeout(()=>{
                    finish({
                        status: "timeout",
                        code: SURFACE_CALLBACK_ERROR_TIMEOUT
                    });
                }, deadlineMs);
            } else {
                this.deadlineLessPending.add(callbackId);
            }
            const existing = this.pendingRespond.get(callbackId);
            this.pendingRespond.set(callbackId, {
                settle: finish,
                kind,
                targetClientInstanceId,
                generation: existing?.generation ?? this.channels.get(targetClientInstanceId)?.generation ?? 0
            });
        });
    }
    resolvedResult(sessionId, kind, result) {
        if (kind !== "permissions_pull") {
            return result;
        }
        return {
            case: "permissions",
            value: new AgentHostSurfacePermissionsSnapshot({
                permissions: this.snapshotProto(sessionId)
            })
        };
    }
    snapshotProto(sessionId) {
        const perms = this.permissionsSnapshotFor?.(sessionId) ?? denyAllPermissions();
        return permissionsToProto(perms);
    }
    failPendingForClient(clientInstanceId) {
        for (const [callbackId, pending] of [
            ...this.pendingRespond.entries()
        ]){
            if (pending.targetClientInstanceId !== clientInstanceId) {
                continue;
            }
            if (!this.deadlineLessPending.has(callbackId)) {
                continue;
            }
            pending.settle({
                status: "denied"
            });
        }
    }
    repushPendingForClient(clientInstanceId) {
        const channel = this.channels.get(clientInstanceId);
        if (channel === void 0) {
            return;
        }
        for (const invocation of this.pendingInvocations.values()){
            if (invocation.targetClientInstanceId !== clientInstanceId) {
                continue;
            }
            channel.push({
                case: "invocation",
                invocation
            });
        }
    }
    dispose() {
        this.disposed = true;
        for (const beat of this.heartbeats){
            beat.dispose();
        }
        this.heartbeats.clear();
        for (const channel of this.channels.values()){
            channel.replace();
        }
        this.channels.clear();
        for (const clientId of [
            ...this.waiters.keys()
        ]){
            this.notifyWaiters(clientId, {
                status: "denied"
            });
        }
        for (const pending of [
            ...this.pendingRespond.values()
        ]){
            pending.settle({
                status: "aborted"
            });
        }
        this.pendingRespond.clear();
        this.pendingInvocations.clear();
        this.deadlineLessPending.clear();
        this.attachRoutes.clear();
        this.unboundKinds.clear();
        this.boundKinds.clear();
        this.provenKinds.clear();
        this.inFlightFallbackHops.clear();
        this.hopAborts.clear();
        const pendingWaiters = [
            ...this.waiters.values()
        ];
        this.waiters.clear();
        for (const waiters of pendingWaiters){
            for (const waiter of waiters){
                waiter({
                    status: "denied"
                });
            }
        }
    }
    scheduleBeats(stillOpen, beat) {
        let current;
        const schedule = ()=>{
            current = this.clock.setTimeout(()=>{
                if (!stillOpen()) {
                    return;
                }
                beat();
                schedule();
            }, this.heartbeatIntervalMs);
        };
        schedule();
        return {
            dispose: ()=>{
                current?.dispose();
            }
        };
    }
    notifyWaiters(clientInstanceId, result) {
        const waiters = this.waiters.get(clientInstanceId);
        if (waiters === void 0) {
            return;
        }
        this.waiters.delete(clientInstanceId);
        for (const waiter of waiters){
            waiter(result);
        }
    }
    waitForOpenOrTimeout(clientInstanceId, deadlineMs, signal) {
        return new Promise((resolve36)=>{
            let settled = false;
            const finish = (result)=>{
                if (settled) {
                    return;
                }
                settled = true;
                timeout2.dispose();
                signal?.removeEventListener("abort", onAbort);
                const waiters = this.waiters.get(clientInstanceId);
                waiters?.delete(finish);
                if (waiters !== void 0 && waiters.size === 0) {
                    this.waiters.delete(clientInstanceId);
                }
                resolve36(result);
            };
            const onAbort = ()=>{
                finish({
                    status: "denied"
                });
            };
            const timeout2 = this.clock.setTimeout(()=>{
                finish({
                    status: "timeout"
                });
            }, deadlineMs);
            if (this.disposed) {
                finish({
                    status: "denied"
                });
                return;
            }
            if (this.channels.has(clientInstanceId)) {
                finish({
                    status: "open"
                });
                return;
            }
            if (signal?.aborted === true) {
                finish({
                    status: "denied"
                });
                return;
            }
            const pending = this.waiters.get(clientInstanceId) ?? new Set();
            pending.add(finish);
            this.waiters.set(clientInstanceId, pending);
            signal?.addEventListener("abort", onAbort);
        });
    }
};

}
