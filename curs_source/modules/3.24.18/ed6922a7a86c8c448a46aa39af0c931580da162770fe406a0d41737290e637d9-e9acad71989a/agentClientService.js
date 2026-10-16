import { nwt, oL, rUe } from "./A3u.js";
import { S_, cPu, rh, tYs, zv } from "./De_3.js";
import { Fo, Hp, Se, hM, we, wi } from "./HVr.js";
import { ie } from "./actions_2.js";
import { A0h, GXv } from "./agentClientServiceId.js";
import { G0o, h0h } from "./agentExecProviderServiceId.js";
import { Hm, Yb, ode, qyt, zd } from "./agent_pb.js";
import { rQi, yCh } from "./agent_service_connectweb.js";
import { Dso, Lso, Nso, Sso, Uso, aUe, kso, wso } from "./agent_service_pb.js";
import { M$, xX } from "./aiEverythingProviderService.js";
import { ca, la } from "./aiMiscServices.js";
import { bn } from "./async.js";
import { Za, na } from "./authenticationService.js";
import { db, nE } from "./backendClient.js";
import { Yu } from "./browser.ts";
import { am, kc } from "./buildFlags.js";
import { soo } from "./connect.ts";
import { Vr, Yi } from "./environmentService.js";
import { Hse, TLd, YW, c_e, hb, jM } from "./errors.ts";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { eQi, x0o } from "./fileAppendService.js";
import { kk, r0 } from "./gitContextService.js";
import { Qie, T_ } from "./hash.js";
import { m0h } from "./ideClientCapabilities.js";
import { ZW } from "./index_12.ts";
import { Gp } from "./index_3.ts";
import { A1 } from "./index_5.ts";
import { NRd } from "./index_7.ts";
import { Ze, _t } from "./instantiation.js";
import { nzc } from "./local-agent-headers.ts";
import { I0h } from "./localAgentCustomHeaders.js";
import { D3n, bQi } from "./localAgentDiagnostics.js";
import { T0h } from "./localAgentGatewayConfiguration.js";
import { Dtt, fQi, q0o } from "./localAgentProviderConfig.js";
import { vQi } from "./localOpenAIProviderSettings.js";
import { NXv } from "./localPrivateInferenceUsage.js";
import { Qn, Wn, h1 } from "./log.js";
import { ag, oc } from "./map.js";
import { ONd } from "./mock-transport.ts";
import { R3n, mQi } from "./mockAgentStreamService.js";
import { d0h, vXv } from "./nalClientTraceLogger.js";
import { fu, zl } from "./pathService.js";
import { Hx, uT } from "./privateInferenceEnablementService.js";
import { D6, d_e } from "./privateInferenceFeatures.js";
import { Ka, jo } from "./productService.js";
import { l0h, u0h } from "./promptContextUsage.js";
import { Lbn, mn, pS, v0g } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { Vp, z$t } from "./reactiveStorageTypes_2.js";
import { RCt, Rtt } from "./shellEnvironmentService.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { __e, jse } from "./url_2.js";
import { Ku } from "./utilities_3.js";
import { Fw } from "./utils_24.js";
import { NKe, io, vk } from "./utils_pb.js";
import { Jn, ci } from "./workspace.js";
import { D2, a0 } from "./workspaceMetadataService.js";
import { s4v } from "./xmo.js";
function c0h(e) {
    return e?.schemaVersion === l0h ? e.nodes : void 0;
}
function fXv(e) {
    const t = c0h(e.tree);
    return {
        nodes: t ?? [],
        incomplete: t === void 0 || e.unavailableBlobCount > 0
    };
}
function p0h(e, t) {
    return {
        ...e,
        isRunningInTest: t.isRunningInTest,
        clientSupportsInlineImages: !0,
        clientSupportsPreviewCard: !0,
        clientSupportsSendToUser: !1,
        clientSupportsRoutedModelUpdate: e.clientSupportsRoutedModelUpdate ?? !0,
        ...t.localLoopGateEnabled === void 0 ? {} : {
            localLoopGateEnabled: t.localLoopGateEnabled
        }
    };
}
function K_e(e) {
    const t = e?.trim();
    return t || void 0;
}
function g0h(e) {
    const t = gQi(e.apiKeyCandidates), n = gQi(e.baseUrlCandidates);
    if (t === void 0 || n === void 0) throw yXv();
    const i = bXv(n.value);
    return {
        baseUrl: i,
        apiKey: t.value,
        apiKeySource: t.source,
        baseUrlSource: n.source,
        normalizationChangedUrl: i !== n.value
    };
}
function gQi(e) {
    for (const t of e){
        const n = K_e(t.value);
        if (n !== void 0) return {
            value: n,
            source: t.source
        };
    }
}
function bXv(e) {
    try {
        const t = new URL(e);
        return t.pathname === "/" && (t.pathname = "/v1"), t.toString().replace(/\/$/, "");
    } catch  {
        return e.trim().replace(/\/+$/, "");
    }
}
function yXv() {
    const e = new vk({
        error: io.CUSTOM,
        details: new NKe({
            title: q0o,
            detail: fQi,
            allowCommandLinksPotentiallyUnsafePleaseOnlyUseForHandwrittenTrustedMarkdown: !0,
            isRetryable: !1,
            showRequestId: !1
        })
    });
    return new YW(fQi, {
        displayInfo: {
            title: q0o,
            detail: fQi,
            isRetryable: !1,
            errorCode: io.CUSTOM,
            errorDetails: e
        }
    });
}
function z0o(e) {
    return e.isLocalMode || e.useOpenAIKey === !0 ? e.rawStoredOpenAIKey : void 0;
}
function K0o(e) {
    return {
        apiKeyCandidates: [
            {
                value: e.modelProvidedApiKey,
                source: e.modelProvidedApiKeySource ?? "modelDetails.apiKey"
            },
            {
                value: e.storedOpenAIKey,
                source: "storage.openAIKey"
            },
            {
                value: kc.localMode ? e.shellEnvironment.CURSOR_LOCAL_AGENT_API_KEY : void 0,
                source: "env:CURSOR_LOCAL_AGENT_API_KEY"
            },
            {
                value: kc.localMode ? e.shellEnvironment.ANTHROPIC_AUTH_TOKEN : void 0,
                source: "env:compatibility_api_key"
            }
        ],
        baseUrlCandidates: [
            {
                value: e.modelProvidedBaseUrl,
                source: e.modelProvidedBaseUrlSource ?? "modelDetails.openaiApiBaseUrl"
            },
            {
                value: e.openAIBaseUrl,
                source: "storage.openAIBaseUrl"
            },
            {
                value: kc.localMode ? e.shellEnvironment.CURSOR_LOCAL_AGENT_BASE_URL : void 0,
                source: "env:CURSOR_LOCAL_AGENT_BASE_URL"
            },
            {
                value: kc.localMode ? e.shellEnvironment.ANTHROPIC_BASE_URL : void 0,
                source: "env:compatibility_base_url"
            }
        ]
    };
}
function f0h(e) {
    return S0h = e.getLogger(D3n) ?? e.createLogger(D3n, {
        hidden: !kc.localMode,
        name: "Local Agent"
    }), S0h;
}
function Y0o(e, t) {
    if (kc.localMode) try {
        f0h(e).info(t);
    } catch  {}
}
function _Qi(e, t) {
    if (!kc.localMode) return;
    const n = CXv(t);
    Y0o(e, AXv(n)), n.result === "throw" && Y0o(e, RXv(n));
}
function CXv(e) {
    const t = TXv(e), n = X0o(e.rawStoredOpenAIKey), i = PXv(e.openAIBaseUrl);
    return {
        kind: "cursor.localAgent.providerConfigResolution",
        schemaVersion: 1,
        timestampIso: new Date().toISOString(),
        resolutionPath: e.resolutionPath,
        requestedModelSlug: e.requestedModelSlug,
        requestedModelCredentialsCase: e.requestedModelCredentialsCase,
        result: e.providerConfig ? "resolved" : "throw",
        missing: EXv(t),
        correlation: {
            generationUUID: e.generationUUID,
            conversationId: e.conversationId
        },
        resolved: e.providerConfig ? {
            apiKeySource: e.providerConfig.apiKeySource,
            baseUrlSource: e.providerConfig.baseUrlSource,
            normalizedBaseUrl: y0h(e.providerConfig.baseUrl).value ?? "<redacted-url>",
            normalizationChangedUrl: e.providerConfig.normalizationChangedUrl
        } : void 0,
        apiKeyCandidates: v0h(e.apiKeyCandidates, "apiKey", t.apiKey, e),
        baseUrlCandidates: v0h(e.baseUrlCandidates, "baseUrl", t.baseUrl, e),
        silentIgnoreFlags: {
            useOpenAIKey: e.useOpenAIKey,
            rawStoredOpenAIKey: n,
            openAIBaseUrlState: i,
            credentialsCase: e.credentialsCase,
            useRequestedModel: e.useRequestedModel,
            gatewayUiWouldShowConfigured: n.present && i === "set"
        }
    };
}
function TXv(e) {
    return {
        apiKey: e.providerConfig?.apiKeySource ?? _0h(e.apiKeyCandidates),
        baseUrl: e.providerConfig?.baseUrlSource ?? _0h(e.baseUrlCandidates)
    };
}
function EXv(e) {
    return [
        "apiKey",
        "baseUrl"
    ].filter((t)=>e[t] === void 0);
}
function v0h(e, t, n, i) {
    return e.map((r)=>xXv({
            candidate: r,
            kind: t,
            selectedSource: n,
            context: i
        }));
}
function xXv(e) {
    const { candidate: t, kind: n, selectedSource: i, context: r } = e, s = K_e(t.value), o = t.value;
    let a, c, l, u;
    return i === t.source ? a = "selected" : t.source === "storage.openAIKey" && r.useOpenAIKey !== !0 ? (a = X0o(r.rawStoredOpenAIKey).present ? "gated-out" : "empty", l = "storage.useOpenAIKey", u = r.useOpenAIKey, c = a === "gated-out" ? "Stored OpenAI key exists but useOpenAIKey is false" : void 0) : o == null ? a = t.source.startsWith("modelDetails.") ? "not-applicable" : "empty" : s === void 0 ? a = "whitespace" : a = "present", {
        source: t.source,
        status: a,
        value: IXv(n, t, o, r),
        gate: l,
        gateValue: u,
        reason: c
    };
}
function IXv(e, t, n, i) {
    return e === "apiKey" ? X0o(t.source === "storage.openAIKey" ? i.rawStoredOpenAIKey : n) : y0h(n);
}
function _0h(e) {
    for (const t of e)if (K_e(t.value) !== void 0) return t.source;
}
function AXv(e) {
    const t = e.resolved?.baseUrlSource ?? "none", n = e.resolved?.apiKeySource ?? "none", i = e.missing.length ? e.missing.join(",") : "none";
    return `[local-agent][config] path=${e.resolutionPath} model=${e.requestedModelSlug ?? "none"} requestedCredentialsCase=${e.requestedModelCredentialsCase ?? "none"} result=${e.result} missing=[${i}] apiKeySource=${n} baseUrlSource=${t} apiKeyCandidates=[${b0h(e.apiKeyCandidates)}] baseUrlCandidates=[${b0h(e.baseUrlCandidates)}]`;
}
function RXv(e) {
    return [
        `==== Local Agent Not Configured diagnostic (path=${e.resolutionPath}) ====`,
        JSON.stringify(e, void 0, 2),
        `==== End Local Agent Not Configured diagnostic (path=${e.resolutionPath}) ====`
    ].join(`
`);
}
function X0o(e) {
    const t = e?.trim();
    return t ? {
        present: !0,
        lengthBucket: Z0o(t.length),
        trimmedChanged: e !== t
    } : {
        present: !1
    };
}
function b0h(e) {
    return e.map((t)=>`${t.source}:${t.status}`).join(",");
}
function y0h(e) {
    const t = e?.trim();
    if (!t) return {
        present: !1
    };
    try {
        const n = new URL(t), i = n.username !== "" || n.password !== "", r = n.search !== "", s = n.hash !== "";
        return n.username = "", n.password = "", n.search = "", n.hash = "", n.pathname = DXv(n.pathname), {
            present: !0,
            value: n.toString().replace(/\/$/, ""),
            hadUserInfo: i,
            hadQuery: r,
            hadFragment: s,
            lengthBucket: Z0o(t.length),
            trimmedChanged: e !== t
        };
    } catch  {
        return {
            present: !0,
            value: "<invalid-url-redacted>",
            lengthBucket: Z0o(t.length),
            trimmedChanged: e !== t
        };
    }
}
function DXv(e) {
    return e.split("/").map((t)=>MXv(t) ? "redacted" : t).join("/");
}
function MXv(e) {
    return e.length >= 24 && /^[a-zA-Z0-9._-]+$/.test(e);
}
function Z0o(e) {
    return e <= 8 ? "1-8" : e <= 16 ? "9-16" : e <= 32 ? "17-32" : e <= 64 ? "33-64" : "65+";
}
function PXv(e) {
    return e === null ? "null" : e === void 0 ? "undefined" : e.length === 0 ? "empty" : e.trim().length === 0 ? "whitespace" : "set";
}
var S0h;
function LXv(e, t) {
    if (!(e.inputTokens === void 0 && e.outputTokens === void 0 && e.cacheReadTokens === void 0 && e.cacheWriteTokens === void 0)) return {
        ...t,
        inputTokens: Number(e.inputTokens ?? 0n),
        outputTokens: Number(e.outputTokens ?? 0n),
        cacheReadTokens: Number(e.cacheReadTokens ?? 0n),
        cacheWriteTokens: Number(e.cacheWriteTokens ?? 0n)
    };
}
function vjt(e) {
    return e === void 0 ? void 0 : T0h.get(e);
}
function HXv(e) {
    const t = e.headersEnv !== void 0 ? e.headersEnv : vjt(e.teamId)?.headersSpec;
    return t === void 0 || t === "" ? {} : v0g(t, {
        gitOrgRepo: e.gitOrgRepo,
        gitBranch: e.gitBranch
    });
}
async function x0h(e) {
    try {
        return HXv({
            headersEnv: e.shellEnvironment[nzc],
            teamId: e.teamId,
            ...await WXv(e)
        });
    } catch  {
        return {};
    }
}
async function WXv(e) {
    const t = e.workspaceContextService.getWorkspace(), n = t.folders[0], i = e.workspaceMetadataService.getMetadata(pS(t)), r = Lbn(s4v(i)) ?? "", s = n === void 0 ? void 0 : hM(n.uri, !0, e.environmentService.remoteAuthority !== void 0), o = await e.gitContextService.getOrFetchCurrentBranch({
        cwd: s
    }) ?? "";
    return {
        gitOrgRepo: r,
        gitBranch: o
    };
}
function VXv(e, t) {
    if (!(e instanceof Error) || e instanceof Hse) return e;
    const n = {
        title: e.name === "LocalProviderError" ? "Local Provider Error" : "Local agent request failed",
        detail: `${e.message}

Model: ${t.modelId}
Base URL: ${t.baseUrl}`
    }, i = {
        cause: e,
        displayInfo: n
    };
    switch(e.name){
        case "LocalProviderError":
        case "NonRetriableError":
            return new YW(e.message, {
                ...i,
                displayInfo: {
                    ...n,
                    isRetryable: !1
                }
            });
        case "RetriableError":
            return new jM(e.message, {
                ...i,
                displayInfo: {
                    ...n,
                    isRetryable: !0
                }
            });
        case "CancelledError":
            return new hb(e.message, i);
        case "ActionRequiredError":
            return new c_e(e.message, "unknown", i);
        case "IncompatibleModelError":
            return new TLd(t.modelId, i);
        default:
            return e;
    }
}
async function jXv(e, t = 5e3) {
    const n = e.onlyLocalProvider?.runCommand(z$t.GetFileSyncEncryptionHeader, null);
    if (!n) return {
        headers: {},
        timedOut: !1
    };
    let i = !1;
    const r = await Hp(n, t, ()=>{
        i = !0, console.warn("[AgentClientService] Timeout waiting for filesync header", {
            timeoutMs: t
        });
    });
    return r === void 0 ? {
        headers: {},
        timedOut: i
    } : {
        headers: r,
        timedOut: !1
    };
}
function qXv(e) {
    const t = new Qie;
    for (const n of e.rootPromptMessagesJson)t.update(zv(n));
    return `${e.conversationId}:${t.digest()}`;
}
var J0o, e1o, X5, D0h, M0h, p8e, P0h, L0h, N0h, O0h, M3n;
export { AXv, CXv, D0h, DXv, EXv, HXv, IXv, J0o, K0o, K_e, L0h, LXv, M0h, M3n, MXv, N0h, O0h, P0h, PXv, RXv, S0h, TXv, VXv, WXv, X0o, X5, Y0o, Z0o, _0h, _Qi, b0h, bXv, c0h, e1o, f0h, fXv, g0h, gQi, jXv, p0h, p8e, qXv, v0h, vjt, x0h, xXv, y0h, yXv, z0o };
var __wakaru_Mtt_initialized = false;
export function Mtt() {
if (__wakaru_Mtt_initialized) return;
__wakaru_Mtt_initialized = true;
"use strict";
x(), ZW(), A1(), Gp(), NRd(), bn(), T_(), oc(), Qt(), am(), Hx(), D6(), zd(), yCh(), aUe(), Fo(), Se(), xX(), Pn(), Ze(), Qn(), Vp(), qs(), nE(), la(), Fw(), mQi(), u0h(), x0o(), ci(), vXv(), Vr(), RCt(), fu(), Yu(), Ka(), Ha(), Za(), r0(), a0(), __e(), h0h(), m0h(), Ku(), Vn(), Dtt(), vQi(), Dtt(), bQi(), NXv(), I0h(), GXv(), J0o = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), e1o = (e)=>{
    throw TypeError(e);
}, X5 = (e, t)=>(n, i)=>t(n, i, e), D0h = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && e1o("Object expected");
        var i, r;
        n && (i = t[J0o("asyncDispose")]), i === void 0 && (i = t[J0o("dispose")], n && (r = i)), typeof i != "function" && e1o("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), e.push([
            n,
            i,
            t
        ]);
    } else n && e.push([
        n
    ]);
    return t;
}, M0h = (e, t, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, r = (o)=>t = n ? new i(o, t, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (c)=>(r(c), s()));
        } catch (c) {
            r(c);
        }
        if (n) throw t;
    };
    return s();
}, p8e = A0h, P0h = "gpt-5.5", L0h = "cursor-dev", N0h = "local-agent-prompt-quality", O0h = "/upload", M3n = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T, E, A){
        super(), this.instantiationService = e, this.everythingProviderService = t, this.experimentService = n, this.mockAgentStreamService = i, this.logService = r, this.loggerService = s, this.fileAppendService = o, this.workspaceContextService = a, this.pathService = c, this.environmentService = l, this.reactiveStorageService = u, this.cursorAuthenticationService = h, this.privateInferenceEnablementService = p, this.agentExecProviderService = g, this.productService = f, this.shellEnvironmentService = v, this.urlService = b, this.analyticsService = y, this.storageService = T, this.workspaceMetadataService = E, this.gitContextService = A, this.promptContextUsage = new ag(20), this._localPrivateInferenceInstallPathTracked = !1, this.backendClient = this.instantiationService.createInstance(db, {
            service: rQi,
            headerInjector: async (W)=>{
                var G = [];
                try {
                    const X = D0h(G, W === void 0 ? void 0 : S_(W.withName("backendClient.headerInjection")));
                    X?.span.setAttribute("service", rQi.typeName);
                    try {
                        const { headers: Y, timedOut: Z } = await jXv(this.everythingProviderService);
                        X?.span.setAttribute("filesyncHeaderPresent", Object.keys(Y).length > 0), X?.span.setAttribute("timedOut", Z);
                        const K = this.experimentService.checkFeatureGate("retry_interceptor_enabled_for_streaming", {
                            disableExposureLog: !1
                        }), J = this.experimentService.getDynamicConfig("retry_interceptor_params_config", {
                            disableExposureLog: !1
                        }), ne = {
                            maxRetries: J.maxRetries ?? void 0,
                            baseDelayMs: J.baseDelayMs ?? void 0,
                            maxDelayMs: J.maxDelayMs ?? void 0
                        }, ee = nwt(K, ne);
                        return {
                            ...Y,
                            ...ee
                        };
                    } catch (Y) {
                        const Z = tYs(Y);
                        throw X?.span.recordException(Y instanceof Error ? Y : new Error(Z)), X?.span.setStatus({
                            code: 2,
                            message: Z
                        }), Y;
                    }
                } catch (X) {
                    var q = X, z = !0;
                } finally{
                    M0h(G, q, z);
                }
            }
        });
        const R = this.backendClient, D = this.mockAgentStreamService, P = this.fileAppendService, N = this.workspaceContextService, O = this.pathService, F = this.environmentService, H = this.experimentService, $ = this.logService;
        D.isAvailable ? this.client = new soo(new ONd((W)=>D.getMockStream(W.conversationId, W.requestId, W.signal, W.runRequest))) : this.client = new soo({
            async *run (W, G, q) {
                const z = await R.get(W), X = rUe(z, {
                    injectTraceHeaders: !0
                }), Z = (!F.isBuilt || F.isExtensionDevelopment) && H.checkFeatureGate("nal_trace", {
                    disableExposureLog: !1
                });
                let K;
                if (Z) {
                    const ne = q.headers?.["x-request-id"] ?? "undefined-bug";
                    K = new d0h(ne, P, N, O), G = cPu(G, (ee)=>{
                        K.logMessage(ee, "sent");
                    });
                }
                let J = X.run(W, G, q);
                Z && (J = cPu(J, (ne)=>{
                    K.logMessage(ne, "received");
                }));
                try {
                    q.onNetworkStarted?.();
                } catch (ne) {
                    $.warn("[AgentClientService] onNetworkStarted callback failed", ne);
                }
                try {
                    for await (const ne of J)yield ne;
                } finally{
                    K && await K.finalize();
                }
            }
        });
    }
    async getLocalAgentProviderConfig(e, t) {
        const n = "[AgentClientService][getLocalAgentProviderConfig]", i = kc.localMode ? await this.shellEnvironmentService.getShellEnv() : {}, r = e?.credentials, s = r?.case === "apiKeyCredentials" ? r.value : void 0, o = this.reactiveStorageService.applicationUserPersistentStorage, a = this.cursorAuthenticationService.openAIKey() ?? void 0, c = z0o({
            rawStoredOpenAIKey: a,
            useOpenAIKey: o.useOpenAIKey,
            isLocalMode: kc.localMode
        }), l = K0o({
            shellEnvironment: i,
            storedOpenAIKey: c,
            openAIBaseUrl: o.openAIBaseUrl,
            modelProvidedApiKey: s?.apiKey,
            modelProvidedBaseUrl: s?.baseUrl,
            modelProvidedApiKeySource: "modelDetails.apiKeyCredentials.apiKey",
            modelProvidedBaseUrlSource: "modelDetails.apiKeyCredentials.baseUrl"
        });
        let u;
        try {
            u = g0h(l);
        } catch (p) {
            throw _Qi(this.loggerService, {
                resolutionPath: "agent",
                apiKeyCandidates: l.apiKeyCandidates,
                baseUrlCandidates: l.baseUrlCandidates,
                useOpenAIKey: o.useOpenAIKey,
                rawStoredOpenAIKey: a,
                openAIBaseUrl: o.openAIBaseUrl,
                credentialsCase: r?.case,
                useRequestedModel: t?.requestedModel !== void 0 && e === void 0,
                requestedModelSlug: K_e(e?.modelId) ?? K_e(t?.requestedModel?.modelId),
                requestedModelCredentialsCase: t?.requestedModel?.credentials?.case,
                generationUUID: t?.generationUUID,
                conversationId: t?.conversationId
            }), p;
        }
        _Qi(this.loggerService, {
            resolutionPath: "agent",
            apiKeyCandidates: l.apiKeyCandidates,
            baseUrlCandidates: l.baseUrlCandidates,
            providerConfig: u,
            useOpenAIKey: o.useOpenAIKey,
            rawStoredOpenAIKey: a,
            openAIBaseUrl: o.openAIBaseUrl,
            credentialsCase: r?.case,
            useRequestedModel: t?.requestedModel !== void 0 && e === void 0,
            requestedModelSlug: K_e(e?.modelId) ?? K_e(t?.requestedModel?.modelId),
            requestedModelCredentialsCase: t?.requestedModel?.credentials?.case,
            generationUUID: t?.generationUUID,
            conversationId: t?.conversationId
        }), this.logService.info(`${n} resolved`, {
            apiKeySource: u.apiKeySource,
            hasApiKey: !0,
            baseUrlSource: u.baseUrlSource,
            normalizedBaseUrl: u.baseUrl,
            normalizationChangedUrl: u.normalizationChangedUrl
        });
        const h = await x0h({
            shellEnvironment: i,
            teamId: this.cursorAuthenticationService.getTeamId(),
            workspaceContextService: this.workspaceContextService,
            workspaceMetadataService: this.workspaceMetadataService,
            gitContextService: this.gitContextService,
            environmentService: this.environmentService
        });
        return {
            baseUrl: u.baseUrl,
            apiKey: u.apiKey,
            customHeaders: h
        };
    }
    createDefaultLocalModel(e) {
        const t = K_e(e.requestedModel?.modelId) ?? P0h;
        return new ode({
            modelId: t,
            displayModelId: t,
            displayName: t,
            displayNameShort: t,
            maxMode: e.requestedModel?.maxMode,
            credentials: e.requestedModel?.credentials
        });
    }
    async runLocalAgentInExtensionHost(e, t, n, i, r, s, o, a, c, l) {
        const u = await this.getLocalAgentProviderConfig(i, l), h = this.reactiveStorageService.applicationUserPersistentStorage.localProviderAgentModelIds ?? [], p = i ?? this.createDefaultLocalModel(l), g = K_e(l.requestedModel?.modelId) ?? K_e(i?.modelId) ?? p.modelId;
        this.logService.info("[AgentClientService] Running agent turn through local agent-exec runtime", {
            conversationId: l.conversationId,
            modelId: g,
            baseUrl: u.baseUrl
        }), await this.agentExecProviderService.waitForProviderRegistration(e.signal, e);
        try {
            const f = {
                baseUrl: u.baseUrl,
                apiKey: u.apiKey,
                userAgent: `Cursor/${this.productService.version}`,
                customHeaders: u.customHeaders,
                urlProtocol: this.productService.urlProtocol,
                privacyMode: this.cursorAuthenticationService.granularPrivacyModeRawEnum(),
                defaultModel: wi.wrap(p.toBinary()),
                modelDetails: i ? wi.wrap(i.toBinary()) : void 0,
                availableModelIds: h,
                conversationState: wi.wrap(t.toBinary()),
                action: wi.wrap(n.toBinary()),
                runOptions: {
                    conversationId: l.conversationId,
                    conversationGroupId: l.conversationGroupId,
                    generationUUID: l.generationUUID,
                    customSystemPrompt: l.customSystemPrompt,
                    excludeWorkspaceContext: l.excludeWorkspaceContext,
                    isRunningInTest: l.isRunningInTest,
                    clientSupportsInlineImages: l.clientSupportsInlineImages,
                    clientSupportsPreviewCard: l.clientSupportsPreviewCard,
                    clientSupportsSendToUser: l.clientSupportsSendToUser,
                    serializeSubagentStatesAsBlobRefs: this.experimentService.checkFeatureGate("local_agent_subagent_state_blob_refs", {
                        disableExposureLog: !1
                    }),
                    requestedModel: l.requestedModel ? wi.wrap(l.requestedModel.toBinary()) : void 0,
                    subagentModelOverrides: l.subagentModelOverrides?.map((y)=>wi.wrap(y.toBinary())),
                    subagentTypeName: l.subagentTypeName
                },
                mcpTools: a,
                agentExecOptions: {
                    composerId: l.conversationId,
                    workspacePaths: this.workspaceContextService.getWorkspace().folders.map((y)=>hM(y.uri, !0, this.environmentService.remoteAuthority !== void 0))
                }
            }, v = {
                sendInteractionUpdate: async (y)=>{
                    const T = Yb.fromBinary(y.buffer);
                    if (T.message.case === "turnEnded") {
                        const E = LXv(T.message.value, {
                            requestId: l.generationUUID,
                            conversationId: l.conversationId,
                            modelIntent: g
                        });
                        if (E !== void 0) try {
                            if (this.analyticsService.trackEvent("local_private_inference.usage", E), !this._localPrivateInferenceInstallPathTracked) {
                                const A = this.environmentService.appRoot;
                                A && (this._localPrivateInferenceInstallPathTracked = !0, this.analyticsService.trackEvent("local_private_inference.install_path", {
                                    appRoot: A
                                }));
                            }
                        } catch (A) {
                            this.logService.warn("[AgentClientService] Failed to track Local Private Inference usage", A);
                        }
                    }
                    await r.sendUpdate(e, T);
                },
                queryInteraction: async (y)=>{
                    const T = await r.query(e, qyt.fromBinary(y.buffer));
                    return wi.wrap(T.toBinary());
                },
                handleCheckpoint: async (y)=>{
                    await o.handleCheckpoint(e, Hm.fromBinary(y.buffer));
                },
                getBlob: async (y)=>{
                    const T = await s.getBlob(e, y.buffer);
                    return T ? wi.wrap(T) : void 0;
                },
                setBlob: async (y, T, E)=>{
                    if (E) {
                        await s.setBlobLocallyOnly(e, y.buffer, T.buffer);
                        return;
                    }
                    await s.setBlob(e, y.buffer, T.buffer);
                },
                uploadPromptQualitySnapshot: async (y, T)=>{
                    if (this.productService.urlProtocol !== L0h) return;
                    const E = new URLSearchParams({
                        generationUUID: y,
                        nonce: T,
                        uploadMode: "automatic"
                    });
                    if (!await this.urlService.open(Ee.from({
                        scheme: this.productService.urlProtocol,
                        authority: N0h,
                        path: O0h,
                        query: E.toString()
                    }), {
                        trusted: !0
                    })) throw new Error("No handler accepted the automatic Prompt Quality upload");
                }
            };
            rh(this.storageService, "useDedicatedLocalAgentRuntimeHost") ? await this.runLocalAgentInDedicatedExtensionHost(f, v, c, e.signal) : await this.agentExecProviderService.runLocalAgent(f, v, e.signal);
        } catch (f) {
            throw VXv(f, {
                modelId: p.modelId,
                baseUrl: u.baseUrl
            });
        }
    }
    async prewarm() {
        await this.backendClient.get();
    }
    runLocalAgentInDedicatedExtensionHost(e, t, n, i) {
        return this.agentExecProviderService.runLocalAgentInDedicatedExtensionHost(e, t, n, i);
    }
    async run(e, t, n, i, r, s, o, a, c, l, u) {
        const h = p0h(u, {
            isRunningInTest: u.isRunningInTest ?? this.environmentService.enableSmokeTestDriver === !0
        });
        if (kc.localMode) {
            try {
                h.onNetworkPhaseStart?.();
            } catch (p) {
                this.logService.warn("[AgentClientService] onNetworkPhaseStart callback failed in local mode", p);
            }
            return this.runLocalAgentInExtensionHost(e, t, n, i, r, o, c, l, s, h);
        }
        return this.client.run(e, t, n, i, r, s, o, a, c, l, h);
    }
    async uploadConversationBlobs(e, t) {
        const n = await this.backendClient.get(e), i = rUe(n, {
            injectTraceHeaders: !0
        }), r = new Dso({
            conversationId: t.conversationId,
            blobs: t.blobs,
            chunkIndex: t.chunkIndex,
            totalChunks: t.totalChunks
        });
        return i.uploadConversationBlobs(e, r, {
            headers: {
                "x-request-id": t.forkRequestId
            }
        });
    }
    async uploadLocalAgentRunToPromptQuality(e, t) {
        if (!oL(this.privateInferenceEnablementService, "prompt-quality-upload")) throw new d_e("prompt-quality-upload");
        const i = await this.backendClient.get(e);
        return rUe(i, {
            injectTraceHeaders: !0
        }).uploadLocalAgentRunToPromptQuality(e, t, {
            headers: {
                "x-request-id": t.generationUuid
            }
        });
    }
    async notifyConversationClone(e, t) {
        const n = await this.backendClient.get(e);
        await rUe(n, {
            injectTraceHeaders: !0
        }).notifyConversationClone(e, new Nso({
            conversationId: t.conversationId,
            sourceConversationId: t.sourceConversationId,
            sourceRequestId: t.sourceRequestId
        }));
    }
    async getSignedUrlForAttachedMedia(e, t) {
        const n = await this.backendClient.get(e);
        return rUe(n, {
            injectTraceHeaders: !0
        }).getSignedUrlForAttachedMedia(e, new Lso({
            conversationId: t.conversationId,
            key: t.key,
            mimeType: t.mimeType,
            contentLengthBytes: t.contentLengthBytes !== void 0 ? BigInt(t.contentLengthBytes) : void 0
        }));
    }
    async updateConversationMetadata(e, t) {
        const n = await this.backendClient.get(e);
        await rUe(n, {
            injectTraceHeaders: !0
        }).updateConversationMetadata(e, new Sso({
            conversationId: t.conversationId,
            name: t.name,
            workspacePaths: t.workspacePaths
        }));
    }
    getPromptContextUsage(e, t) {
        if (kc.localMode) return Promise.resolve({
            nodes: [],
            incomplete: !1
        });
        const n = qXv(t), i = this.promptContextUsage.get(n);
        if (i !== void 0) return i;
        const r = this.rebuildPromptContextUsage(e, t);
        return this.promptContextUsage.set(n, r), r.then((s)=>{
            s.incomplete && this.promptContextUsage.peek(n) === r && this.promptContextUsage.delete(n);
        }), r;
    }
    async rebuildPromptContextUsage(e, t) {
        let n;
        try {
            const r = await this.backendClient.get(e);
            n = await rUe(r, {
                injectTraceHeaders: !0
            }).getPromptContextUsage(e, new kso({
                conversationId: t.conversationId,
                rootPromptMessagesJson: [
                    ...t.rootPromptMessagesJson
                ]
            }), {
                signal: AbortSignal.timeout(3e4),
                headers: nwt(!0)
            });
        } catch (r) {
            return this.logService.warn("[AgentClientService] Prompt context usage rebuild failed", {
                conversationId: t.conversationId,
                error: tYs(r)
            }), {
                nodes: [],
                incomplete: !0
            };
        }
        const i = fXv(n);
        return i.incomplete && this.logService.warn("[AgentClientService] Prompt context usage report is incomplete", {
            conversationId: t.conversationId,
            unavailableBlobCount: n.unavailableBlobCount,
            schemaVersion: n.tree?.schemaVersion,
            rootPromptMessageCount: t.rootPromptMessagesJson.length
        }), i;
    }
    async createTranscriptOverview(e, t) {
        const n = !oL(this.privateInferenceEnablementService, "transcript-overview");
        if (kc.localMode || n) return "";
        const i = await this.backendClient.get(e);
        return (await rUe(i, {
            injectTraceHeaders: !0
        }).createTranscriptOverview(e, new wso({
            formattedConversation: t
        }))).overview;
    }
    async getNewChatNudgeParameterizedModelPicker(e, t, n) {
        const i = await this.backendClient.get(e);
        return rUe(i, {
            injectTraceHeaders: !0
        }).getNewChatNudgeParameterizedModelPicker(e, new Uso({
            currentModel: t,
            modelNudgesEnabled: n?.modelNudgesEnabled
        }));
    }
}, M3n = ie([
    X5(0, _t),
    X5(1, M$),
    X5(2, Kr),
    X5(3, R3n),
    X5(4, Wn),
    X5(5, h1),
    X5(6, eQi),
    X5(7, Jn),
    X5(8, zl),
    X5(9, Yi),
    X5(10, Do),
    X5(11, na),
    X5(12, uT),
    X5(13, G0o),
    X5(14, jo),
    X5(15, Rtt),
    X5(16, jse),
    X5(17, ca),
    X5(18, yn),
    X5(19, D2),
    X5(20, kk)
], M3n), mn(p8e, M3n, 1);

}
