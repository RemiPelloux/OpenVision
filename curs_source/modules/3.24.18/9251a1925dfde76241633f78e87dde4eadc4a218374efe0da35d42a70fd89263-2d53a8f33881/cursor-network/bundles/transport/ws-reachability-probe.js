import { require_structuredLogProvider } from "../structuredLogProvider.js";
import { require_ws } from "../../../node_modules/.pnpm/ws@8.21.3/node_modules/ws/index.js";
var __wakaru_require_ws_reachability_probe_cache;
export function require_ws_reachability_probe() {
if (__wakaru_require_ws_reachability_probe_cache) return __wakaru_require_ws_reachability_probe_cache;
var exports2 = {};
__wakaru_require_ws_reachability_probe_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.wsReachabilityProbeTesting = void 0;
exports2.classifyTlsVendor = classifyTlsVendor;
exports2.attemptWsReachabilityProbe = attemptWsReachabilityProbe;
exports2.attemptWsDurabilityProbe = attemptWsDurabilityProbe;
exports2.scheduleWsReachabilityProbe = scheduleWsReachabilityProbe;
exports2.scheduleWsDurabilityProbe = scheduleWsDurabilityProbe;
exports2.cancelWsDurabilityProbe = cancelWsDurabilityProbe;
var node_crypto_1 = require("node:crypto");
var ws_1 = require_ws();
var structuredLogProvider_js_1 = require_structuredLogProvider();
var FEATURE_GATE = "ws_reachability_probe";
var DURABILITY_FEATURE_GATE = "ws_dark_durability_probe";
var PROBE_PATH = "/ws-reachability-probe";
var TIMEOUT_MS = 5e3;
var MIN_DELAY_MS = 1e4;
var MAX_DELAY_MS = 3e4;
var DURABILITY_SOCKET_COUNT = 4;
var DURABILITY_HOLD_MS = 3e4;
var DURABILITY_CONFIG_NAME = "ws_dark_durability_probe_config";
var DURABILITY_HOLD_MIN_MS = 1e3;
var DURABILITY_HOLD_MAX_MS = 4e4;
var DURABILITY_ECHO_TIMEOUT_MIN_MS = 1e3;
var DURABILITY_ECHO_TIMEOUT_MAX_MS = 3e4;
var DURABILITY_CONCURRENCY_MIN = 1;
var DURABILITY_CONCURRENCY_MAX = 8;
var DURABILITY_CONFIG_DEFAULTS = {
    holdMs: DURABILITY_HOLD_MS,
    echoTimeoutMs: TIMEOUT_MS,
    concurrency: DURABILITY_SOCKET_COUNT
};
function clampInt(value, min, max, fallback3) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
        return fallback3;
    }
    return Math.min(max, Math.max(min, Math.round(value)));
}
async function resolveDurabilityConfig(host) {
    let raw;
    try {
        raw = typeof host.getDynamicConfigValue === "function" ? await host.getDynamicConfigValue(DURABILITY_CONFIG_NAME) : void 0;
    } catch  {
        raw = void 0;
    }
    if (raw === void 0 || raw === null) {
        try {
            raw = typeof host.getDynamicConfigFallbackValues === "function" ? host.getDynamicConfigFallbackValues(DURABILITY_CONFIG_NAME) : void 0;
        } catch  {
            raw = void 0;
        }
    }
    const cfg = typeof raw === "object" && raw !== null ? raw : {};
    return {
        holdMs: clampInt(cfg.idleHoldMs, DURABILITY_HOLD_MIN_MS, DURABILITY_HOLD_MAX_MS, DURABILITY_CONFIG_DEFAULTS.holdMs),
        echoTimeoutMs: clampInt(cfg.echoTimeoutMs, DURABILITY_ECHO_TIMEOUT_MIN_MS, DURABILITY_ECHO_TIMEOUT_MAX_MS, DURABILITY_CONFIG_DEFAULTS.echoTimeoutMs),
        concurrency: clampInt(cfg.concurrency, DURABILITY_CONCURRENCY_MIN, DURABILITY_CONCURRENCY_MAX, DURABILITY_CONFIG_DEFAULTS.concurrency)
    };
}
var probeStates = {
    reachability: {
        state: "idle"
    },
    durability: {
        state: "idle"
    }
};
var MITM_VENDOR_PATTERNS = [
    [
        /netskope|goskope/i,
        "netskope"
    ],
    [
        /zscaler/i,
        "zscaler"
    ],
    [
        /palo\s*alto|globalprotect/i,
        "paloalto"
    ],
    [
        /fortinet|fortigate/i,
        "fortinet"
    ],
    [
        /forcepoint/i,
        "forcepoint"
    ],
    [
        /mcafee|skyhigh/i,
        "skyhigh"
    ],
    [
        /blue\s*coat|symantec|broadcom/i,
        "broadcom"
    ],
    [
        /check\s*point/i,
        "checkpoint"
    ],
    [
        /sophos/i,
        "sophos"
    ],
    [
        /iboss/i,
        "iboss"
    ],
    [
        /menlo/i,
        "menlo"
    ],
    [
        /cato\s*networks/i,
        "cato"
    ]
];
var PUBLIC_CA_PATTERN = /let'?s\s*encrypt|amazon|google\s*trust|digicert|globalsign|sectigo|entrust|cloudflare|isrg/i;
function classifyTlsVendor(tlsIssuer) {
    if (tlsIssuer === void 0 || tlsIssuer.length === 0) {
        return "unknown";
    }
    for (const [pattern, vendor] of MITM_VENDOR_PATTERNS){
        if (pattern.test(tlsIssuer)) {
            return vendor;
        }
    }
    return PUBLIC_CA_PATTERN.test(tlsIssuer) ? "public_ca" : "other";
}
function emitProbeTelemetry(host, context2, result) {
    const tlsVendor = classifyTlsVendor(result.tlsIssuer);
    const fields = {
        subkey: "ws_reachability_probe",
        outcome: result.outcome,
        httpStatus: result.httpStatus,
        handshakeMs: result.handshakeMs,
        echoRttMs: result.echoRttMs,
        errorCode: result.errorCode,
        http1Reason: context2.http1Reason,
        mode: context2.mode,
        tlsVendor,
        tlsIssuer: result.tlsIssuer
    };
    try {
        structuredLogProvider_js_1.StructuredLogProviderImpl.info("transport", "WebSocket reachability probe", fields);
    } catch (error3) {
        host.debugLog.error("[wsReachabilityProbe] failed to emit structured log", error3);
    }
    try {
        host.metricsIncrement({
            stat: "transport.ws_reachability_probe",
            tags: {
                outcome: result.outcome,
                http1_reason: context2.http1Reason,
                mode: context2.mode,
                tls_vendor: tlsVendor,
                handshake_completed: result.handshakeMs !== void 0 ? "true" : "false"
            }
        });
    } catch (error3) {
        host.debugLog.error("[wsReachabilityProbe] failed to emit metric", error3);
    }
}
function probeUrl(backendUrl, mode = "short") {
    const url2 = new URL(PROBE_PATH, backendUrl);
    if (mode === "durability") {
        url2.searchParams.set("mode", "durability");
    }
    if (url2.protocol === "https:") {
        url2.protocol = "wss:";
    } else if (url2.protocol === "http:") {
        url2.protocol = "ws:";
    } else {
        throw new Error(`unsupported backend protocol: ${url2.protocol}`);
    }
    return url2.toString();
}
function errorCode3(error3) {
    const code = error3.code;
    return typeof code === "string" ? code : void 0;
}
function attemptWsReachabilityProbe(options2) {
    const { backendUrl, accessToken, timeoutMs = TIMEOUT_MS } = options2;
    return new Promise((resolve36)=>{
        let socket;
        try {
            socket = new ws_1.WebSocket(probeUrl(backendUrl), {
                followRedirects: false,
                perMessageDeflate: false,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        } catch (error3) {
            resolve36({
                outcome: "network_error",
                errorCode: error3 instanceof Error ? errorCode3(error3) : void 0
            });
            return;
        }
        const startedAt = performance.now();
        let handshakeMs;
        let tlsIssuer;
        let settled = false;
        const timeout2 = setTimeout(()=>finish({
                outcome: "timeout",
                handshakeMs
            }), timeoutMs);
        timeout2.unref();
        function finish(result) {
            if (settled) {
                return;
            }
            settled = true;
            clearTimeout(timeout2);
            socket.removeAllListeners();
            socket.on("error", ()=>{});
            socket.terminate();
            resolve36({
                tlsIssuer,
                ...result
            });
        }
        function captureTlsIssuer(response) {
            try {
                const tlsSocket = response.socket;
                if (typeof tlsSocket?.getPeerCertificate !== "function") {
                    return;
                }
                const issuer = tlsSocket.getPeerCertificate()?.issuer;
                if (issuer === void 0) {
                    return;
                }
                const parts = [
                    issuer.O,
                    issuer.CN
                ].filter((part)=>typeof part === "string" && part.length > 0);
                tlsIssuer = parts.length > 0 ? parts.join(" / ") : void 0;
            } catch  {}
        }
        socket.once("upgrade", (response)=>{
            captureTlsIssuer(response);
        });
        socket.once("unexpected-response", (_request, response)=>{
            captureTlsIssuer(response);
            response.resume();
            finish({
                outcome: "rejected",
                httpStatus: response.statusCode,
                handshakeMs: Math.round(performance.now() - startedAt)
            });
        });
        socket.once("error", (error3)=>{
            finish({
                outcome: "network_error",
                handshakeMs,
                errorCode: errorCode3(error3)
            });
        });
        socket.once("close", ()=>{
            finish({
                outcome: "closed_early",
                handshakeMs
            });
        });
        socket.once("open", ()=>{
            handshakeMs = Math.round(performance.now() - startedAt);
            const payload = (0, node_crypto_1.randomBytes)(16);
            const echoStartedAt = performance.now();
            socket.once("message", (data)=>{
                const echo = Array.isArray(data) ? Buffer.concat(data) : Buffer.isBuffer(data) ? data : Buffer.from(data);
                if (!echo.equals(payload)) {
                    finish({
                        outcome: "echo_mismatch",
                        handshakeMs
                    });
                    return;
                }
                finish({
                    outcome: "success",
                    handshakeMs,
                    echoRttMs: Math.round(performance.now() - echoStartedAt)
                });
            });
            try {
                socket.send(payload);
            } catch (error3) {
                finish({
                    outcome: "network_error",
                    handshakeMs,
                    errorCode: error3 instanceof Error ? errorCode3(error3) : void 0
                });
            }
        });
    });
}
function attemptDurabilitySocket(options2) {
    const { backendUrl, accessToken, holdMs, timeoutMs, signal, onOpen, onFinish } = options2;
    return new Promise((resolve36)=>{
        if (signal.aborted) {
            resolve36(void 0);
            return;
        }
        let socket;
        try {
            socket = new ws_1.WebSocket(probeUrl(backendUrl, "durability"), {
                followRedirects: false,
                perMessageDeflate: false,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        } catch  {
            resolve36("network_error");
            return;
        }
        let phase = "handshake";
        let expected;
        let opened = false;
        let settled = false;
        let timer2;
        const setTimer = (callback, delayMs)=>{
            if (timer2 !== void 0) {
                clearTimeout(timer2);
            }
            timer2 = setTimeout(callback, delayMs);
            timer2.unref();
        };
        const finish = (outcome)=>{
            if (settled) {
                return;
            }
            settled = true;
            if (timer2 !== void 0) {
                clearTimeout(timer2);
            }
            signal.removeEventListener("abort", abort);
            socket.removeAllListeners();
            socket.on("error", ()=>{});
            socket.terminate();
            if (opened) {
                onFinish();
            }
            resolve36(outcome);
        };
        const abort = ()=>finish(void 0);
        signal.addEventListener("abort", abort, {
            once: true
        });
        const sendProbeFrame = (nextPhase)=>{
            phase = nextPhase;
            expected = (0, node_crypto_1.randomBytes)(16);
            setTimer(()=>finish(nextPhase === "initial" ? "initial_echo_timeout" : "final_echo_timeout"), timeoutMs);
            try {
                socket.send(expected);
            } catch  {
                finish("network_error");
            }
        };
        setTimer(()=>finish("handshake_timeout"), timeoutMs);
        socket.once("unexpected-response", (_request, response)=>{
            response.resume();
            finish("rejected");
        });
        socket.once("error", ()=>finish("network_error"));
        socket.once("close", ()=>finish("closed_early"));
        socket.once("open", ()=>{
            opened = true;
            onOpen();
            sendProbeFrame("initial");
        });
        socket.on("message", (data)=>{
            if (phase !== "initial" && phase !== "final") {
                finish("echo_mismatch");
                return;
            }
            const echo = Array.isArray(data) ? Buffer.concat(data) : Buffer.isBuffer(data) ? data : Buffer.from(data);
            if (expected === void 0 || !echo.equals(expected)) {
                finish("echo_mismatch");
                return;
            }
            if (phase === "initial") {
                phase = "idle";
                expected = void 0;
                setTimer(()=>sendProbeFrame("final"), holdMs);
            } else {
                finish("success");
            }
        });
    });
}
async function attemptWsDurabilityProbe(options2) {
    const { backendUrl, accessToken, signal, holdMs = DURABILITY_HOLD_MS, timeoutMs = TIMEOUT_MS, concurrency = DURABILITY_SOCKET_COUNT } = options2;
    let openSockets = 0;
    let achievedConcurrency = 0;
    const socketIndexes = Array.from({
        length: concurrency
    }, (_2, index)=>index);
    const outcomes = await Promise.all(socketIndexes.map(()=>attemptDurabilitySocket({
            backendUrl,
            accessToken,
            holdMs,
            timeoutMs,
            signal,
            onOpen: ()=>{
                openSockets += 1;
                achievedConcurrency = Math.max(achievedConcurrency, openSockets);
            },
            onFinish: ()=>{
                openSockets -= 1;
            }
        })));
    if (signal.aborted || outcomes.some((outcome)=>outcome === void 0)) {
        return void 0;
    }
    const socketOutcomes = outcomes.filter((outcome)=>outcome !== void 0);
    const successes = socketOutcomes.filter((outcome)=>outcome === "success").length;
    const firstFailureBySocketIndex = socketOutcomes.find((outcome)=>outcome !== "success") ?? "none";
    return {
        outcome: successes === concurrency ? "success" : successes === 0 ? "failure" : "partial",
        achievedConcurrency,
        firstFailureBySocketIndex,
        socketOutcomes
    };
}
function emitDurabilityTelemetry(host, context2, result) {
    const hasEffectiveProxy = context2.hasEffectiveProxy === true;
    const fields = {
        subkey: "ws_dark_durability_probe",
        outcome: result.outcome,
        achievedConcurrency: result.achievedConcurrency,
        firstFailureBySocketIndex: result.firstFailureBySocketIndex,
        socketOutcomes: result.socketOutcomes,
        http1Reason: context2.http1Reason,
        mode: context2.mode,
        hasEffectiveProxy
    };
    try {
        structuredLogProvider_js_1.StructuredLogProviderImpl.info("transport", "Dark WebSocket durability probe", fields);
    } catch (error3) {
        host.debugLog.error("[wsReachabilityProbe] failed to emit durability log", error3);
    }
    try {
        host.metricsIncrement({
            stat: "transport.ws_dark_durability_probe",
            tags: {
                outcome: result.outcome,
                achieved_concurrency: String(result.achievedConcurrency),
                first_failure_by_socket_index: result.firstFailureBySocketIndex,
                http1_reason: context2.http1Reason,
                mode: context2.mode,
                has_effective_proxy: hasEffectiveProxy ? "true" : "false"
            }
        });
    } catch (error3) {
        host.debugLog.error("[wsReachabilityProbe] failed to emit durability metric", error3);
    }
}
function releaseScheduled(kind, owner) {
    const state = probeStates[kind];
    if (state.state === "scheduled" && state.owner === owner) {
        if (state.timer !== void 0) {
            clearTimeout(state.timer);
        }
        state.state = "idle";
        state.owner = void 0;
        state.controller = void 0;
        state.timer = void 0;
    }
}
function scheduleProbe(options2) {
    const { host, getContext, kind } = options2;
    const state = probeStates[kind];
    if (state.state !== "idle" || getContext() === void 0) {
        return void 0;
    }
    const owner = Symbol(`ws-${kind}-probe`);
    const controller = new AbortController();
    state.state = "scheduled";
    state.owner = owner;
    state.controller = controller;
    const delayMs = options2.delayMs ?? MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS);
    const timer2 = setTimeout(()=>{
        void Promise.resolve().then(async ()=>{
            if (state.state !== "scheduled" || state.owner !== owner) {
                return;
            }
            if (getContext() === void 0 || host.getCursorAuthToken() === void 0) {
                releaseScheduled(kind, owner);
                return;
            }
            const featureGate = kind === "reachability" ? FEATURE_GATE : DURABILITY_FEATURE_GATE;
            const enabled = await host.checkFeatureGate(featureGate);
            if (state.state !== "scheduled" || state.owner !== owner) {
                return;
            }
            if (!enabled) {
                releaseScheduled(kind, owner);
                return;
            }
            const context2 = getContext();
            const accessToken = host.getCursorAuthToken();
            if (context2 === void 0 || accessToken === void 0) {
                releaseScheduled(kind, owner);
                return;
            }
            state.state = "attempted";
            state.owner = void 0;
            state.timer = void 0;
            if (kind === "reachability") {
                const result2 = await host.runWithNetworkContext(()=>attemptWsReachabilityProbe({
                        backendUrl: context2.backendUrl,
                        accessToken
                    }));
                return {
                    kind,
                    context: context2,
                    result: result2
                };
            }
            const durabilityConfig = await resolveDurabilityConfig(host);
            if (state.state !== "attempted" || controller.signal.aborted) {
                return void 0;
            }
            const result = await host.runWithNetworkContext(()=>attemptWsDurabilityProbe({
                    backendUrl: context2.backendUrl,
                    accessToken,
                    signal: controller.signal,
                    holdMs: durabilityConfig.holdMs,
                    timeoutMs: durabilityConfig.echoTimeoutMs,
                    concurrency: durabilityConfig.concurrency
                }));
            return result === void 0 ? void 0 : {
                kind,
                context: context2,
                result
            };
        }).then((completed)=>{
            if (state.controller === controller) {
                state.controller = void 0;
            }
            if (completed === void 0) {
                return;
            }
            if (completed.kind === "reachability") {
                emitProbeTelemetry(host, completed.context, completed.result);
            } else {
                emitDurabilityTelemetry(host, completed.context, completed.result);
            }
        }).catch((error3)=>{
            const ownsSlot = state.state === "scheduled" && state.owner === owner || state.controller === controller;
            if (ownsSlot) {
                if (state.timer !== void 0) {
                    clearTimeout(state.timer);
                }
                state.state = "idle";
                state.owner = void 0;
                state.controller = void 0;
                state.timer = void 0;
            }
            host.debugLog.error(`[wsReachabilityProbe] unexpected ${kind} probe failure`, error3);
        });
    }, delayMs);
    state.timer = timer2;
    timer2.unref();
    return {
        dispose: ()=>{
            clearTimeout(timer2);
            controller.abort();
            releaseScheduled(kind, owner);
        }
    };
}
function scheduleWsReachabilityProbe(options2) {
    return scheduleProbe({
        ...options2,
        kind: "reachability"
    });
}
function scheduleWsDurabilityProbe(options2) {
    return scheduleProbe({
        ...options2,
        kind: "durability"
    });
}
function cancelWsDurabilityProbe() {
    const state = probeStates.durability;
    if (state.timer !== void 0) {
        clearTimeout(state.timer);
    }
    state.controller?.abort();
    state.controller = void 0;
    state.timer = void 0;
    if (state.state === "scheduled") {
        state.state = "idle";
        state.owner = void 0;
    }
}
exports2.wsReachabilityProbeTesting = {
    resolveDurabilityConfig (host) {
        return resolveDurabilityConfig(host);
    },
    emitDurabilityTelemetry (host, context2, result) {
        emitDurabilityTelemetry(host, context2, result);
    },
    emitProbeTelemetry (host, context2, result) {
        emitProbeTelemetry(host, context2, result);
    },
    reset () {
        if (probeStates.reachability.timer !== void 0) {
            clearTimeout(probeStates.reachability.timer);
        }
        if (probeStates.durability.timer !== void 0) {
            clearTimeout(probeStates.durability.timer);
        }
        probeStates.reachability.controller?.abort();
        probeStates.durability.controller?.abort();
        probeStates.reachability = {
            state: "idle"
        };
        probeStates.durability = {
            state: "idle"
        };
    }
};

return exports2;
}
