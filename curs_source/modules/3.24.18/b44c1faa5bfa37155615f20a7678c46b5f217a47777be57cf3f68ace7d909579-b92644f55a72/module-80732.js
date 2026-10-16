"use strict";
require.d(exports, {
    A: ()=>V
});
var n = require("./module-6688.js"), s = require("./module-17392.js"), o = require("./module-69584.js"), i = require("./module-52774.js"), a = require("./module-51635.js");
const c = (0, require("./module-37949.js").h)("@anysphere/agent-host:managed-local-custom-subagent-models");
function l(e) {
    const t = e.model.trim().toLowerCase();
    return "" === t || "inherit" === t ? void 0 : e.model;
}
const u = {
    maxDirectMcpTools: 100,
    maxAdvertisedTools: 300,
    enableToolArgPreservation: !0,
    enableImageFiles: !0,
    enableSemanticSearch: !1
};
var d = require("./module-20859.js"), p = require("./module-26814.js");
function m(e) {
    return {
        modelId: e.resolvedModel?.modelId ?? e.modelId,
        maxMode: e.resolvedModel?.maxMode ?? e.requestedModel.maxMode
    };
}
function h(e) {
    return [
        ...e.nonFileRules ?? []
    ];
}
var f = require("./module-33275.js");
function g(e) {
    const { parentModelId: t, modelInfo: r, featureFlags: n, subagentModelConfig: s, customSubagentModels: o } = e, i = {
        getTaskToolConfig: async ()=>{
            throw new Error("managed local loop does not build in-process child AgentConfig");
        },
        modelInfo: r,
        enableExecuteHookExec: !0,
        enableExploreSubagent: n.enableExploreSubagent ?? !1,
        enableShellSubagent: n.enableShellSubagent ?? !1,
        enableDebugSubagent: n.enableDebugSubagent ?? !1,
        enableBrowserSubagent: n.enableBrowserSubagent ?? !1,
        enableGrindSwarmSubagent: n.enableGrindSwarmSubagent ?? !1,
        requireServerSideSubagent: !1,
        normalizeCustomSubagents: (e)=>o.normalize(e)
    };
    return void 0 === s ? {
        ...i,
        ...y(t)
    } : "omit-task-tool" !== s.kind ? {
        ...i,
        ...w(s.config, o)
    } : void 0;
}
function y(e) {
    return {
        parentRequestedModelName: e,
        parentMaxMode: void 0,
        isModelBlocked: (t)=>t !== e,
        isModelValid: (t)=>t === e,
        requiresMaxMode: void 0,
        forceModelId: e,
        subagentModelForcePolicy: "parent_pin",
        compareModelCosts: ()=>0,
        subagentModels: {
            modelsBySlug: new Map([
                [
                    e,
                    {
                        slug: e
                    }
                ]
            ])
        },
        subagentModelOverrides: {}
    };
}
function w(e, t) {
    const r = (t)=>e.models.get(t), n = (e)=>t.isPinned(e);
    return {
        parentRequestedModelName: e.parentRequestedModelName,
        parentMaxMode: e.parentMaxMode,
        isModelBlocked: (e)=>!n(e) && (r(e)?.blocked ?? !1),
        isModelValid: (e)=>n(e) || (r(e)?.valid ?? !1),
        requiresMaxMode: (e)=>!n(e) && (r(e)?.requiresMaxMode ?? !1),
        forceModelId: e.forceModelId,
        subagentModelForcePolicy: e.forcePolicy,
        compareModelCosts: (e, t)=>(r(e)?.representativeCostDollars ?? 0) - (r(t)?.representativeCostDollars ?? 0),
        subagentModels: (0, f.O)(e),
        subagentModelOverrides: {
            ...e.overrides
        }
    };
}
var v = require("./module-58072.js"), _ = require("./module-81563.js"), A = require("./module-92801.js"), S = require("./module-84959.js");
const b = 25;
function E(e) {
    return async (t, r, s, o)=>{
        const i = s[0], a = o?.targetDirectories ?? [];
        return e.searchRepositoryV2(new _.W$({
            query: r,
            topK: o?.topK ?? b,
            repository: i,
            ...a.length > 0 ? {
                globFilter: (0, n.S3w)(a, !1)
            } : {}
        }), {
            signal: t.signal
        });
    };
}
function I(e, t) {
    const r = e.codebaseSearch;
    return void 0 === r ? {
        enabled: !1,
        searchImplementation: ()=>{
            throw new Error("semantic search invoked on a session without a codebase search client");
        }
    } : {
        enabled: t ?? u.enableSemanticSearch,
        searchImplementation: E(r)
    };
}
class C extends Error {
    constructor(e){
        super(e), this.name = "ManagedLocalGenerateImageError";
    }
}
class k extends Error {
    constructor(e){
        super(e), this.name = "ManagedLocalGenerateImageModelRestrictedError";
    }
}
const x = "xAI may still bill this job; do not retry unless the user asks.";
class T extends Error {
    constructor(e){
        super(e), this.name = "ManagedLocalGenerateVideoError";
    }
}
function R(e, t) {
    return async (r, n)=>{
        try {
            const s = await e.runWebSearch(new v.lS9({
                searchTerm: n.searchTerm,
                explanation: n.explanation,
                modelId: t.modelId
            }), {
                signal: r.signal
            });
            return {
                answer: s.answer,
                documents: s.documents.map((e)=>({
                        url: e.url,
                        title: e.title,
                        text: e.text
                    }))
            };
        } catch (e) {
            if (e instanceof A.T && e.code !== S.C.Canceled && e.code !== S.C.Aborted) throw new Error(e.rawMessage);
            throw e;
        }
    };
}
function B(e) {
    return async (t, r)=>{
        try {
            const n = await e.runWebFetch(new v.j1R({
                url: r
            }), {
                signal: t.signal
            });
            switch(n.result.case){
                case "success":
                    return {
                        content: n.result.value.content
                    };
                case "error":
                    return {
                        error: n.result.value.error,
                        isTimeout: n.result.value.isTimeout
                    };
                case void 0:
                    return {
                        error: "Web fetch returned no result."
                    };
                default:
                    return n.result;
            }
        } catch (e) {
            if (e instanceof A.T && e.code !== S.C.Canceled && e.code !== S.C.Aborted) return {
                error: e.rawMessage
            };
            throw e;
        }
    };
}
function P(e, t) {
    return async (r, n, s, o, i)=>{
        try {
            const a = await e.runGenerateImage(new v.bcC({
                description: n,
                referenceImages: (o ?? []).map((e)=>new v.Vgy({
                        data: e.data,
                        mimeType: e.mimeType
                    })),
                modelId: t.modelId,
                maxMode: t.maxMode,
                aspectRatio: i
            }), {
                signal: r.signal
            });
            switch(a.result.case){
                case "success":
                    {
                        const { imageData: e, mimeType: t } = a.result.value;
                        return {
                            filePath: O(s, t),
                            imageData: e,
                            mimeType: t
                        };
                    }
                case "error":
                    if (a.result.value.modelRestricted) throw new k(a.result.value.error);
                    throw new C(a.result.value.error);
                case void 0:
                    throw new C("Image generation returned no result.");
                default:
                    return a.result;
            }
        } catch (e) {
            if (e instanceof A.T && e.code !== S.C.Canceled && e.code !== S.C.Aborted) throw new C(e.rawMessage);
            throw e;
        }
    };
}
function J(e, t) {
    return async (r, s)=>{
        let o;
        try {
            o = await e.runGenerateVideo(new v.vBl({
                prompt: s.prompt,
                image: void 0 === s.image ? void 0 : new v.Vgy(s.image),
                referenceImages: s.referenceImages.map((e)=>new v.Vgy(e)),
                modelId: t.modelId,
                maxMode: t.maxMode,
                durationSeconds: s.durationSeconds,
                aspectRatio: s.aspectRatio,
                resolution: s.resolution
            }), {
                signal: r.signal
            });
        } catch (e) {
            if (!(e instanceof A.T) || e.code === S.C.Canceled || e.code === S.C.Aborted) throw e;
            if (e.code === S.C.DeadlineExceeded) throw (0, n.CLb)({
                message: `${e.rawMessage}. ${x}`,
                providerStatusCode: 504,
                contentSafetyBlocked: !1
            });
            throw new T(e.rawMessage);
        }
        switch(o.result.case){
            case "success":
                return {
                    videoData: o.result.value.videoData,
                    durationSeconds: o.result.value.durationSeconds
                };
            case "error":
                throw (0, n.CLb)({
                    message: o.result.value.error,
                    providerStatusCode: o.result.value.providerStatusCode,
                    contentSafetyBlocked: o.result.value.contentSafetyBlocked
                });
            case void 0:
                throw new T("Video generation returned no result.");
            default:
                return o.result;
        }
    };
}
function M(e, t) {
    if (!0 === t.featureFlags.enableGenerateVideo) return {
        service: J(e, t),
        concurrencyLimiter: (0, n.jRf)(1)
    };
}
const q = new Set([
    S.C.InvalidArgument,
    S.C.FailedPrecondition,
    S.C.PermissionDenied,
    S.C.ResourceExhausted,
    S.C.Unauthenticated,
    S.C.Unimplemented
]);
function D(e, t) {
    return async (r, s)=>{
        let o;
        try {
            o = await e.runXSearch(new v.fcH({
                query: s.query,
                fromDate: s.fromDate,
                toDate: s.toDate,
                allowedXHandles: s.allowedXHandles,
                excludedXHandles: s.excludedXHandles,
                modelId: t.modelId,
                maxMode: t.maxMode
            }), {
                signal: r.signal
            });
        } catch (e) {
            if (e instanceof A.T && e.code !== S.C.Canceled && e.code !== S.C.Aborted) {
                if (q.has(e.code)) throw new n.oPw(e.rawMessage);
                throw new Error(`RunXSearch failed (${S.C[e.code]}): ${e.rawMessage}`);
            }
            throw e;
        }
        switch(o.result.case){
            case "success":
                return {
                    answer: o.result.value.answer,
                    citations: o.result.value.citations.map((e)=>({
                            url: e.url,
                            title: e.title
                        }))
                };
            case "error":
                throw new n.oPw(o.result.value.error, o.result.value.providerStatusCode);
            case void 0:
                throw new n.oPw("X search returned no result.");
            default:
                return o.result;
        }
    };
}
function O(e, t) {
    return e ?? `${crypto.randomUUID()}.${function(e) {
        switch(e){
            case "image/gif":
                return "gif";
            case "image/jpeg":
                return "jpg";
            case "image/webp":
                return "webp";
            default:
                return "png";
        }
    }(t)}`;
}
const N = 3;
const F = {
    disableBackgroundTaskFollowUp: !1,
    enableAwaitForSubagents: !0,
    enableBackgroundTaskProgress: !0,
    enableBoundedSubagentAwait: !0,
    enableDebugSubagent: !0,
    enableEmptyResponseRetry: !0,
    enableExploreSubagent: !0,
    enableGrepBroadGlobGuard: !0,
    enableReadToolNegativeOffset: !0,
    enableSandboxSharedBuildCache: !0,
    longRunningJobs: !0,
    nalLoopDetection: !0,
    outputNotificationLimit: 1e3,
    useClientSideSubagent: !0
};
class U extends Error {
    constructor(e){
        super(e), this.name = "ManagedLocalSmartModeClassifierError";
    }
}
function L(e, t = {}) {
    return {
        async execute (r, s) {
            const o = r.get(n.E_I), i = r.get(n.eNU) ?? "enforce", a = r.get(n.aVj) ?? [], c = $(t.attemptRequestId) ?? $(r.get(n.kuS)), l = $(t.originalRequestId), u = {
                ...void 0 === c ? {} : {
                    "x-request-id": c
                },
                ...void 0 === l ? {} : {
                    "x-original-request-id": l
                }
            }, d = await e.classifyAgentAutoReview(new v.yUi({
                args: s,
                attemptIndex: o,
                mode: i,
                workspacePaths: a,
                ...!0 === t.agentEventsRecorded ? {
                    callerRecordsClassifierCall: !0
                } : {}
            }), {
                signal: r.signal,
                ...0 === Object.keys(u).length ? {} : {
                    headers: u
                }
            });
            if (void 0 === d.result) throw new U("ClassifyAgentAutoReview returned no result");
            return d.result;
        }
    };
}
function $(e) {
    return void 0 === e || "" === e ? void 0 : e;
}
const Q = {
    mode: !1,
    shadowMode: !1,
    executor: void 0
};
class j extends s.SK {
    constructor(e){
        super(`Local loop cannot resolve subagent type "${e}"`, {
            displayInfo: {
                title: "Local loop can't run this subagent type",
                detail: `This build cannot resolve the "${e}" subagent type client-side (it is not a builtin or a workspace/plugin subagent this conversation knows; meta and computer-use subagents are not supported on the local loop yet — see GAPS.md). Disable agent_host_local_loop to run it through the backend loop.`,
                isRetryable: !1
            }
        }), this.subagentTypeName = e;
    }
}
class G extends s.SK {
    constructor(e){
        super(`Local loop cannot confine subagent type "${e}": the turn has no write allowlist`, {
            displayInfo: {
                title: "Local loop can't confine this subagent type",
                detail: `The "${e}" subagent type restricts where it writes, and this turn has no write allowlist to enforce (usually because no project folder is open), so the local loop refused to run it unconfined. Open a project folder and retry; if one is open, update Cursor, or disable agent_host_local_loop to run it through the backend loop.`,
                isRetryable: !1
            }
        }), this.subagentTypeName = e;
    }
}
function H(e, t, r) {
    if (void 0 === t.computeAllowedWritePaths) return r;
    if (void 0 === r || 0 === r.length) throw new G(e);
    return r;
}
function z(e) {
    const t = function(e, t, r, s = {}) {
        const o = (0, n.$Iz)({
            customSubagents: [
                ...r
            ],
            enableNestedSubagents: t?.enableNestedSubagents ?? !1,
            includeComputerUseSubagent: !1,
            includeVideoReviewSubagent: !1,
            includeWatchVideoSubagent: (0, n.r26)({
                agentType: n.Eoi.IDE,
                backgroundAgentSource: void 0,
                featureFlags: t
            }),
            includeExploreSubagent: t?.enableExploreSubagent ?? !1,
            includeShellSubagent: t?.enableShellSubagent ?? !1,
            includeDebugSubagent: t?.enableDebugSubagent ?? !1,
            includeBrowserUseSubagent: t?.enableBrowserSubagent ?? !1,
            includeGrindSwarmSubagent: t?.enableGrindSwarmSubagent ?? !1,
            includeCursorGuideSubagent: !0,
            includeCiInvestigatorSubagent: t?.enableCiInvestigatorSubagent ?? !1,
            includeBugbotSubagent: t?.enableBugbotSubagent ?? !1,
            bugbotSupportsNaturalLanguage: t?.enableReviewAgentNaturalLanguageDescription ?? !1,
            bugbotEnableProactiveReview: t?.enableProactiveBugbotReviewSubagent ?? !1,
            includeSecurityReviewSubagent: t?.enableSecurityReviewSubagent ?? !1,
            includeFsdSubagent: t?.enableFsdSubagent ?? !1,
            subagentModelOverrides: {
                ...s
            }
        });
        return (0, n.hmv)(o, e);
    }(e.subagentTypeName, e.featureFlags, e.customSubagents, e.subagentModelOverrides);
    if (void 0 === t) throw new j(e.subagentTypeName);
    const r = (0, n.O$A)(e.baseConfig, {
        subagentConfig: t,
        isMetaTaskWorkerSubagent: !1,
        isBugbotSubagent: (0, n._2n)(e.subagentTypeName) === (0, n._2n)(n.XB8),
        subagentInstanceId: e.subagentInstanceId,
        featureFlags: e.featureFlags,
        suppressSubagentProgressUpdateTool: !0 === e.suppressSubagentProgressUpdateTool,
        metaAgentNotesReminder: void 0,
        projectFolder: e.projectFolder
    });
    return {
        config: {
            ...e.baseConfig,
            toolsGenerator: r.toolsGenerator,
            systemPromptGenerator: r.systemPromptGenerator
        },
        resolvedSubagentSystemReminder: r.resolvedSubagentSystemReminder,
        allowedWritePrefixes: H(e.subagentTypeName, t, r.allowedWritePrefixes)
    };
}
const W = 3;
function V(e, t, r = {}, f = {}) {
    const y = e.resolvedModelMetadata, w = e.resolvedModel?.modelId;
    if (void 0 === y) throw new i.F("metadata-unavailable", w);
    const v = e.runOptions.toolRestriction, _ = void 0 === v ? y : {
        ...y,
        featureFlags: {
            ...y.featureFlags ?? F,
            allowedTools: v.allowed,
            excludedTools: v.excluded
        }
    }, A = _.promptModelInfo;
    if (void 0 === A) throw new i.F("unrecognized-model-family", w);
    const S = (0, a.au)(e.action, e.conversationState), b = (0, d.eU)(_.modeConfig, S, w, e.ctx), E = (0, d.Et)(_.askQuestionConfig, e.ctx), C = {
        ..._.featureFlags ?? F,
        ...!1 === f.connectScm ? {
            enableConnectScm: !1
        } : {}
    }, k = function(e, t, r) {
        const n = e.smartModeClassifier;
        return void 0 === n || void 0 === t ? Q : t.mode ? {
            mode: !0,
            shadowMode: t.shadowMode,
            executor: L(n, r)
        } : Q;
    }(t, _.smartModeClassifier, {
        attemptRequestId: (0, n.REY)(e.ctx),
        originalRequestId: e.originalRequestId,
        agentEventsRecorded: !0 === e.agentEventsRecorded
    }), x = void 0 === e.resolveCustomSubagentModels ? function(e) {
        let t = !1;
        const r = (r)=>{
            if (t) return;
            const n = r.filter((e)=>void 0 !== l(e));
            0 !== n.length && (t = !0, c.warn(e, "RunInference server does not resolve custom subagent model pins; children of these definitions run the parent's model", {
                subagentNames: n.map((e)=>e.name)
            }));
        };
        return {
            prepare: async (e, t)=>{
                r(t.customSubagents);
            },
            normalize: (e)=>(r(e), e),
            isPinned: ()=>!1
        };
    }(e.ctx) : function(e, t) {
        const r = new Map;
        let n = !1;
        return {
            async prepare (t, n) {
                const s = new Set;
                for (const e of n.customSubagents){
                    const t = l(e);
                    void 0 === t || r.has(t) || s.add(t);
                }
                if (0 === s.size) return;
                const o = await e([
                    ...s
                ]);
                for (const e of s){
                    const t = o.get(e);
                    r.set(e, void 0 === t || "" === t ? void 0 : t);
                }
                c.info(t, "Resolved custom subagent model pins", {
                    pins: [
                        ...s
                    ].map((e)=>({
                            requested: e,
                            resolvedSlug: o.get(e)
                        }))
                });
            },
            normalize: (e)=>e.map((e)=>{
                    const s = l(e);
                    if (void 0 === s) return e;
                    if (!r.has(s)) return n || (n = !0, c.warn(t, "Custom subagent model pin was not prepared with the turn's request context; leaving it as written", {
                        subagentName: e.name,
                        requested: s
                    })), e;
                    const o = r.get(s);
                    if (void 0 === o || o === s) return e;
                    const i = e.clone();
                    return i.model = o, i;
                }),
            isPinned (e) {
                for (const [t, n] of r)if ((n ?? t) === e) return !0;
                return !1;
            }
        };
    }(e.resolveCustomSubagentModels, e.ctx), T = _.useDsv3Harness ? function(e, t, r, s, a, c, l, f, y, w, v) {
        const _ = r.modelName, A = (e)=>(0, d.SQ)(f, e ?? o.xyI.AGENT), { modelId: S, maxMode: b } = m(e), E = t.persona;
        if (void 0 === E) throw new i.F("dsv3-persona-unavailable", _);
        const C = M(s, {
            modelId: S,
            maxMode: b,
            featureFlags: l
        }), k = I(s, t.enableSemanticSearch), x = (0, n.VeN)(r, {
            enableSemanticSearch: k.enabled,
            longRunningJobs: !0 === l.longRunningJobs,
            enableWebSearch: c.webSearch ?? !0,
            enableGrepTool: !0,
            enableReadLints: !0,
            mcpConfigEnabled: !0,
            isComposerMatterhornModel: (0, n.VEl)(_),
            isThinking: t.dsv3IsThinking ?? (!0 !== r.isGrok45ProductPrompt && !0 !== r.isGrok46ProductPrompt),
            isMultihornModel: !1,
            isRewriteModel: !1,
            persona: E,
            useRlHarness: !1,
            useEvalSubagentExecutor: !1,
            agentType: n.Eoi.IDE,
            enableCloudTesting: !1
        }), T = {
            ...(0, n.a$1)(r, {
                enableLineNumbers: t.promptConfig?.enableLineNumbers ?? !0,
                useSparseReadLineNumbers: t.promptConfig?.useSparseReadLineNumbers ?? !1
            }),
            enableLineNumbers: x.enableLineNumbers,
            sparseLineNumbers: x.sparseLineNumbers
        }, J = {
            agentType: n.Eoi.IDE,
            enableGrepTool: !0,
            enableMcp: !0,
            maxDirectMcpTools: u.maxDirectMcpTools,
            maxAdvertisedTools: u.maxAdvertisedTools,
            enableReadLints: !0,
            enableSemanticSearch: k.enabled,
            enableTerminalFiles: !0,
            enableWebSearch: c.webSearch ?? !0,
            featureFlags: l,
            fileOutputThresholdBytes: BigInt(4e4),
            formattingOptions: T,
            isDev: !1,
            modelInfo: r,
            nameWeTellTheModelToCallItself: (0, p.Yg)(t),
            strictArgParsing: !1,
            webFetchAvailable: c.webFetch ?? !0,
            webFetchService: B(s),
            ...void 0 === t.estimatedCacheTtlMs ? {} : {
                estimatedCacheTTLMs: t.estimatedCacheTtlMs
            }
        }, q = new n.smk, O = g({
            parentModelId: e.resolvedModel?.modelId ?? r.modelName,
            modelInfo: r,
            featureFlags: l,
            subagentModelConfig: t.subagentModelConfig,
            customSubagentModels: v
        });
        return {
            modelId: _,
            isEagerEditingModel: !1,
            agentType: n.Eoi.IDE,
            featureFlags: l,
            longReasoningReminder: t.promptConfig?.longReasoningReminder,
            askQuestionToolName: y.toolName,
            strictArgParsing: !1,
            enableToolArgPreservation: u.enableToolArgPreservation,
            systemPromptGenerator: (t, s)=>(0, n.tIo)({
                    ...t,
                    ...J,
                    ...x,
                    modelInfo: r,
                    originalModelDisplayName: e.modelId,
                    switchModeToolConfig: A(t.mode)
                }, s),
            toolsGenerator: (e)=>(0, n.B$_)({
                    ...e,
                    ...J,
                    featureFlags: {
                        ...l,
                        ...e.featureFlags,
                        ...e.mode === o.xyI.PLAN ? {
                            useNewPlanModePrompts: f.useNewPlanModePrompts
                        } : {},
                        ...!1 === c.connectScm ? {
                            enableConnectScm: !1
                        } : {}
                    },
                    ...x,
                    enableAskQuestionTool: (0, d.y8)(f, e.mode),
                    askQuestionToolName: y.toolName,
                    autoRejectFirstAskQuestion: y.autoRejectFirst,
                    switchModeToolConfig: A(e.mode),
                    searchImplementation: k.searchImplementation,
                    webSearch: a.webSearch ?? R(s, {
                        modelId: S
                    }),
                    generateImage: P(s, {
                        modelId: S,
                        maxMode: b
                    }),
                    generateImageSuspiciousKeywords: [],
                    imageGenerationConcurrencyLimiter: (0, n.jRf)(N),
                    enableGenerateImage: c.generateImage ?? !0,
                    isGenerateImageModelRestricted: !1,
                    generateVideo: C,
                    xSearch: !1 === c.xSearch ? void 0 : D(s, {
                        modelId: S,
                        maxMode: b
                    }),
                    taskToolProps: O
                }),
            planSystemReminderGenerator: (e)=>(0, n.Esi)({
                    isGpt5Family: r.isGpt5Family,
                    isComposer2: !0 === l.enableComposer2CustomPlanModeFollowup,
                    prevTurnMode: e,
                    isDsv3Family: !0,
                    usePascalCaseToolNames: !0,
                    askQuestionToolName: y.toolName,
                    subagentsForPlan: void 0 !== O,
                    useNewPlanModePrompts: f.useNewPlanModePrompts,
                    askQuestionsInline: (0, d.SR)(f),
                    enableTahomaPlanCommitment: !0 === l.enableTahomaPlanCommitment,
                    enableAffirmativePlanLanguage: !0 === l.enableAffirmativePlanLanguage
                }),
            askSystemReminderGenerator: (e)=>!0 === x.enableFilterEditToolsInAskMode ? "" : (0, n.wEG)({
                    prevTurnMode: e.prevTurnMode,
                    enableReadonlyShell: !0 === l.enableReadonlyShell && !0 === e.requestContext.env?.sandboxEnabled
                }),
            formattingOptions: T,
            enableFilterEditToolsInAskMode: x.enableFilterEditToolsInAskMode,
            debugSystemReminderGenerator: (e, t)=>(0, n._4n)({
                    debugModeConfig: e,
                    isFirstDebugModeMessage: t,
                    isCloudAgent: !1
                }),
            triageSystemReminderGenerator: (e)=>(0, n.LVD)(e),
            userInfoDisplayOptions: {
                displayGitStatus: !0,
                displayCursorRules: !0,
                displaySkills: !0,
                includeOnlyUserInfoAndGitStatus: !1,
                agentType: n.Eoi.IDE
            },
            actorIdentity: void 0,
            webScraperService: new n.GK_,
            documentationHydrationService: new n.ArD,
            attachedMediaUrlProvider: void 0,
            commandClassifierService: q,
            reminders: (0, p.cf)(t),
            enableAgentNotes: !1,
            enableImageFiles: u.enableImageFiles,
            enableLongCodeSelectionSpillToFile: !0,
            enableExecuteHookExec: !0,
            enableTranscriptInSummary: !0,
            thinkingStyle: (0, n.Ub2)(r),
            enablePrependedUserActions: !0,
            conversationId: e.runOptions.conversationId,
            conversationGroupId: e.runOptions.conversationGroupId ?? e.runOptions.conversationId,
            fireAndForgetCheckpoints: !0,
            smartModeClassifierMode: w.mode,
            smartModeClassifierShadowMode: w.shadowMode,
            modelInfo: r,
            nonFileRules: h(e),
            enableTerminalFiles: !0,
            ...void 0 === t.agentTokenLimit ? {} : {
                agentTokenLimit: t.agentTokenLimit
            },
            ...void 0 === t.estimatedCacheTtlMs ? {} : {
                estimatedCacheTTLMs: t.estimatedCacheTtlMs
            }
        };
    }(e, _, A, t, r, f, C, b, E, k, x) : function(e, t, r, s, i, a, c, l, f, y, w) {
        const v = e.resolvedModel?.modelId, { modelId: _, maxMode: A } = m(e), S = (0, d.SQ)(l, o.xyI.AGENT), b = I(s, t.enableSemanticSearch), E = {
            agentType: n.Eoi.IDE,
            enableGrepTool: !0,
            enableMcp: !0,
            maxDirectMcpTools: u.maxDirectMcpTools,
            maxAdvertisedTools: u.maxAdvertisedTools,
            enableReadLints: !0,
            enableSemanticSearch: b.enabled,
            enableTerminalFiles: !0,
            enableWebSearch: a.webSearch ?? !0,
            featureFlags: c,
            fileOutputThresholdBytes: BigInt(4e4),
            formattingOptions: (0, n.a$1)(r, {
                enableLineNumbers: t.promptConfig?.enableLineNumbers ?? !0,
                useSparseReadLineNumbers: t.promptConfig?.useSparseReadLineNumbers ?? !1
            }),
            isDev: !1,
            modelInfo: r,
            nameWeTellTheModelToCallItself: (0, p.Yg)(t),
            strictArgParsing: !1,
            enableExecuteHookExec: !0,
            webFetchAvailable: a.webFetch ?? !0,
            webFetchService: B(s),
            switchModeToolConfig: S,
            ...void 0 === t.estimatedCacheTtlMs ? {} : {
                estimatedCacheTTLMs: t.estimatedCacheTtlMs
            }
        }, C = {
            agentType: n.Eoi.IDE,
            featureFlags: c,
            isDev: !1,
            modelInfo: r,
            originalModelDisplayName: e.modelId
        }, k = new n.smk;
        return {
            ...(0, n.Ivk)({
                modelId: r.modelName,
                systemPromptProps: C,
                commonOptions: E,
                values: {
                    isEagerEditingModel: !1,
                    actorIdentity: void 0,
                    webScraperService: new n.GK_,
                    documentationHydrationService: new n.ArD,
                    attachedMediaUrlProvider: void 0,
                    commandClassifierService: k,
                    reminders: (0, p.cf)(t),
                    enableImageFiles: u.enableImageFiles,
                    enableLongCodeSelectionSpillToFile: !0,
                    enableExecuteHookExec: !0,
                    thinkingStyle: (0, n.Ub2)(r),
                    enablePrependedUserActions: !0,
                    enableToolArgPreservation: u.enableToolArgPreservation,
                    isDsv3Family: !1
                },
                tools: {
                    aiAttribution: void 0,
                    enableComputerUseSubagent: !1,
                    enableGenerateImage: a.generateImage ?? !0,
                    generateImage: P(s, {
                        modelId: _,
                        maxMode: A
                    }),
                    generateImageSuspiciousKeywords: [],
                    imageGenerationConcurrencyLimiter: (0, n.jRf)(W),
                    isGenerateImageModelRestricted: !1,
                    generateVideo: M(s, {
                        modelId: _,
                        maxMode: A,
                        featureFlags: c
                    }),
                    xSearch: !1 === a.xSearch ? void 0 : D(s, {
                        modelId: _,
                        maxMode: A
                    }),
                    taskToolProps: g({
                        parentModelId: v ?? r.modelName,
                        modelInfo: r,
                        featureFlags: c,
                        subagentModelConfig: t.subagentModelConfig,
                        customSubagentModels: w
                    })
                },
                resolvers: {
                    createSearchImplementation: ()=>b.searchImplementation,
                    resolveWebSearchBinding: (e)=>e ? {
                            webSearch: i.webSearch ?? R(s, {
                                modelId: _
                            })
                        } : {
                            webSearch: ()=>{
                                throw new Error("web search invoked on a session where it is disabled");
                            }
                        },
                    supportsAiAttribution: ()=>!1,
                    supportsRecordScreen: ()=>!1,
                    supportsReplaceEnv: ()=>!1,
                    supportsSetupVmEnvironment: ()=>!1,
                    shouldEnableAskQuestionTool: (e)=>(0, d.y8)(l, e),
                    resolveAskQuestionToolName: ()=>f.toolName,
                    shouldAutoRejectFirstAskQuestion: ()=>f.autoRejectFirst,
                    resolveSwitchModeToolConfig: (e)=>(0, d.SQ)(l, e),
                    resolveUseNewPlanModePrompts: ()=>l.useNewPlanModePrompts,
                    isAskQuestionDisabled: ()=>(0, d.SR)(l)
                }
            }),
            longReasoningReminder: t.promptConfig?.longReasoningReminder,
            conversationId: e.runOptions.conversationId,
            conversationGroupId: e.runOptions.conversationGroupId ?? e.runOptions.conversationId,
            fireAndForgetCheckpoints: !0,
            smartModeClassifierMode: y.mode,
            smartModeClassifierShadowMode: y.shadowMode,
            modelInfo: r,
            nonFileRules: h(e),
            enableTerminalFiles: !0,
            ...void 0 === t.agentTokenLimit ? {} : {
                agentTokenLimit: t.agentTokenLimit
            },
            ...void 0 === t.estimatedCacheTtlMs ? {} : {
                estimatedCacheTTLMs: t.estimatedCacheTtlMs
            }
        };
    }(e, _, A, t, r, f, C, b, E, k, x), J = e.runOptions.maxSteps, q = {
        ...T,
        systemPromptGenerator: K(T.systemPromptGenerator, e.runOptions),
        ...void 0 === J ? {} : {
            clientMaxSteps: J
        }
    }, O = (0, s.Xs)(e.runOptions) ? z({
        baseConfig: q,
        subagentTypeName: e.runOptions.subagentTypeName,
        subagentInstanceId: e.runOptions.conversationId,
        featureFlags: C,
        customSubagents: e.runOptions.customSubagents ?? [],
        suppressSubagentProgressUpdateTool: e.runOptions.suppressSubagentProgressUpdateTool,
        projectFolder: e.projectFolder,
        subagentModelOverrides: "config" === _.subagentModelConfig?.kind ? _.subagentModelConfig.config.overrides : void 0
    }) : {
        config: q,
        resolvedSubagentSystemReminder: void 0
    };
    return {
        ...O,
        config: (0, d.sG)(O.config, b, E),
        ...void 0 === k.executor ? {} : {
            smartModeClassifier: {
                executor: k.executor,
                enforceReadOnlyCap: S === o.xyI.ASK
            }
        },
        prepareRequestContext: (e, t)=>x.prepare(e, t)
    };
}
function K(e, t) {
    const r = t.systemPromptSpec?.spec;
    switch(r?.case){
        case void 0:
            {
                const r = t.customSystemPrompt;
                return void 0 === r || "" === r ? e : ()=>r;
            }
        case "replace":
            {
                const t = r.value;
                return "" === t ? e : ()=>t;
            }
        case "append":
            {
                const n = r.value;
                return "" === n || (0, s.Xs)(t) ? e : (t, r)=>`${e(t, r)}\n\n${n}`;
            }
        default:
            return r;
    }
}
