import { require_agentRunWebSocketConnectionContext } from "./agentRunWebSocketConnectionContext.js";
import { require_agentWebSocketLeaseManager } from "./agentWebSocketLeaseManager.js";
import { require_agentWebSocketRunAdapter } from "./agentWebSocketRunAdapter.js";
import { require_ws } from "../../../node_modules/.pnpm/ws@8.21.3/node_modules/ws/index.js";
var __wakaru_require_agentWebSocketRunSession_cache;
export function require_agentWebSocketRunSession() {
if (__wakaru_require_agentWebSocketRunSession_cache) return __wakaru_require_agentWebSocketRunSession_cache;
var exports2 = {};
__wakaru_require_agentWebSocketRunSession_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createAgentWebSocketRunSession = void 0;
var ws_1 = require_ws();
var agentRunWebSocketConnectionContext_js_1 = require_agentRunWebSocketConnectionContext();
var agentWebSocketLeaseManager_js_1 = require_agentWebSocketLeaseManager();
var agentWebSocketRunAdapter_js_1 = require_agentWebSocketRunAdapter();
function upgradeHeaders(headers) {
    const record3 = {};
    headers.forEach((value, name17)=>{
        record3[name17] = value;
    });
    return record3;
}
function dialSocket(upgrade, subprotocol) {
    return new ws_1.WebSocket(upgrade.url, [
        subprotocol
    ], {
        followRedirects: false,
        perMessageDeflate: false,
        headers: upgradeHeaders(upgrade.headers),
        ...upgrade.nodeOptions.ca !== void 0 ? {
            ca: [
                ...upgrade.nodeOptions.ca
            ]
        } : {},
        ...upgrade.nodeOptions.rejectUnauthorized !== void 0 ? {
            rejectUnauthorized: upgrade.nodeOptions.rejectUnauthorized
        } : {}
    });
}
function classifyUpgradeContextMismatch(left, right) {
    if (left.connectionContext.endpoint !== right.connectionContext.endpoint) {
        return "endpoint_changed";
    }
    if (left.connectionContext.teamId !== right.connectionContext.teamId) {
        return "team_changed";
    }
    if (left.connectionContext.hasEffectiveProxy !== right.connectionContext.hasEffectiveProxy) {
        return "proxy_changed";
    }
    const authorizationChanged = (0, agentRunWebSocketConnectionContext_js_1.fingerprintAgentRunCredential)(left.headers.get("authorization") ?? void 0) !== (0, agentRunWebSocketConnectionContext_js_1.fingerprintAgentRunCredential)(right.headers.get("authorization") ?? void 0);
    if (authorizationChanged) {
        return "authorization_changed";
    }
    return "connection_context_changed";
}
var createAgentWebSocketRunSession = (options2)=>{
    const createSocket = options2.createSocket ?? dialSocket;
    const leaseManager = new agentWebSocketLeaseManager_js_1.AgentWebSocketLeaseManager({
        createSocket: (upgrade, subprotocol)=>options2.runWithNetworkContext(()=>createSocket(upgrade, subprotocol)),
        contextsEqual: (left, right)=>(0, agentRunWebSocketConnectionContext_js_1.agentRunWebSocketConnectionContextsEqual)(left.connectionContext, right.connectionContext),
        classifyContextMismatch: classifyUpgradeContextMismatch,
        ...options2.maxConnections !== void 0 ? {
            maxConnections: options2.maxConnections
        } : {},
        ...options2.keepalivePingIntervalMs !== void 0 ? {
            keepalivePingIntervalMs: options2.keepalivePingIntervalMs
        } : {},
        ...options2.keepalivePingTimeoutMs !== void 0 ? {
            keepalivePingTimeoutMs: options2.keepalivePingTimeoutMs
        } : {},
        ...options2.timers !== void 0 ? {
            timers: options2.timers
        } : {},
        ...options2.observePreconnect === void 0 ? {} : {
            observePreconnect: options2.observePreconnect
        },
        ...options2.onPoolWentCold === void 0 ? {} : {
            onPoolWentCold: options2.onPoolWentCold
        },
        ...options2.onIdleSocketsExhausted === void 0 ? {} : {
            onIdleSocketsExhausted: options2.onIdleSocketsExhausted
        },
        ...options2.observeLifecycle === void 0 ? {} : {
            observeLifecycle: options2.observeLifecycle
        }
    });
    const adapter = new agentWebSocketRunAdapter_js_1.AgentWebSocketRunAdapter({
        leaseManager,
        connectionUsePolicy: "sequential-runs",
        ...options2.timers !== void 0 ? {
            timers: options2.timers
        } : {},
        ...options2.observeFirstMessagePipeline !== void 0 ? {
            observeFirstMessagePipeline: options2.observeFirstMessagePipeline
        } : {}
    });
    return {
        run: (upgrade, request3)=>adapter.run(upgrade, request3),
        preconnect: (upgrade, preconnectOptions = {})=>leaseManager.preconnect(upgrade, {
                ...preconnectOptions,
                reservationId: upgrade.requestId
            }),
        retireWhenIdle: (cause)=>leaseManager.retireWhenIdle(cause),
        close: (cause)=>leaseManager.close(cause)
    };
};
exports2.createAgentWebSocketRunSession = createAgentWebSocketRunSession;

return exports2;
}
