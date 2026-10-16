import { Ga, KR, Qe, Tr, st } from "./Iwo.js";
import { bn } from "./SZu.js";
import { Kss, Mug, Qal, Rug, V_k, Zal, j_k, k_k, nMe, q_k, z_k, zug } from "./Ycg.js";
import { Kug, nll } from "./agentClientServiceId.js";
import { Aug, Val } from "./agentExecProviderServiceId.js";
import { Ove, i9t, ju, nf, ok } from "./agent_pb.js";
import { Lal, jEi } from "./agent_service_connectweb.js";
import { $7a, D7a, G7a, J7a, M7a, P7a, V6e, q7a } from "./agent_service_pb.js";
import { Vae, fX } from "./aiEverythingProviderService.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { qn } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { cb, sC } from "./backendClient.js";
import { kl } from "./browser.ts";
import { vl, wm } from "./buildFlags.js";
import { yUa } from "./connect.ts";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { Cal, Rss } from "./fileAppendService.js";
import { Jv, hy } from "./gitContextService.js";
import { Xy } from "./hash.js";
import { Pug } from "./ideClientCapabilities.js";
import { hX } from "./index_12.ts";
import { Ng } from "./index_3.ts";
import { OT } from "./index_5.ts";
import { G8a } from "./index_7.ts";
import { It, dn } from "./instantiation.js";
import { Dh, I5a, SS, jOp } from "./ipa.js";
import { Vug } from "./localAgentCustomHeaders.js";
import { Yss } from "./localAgentDiagnostics.js";
import { VTt } from "./localAgentProviderConfig.js";
import { Vss } from "./localOpenAIProviderSettings.js";
import { $_k } from "./localPrivateInferenceUsage.js";
import { Ji, Li, pA } from "./log.js";
import { du, kv } from "./map.js";
import { swm } from "./mock-transport.ts";
import { GEi, Gss } from "./mockAgentStreamService.js";
import { w_k, xug } from "./nalClientTraceLogger.js";
import { Rd, ih } from "./pathService.js";
import { EE, mT } from "./privateInferenceEnablementService.js";
import { PB, hCe } from "./privateInferenceFeatures.js";
import { fc, hu } from "./productService.js";
import { Iug } from "./promptContextUsage.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Um } from "./reactiveStorageTypes_2.js";
import { Sat, zTt } from "./shellEnvironmentService.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Pbe, mPe } from "./url_2.js";
import { Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { gT } from "./utils_24.js";
import { Sr, yr } from "./workspace.js";
import { Lh, Qg } from "./workspaceMetadataService.js";
import { BCt, aN, q6e } from "./yBp.js";
var ill, rll, w$, Xug, Zug, Q4e, Qug, Jug, edg, tdg, VEi;
export { Jug, Q4e, Qug, VEi, Xug, Zug, edg, ill, rll, tdg, w$ };
var __wakaru_$ze_initialized = false;
export function $ze() {
if (__wakaru_$ze_initialized) return;
__wakaru_$ze_initialized = true;
"use strict";
E(), hX(), OT(), Ng(), G8a(), qn(), Xy(), du(), fn(), wm(), EE(), PB(), ju(), Lal(), V6e(), Ga(), Qe(), Vae(), Rn(), It(), Ji(), Um(), _s(), sC(), Ss(), gT(), Gss(), Iug(), Cal(), Sr(), w_k(), fo(), zTt(), ih(), kl(), hu(), el(), Rs(), hy(), Lh(), mPe(), Aug(), Pug(), wu(), Zi(), VTt(), Vss(), VTt(), Yss(), $_k(), Vug(), Kug(), ill = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), rll = (t)=>{
    throw TypeError(t);
}, w$ = (t, e)=>(n, i)=>e(n, i, t), Xug = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && rll("Object expected");
        var i, r;
        n && (i = e[ill("asyncDispose")]), i === void 0 && (i = e[ill("dispose")], n && (r = i)), typeof i != "function" && rll("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, Zug = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, Q4e = nll, Qug = "gpt-5.5", Jug = "cursor-dev", edg = "local-agent-prompt-quality", tdg = "/upload", VEi = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k){
        super(), this.instantiationService = t, this.everythingProviderService = e, this.experimentService = n, this.mockAgentStreamService = i, this.logService = r, this.loggerService = s, this.fileAppendService = o, this.workspaceContextService = a, this.pathService = l, this.environmentService = c, this.reactiveStorageService = u, this.cursorAuthenticationService = d, this.privateInferenceEnablementService = h, this.agentExecProviderService = p, this.productService = g, this.shellEnvironmentService = f, this.urlService = _, this.analyticsService = b, this.storageService = y, this.workspaceMetadataService = S, this.gitContextService = k, this.promptContextUsage = new kv(20), this._localPrivateInferenceInstallPathTracked = !1, this.backendClient = this.instantiationService.createInstance(cb, {
            service: jEi,
            headerInjector: async (U)=>{
                var j = [];
                try {
                    const G = Xug(j, U === void 0 ? void 0 : SS(U.withName("backendClient.headerInjection")));
                    G?.span.setAttribute("service", jEi.typeName);
                    try {
                        const { headers: q, timedOut: K } = await z_k(this.everythingProviderService);
                        G?.span.setAttribute("filesyncHeaderPresent", Object.keys(q).length > 0), G?.span.setAttribute("timedOut", K);
                        const V = this.experimentService.checkFeatureGate("retry_interceptor_enabled_for_streaming", {
                            disableExposureLog: !1
                        }), Y = this.experimentService.getDynamicConfig("retry_interceptor_params_config", {
                            disableExposureLog: !1
                        }), J = {
                            maxRetries: Y.maxRetries ?? void 0,
                            baseDelayMs: Y.baseDelayMs ?? void 0,
                            maxDelayMs: Y.maxDelayMs ?? void 0
                        }, Q = BCt(V, J);
                        return {
                            ...q,
                            ...Q
                        };
                    } catch (q) {
                        const K = I5a(q);
                        throw G?.span.recordException(q instanceof Error ? q : new Error(K)), G?.span.setStatus({
                            code: 2,
                            message: K
                        }), q;
                    }
                } catch (G) {
                    var $ = G, H = !0;
                } finally{
                    Zug(j, $, H);
                }
            }
        });
        const C = this.backendClient, T = this.mockAgentStreamService, I = this.fileAppendService, A = this.workspaceContextService, P = this.pathService, M = this.environmentService, O = this.experimentService, N = this.logService;
        T.isAvailable ? this.client = new yUa(new swm((U)=>T.getMockStream(U.conversationId, U.requestId, U.signal, U.runRequest))) : this.client = new yUa({
            async *run (U, j, $) {
                const H = await C.get(U), G = q6e(H, {
                    injectTraceHeaders: !0
                }), K = (!M.isBuilt || M.isExtensionDevelopment) && O.checkFeatureGate("nal_trace", {
                    disableExposureLog: !1
                });
                let V;
                if (K) {
                    const J = $.headers?.["x-request-id"] ?? "undefined-bug";
                    V = new xug(J, I, A, P), j = jOp(j, (Q)=>{
                        V.logMessage(Q, "sent");
                    });
                }
                let Y = G.run(U, j, $);
                K && (Y = jOp(Y, (J)=>{
                    V.logMessage(J, "received");
                }));
                try {
                    $.onNetworkStarted?.();
                } catch (J) {
                    N.warn("[AgentClientService] onNetworkStarted callback failed", J);
                }
                try {
                    for await (const J of Y)yield J;
                } finally{
                    V && await V.finalize();
                }
            }
        });
    }
    async getLocalAgentProviderConfig(t, e) {
        const n = "[AgentClientService][getLocalAgentProviderConfig]", i = vl.localMode ? await this.shellEnvironmentService.getShellEnv() : {}, r = t?.credentials, s = r?.case === "apiKeyCredentials" ? r.value : void 0, o = this.reactiveStorageService.applicationUserPersistentStorage, a = this.cursorAuthenticationService.openAIKey() ?? void 0, l = Zal({
            rawStoredOpenAIKey: a,
            useOpenAIKey: o.useOpenAIKey,
            isLocalMode: vl.localMode
        }), c = Qal({
            shellEnvironment: i,
            storedOpenAIKey: l,
            openAIBaseUrl: o.openAIBaseUrl,
            modelProvidedApiKey: s?.apiKey,
            modelProvidedBaseUrl: s?.baseUrl,
            modelProvidedApiKeySource: "modelDetails.apiKeyCredentials.apiKey",
            modelProvidedBaseUrlSource: "modelDetails.apiKeyCredentials.baseUrl"
        });
        let u;
        try {
            u = Mug(c);
        } catch (h) {
            throw Kss(this.loggerService, {
                resolutionPath: "agent",
                apiKeyCandidates: c.apiKeyCandidates,
                baseUrlCandidates: c.baseUrlCandidates,
                useOpenAIKey: o.useOpenAIKey,
                rawStoredOpenAIKey: a,
                openAIBaseUrl: o.openAIBaseUrl,
                credentialsCase: r?.case,
                useRequestedModel: e?.requestedModel !== void 0 && t === void 0,
                requestedModelSlug: nMe(t?.modelId) ?? nMe(e?.requestedModel?.modelId),
                requestedModelCredentialsCase: e?.requestedModel?.credentials?.case,
                generationUUID: e?.generationUUID,
                conversationId: e?.conversationId
            }), h;
        }
        Kss(this.loggerService, {
            resolutionPath: "agent",
            apiKeyCandidates: c.apiKeyCandidates,
            baseUrlCandidates: c.baseUrlCandidates,
            providerConfig: u,
            useOpenAIKey: o.useOpenAIKey,
            rawStoredOpenAIKey: a,
            openAIBaseUrl: o.openAIBaseUrl,
            credentialsCase: r?.case,
            useRequestedModel: e?.requestedModel !== void 0 && t === void 0,
            requestedModelSlug: nMe(t?.modelId) ?? nMe(e?.requestedModel?.modelId),
            requestedModelCredentialsCase: e?.requestedModel?.credentials?.case,
            generationUUID: e?.generationUUID,
            conversationId: e?.conversationId
        }), this.logService.info(`${n} resolved`, {
            apiKeySource: u.apiKeySource,
            hasApiKey: !0,
            baseUrlSource: u.baseUrlSource,
            normalizedBaseUrl: u.baseUrl,
            normalizationChangedUrl: u.normalizationChangedUrl
        });
        const d = await zug({
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
            customHeaders: d
        };
    }
    createDefaultLocalModel(t) {
        const e = nMe(t.requestedModel?.modelId) ?? Qug;
        return new Ove({
            modelId: e,
            displayModelId: e,
            displayName: e,
            displayNameShort: e,
            maxMode: t.requestedModel?.maxMode,
            credentials: t.requestedModel?.credentials
        });
    }
    async runLocalAgentInExtensionHost(t, e, n, i, r, s, o, a, l, c) {
        const u = await this.getLocalAgentProviderConfig(i, c), d = this.reactiveStorageService.applicationUserPersistentStorage.localProviderAgentModelIds ?? [], h = i ?? this.createDefaultLocalModel(c), p = nMe(c.requestedModel?.modelId) ?? nMe(i?.modelId) ?? h.modelId;
        this.logService.info("[AgentClientService] Running agent turn through local agent-exec runtime", {
            conversationId: c.conversationId,
            modelId: p,
            baseUrl: u.baseUrl
        }), await this.agentExecProviderService.waitForProviderRegistration(t.signal, t);
        try {
            const g = {
                baseUrl: u.baseUrl,
                apiKey: u.apiKey,
                userAgent: `Cursor/${this.productService.version}`,
                customHeaders: u.customHeaders,
                urlProtocol: this.productService.urlProtocol,
                privacyMode: this.cursorAuthenticationService.granularPrivacyModeRawEnum(),
                defaultModel: Tr.wrap(h.toBinary()),
                modelDetails: i ? Tr.wrap(i.toBinary()) : void 0,
                availableModelIds: d,
                conversationState: Tr.wrap(e.toBinary()),
                action: Tr.wrap(n.toBinary()),
                runOptions: {
                    conversationId: c.conversationId,
                    conversationGroupId: c.conversationGroupId,
                    generationUUID: c.generationUUID,
                    customSystemPrompt: c.customSystemPrompt,
                    excludeWorkspaceContext: c.excludeWorkspaceContext,
                    isRunningInTest: c.isRunningInTest,
                    clientSupportsInlineImages: c.clientSupportsInlineImages,
                    clientSupportsPreviewCard: c.clientSupportsPreviewCard,
                    clientSupportsSendToUser: c.clientSupportsSendToUser,
                    serializeSubagentStatesAsBlobRefs: this.experimentService.checkFeatureGate("local_agent_subagent_state_blob_refs", {
                        disableExposureLog: !1
                    }),
                    requestedModel: c.requestedModel ? Tr.wrap(c.requestedModel.toBinary()) : void 0,
                    subagentModelOverrides: c.subagentModelOverrides?.map((b)=>Tr.wrap(b.toBinary())),
                    subagentTypeName: c.subagentTypeName
                },
                mcpTools: a,
                agentExecOptions: {
                    composerId: c.conversationId,
                    workspacePaths: this.workspaceContextService.getWorkspace().folders.map((b)=>KR(b.uri, !0, this.environmentService.remoteAuthority !== void 0))
                }
            }, f = {
                sendInteractionUpdate: async (b)=>{
                    const y = ok.fromBinary(b.buffer);
                    if (y.message.case === "turnEnded") {
                        const S = j_k(y.message.value, {
                            requestId: c.generationUUID,
                            conversationId: c.conversationId,
                            modelIntent: p
                        });
                        if (S !== void 0) try {
                            if (this.analyticsService.trackEvent("local_private_inference.usage", S), !this._localPrivateInferenceInstallPathTracked) {
                                const k = this.environmentService.appRoot;
                                k && (this._localPrivateInferenceInstallPathTracked = !0, this.analyticsService.trackEvent("local_private_inference.install_path", {
                                    appRoot: k
                                }));
                            }
                        } catch (k) {
                            this.logService.warn("[AgentClientService] Failed to track Local Private Inference usage", k);
                        }
                    }
                    await r.sendUpdate(t, y);
                },
                queryInteraction: async (b)=>{
                    const y = await r.query(t, i9t.fromBinary(b.buffer));
                    return Tr.wrap(y.toBinary());
                },
                handleCheckpoint: async (b)=>{
                    await o.handleCheckpoint(t, nf.fromBinary(b.buffer));
                },
                getBlob: async (b)=>{
                    const y = await s.getBlob(t, b.buffer);
                    return y ? Tr.wrap(y) : void 0;
                },
                setBlob: async (b, y, S)=>{
                    if (S) {
                        await s.setBlobLocallyOnly(t, b.buffer, y.buffer);
                        return;
                    }
                    await s.setBlob(t, b.buffer, y.buffer);
                },
                uploadPromptQualitySnapshot: async (b, y)=>{
                    if (this.productService.urlProtocol !== Jug) return;
                    const S = new URLSearchParams({
                        generationUUID: b,
                        nonce: y,
                        uploadMode: "automatic"
                    });
                    if (!await this.urlService.open(rt.from({
                        scheme: this.productService.urlProtocol,
                        authority: edg,
                        path: tdg,
                        query: S.toString()
                    }), {
                        trusted: !0
                    })) throw new Error("No handler accepted the automatic Prompt Quality upload");
                }
            };
            Dh(this.storageService, "useDedicatedLocalAgentRuntimeHost") ? await this.runLocalAgentInDedicatedExtensionHost(g, f, l, t.signal) : await this.agentExecProviderService.runLocalAgent(g, f, t.signal);
        } catch (g) {
            throw q_k(g, {
                modelId: h.modelId,
                baseUrl: u.baseUrl
            });
        }
    }
    async prewarm() {
        await this.backendClient.get();
    }
    runLocalAgentInDedicatedExtensionHost(t, e, n, i) {
        return this.agentExecProviderService.runLocalAgentInDedicatedExtensionHost(t, e, n, i);
    }
    async run(t, e, n, i, r, s, o, a, l, c, u) {
        const d = Rug(u, {
            isRunningInTest: u.isRunningInTest ?? this.environmentService.enableSmokeTestDriver === !0
        });
        if (vl.localMode) {
            try {
                d.onNetworkPhaseStart?.();
            } catch (h) {
                this.logService.warn("[AgentClientService] onNetworkPhaseStart callback failed in local mode", h);
            }
            return this.runLocalAgentInExtensionHost(t, e, n, i, r, o, l, c, s, d);
        }
        return this.client.run(t, e, n, i, r, s, o, a, l, c, d);
    }
    async uploadConversationBlobs(t, e) {
        const n = await this.backendClient.get(t), i = q6e(n, {
            injectTraceHeaders: !0
        }), r = new $7a({
            conversationId: e.conversationId,
            blobs: e.blobs,
            chunkIndex: e.chunkIndex,
            totalChunks: e.totalChunks
        });
        return i.uploadConversationBlobs(t, r, {
            headers: {
                "x-request-id": e.forkRequestId
            }
        });
    }
    async uploadLocalAgentRunToPromptQuality(t, e) {
        if (!aN(this.privateInferenceEnablementService, "prompt-quality-upload")) throw new hCe("prompt-quality-upload");
        const i = await this.backendClient.get(t);
        return q6e(i, {
            injectTraceHeaders: !0
        }).uploadLocalAgentRunToPromptQuality(t, e, {
            headers: {
                "x-request-id": e.generationUuid
            }
        });
    }
    async notifyConversationClone(t, e) {
        const n = await this.backendClient.get(t);
        await q6e(n, {
            injectTraceHeaders: !0
        }).notifyConversationClone(t, new q7a({
            conversationId: e.conversationId,
            sourceConversationId: e.sourceConversationId,
            sourceRequestId: e.sourceRequestId
        }));
    }
    async getSignedUrlForAttachedMedia(t, e) {
        const n = await this.backendClient.get(t);
        return q6e(n, {
            injectTraceHeaders: !0
        }).getSignedUrlForAttachedMedia(t, new G7a({
            conversationId: e.conversationId,
            key: e.key,
            mimeType: e.mimeType,
            contentLengthBytes: e.contentLengthBytes !== void 0 ? BigInt(e.contentLengthBytes) : void 0
        }));
    }
    async updateConversationMetadata(t, e) {
        const n = await this.backendClient.get(t);
        await q6e(n, {
            injectTraceHeaders: !0
        }).updateConversationMetadata(t, new P7a({
            conversationId: e.conversationId,
            name: e.name,
            workspacePaths: e.workspacePaths
        }));
    }
    getPromptContextUsage(t, e) {
        if (vl.localMode) return Promise.resolve({
            nodes: [],
            incomplete: !1
        });
        const n = V_k(e), i = this.promptContextUsage.get(n);
        if (i !== void 0) return i;
        const r = this.rebuildPromptContextUsage(t, e);
        return this.promptContextUsage.set(n, r), r.then((s)=>{
            s.incomplete && this.promptContextUsage.peek(n) === r && this.promptContextUsage.delete(n);
        }), r;
    }
    async rebuildPromptContextUsage(t, e) {
        let n;
        try {
            const r = await this.backendClient.get(t);
            n = await q6e(r, {
                injectTraceHeaders: !0
            }).getPromptContextUsage(t, new M7a({
                conversationId: e.conversationId,
                rootPromptMessagesJson: [
                    ...e.rootPromptMessagesJson
                ]
            }), {
                signal: AbortSignal.timeout(3e4),
                headers: BCt(!0)
            });
        } catch (r) {
            return this.logService.warn("[AgentClientService] Prompt context usage rebuild failed", {
                conversationId: e.conversationId,
                error: I5a(r)
            }), {
                nodes: [],
                incomplete: !0
            };
        }
        const i = k_k(n);
        return i.incomplete && this.logService.warn("[AgentClientService] Prompt context usage report is incomplete", {
            conversationId: e.conversationId,
            unavailableBlobCount: n.unavailableBlobCount,
            schemaVersion: n.tree?.schemaVersion,
            rootPromptMessageCount: e.rootPromptMessagesJson.length
        }), i;
    }
    async createTranscriptOverview(t, e) {
        const n = !aN(this.privateInferenceEnablementService, "transcript-overview");
        if (vl.localMode || n) return "";
        const i = await this.backendClient.get(t);
        return (await q6e(i, {
            injectTraceHeaders: !0
        }).createTranscriptOverview(t, new D7a({
            formattedConversation: e
        }))).overview;
    }
    async getNewChatNudgeParameterizedModelPicker(t, e, n) {
        const i = await this.backendClient.get(t);
        return q6e(i, {
            injectTraceHeaders: !0
        }).getNewChatNudgeParameterizedModelPicker(t, new J7a({
            currentModel: e,
            modelNudgesEnabled: n?.modelNudgesEnabled
        }));
    }
}, VEi = Re([
    w$(0, dn),
    w$(1, fX),
    w$(2, Cr),
    w$(3, GEi),
    w$(4, Li),
    w$(5, pA),
    w$(6, Rss),
    w$(7, yr),
    w$(8, Rd),
    w$(9, ps),
    w$(10, sa),
    w$(11, ss),
    w$(12, mT),
    w$(13, Val),
    w$(14, fc),
    w$(15, Sat),
    w$(16, Pbe),
    w$(17, Qr),
    w$(18, ki),
    w$(19, Qg),
    w$(20, Jv)
], VEi), bn(Q4e, VEi, 1);

}
